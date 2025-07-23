import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BotBadge } from "@/components/ui/bot-badge";
import { RealtimeChat } from "@/components/realtime-chat";
import {
  ArrowLeft,
  Bot,
  MessageSquare,
  Target,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import { useLocation } from "wouter";

export default function AIProductManager() {
  const [, setLocation] = useLocation();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [chatStarted, setChatStarted] = useState(false);

  const handleStartChat = () => {
    if (userName.trim() && userEmail.trim()) {
      setChatStarted(true);
    }
  };

  const features = [
    {
      icon: Target,
      title: "Scope Definition",
      description:
        "Define clear project boundaries and objectives through guided conversation",
    },
    {
      icon: Lightbulb,
      title: "Feature Prioritization",
      description:
        "Identify and prioritize the most valuable features for your MVP",
    },
    {
      icon: CheckCircle,
      title: "Requirements Gathering",
      description:
        "Extract detailed functional and technical requirements from your vision",
    },
  ];

  if (chatStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => setChatStarted(false)}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Setup
            </Button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="attached_assets/jason.png"
                  alt="Jason" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Meet Jason
                  </h1>
                  <BotBadge />
                </div>
                <p className="text-gray-600">
                  Chat with Jason to define your project scope
                </p>
              </div>
            </div>
          </div>

          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b bg-gray-50/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Connected</span>
                </div>
                <Badge variant="secondary">Jason, Product Manager</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <RealtimeChat
                roomName={userName}
                username={userName}
                userEmail={userEmail}
                sessionId={userEmail}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-teal-500 rounded-2xl p-4">
              <Bot className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI Product Manager
          </h1>
          <h2 className="text-4xl lg:text-3xl font-bold text-gray-900 mb-6">
            Get your project requirements document and UI Mock up in 24h!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get expert guidance from our AI Product Manager to define your
            project scope, prioritize features, and create a clear roadmap for
            your MVP development.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary" className="bg-teal-100 text-teal-700">
              <MessageSquare className="h-3 w-3 mr-1" />
              Real-time Chat
            </Badge>
            <Badge variant="secondary" className="bg-teal-100 text-teal-700">
              <Bot className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8">
                <div className="bg-teal-100 rounded-xl p-3 w-fit mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-center">
              Start Your Conversation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <Button
              onClick={handleStartChat}
              disabled={!userName.trim() || !userEmail.trim()}
              className="w-full bg-teal-500 hover:bg-teal-600"
              size="lg"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Start Chat with AI Product Manager
            </Button>
            <p className="text-sm text-gray-500 text-center">
              Our AI will guide you through defining your project requirements
              and scope.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
