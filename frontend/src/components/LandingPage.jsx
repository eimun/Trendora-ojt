import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Activity, LineChart, Target } from 'lucide-react';

function LandingPage() {
    return (
        <div className="min-h-screen bg-[#fafaf9] text-gray-900 font-sans selection:bg-gray-200">
            {/* Background Aesthetic Layers */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Abstract subtle orb left */}
                <div className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-teal-800/10 rounded-full blur-3xl mix-blend-multiply" />
                {/* Abstract subtle orb right */}
                <div className="absolute top-[30%] -right-[15%] w-[40vw] h-[40vw] bg-orange-700/10 rounded-full blur-3xl mix-blend-multiply" />
                
                {/* Subtle sweeping lines using SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                    <path d="M-100 800 Q 500 200 1200 600 T 2000 200" fill="none" stroke="#e5e5e5" strokeWidth="1" />
                    <path d="M0 1000 Q 800 600 1500 900 T 2500 400" fill="none" stroke="#e5e5e5" strokeWidth="1" />
                </svg>
            </div>

            {/* Navigation */}
            <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <Activity size={24} className="text-gray-900" />
                    </div>
                    <span className="text-xl font-medium tracking-tight text-gray-900">trendora</span>
                </div>
                
                <div className="flex items-center gap-6">
                    <Link to="/login" className="flex items-center gap-2 bg-teal-600/90 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm">
                        <ArrowRight size={16} /> Open Dashboard
                    </Link>
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full transition-colors flex items-center justify-center">
                        <Sparkles size={18} />
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-[85vh]">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-gray-500 font-medium tracking-wide text-sm mb-6 uppercase">
                        A new intelligence tool from Trendora
                    </p>
                    
                    <h1 className="text-6xl md:text-8xl font-serif text-gray-900 leading-[1.1] mb-8 max-w-4xl mx-auto tracking-tight">
                        The dashboard that <br className="hidden md:block"/> works for you
                    </h1>

                    <p className="text-xl text-gray-500 mb-12 font-medium">
                        Available for Creators, Agencies, and Brands
                    </p>

                    <Link to="/login" className="inline-flex items-center gap-3 bg-[#111111] hover:bg-black text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105 shadow-xl shadow-black/10">
                        <ArrowRight size={20} /> Access Trendora
                    </Link>
                </motion.div>

                {/* Dashboard Preview Interface Mockup */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mt-24 w-full max-w-5xl mx-auto relative"
                >
                    <div className="rounded-[2rem] bg-white/60 backdrop-blur-3xl border border-white/40 shadow-2xl overflow-hidden shadow-gray-200/50">
                        {/* Browser Header */}
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-4 bg-white/40">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 bg-white/50 rounded-xl py-1.5 px-4 text-xs font-medium text-gray-500 flex justify-center border border-gray-100/50">
                                trendora.com / dashboard
                            </div>
                        </div>
                        
                        {/* App Fake Window UI */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-[#f8f9fa] to-white p-12 flex flex-col justify-center items-center relative overflow-hidden">
                            <h2 className="text-3xl font-serif text-gray-800 mb-2 z-10">The Spring 2026 Trend Report</h2>
                            <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold z-10 mb-8">Generated by Llama 3</p>
                            
                            {/* Decorative fake structural lines inside the fake browser */}
                            <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
                            <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
                            
                            {/* Content mock cards */}
                            <div className="grid grid-cols-3 gap-6 w-full max-w-3xl z-10">
                                <div className="h-48 bg-white/80 rounded-2xl shadow-sm border border-gray-100/50 p-6 flex flex-col justify-end relative overflow-hidden">
                                    <div className="absolute top-4 right-4 text-orange-400"><Target size={20}/></div>
                                    <h3 className="font-serif text-xl">Macro Shifts</h3>
                                </div>
                                <div className="h-48 bg-white/80 rounded-2xl shadow-sm border border-gray-100/50 p-6 flex flex-col justify-end relative overflow-hidden">
                                     <div className="absolute top-4 right-4 text-teal-600"><LineChart size={20}/></div>
                                    <h3 className="font-serif text-xl">Velocity Metrics</h3>
                                </div>
                                <div className="h-48 bg-white/80 rounded-2xl shadow-sm border border-gray-100/50 p-6 flex flex-col justify-end relative overflow-hidden">
                                     <div className="absolute top-4 right-4 text-gray-400"><Activity size={20}/></div>
                                    <h3 className="font-serif text-xl">AI Validation</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
            
            {/* Minimal Footer */}
            <footer className="py-12 text-center text-gray-400 text-sm font-medium border-t border-gray-100 relative z-10">
                <p>Designed with elegance. Built for intelligence.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
