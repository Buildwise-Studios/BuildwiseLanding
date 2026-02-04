import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroAnimation: React.FC = () => {
    const [scene, setScene] = useState<'human' | 'ai-response' | 'agent' | 'constellation'>('human');

    useEffect(() => {
        const sceneDurations: Record<typeof scene, number> = {
            human: 5000,
            'ai-response': 8000,  // longer so users can read the agent response
            agent: 5000,
            constellation: 5000,
        };
        const t = setTimeout(() => {
            setScene(current => {
                if (current === 'human') return 'ai-response';
                if (current === 'ai-response') return 'agent';
                if (current === 'agent') return 'constellation';
                return 'human';
            });
        }, sceneDurations[scene]);
        return () => clearTimeout(t);
    }, [scene]);

    return (
        <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A574]/20 via-transparent to-[#D4A574]/10 rounded-full blur-3xl scale-125"></div>

            <div className="w-full h-full relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-2xl z-20">
                <AnimatePresence mode="wait">
                    {scene === 'human' && <HumanScene key="human" />}
                    {scene === 'ai-response' && <AgentResponseScene key="ai-response" />}
                    {scene === 'agent' && <AgentPipelineScene key="agent" scene={scene} />}
                    {scene === 'constellation' && <ConstellationScene key="constellation" />}
                </AnimatePresence>
            </div>
        </div>
    );
};

/* --- SCENE 1: HUMAN FRICTION --- */
const HumanScene = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-[#F0F2F5]"
        >
            {/* Scene Label */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-medium bg-white/80 px-3 py-1 rounded-full border border-slate-200 z-20">
                Without Buildwise Agent
            </div>

            <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-border shadow-sm z-10 mt-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">MK</div>
                    <div className="flex flex-col text-left">
                        <span className="text-sm font-semibold text-[#1A1A1A]">Mike (Partner)</span>
                        <span className="text-[10px] text-slate-500">Last seen Sat 18:30</span>
                    </div>
                </div>
                <div className="flex gap-4 text-[#D4A574] opacity-50">
                    <iconify-icon icon="solar:phone-linear" className="text-lg"></iconify-icon>
                    <iconify-icon icon="solar:videocamera-linear" className="text-lg"></iconify-icon>
                </div>
            </div>

            <div className="flex-1 p-4 flex flex-col justify-end space-y-4 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-end"
                >
                    <div className="bg-[#E7FFDB] border border-[#dcf8c6] text-[#1A1A1A] p-3 rounded-lg text-xs max-w-[85%] shadow-sm">
                        John Colton might have moved to JP Morgan.
                        <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[9px] text-slate-500/80">Sat 21:00</span>
                            <iconify-icon icon="solar:check-read-linear" className="text-[10px] text-slate-400"></iconify-icon>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col items-end"
                >
                    <div className="bg-[#E7FFDB] border border-[#dcf8c6] text-[#1A1A1A] p-3 rounded-lg text-xs max-w-[85%] shadow-sm">
                        Hey Mike, any update on this?
                        <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[9px] text-slate-500/80">Mon 10:00</span>
                            <iconify-icon icon="solar:check-linear" className="text-[10px] text-slate-400"></iconify-icon>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="self-center py-2 px-4 rounded-full bg-white/60 text-[10px] text-slate-400 font-medium"
                >
                    No response. Opportunity aging...
                </motion.div>
            </div>
        </motion.div>
    );
};

