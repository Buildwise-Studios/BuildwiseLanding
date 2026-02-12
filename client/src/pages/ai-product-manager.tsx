import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BotBadge } from "@/components/ui/bot-badge";
import { RealtimeChat } from "@/components/realtime-chat";
// TODO: Add jason.png asset before merging - referenced in AI Product Manager
import jasonImage from "@assets/jason.png";
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
  const [emailError, setEmailError] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [chatRoomId, setChatRoomId] = useState<string>("");

  // Disposable email domains list
  const disposableDomains = [
    "10minutemail.com",
    "guerrillamail.com",
    "mailinator.com",
    "tempmail.org",
    "yopmail.com",
    "maildrop.cc",
    "throwaway.email",
    "temp-mail.org",
    "disposablemail.com",
    "getnada.com",
    "mohmal.com",
    "sharklasers.com",
    "guerrillamailblock.com",
    "pokemail.net",
    "spam4.me",
    "bccto.me",
    "temp-mail.ru",
    "tempail.com",
    "dispostable.com",
    "fakeinbox.com",
  ];

  // Email validation function
  const validateEmail = (
    email: string,
  ): { isValid: boolean; error: string } => {
    if (!email.trim()) {
      return { isValid: false, error: "" };
    }

    // Basic email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Please enter a valid email address" };
    }

    // Extract domain from email
    const domain = email.split("@")[1]?.toLowerCase();

    // Check for disposable domains
    if (domain && disposableDomains.includes(domain)) {
      return {
        isValid: false,
        error: "Please use a business or personal email address",
      };
    }

    // Check for common typos in popular domains
    const suggestions: { [key: string]: string } = {
      "gmial.com": "gmail.com",
      "gmai.com": "gmail.com",
      "yahooo.com": "yahoo.com",
      "hotmial.com": "hotmail.com",
      "outlok.com": "outlook.com",
    };

    if (domain && suggestions[domain]) {
      return {
        isValid: false,
        error: `Did you mean ${email.replace(domain, suggestions[domain])}?`,
      };
    }

    return { isValid: true, error: "" };
  };

  // Handle email change with validation
  const handleEmailChange = (email: string) => {
    setUserEmail(email);
    const validation = validateEmail(email);
    setIsEmailValid(validation.isValid);
    setEmailError(validation.error);
  };

  const handleStartChat = () => {
    if (userName.trim() && userEmail.trim() && isEmailValid) {
      // Generate a unique room ID for this chat session
      const uniqueRoomId = `${userEmail}-${Date.now()}`;
      setChatRoomId(uniqueRoomId);
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
      <div className="min-h-screen bg-warm-off-white">
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
                  src={jasonImage}
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
            <CardContent className="flex-1 p-0 overflow-hidden">
              <div className="h-full">
                <RealtimeChat
                  roomName={chatRoomId}
                  username={userName}
                  userEmail={userEmail}
                  sessionId={userEmail}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-off-white">
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
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={jasonImage}
                  alt="Jason - AI Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 inline-flex items-center gap-1 font-medium bg-blue-100 text-blue-700 rounded px-1.5 py-0.5 text-xs shadow-sm">
                AI Agent
              </div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Scope your project with Jason
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Get your project requirements document and Mock up in 24h!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get expert guidance from Jason, our AI Product Manager to define
            your project scope, prioritize features, and create a clear roadmap
            for your MVP development.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary" className="bg-warm-amber-10 text-teal-700">
              <MessageSquare className="h-3 w-3 mr-1" />
              Real-time Chat
            </Badge>
            <Badge variant="secondary" className="bg-warm-amber-10 text-teal-700">
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
                <div className="bg-warm-amber-10 rounded-xl p-3 w-fit mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-warm-amber" />
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-amber focus:border-transparent"
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
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="Enter your business or personal email"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                  emailError
                    ? "border-red-300 focus:ring-red-500"
                    : isEmailValid && userEmail.trim()
                      ? "border-green-300 focus:ring-green-500"
                      : "border-gray-300 focus:ring-warm-amber"
                }`}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
              {isEmailValid && userEmail.trim() && (
                <p className="mt-1 text-sm text-green-600">
                  ✓ Valid email address
                </p>
              )}
            </div>
            <Button
              onClick={handleStartChat}
              disabled={!userName.trim() || !userEmail.trim() || !isEmailValid}
              className="w-full bg-warm-amber hover:bg-warm-amber"
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
