'use client'

import { createClient } from '@/lib/supabase/client'
import { useCallback, useEffect, useState } from 'react'

interface UseRealtimeChatProps {
  roomName: string
  username: string
  sessionId?: string
}

export interface ChatMessage {
  id: string
  content: string
  user: {
    name: string
  }
  createdAt: string
}

const EVENT_MESSAGE_TYPE = 'message'

export function useRealtimeChat({ roomName, username, sessionId }: UseRealtimeChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [channel, setChannel] = useState<ReturnType<ReturnType<typeof createClient>['channel']> | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    const newChannel = supabase.channel(roomName)

    newChannel
      .on('broadcast', { event: EVENT_MESSAGE_TYPE }, (payload) => {
        setMessages((current) => [...current, payload.payload as ChatMessage])
      })
      .subscribe(async (status) => {
        console.log('Supabase connection status:', status)
        if (status === 'SUBSCRIBED') {
          setIsConnected(true)
        } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          setIsConnected(false)
        }
      })

    setChannel(newChannel)

    return () => {
      supabase.removeChannel(newChannel)
      setIsConnected(false)
    }
  }, [roomName])

  const sendMessage = useCallback(
    async (content: string) => {
      if (!channel) return

      const message: ChatMessage = {
        id: crypto.randomUUID(),
        content,
        user: {
          name: username,
        },
        createdAt: new Date().toISOString(),
      }

      // Update local state immediately for the sender
      setMessages((current) => [...current, message])

      // Send message via realtime broadcast
      await channel.send({
        type: 'broadcast',
        event: EVENT_MESSAGE_TYPE,
        payload: message,
      })

      // Call n8n webhook if sessionId is provided
      if (sessionId) {
        try {
          const response = await fetch('https://metalab.app.n8n.cloud/webhook-test/d7f6b3de-d918-49dd-b915-0f4a603271d0', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sessionId: sessionId,
              message: content,
              username: username,
              timestamp: new Date().toISOString(),
            }),
          })
          
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Unknown error' }))
            console.warn('n8n webhook returned error:', {
              status: response.status,
              statusText: response.statusText,
              error: errorData
            })
            
            // If it's a 404, the workflow needs to be activated
            if (response.status === 404) {
              console.warn('n8n webhook not registered. Please activate your workflow in n8n.')
            }
          } else {
            console.log('n8n webhook called successfully')
          }
        } catch (error) {
          console.error('Failed to call n8n webhook:', error)
        }
      }
    },
    [channel, isConnected, username, sessionId]
  )

  return { messages, sendMessage, isConnected }
}
