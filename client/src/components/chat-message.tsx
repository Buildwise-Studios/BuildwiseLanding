import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/hooks/use-realtime-chat";
import jasonImage from "@assets/jason.png";
import { BotBadge } from "@/components/ui/bot-badge";

interface ChatMessageItemProps {
  message: ChatMessage;
  isOwnMessage: boolean;
  showHeader: boolean;
  accentColor?: "teal" | "gold";
}

export const ChatMessageItem = ({
  message,
  isOwnMessage,
  showHeader,
  accentColor = "teal",
}: ChatMessageItemProps) => {
  const isJason = message.user.name === "Jason";

  return (
    <div
      className={`flex mt-2 ${isOwnMessage ? "justify-end" : "justify-start"}`}
    >
      {/* Avatar for Jason messages */}
      {!isOwnMessage && isJason && (
        <div className="flex-shrink-0 mr-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={jasonImage}
              alt="Jason"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div
        className={cn("max-w-[75%] w-fit flex flex-col gap-1", {
          "items-end": isOwnMessage,
        })}
      >
        {showHeader && (
          <div
            className={cn("flex items-center gap-2 text-xs px-3", {
              "justify-end flex-row-reverse": isOwnMessage,
            })}
          >
            <span className={"font-medium"}>{message.user.name}</span>
            {isJason && <BotBadge size="sm" />}
            <span className="text-foreground/50 text-xs">
              {new Date(message.createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
          </div>
        )}
        <div
          className={cn(
            "py-2 px-3 rounded-xl text-sm w-fit",
            isOwnMessage
              ? (accentColor === "gold" ? "bg-[#D4A574] text-[#2D1B10]" : "bg-primary text-primary-foreground")
              : "bg-muted text-foreground",
          )}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
};
