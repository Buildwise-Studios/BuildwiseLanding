import React, { useEffect, useState, useRef } from 'react';

const HeroAnimation: React.FC = () => {
    const [scene, setScene] = useState<'chat' | 'process' | 'final'>('chat');
    const [msg1Opacity, setMsg1Opacity] = useState(0);
    const [msg2Opacity, setMsg2Opacity] = useState(0);
    const [procSourceOpacity, setProcSourceOpacity] = useState(0);
    const [procCrmOpacity, setProcCrmOpacity] = useState(0);
    const [procOutOpacity, setProcOutOpacity] = useState(0);
    const [line1Offset, setLine1Offset] = useState(100);
    const [line2Offset, setLine2Offset] = useState(100);
    const [line3Offset, setLine3Offset] = useState(100);

    const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

    useEffect(() => {
        let isCancelled = false;

        const runAnimation = async () => {
            if (isCancelled) return;

            // RESET
            setScene('chat');
            setMsg1Opacity(0);
            setMsg2Opacity(0);
            setProcSourceOpacity(0);
            setProcCrmOpacity(0);
            setProcOutOpacity(0);
            setLine1Offset(100);
            setLine2Offset(100);
            setLine3Offset(100);

            // --- SCENE 1: SATURDAY 9PM ---
            await wait(500);
            if (isCancelled) return;
            setMsg1Opacity(1);

            // --- SCENE 2: MONDAY 10AM ---
            await wait(3000);
            if (isCancelled) return;
            setMsg2Opacity(1);

            // --- TRANSITION TO PROCESS ---
            await wait(2500);
            if (isCancelled) return;
            setScene('process');

            // --- SCENE 3: PROCESS ANIMATION ---
            await wait(500);
            if (isCancelled) return;
            setProcSourceOpacity(1);

            await wait(300);
            if (isCancelled) return;
            setLine1Offset(0);

            await wait(400);
            if (isCancelled) return;
            setLine2Offset(0);
            setProcCrmOpacity(1);

            await wait(400);
            if (isCancelled) return;
            setLine3Offset(0);
            setProcOutOpacity(1);

            // --- SCENE 4: FINAL UI ---
            await wait(3000);
            if (isCancelled) return;
            setScene('final');

            // Loop
            await wait(6000);
            if (isCancelled) return;
            runAnimation();
        };

        runAnimation();

        return () => {
            isCancelled = true;
        };
    }, []);

    return (
        <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 via-transparent to-brand/5 rounded-full blur-3xl"></div>

            <div className="premium-card w-full h-full relative overflow-hidden rounded-xl bg-white flex flex-col z-20 border border-slate-200 shadow-lg">

                {/* SCENE 1 & 2: THE CHAT */}
                <div
                    className={`absolute inset-0 flex flex-col bg-[#F0F2F5] transition-opacity duration-700 ease-in-out ${scene === 'chat' ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-border shadow-sm z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 text-subtle flex items-center justify-center">
                                <iconify-icon icon="solar:arrow-left-linear" className="text-xl"></iconify-icon>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-subtle font-bold text-xs">MK</div>
                            <div className="flex flex-col text-left">
                                <span className="text-sm font-semibold text-obsidian leading-none">Mike (Partner)</span>
                                <span className="text-[10px] text-subtle mt-0.5">Last seen Sat 18:30</span>
                            </div>
                        </div>
                        <div className="flex gap-4 text-brand">
                            <iconify-icon icon="solar:phone-linear" className="text-lg"></iconify-icon>
                            <iconify-icon icon="solar:videocamera-linear" className="text-lg"></iconify-icon>
                        </div>
                    </div>

                    <div className="flex-1 p-4 flex flex-col gap-4 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        <div className="mt-auto flex flex-col gap-6">
                            <div className={`flex flex-col items-end transition-opacity duration-500 ${msg1Opacity ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="chat-bubble bg-[#E7FFDB] border border-[#dcf8c6] text-obsidian p-2 rounded-lg text-xs max-w-[85%] shadow-sm relative">
                                    John Cowlton might have moved to JP Morgan.
                                    <div className="flex items-center justify-end gap-1 mt-1">
                                        <span className="text-[9px] text-subtle/80">21:00</span>
                                        <iconify-icon icon="solar:check-linear" className="text-[10px] text-subtle"></iconify-icon>
                                    </div>
                                </div>
                                <span className="text-[10px] text-subtle mt-1 font-medium bg-white/50 px-2 rounded">Saturday</span>
                            </div>

                            <div className={`flex flex-col items-end transition-opacity duration-500 ${msg2Opacity ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="chat-bubble bg-[#E7FFDB] border border-[#dcf8c6] text-obsidian p-2 rounded-lg text-xs max-w-[85%] shadow-sm relative">
                                    Hey Mike, any update on this?
                                    <div className="flex items-center justify-end gap-1 mt-1">
                                        <span className="text-[9px] text-subtle/80">10:00</span>
                                        <iconify-icon icon="solar:check-linear" className="text-[10px] text-subtle"></iconify-icon>
                                    </div>
                                </div>
                                <span className="text-[10px] text-subtle mt-1 font-medium bg-white/50 px-2 rounded">Monday</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SCENE 3: THE PROCESS */}
                <div
                    className={`absolute inset-0 bg-white flex flex-col items-center justify-center transition-opacity duration-700 ${scene === 'process' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <div className="absolute top-6 right-6 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
                        <span className="text-xs font-mono text-brand">SAT 21:01</span>
                    </div>

                    <div className="relative w-full h-full max-w-[320px] max-h-[320px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                            <div className="w-16 h-16 bg-obsidian text-white rounded-2xl shadow-xl flex items-center justify-center ring-4 ring-white relative">
                                <iconify-icon icon="solar:bolt-bold" className="text-3xl text-brand"></iconify-icon>
                            </div>
                            <span className="text-xs font-bold mt-3 text-obsidian">AI Agent</span>
                        </div>

                        <div className={`absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-500 ${procSourceOpacity ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                            <div className="bg-white border border-border p-3 rounded-xl shadow-sm flex flex-col gap-2">
                                <iconify-icon icon="solar:globe-linear" className="text-2xl text-subtle"></iconify-icon>
                                <iconify-icon icon="solar:linkedin-linear" className="text-2xl text-[#0077B5]"></iconify-icon>
                            </div>
                        </div>

                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500 ${procCrmOpacity ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <div className="bg-white border border-border px-4 py-2 rounded-xl shadow-sm flex items-center gap-2">
                                <iconify-icon icon="solar:cloud-linear" className="text-xl text-[#00A1E0]"></iconify-icon>
                                <span className="text-xs font-semibold text-subtle">CRM Updated</span>
                            </div>
                        </div>

                        <div className={`absolute top-1/2 right-0 -translate-y-1/2 transition-all duration-500 ${procOutOpacity ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                            <div className="bg-white border border-border p-3 rounded-xl shadow-sm">
                                <iconify-icon icon="logos:slack-icon" className="text-2xl"></iconify-icon>
                            </div>
                        </div>

                        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible">
                            <path d="M 40 160 L 110 160" stroke="#64B5B5" strokeWidth="2" strokeLinecap="round" strokeDasharray="100" strokeDashoffset={line1Offset} fill="none" style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}></path>
                            <path d="M 160 200 L 160 260" stroke="#64B5B5" strokeWidth="2" strokeLinecap="round" strokeDasharray="100" strokeDashoffset={line2Offset} fill="none" style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}></path>
                            <path d="M 210 160 L 280 160" stroke="#64B5B5" strokeWidth="2" strokeLinecap="round" strokeDasharray="100" strokeDashoffset={line3Offset} fill="none" style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}></path>
                        </svg>
                    </div>
                    <p className="absolute bottom-10 text-xs text-subtle font-mono">Total Time: 00:01:00</p>
                </div>

                {/* SCENE 4: FINAL UI */}
                <div
                    className={`absolute inset-0 bg-white flex flex-col transition-opacity duration-1000 ${scene === 'final' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <div className="flex justify-between items-center px-6 py-5 border-b border-border/50 bg-white/80 backdrop-blur-sm z-20">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></div>
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-obsidian">
                                AI Agents that live in your everyday apps
                            </span>
                        </div>
                        <div className="flex gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-border"></span>
                            <span className="w-1 h-1 rounded-full bg-border"></span>
                        </div>
                    </div>

                    <div className="flex-1 relative flex flex-col justify-between items-center w-full z-10 p-6">
                        <div className="grid grid-cols-5 w-full gap-2 relative z-20 mb-auto">
                            <div className="aspect-square rounded-lg bg-canvas border border-border flex items-center justify-center shadow-sm"><iconify-icon icon="solar:linkedin-linear" className="text-xl text-[#0077B5]"></iconify-icon></div>
                            <div className="aspect-square rounded-lg bg-canvas border border-border flex items-center justify-center shadow-sm"><iconify-icon icon="solar:cloud-linear" className="text-xl text-[#00A1E0]"></iconify-icon></div>
                            <div className="aspect-square rounded-lg bg-canvas border border-border flex items-center justify-center shadow-sm"><iconify-icon icon="solar:letter-linear" className="text-xl text-[#0078D4]"></iconify-icon></div>
                            <div className="aspect-square rounded-lg bg-canvas border border-border flex items-center justify-center shadow-sm"><iconify-icon icon="solar:globe-linear" className="text-xl text-obsidian"></iconify-icon></div>
                            <div className="aspect-square rounded-lg bg-canvas border border-border flex items-center justify-center shadow-sm"><iconify-icon icon="logos:slack-icon" className="text-lg"></iconify-icon></div>
                        </div>

                        <div className="absolute inset-0 top-20 bottom-24 z-0 opacity-50">
                            <svg viewBox="0 0 300 150" preserveAspectRatio="none" className="w-full h-full">
                                <path d="M150 150 L 30 0" stroke="#E2E8F0" strokeWidth="1" fill="none"></path>
                                <path d="M150 150 L 90 0" stroke="#E2E8F0" strokeWidth="1" fill="none"></path>
                                <path d="M150 150 L 150 0" stroke="#E2E8F0" strokeWidth="1" fill="none"></path>
                                <path d="M150 150 L 210 0" stroke="#E2E8F0" strokeWidth="1" fill="none"></path>
                                <path d="M150 150 L 270 0" stroke="#E2E8F0" strokeWidth="1" fill="none"></path>
                                <circle cx="150" cy="150" r="4" fill="#64B5B5" className="animate-ping"></circle>
                            </svg>
                        </div>

                        <div className="mt-auto z-20 relative">
                            <div className="w-14 h-14 bg-obsidian text-white rounded-xl shadow-lg shadow-brand/20 flex items-center justify-center ring-4 ring-white relative">
                                <div className="absolute inset-0 bg-brand/20 rounded-xl animate-pulse"></div>
                                <iconify-icon icon="solar:bolt-linear" className="text-2xl relative z-10"></iconify-icon>
                            </div>
                        </div>

                        <div className="text-[10px] text-subtle mt-4 font-medium flex gap-4">
                            <span className="flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear" className="text-brand"></iconify-icon> 24/7 Monitoring</span>
                            <span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear" className="text-brand"></iconify-icon> Enterprise Grade</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroAnimation;
