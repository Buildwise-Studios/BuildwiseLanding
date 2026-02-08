import { cn } from "@/lib/utils";
import jasonImage from "@assets/jason.png";
import { BotBadge } from "@/components/ui/bot-badge";

interface TypingIndicatorProps {
  username?: string;
  isJason?: boolean;
  isOwnMessage?: boolean;
  accentColor?: "teal" | "gold";
}

export const TypingIndicator = ({
  username = "Jason",
  isJason = true,
  isOwnMessage = false,
  accentColor = "teal",
}: TypingIndicatorProps) => {
  return (
    <div
      className={cn("flex mt-2 mb-4", isOwnMessage ? "justify-end" : "justify-start")}
    >
      {/* Avatar for Jason */}
      {!isOwnMessage && isJason && (
        <div className="flex-shrink-0 mr-3 self-end mb-1">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4A574]/10 shadow-sm">
            <img
              src={jasonImage}
              alt="Jason"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div
        className={cn("max-w-[75%] w-fit flex flex-col gap-1.5", {
          "items-end": isOwnMessage,
        })}
      >
        <div
          className={cn("flex items-center gap-2 text-[11px] px-1", {
            "justify-end flex-row-reverse": isOwnMessage,
          })}
        >
          <span className="font-semibold text-foreground/80 tracking-tight">{username}</span>
          {isJason && <BotBadge size="sm" />}
        </div>

        <div
          className={cn(
            "py-3 px-4 rounded-2xl w-fit flex items-center justify-center min-w-[56px] shadow-sm",
            isOwnMessage
              ? accentColor === "gold"
                ? "bg-[#D4A574] text-[#2D1B10] rounded-br-none"
                : "bg-primary text-primary-foreground rounded-br-none"
              : "bg-muted text-foreground rounded-bl-none"
          )}
        >
          <div className="flex items-center space-x-1.5 h-4">
            <div
              className={cn(
                "w-1.5 h-1.5 rounded-full animate-typing-dot-bounce",
                isOwnMessage && accentColor === "gold"
                  ? "bg-[#2D1B10]"
                  : isOwnMessage
                  ? "bg-primary-foreground"
                  : "bg-zinc-400"
              )}
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className={cn(
                "w-1.5 h-1.5 rounded-full animate-typing-dot-bounce",
                isOwnMessage && accentColor === "gold"
                  ? "bg-[#2D1B10]"
                  : isOwnMessage
                  ? "bg-primary-foreground"
                  : "bg-zinc-400"
              )}
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className={cn(
                "w-1.5 h-1.5 rounded-full animate-typing-dot-bounce",
                isOwnMessage && accentColor === "gold"
                  ? "bg-[#2D1B10]"
                  : isOwnMessage
                  ? "bg-primary-foreground"
                  : "bg-zinc-400"
              )}
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