/* --- SCENE 2: AI AGENT RESPONSE (AFTER BUILDWISE) --- */
const AgentResponseScene = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-[#F0F2F5]"
        >
            {/* Scene Label */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-medium bg-white/80 px-3 py-1 rounded-full border border-slate-200 z-20">
                With Buildwise Agent
            </div>

            <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-border shadow-sm z-10 mt-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-xs">
                        <iconify-icon icon="solar:robot-2-linear" className="text-white text-sm"></iconify-icon>
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-sm font-semibold text-[#1A1A1A]">Buildwise Agent</span>
                        <span className="text-[10px] text-teal-600 font-medium">AI Assistant • Online</span>
                    </div>
                </div>
                <div className="flex gap-4 text-[#D4A574] opacity-50">
                    <iconify-icon icon="solar:phone-linear" className="text-lg"></iconify-icon>
                    <iconify-icon icon="solar:videocamera-linear" className="text-lg"></iconify-icon>
                </div>
            </div>

            <div className="flex-1 p-4 flex flex-col justify-end space-y-4 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-end"
                >
                    <div className="bg-[#E7FFDB] border border-[#dcf8c6] text-[#1A1A1A] p-3 rounded-lg text-xs max-w-[85%] shadow-sm">
                        John Colton might have moved to JP Morgan.
                        <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[9px] text-slate-500/80">Sat 21:00</span>
                            <iconify-icon icon="solar:check-read-linear" className="text-[10px] text-slate-400"></iconify-icon>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-start"
                >
                    <div className="bg-white border border-slate-200 text-[#1A1A1A] p-3 rounded-lg text-xs max-w-[85%] shadow-sm">
                        Found a news confirming your hearsay. I updated the CRM accordingly and your JP Morgan org chart. I notified the team that his previous seat is now a potential lead to explore.
                        <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[9px] text-slate-500/80">Sat 21:01</span>
                            <iconify-icon icon="solar:check-read-linear" className="text-[10px] text-teal-600"></iconify-icon>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="self-center py-2 px-4 rounded-full bg-teal-50 text-[10px] text-teal-600 font-medium border border-teal-200"
                >
                    Intelligence gathered, CRM updated, team notified • All actions completed
                </motion.div>
            </div>
        </motion.div>
    );
};

/* --- SCENE 3: THE DIAMOND PIPELINE --- */
const AgentPipelineScene = ({ scene }: { scene: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white flex flex-col p-6"
        >
            {/* Header Task bar */}
            <div className="flex justify-between items-center mb-8 relative z-20">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#D4A574] animate-pulse"></div>
                    <span className="text-[10px] font-mono text-[#D4A574] font-bold tracking-wider">SYSTEM_ACTIVE</span>
                </div>
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 flex items-center gap-2"
                >
                    <iconify-icon icon="solar:magnifer-linear" className="text-slate-300"></iconify-icon>
                    <span className="text-[10px] font-extrabold text-[#1A1A1A]">SEARCH: JOHN COLTON (JPM?)</span>
                </motion.div>
            </div>

            <div className="flex-1 relative">
                {/* SVG Layer with fixed coordinates (320x300) */}
                <svg viewBox="0 0 320 300" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    {/* Input to Research */}
                    <AnimatedPath d="M 160 0 L 80 80" delay={0.3} trigger={scene === 'agent'} />
                    <AnimatedPath d="M 160 0 L 240 80" delay={0.3} trigger={scene === 'agent'} />

                    {/* Research to Brain */}
                    <AnimatedPath d="M 80 80 L 160 160" delay={1.2} trigger={scene === 'agent'} />
                    <AnimatedPath d="M 240 80 L 160 160" delay={1.2} trigger={scene === 'agent'} />

                    {/* Brain to Action */}
                    <AnimatedPath d="M 160 160 L 80 240" delay={2.6} trigger={scene === 'agent'} />
                    <AnimatedPath d="M 160 160 L 240 240" delay={2.6} trigger={scene === 'agent'} />

                    {/* Data Packets (Traveling dots) */}
                    <DataPacket d="M 160 0 L 80 80" delay={0.4} />
                    <DataPacket d="M 160 0 L 240 80" delay={0.4} />
                    <DataPacket d="M 80 80 L 160 160" delay={1.3} />
                    <DataPacket d="M 240 80 L 160 160" delay={1.3} />
                    <DataPacket d="M 160 160 L 80 240" delay={2.7} />
                    <DataPacket d="M 160 160 L 240 240" delay={2.7} />
                </svg>

                {/* Icons Layer nodes positioned to match SVG */}
                {/* Row 1: Research */}
                <div className="absolute top-[80px] left-[80px] -translate-x-1/2 -translate-y-1/2">
                    <PipelineNode icon="fa6-brands:linkedin-in" label="Research" color="#0077B5" delay={0.6} />
                </div>
                <div className="absolute top-[80px] right-[80px] translate-x-1/2 -translate-y-1/2">
                    <PipelineNode icon="solar:graph-up-linear" label="Market" color="#1A1A1A" delay={0.6} customIcon="bloomberg" />
                </div>

                {/* Row 2: Brain */}
                <div className="absolute top-[160px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.8, type: "spring" }}
                        className="w-20 h-20 rounded-2xl bg-white border border-[#D4A574]/30 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#2D1B10]"></div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-2 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#D4A574_0%,transparent_70%)]"
                        ></motion.div>
                        <iconify-icon icon="solar:bolt-bold" className="text-3xl text-[#D4A574] relative z-10"></iconify-icon>
                        <span className="text-[7px] font-bold text-[#D4A574] mt-1 relative z-10 tracking-[0.2em]">ANALYSIS</span>
                    </motion.div>
                </div>

                {/* Row 3: Action */}
                <div className="absolute top-[240px] left-[80px] -translate-x-1/2 -translate-y-1/2">
                    <PipelineNode icon="fa6-brands:salesforce" label="CRM" color="#00A1E0" delay={2.9} />
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.2 }}
                        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-[#D4A574] text-[8px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap"
                    >
                        WRITING...
                    </motion.div>
                </div>
                <div className="absolute top-[240px] right-[80px] translate-x-1/2 -translate-y-1/2">
                    <PipelineNode icon="fa6-brands:whatsapp" label="Alert" color="#25D366" delay={3.2} />
                </div>

                {/* Final Bubble */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 3.8 }}
                    className="absolute bottom-[-10px] right-0 bg-[#E7FFDB] border border-[#dcf8c6] p-2.5 rounded-xl shadow-xl w-40 z-40"
                >
                    <p className="text-[10px] text-[#2D1B10] font-bold leading-tight">
                        "Confirmation: John Colton profile updated to JPM. Partners notified via CRM."
                    </p>
                    <div className="flex justify-end mt-1">
                        <iconify-icon icon="solar:check-read-linear" className="text-xs text-[#25D366]"></iconify-icon>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

/* --- SCENE 3: THE ECOSYSTEM CONSTELLATION --- */
const ConstellationScene = () => {
    const apps = [
        { icon: 'fa6-brands:linkedin-in', x: 0, y: -85, color: '#0077B5' },
        { icon: 'fa6-brands:salesforce', x: 90, y: -45, color: '#00A1E0' },
        { icon: 'fa6-brands:whatsapp', x: 90, y: 45, color: '#25D366' },
        { icon: 'fa6-brands:microsoft', x: 0, y: 85, color: '#0078D4' },
        { icon: 'solar:graph-up-linear', x: -90, y: 45, color: '#1A1A1A', customIcon: 'bloomberg' as const },
        { icon: 'fa6-brands:slack', x: -90, y: -45, color: '#4A154B' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="relative w-full h-full flex items-center justify-center -translate-y-10">
                {/* Connecting Web */}
                <svg className="absolute inset-0 w-full h-full">
                    {apps.map((app, i) => (
                        <motion.line
                            key={i}
                            x1="50%" y1="50%"
                            x2={`calc(50% + ${app.x}px)`} y2={`calc(50% + ${app.y}px)`}
                            stroke="#D4A574"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="opacity-20"
                        />
                    ))}
                </svg>

                {/* Central Brain Nodes (Enhanced Styling) */}
                <div className="relative z-20">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-20 h-20 bg-white rounded-2xl flex flex-col items-center justify-center shadow-2xl border border-[#D4A574]/30 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#2D1B10]"></div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-2 opacity-30 bg-[radial-gradient(circle_at_50%_50%,#D4A574_0%,transparent_70%)]"
                        ></motion.div>
                        <iconify-icon icon="solar:bolt-bold" className="text-4xl text-[#D4A574] relative z-10"></iconify-icon>
                        <div className="absolute inset-0 bg-[#D4A574]/10 rounded-xl animate-pulse"></div>
                    </motion.div>
                </div>

                {/* Orbiting App Nodes */}
                {apps.map((app, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0, 1],
                            scale: [0, 1],
                            x: app.x,
                            y: app.y
                        }}
                        transition={{
                            delay: 0.4 + i * 0.1,
                            type: "spring",
                            stiffness: 100
                        }}
                        className="absolute w-12 h-12 bg-white rounded-xl border border-slate-100 shadow-lg flex items-center justify-center z-10"
                    >
                        {'customIcon' in app && app.customIcon === 'bloomberg' ? (
                            <img src="/bloomberg-icon.svg" alt="Bloomberg" className="w-6 h-6 object-contain" aria-hidden />
                        ) : (
                            <iconify-icon icon={app.icon} className="text-xl" style={{ color: app.color }}></iconify-icon>
                        )}

                        {/* Animated Signal Dot */}
                        <motion.div
                            animate={{
                                x: [-app.x, 0],
                                y: [-app.y, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "linear"
                            }}
                            className="absolute w-1.5 h-1.5 bg-[#D4A574] rounded-full"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Tagline (Bottom Anchored) */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 w-full text-center px-6"
            >
                <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A] tracking-tighter uppercase">
                    Unified Intelligence
                </h4>
                <p className="text-[10px] text-[#D4A574] font-bold uppercase tracking-[0.3em] mt-1.5">
                    One Agent. Your Entire Stack.
                </p>
            </motion.div>
        </motion.div>
    );
};

/* --- SUB-COMPONENTS --- */

interface AnimatedPathProps {
    d: string;
    delay: number;
    trigger: boolean;
}

const AnimatedPath = ({ d, delay, trigger }: AnimatedPathProps) => (
    <motion.path
        d={d}
        stroke="#D4A574"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200, opacity: 0.1 }}
        animate={trigger ? { strokeDashoffset: 0, opacity: 0.3 } : {}}
        transition={{ duration: 0.9, delay, ease: "easeInOut" }}
        fill="none"
    />
);

interface DataPacketProps {
    d: string;
    delay: number;
}

const DataPacket = ({ d, delay }: DataPacketProps) => (
    <motion.circle
        r="2.5"
        fill="#D4A574"
        initial={{ opacity: 0 }}
        animate={{
            opacity: [0, 1, 1, 0],
            transition: {
                opacity: {
                    times: [0, 0.1, 0.9, 1],
                    duration: 0.9,
                    delay,
                    repeat: Infinity,
                    repeatDelay: 0
                }
            }
        }}
    />
);

interface PipelineNodeProps {
    icon: string;
    label: string;
    color: string;
    delay: number;
    customIcon?: 'bloomberg';
}

const PipelineNode = ({ icon, label, color, delay, customIcon }: PipelineNodeProps) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: "spring", stiffness: 150 }}
        className="flex flex-col items-center"
    >
        <div className="w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center border border-slate-100 mb-1.5 relative z-10">
            {customIcon === 'bloomberg' ? (
                <img src="/bloomberg-icon.svg" alt="Bloomberg" className="w-6 h-6 object-contain" aria-hidden />
            ) : (
                <iconify-icon icon={icon} className="text-xl" style={{ color }}></iconify-icon>
            )}
        </div>
        <span className="text-[8px] font-extrabold text-[#1A1A1A]/40 uppercase tracking-widest">{label}</span>
    </motion.div>
);

export default HeroAnimation;
