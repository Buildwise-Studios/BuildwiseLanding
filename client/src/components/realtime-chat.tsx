import { cn } from "@/lib/utils";
import { ChatMessageItem } from "@/components/chat-message";
import { TypingIndicator } from "@/components/typing-indicator";
import { useChatScroll } from "@/hooks/use-chat-scroll";
import { type ChatMessage, useRealtimeChat } from "@/hooks/use-realtime-chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

interface RealtimeChatProps {
  roomName: string;
  username: string;
  sessionId?: string;
  onMessage?: (messages: ChatMessage[]) => void;
  messages?: ChatMessage[];
}

/**
 * Realtime chat component
 * @param roomName - The name of the room to join. Each room is a unique chat.
 * @param username - The username of the user
 * @param onMessage - The callback function to handle the messages. Useful if you want to store the messages in a database.
 * @param messages - The messages to display in the chat. Useful if you want to display messages from a database.
 * @returns The chat component
 */
export const RealtimeChat = ({
  roomName,
  username,
  sessionId,
  onMessage,
  messages: initialMessages = [],
}: RealtimeChatProps) => {
  const { containerRef, scrollToBottom } = useChatScroll();

  const {
    messages: realtimeMessages,
    sendMessage,
    sendBotMessage,
    isConnected,
    isTyping,
    setTypingIndicator,
  } = useRealtimeChat({
    roomName,
    username,
    sessionId,
  });
  const [newMessage, setNewMessage] = useState("");

  // Merge realtime messages with initial messages
  const allMessages = useMemo(() => {
    const mergedMessages = [...initialMessages, ...realtimeMessages];
    // Remove duplicates based on message id
    const uniqueMessages = mergedMessages.filter(
      (message, index, self) =>
        index === self.findIndex((m) => m.id === message.id),
    );
    // Sort by creation date
    const sortedMessages = uniqueMessages.sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt),
    );

    return sortedMessages;
  }, [initialMessages, realtimeMessages]);

  const memoizedOnMessage = useCallback(() => {
    if (onMessage) {
      onMessage(allMessages);
    }
  }, [onMessage, allMessages]);

  useEffect(() => {
    memoizedOnMessage();
  }, [memoizedOnMessage]);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
  }, [allMessages, scrollToBottom]);

  const handleSendMessage = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!newMessage.trim()) return;

      // Send the user's message first
      sendMessage(newMessage);

      // Store the message to send to webhook
      const userMessage = newMessage;

      // Clear the input field immediately
      setNewMessage("");

      // Show typing indicator before making the API call
      setTypingIndicator(true);

      // Trigger the webhook to fetch the bot's response
      try {
        const response = await fetch(
          "https://metalab.app.n8n.cloud/webhook-test/d7f6b3de-d918-49dd-b915-0f4a603271d0",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sessionId: sessionId,
              message: userMessage,
              username: username,
              timestamp: new Date().toISOString(),
            }),
          },
        );

        if (!response.ok) {
          const errorData = await response
            .json()
            .catch(() => ({ message: "Unknown error" }));
          console.warn("n8n webhook returned error:", {
            status: response.status,
            statusText: response.statusText,
            error: errorData,
          });

          // If it's a 404, the workflow needs to be activated
          if (response.status === 404) {
            console.warn(
              "n8n webhook not registered. Please activate your workflow in n8n.",
            );
          }
          return;
        }

        const botReply = await response.json();
        console.log("Bot reply received:", botReply);

        // Add the bot's reply to the chat
        if (botReply.output) {
          sendBotMessage(botReply.output);
        }
      } catch (error) {
        console.error("Error triggering webhook:", error);
      } finally {
        // Hide typing indicator regardless of success or failure
        setTypingIndicator(false);
      }
    },
    [newMessage, sendMessage, sendBotMessage, setTypingIndicator, sessionId, username],
  );

  return (
    <div className="flex flex-col h-full w-full bg-background text-foreground antialiased">
      {/* Messages */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {allMessages.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground">
            No messages yet. Start the conversation!
          </div>
        ) : null}
        <div className="space-y-1">
          {allMessages.map((message, index) => {
            const prevMessage = index > 0 ? allMessages[index - 1] : null;
            const showHeader =
              !prevMessage || prevMessage.user.name !== message.user.name;


            return (
              <div
                key={message.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-300"
              >
                <ChatMessageItem
                  message={message}
                  isOwnMessage={message.user.name === username}
                  showHeader={showHeader}
                />
              </div>
            );
          })}
          
          {/* Show typing indicator when bot is typing */}
          {isTyping && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <TypingIndicator />
            </div>
          )}
        </div>
      </div>

      <form
        onSubmit={handleSendMessage}
        className="flex w-full gap-2 border-t border-border p-4"
      >
        <Input
          className={cn(
            "rounded-full bg-background text-sm transition-all duration-300",
            newMessage.trim() ? "w-[calc(100%-36px)]" : "w-full",
          )}
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          disabled={false}
        />
        {newMessage.trim() && (
          <Button
            className="aspect-square rounded-full animate-in fade-in slide-in-from-right-4 duration-300"
            type="submit"
            disabled={false}
          >
            <Send className="size-4" />
          </Button>
        )}
      </form>
    </div>
  );
};
