import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RealtimeChat } from "@/components/realtime-chat";
import jasonImage from "@assets/jason.png";
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { useLocation } from "wouter";

export default function HeadhuntingScopingV2() {
  const [, setLocation] = useLocation();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [chatStarted, setChatStarted] = useState(false);
  const [emailError, setEmailError] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [chatRoomId, setChatRoomId] = useState<string>("");

  // Disposable email domains list
  const disposableDomains = [
    "10minutemail.com", "guerrillamail.com", "mailinator.com", "tempmail.org",
    "yopmail.com", "maildrop.cc", "throwaway.email", "temp-mail.org",
    "disposablemail.com", "getnada.com", "mohmal.com", "sharklasers.com",
    "guerrillamailblock.com", "pokemail.net", "spam4.me", "bccto.me",
    "temp-mail.ru", "tempail.com", "dispostable.com", "fakeinbox.com",
  ];

  const validateEmail = (email: string): { isValid: boolean; error: string } => {
    if (!email.trim()) return { isValid: false, error: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return { isValid: false, error: "Please enter a valid email address" };
    const domain = email.split("@")[1]?.toLowerCase();
    if (domain && disposableDomains.includes(domain)) return { isValid: false, error: "Please use a business or personal email address" };
    return { isValid: true, error: "" };
  };

  const handleEmailChange = (email: string) => {
    setUserEmail(email);
    const validation = validateEmail(email);
    setIsEmailValid(validation.isValid);
    setEmailError(validation.error);
  };

  const handleStartChat = () => {
    if (userName.trim() && userEmail.trim() && isEmailValid) {
      const uniqueRoomId = `${userEmail}-${Date.now()}`;
      setChatRoomId(uniqueRoomId);
      setChatStarted(true);
    }
  };

  const processSteps = [
    {
      id: "01",
      title: "Time Discovery Session",
      description: "See exactly how much partner time you could redirect to client relationships and placements",
    },
    {
      id: "02",
      title: "Agent Capability Mapping",
      description: "Identify which tasks agents could handle so your partners can focus on high-value work",
    },
    {
      id: "03",
      title: "Relationship Time Enablement",
      description: "Map out requirements while calculating what freed time enables for your client relationships",
    },
  ];

  if (chatStarted) {
    return (
      <div className="min-h-screen bg-[#F8F7F5] relative overflow-hidden flex items-center justify-center p-4">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#D4A57415,transparent_70%)] opacity-50"></div>
        </div>

        <div className="w-full max-w-5xl relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4A574]/20 shadow-sm">
                <img src={jasonImage} alt="Jason" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1A1A1A]">Jason Scoping Session</h1>
                <p className="text-sm text-slate-500 font-light tracking-wide uppercase">Connected & Active</p>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => setChatStarted(false)}
              className="hover:bg-[#D4A574]/10 text-slate-500 hover:text-[#1A1A1A] transition-all"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Exit Session
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl shadow-[#D4A574]/5 h-[700px] flex flex-col">
            <div className="flex-1 overflow-hidden">
               <RealtimeChat
                  roomName={chatRoomId}
                  username={userName}
                  userEmail={userEmail}
                  sessionId={userEmail}
                  accentColor="gold"
                />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7F5] relative font-sans selection:bg-[#D4A574]/20 selection:text-[#2D1B10] overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#D4A57410,transparent_70%)] opacity-50"></div>
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        {/* Soft decorative orbs */}
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#D4A574]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-[#D4A574]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        <header className="mb-12 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => setLocation("/ai-agents-for-headhunting-professionals")}
            className="group hover:bg-transparent p-0 text-slate-400 hover:text-[#1A1A1A] transition-all"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest leading-none">Intelligence Agents</span>
          </Button>

          <div className="flex items-center gap-3 invisible">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A574]">Jason Scoping v2.0</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]"></div>
          </div>
        </header>

        <main className="space-y-16 lg:space-y-24">
          {/* Hero Section */}
          <section className="relative">
            <div className="flex flex-col gap-12 items-start">
              <div className="flex-1 space-y-10">
                <div className="flex items-center gap-6">
                   <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-[#D4A574]/30 shadow-xl shadow-[#D4A574]/10">
                      <img src={jasonImage} alt="Jason" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#D4A574] border-2 border-[#F8F7F5]"></div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A574]">Active Intelligence</span>
                    <h2 className="text-xl font-medium text-[#1A1A1A]">Jason, Scoping Agent</h2>
                  </div>
                </div>

                <h1 className="text-5xl lg:text-7xl font-light tracking-tighter text-[#1A1A1A] leading-[1.05]">
                  See exactly how much partner time you could <span className="italic font-normal">free up</span> with Jason
                </h1>

                <p className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl">
                  Every conversation shows you exactly how much time you could redirect to high-value work.
                </p>
              </div>
            </div>
          </section>

          {/* Combined Discovery Workspace */}
          <section className="border-t border-b border-[#D4A574]/30 py-0 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left Column: The Why */}
              <div className="lg:w-2/5 py-12 lg:pr-12">
                <div className="space-y-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A574] block mb-4">The Discovery Journey</span>
                  <div className="space-y-8">
                    {processSteps.map((step) => (
                      <div key={step.id} className="flex gap-6 items-start group">
                        <span className="text-2xl font-extralight text-[#D4A574]/40 group-hover:text-[#D4A574] transition-colors duration-500">
                          {step.id}
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold tracking-tight text-[#1A1A1A] mb-1">
                            {step.title}
                          </h3>
                          <p className="text-slate-500 text-xs font-light leading-relaxed max-w-xs">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Central Divider */}
              <div className="hidden lg:block w-px bg-[#D4A574]/20 self-stretch my-12"></div>

              {/* Mobile Divider */}
              <div className="lg:hidden h-px w-full bg-[#D4A574]/20 my-4"></div>

              {/* Right Column: The Action */}
              <div className="lg:flex-1 py-12 lg:pl-16 flex flex-col justify-center">
                <div className="space-y-12 w-full max-w-xl">
                  {/* Inline Action Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label htmlFor="name-v2" className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Full Name
                      </label>
                      <input
                        id="name-v2"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-border py-4 text-xl font-light focus:outline-none focus:border-[#D4A574] transition-colors placeholder:text-slate-400 text-[#1A1A1A]"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email-v2" className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Professional Email
                      </label>
                      <input
                        id="email-v2"
                        type="email"
                        value={userEmail}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        placeholder="email@firm.com"
                        className={`w-full bg-transparent border-b py-4 text-xl font-light focus:outline-none transition-colors placeholder:text-slate-400 text-[#1A1A1A] ${
                          emailError ? "border-red-300 focus:border-red-500" : "border-border focus:border-[#D4A574]"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                    <div className="flex items-center gap-4 text-slate-400 order-2 md:order-1">
                       <CheckCircle className={`h-5 w-5 ${isEmailValid && userName.trim() ? "text-[#D4A574]" : "opacity-20"}`} />
                       <span className="text-xs font-bold uppercase tracking-widest leading-none">Start my time discovery</span>
                    </div>

                    <button
                      disabled={!userName.trim() || !userEmail.trim() || !isEmailValid}
                      onClick={handleStartChat}
                      className="group relative overflow-hidden bg-[#D4A574] text-[#2D1B10] text-sm font-bold px-8 py-3.5 rounded shadow-lg shadow-[#D4A574]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2 disabled:cursor-not-allowed order-1 md:order-2"
                    >
                      <div className="shimmer-layer absolute inset-0 transform -translateX-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform"></div>
                      <span className="relative z-20">Start chat with Jason</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 relative z-20">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>

                  {emailError && <p className="text-xs text-red-500 font-medium">{emailError}</p>}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-40 border-t border-border/40 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border border-[#D4A574]/30 flex items-center justify-center">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]"></div>
             </div>
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Buildwise Studios © 2026</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4A574]">
            Relationships × Intelligence
          </p>
        </footer>
      </div>
    </div>
  );
}
