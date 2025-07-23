import { cn } from "@/lib/utils";

interface BotBadgeProps {
  className?: string;
  size?: "sm" | "default";
}

export const BotBadge = ({ className, size = "default" }: BotBadgeProps) => {
  return (
    <span 
      className={cn(
        "inline-flex items-center gap-1 font-medium bg-blue-100 text-blue-700 rounded",
        size === "sm" ? "px-1.5 py-0.5 text-xs" : "px-2 py-1 text-xs",
        className
      )}
    >
      BOT
    </span>
  );
};