'use client'

import { createClient } from '@/lib/supabase/client'
import { useCallback, useEffect, useState } from 'react'

interface UseRealtimeChatProps {
  roomName: string
  username: string
  userEmail: string
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

export function useRealtimeChat({ roomName, username, userEmail, sessionId }: UseRealtimeChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [channel, setChannel] = useState<ReturnType<ReturnType<typeof createClient>['channel']> | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [welcomeMessageSent, setWelcomeMessageSent] = useState(false)

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
      return sendMessage(content, "Jason")
    },
    [sendMessage]
  )

  const sendWelcomeMessage = useCallback(async () => {
    if (welcomeMessageSent || messages.length > 0) return
    
    const firstMessage = `Hi ${username}! I am going to ask you a series of questions to define the scope of your project and produce a Product Requirements Document (PRD) that our team will send after our chat. Once you validate the document, we'll produce a mockup of your project's UI within the next 24 hours!`
    
    const secondMessage = `Will ${userEmail} be the best way to contact you, if not please confirm your best email address!`
    
    await sendBotMessage(firstMessage)
    
    // Add a small delay before sending the second message
    setTimeout(async () => {
      await sendBotMessage(secondMessage)
    }, 1000)
    
    setWelcomeMessageSent(true)
  }, [username, userEmail, sendBotMessage, welcomeMessageSent, messages.length])

  const setTypingIndicator = useCallback((typing: boolean) => {
    setIsTyping(typing)
  }, [])

  // Send welcome message when connected and no messages exist
  useEffect(() => {
    if (isConnected && !welcomeMessageSent && messages.length === 0) {
      sendWelcomeMessage()
    }
  }, [isConnected, welcomeMessageSent, messages.length, sendWelcomeMessage])

  return { messages, sendMessage, sendBotMessage, isConnected, isTyping, setTypingIndicator }
}
