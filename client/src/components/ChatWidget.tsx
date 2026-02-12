import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatWidget() {
  const handleChatClick = () => {
    // In a real implementation, this would open a chat widget or redirect to a contact form
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleChatClick}
        size="lg"
        className="rounded-full w-16 h-16 bg-warm-amber hover:bg-warm-amber shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
