"use client";

import { createClient } from "@/lib/supabase/client";
import { useCallback, useEffect, useState } from "react";

interface UseRealtimeChatProps {
  roomName: string;
  username: string;
  userEmail: string;
  sessionId?: string;
  persona?: "general" | "headhunting";
}

export interface ChatMessage {
  id: string;
  content: string;
  user: {
    name: string;
  };
  createdAt: string;
}

const EVENT_MESSAGE_TYPE = "message";

export function useRealtimeChat({
  roomName,
  username,
  userEmail,
  sessionId,
  persona = "general",
}: UseRealtimeChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [channel, setChannel] = useState<ReturnType<
    ReturnType<typeof createClient>["channel"]
  > | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [welcomeMessageSent, setWelcomeMessageSent] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    const newChannel = supabase.channel(roomName);

    newChannel
      .on("broadcast", { event: EVENT_MESSAGE_TYPE }, (payload) => {
        setMessages((current) => [...current, payload.payload as ChatMessage]);
      })
      .subscribe(async (status) => {
        console.log("Supabase connection status:", status);
        if (status === "SUBSCRIBED") {
          setIsConnected(true);
        } else if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
          setIsConnected(false);
        }
      });

    setChannel(newChannel);

    return () => {
      supabase.removeChannel(newChannel);
      setIsConnected(false);
    };
  }, [roomName]);

  const sendMessage = useCallback(
    async (content: string, senderName?: string) => {
      if (!channel) return;

      const message: ChatMessage = {
        id: crypto.randomUUID(),
        content,
        user: {
          name: senderName || username,
        },
        createdAt: new Date().toISOString(),
      };

      // Update local state immediately for the sender
      setMessages((current) => [...current, message]);

      // Send message via realtime broadcast
      await channel.send({
        type: "broadcast",
        event: EVENT_MESSAGE_TYPE,
        payload: message,
      });
    },
    [channel, isConnected, username, sessionId],
  );

  const sendBotMessage = useCallback(
    async (content: string) => {
      return sendMessage(content, "Jason");
    },
    [sendMessage],
  );

  const sendWelcomeMessage = useCallback(async () => {
    if (welcomeMessageSent || messages.length > 0) return;

    if (persona === "headhunting") {
      const firstMessage = `Hi ${username}! I'm Jason and I'll help you discover what freed partner time could mean for your firm.`;
      const secondMessage = `I see your email is ${userEmail} - is that the best way to reach you, or would you prefer a different address?`;
      const thirdMessage = `Once we confirm contact, I'll ask you some questions to understand your current workflow and calculate what partner time liberation could enable for your relationships and placements.`;

      await sendBotMessage(firstMessage);

      setTimeout(async () => {
        await sendBotMessage(secondMessage);

        setTimeout(async () => {
          await sendBotMessage(thirdMessage);
        }, 1000);
      }, 1000);
    } else {
      const firstMessage = `Hi ${username}! I am going to ask you a series of questions to define the scope of your project and produce a Project Requirements Document (PRD) that our team will send after our chat. Once you validate the document, we'll produce a mockup of your project within the next 24 hours!`;
      const secondMessage = `Will ${userEmail} be the best way to contact you, if not please confirm your best email address!`;

      await sendBotMessage(firstMessage);

      // Add a small delay before sending the second message
      setTimeout(async () => {
        await sendBotMessage(secondMessage);
      }, 1000);
    }

    setWelcomeMessageSent(true);
  }, [
    username,
    userEmail,
    sendBotMessage,
    welcomeMessageSent,
    messages.length,
    persona,
  ]);

  const setTypingIndicator = useCallback((typing: boolean) => {
    setIsTyping(typing);
  }, []);

  // Send welcome message when connected and no messages exist
  useEffect(() => {
    if (isConnected && !welcomeMessageSent && messages.length === 0) {
      sendWelcomeMessage();
    }
  }, [isConnected, welcomeMessageSent, messages.length, sendWelcomeMessage]);

  return {
    messages,
    sendMessage,
    sendBotMessage,
    isConnected,
    isTyping,
    setTypingIndicator,
  };
}
