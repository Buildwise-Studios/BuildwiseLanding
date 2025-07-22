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
  const [isTyping, setIsTyping] = useState(false)

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
    async (content: string, senderName?: string) => {
      if (!channel) return

      const message: ChatMessage = {
        id: crypto.randomUUID(),
        content,
        user: {
          name: senderName || username,
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


    },
    [channel, isConnected, username, sessionId]
  )

  const sendBotMessage = useCallback(
    async (content: string) => {
      return sendMessage(content, "AI Assistant")
    },
    [sendMessage]
  )

  const setTypingIndicator = useCallback((typing: boolean) => {
    setIsTyping(typing)
  }, [])

  return { messages, sendMessage, sendBotMessage, isConnected, isTyping, setTypingIndicator }
}
