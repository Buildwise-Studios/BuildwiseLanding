import { cn } from "@/lib/utils";

export const TypingIndicator = () => {
  return (
    <div className="flex justify-start mt-2">
      <div className={cn("max-w-[75%] w-fit flex flex-col gap-1")}>
        <div className="flex items-center gap-2 text-xs px-3">
          <span className="font-medium">AI Assistant</span>
          <span className="text-foreground/50 text-xs">typing...</span>
        </div>
        <div className="py-2 px-3 rounded-xl text-sm w-fit bg-muted text-foreground">
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};