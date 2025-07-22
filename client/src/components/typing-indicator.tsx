import { cn } from "@/lib/utils";
import meiLingImage from "@assets/IMG_3832_1753195688183.jpeg";

export const TypingIndicator = () => {
  return (
    <div className="flex justify-start mt-2">
      {/* Avatar for Mei-Ling */}
      <div className="flex-shrink-0 mr-3">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img 
            src={meiLingImage} 
            alt="Mei-Ling" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className={cn("max-w-[75%] w-fit flex flex-col gap-1")}>
        <div className="flex items-center gap-2 text-xs px-3">
          <span className="font-medium">Mei-Ling</span>
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