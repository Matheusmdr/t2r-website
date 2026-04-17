import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

export default function HeroSection() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => setTime(new Date().toISOString().split('T')[1].slice(0, -1) + 'Z');
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full bg-white dark:bg-black min-h-screen pt-28 pb-16 flex flex-col font-sans selection:bg-t2r-green selection:text-white dark:selection:text-black">
            {/* Absolute Ambient Background */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-t2r-green to-cyan-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col relative z-10">

                {/* Main Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 flex-1 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                    
                    {/* Block 1: Massive Main Value Prop */}
                    <div className="group relative md:col-span-12 lg:col-span-8 bg-white dark:bg-[#0a0a0a] border border-black/20 dark:border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden flex flex-col justify-end min-h-[450px] opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                        {/* Scanning Laser Line */}
                        <div className="absolute left-0 right-0 h-[2px] bg-t2r-green shadow-[0_0_20px_4px_rgba(0,229,155,0.4)] animate-[scan_4s_ease-in-out_infinite]" />
                        
                        {/* Tech Grid Background inside card */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_100%)] pointer-events-none" />

                        <div className="relative z-10 max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6">
                                PRECISÃO CENTIMÉTRICA PARA MAPEAMENTO
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tighter text-black dark:text-white mb-6">
                                PPK PARA <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-t2r-green via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(0,229,155,0.2)]">DRONES</span>
                            </h1>
                            <p className="text-xl text-black dark:text-white font-medium mb-4">
                                Soluções de georreferenciamento e fotogrametria para topografia, mineração e engenharia.
                            </p>
                            <p className="text-base text-black/80 dark:text-white/50 max-w-2xl font-light mb-8">
                                Tecnologia PPK para correção de trajetória GNSS após o voo, reduzindo a necessidade de GCP e aumentando a confiabilidade do levantamento.
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-4 mt-2">
                                <Link href="/fale-conosco" className="relative group/btn overflow-hidden rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-4 font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    <span className="relative z-10">Solicitar Orçamento</span>
                                    <div className="absolute inset-0 h-full w-0 bg-t2r-green transition-all duration-300 ease-out group-hover/btn:w-full"></div>
                                </Link>
                                <a href="https://wa.me/5518996131404" target="_blank" rel="noopener noreferrer" className="rounded-full border border-black/30 dark:border-white/20 bg-black/5 dark:bg-[#111] px-8 py-4 font-bold text-lg text-black dark:text-white transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/40">
                                    Falar com Especialista
                                </a>
                            </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-4 right-4 text-black dark:text-white/20">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M24 0v2h-2v2h-2v2h-2v2h-2V6h2V4h2V2h2V0h2z" fill="currentColor"/></svg>
                        </div>
                    </div>

                    {/* Block 2: Radar / Tracking Visualization */}
                    <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-[#0a0a0a] border border-black/20 dark:border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] opacity-0 animate-[fade-in-up_0.8s_ease-out_0.4s_forwards]">
                        <div className="w-48 h-48 rounded-full border border-black/20 dark:border-white/10 relative flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border border-t2r-green/30 animate-[pulse_2s_infinite]" />
                            <div className="absolute w-[80%] h-[80%] rounded-full border border-black/10 dark:border-white/5" />
                            <div className="absolute w-[60%] h-[60%] rounded-full border border-black/10 dark:border-white/5" />
                            <div className="absolute w-[40%] h-[40%] rounded-full border border-t2r-green/10" />
                            
                            {/* Crosshairs */}
                            <div className="absolute w-full h-[1px] bg-black/5 dark:bg-white/5" />
                            <div className="absolute h-full w-[1px] bg-black/5 dark:bg-white/5" />

                            {/* Radar sweep */}
                            <div className="absolute w-[50%] h-[50%] top-0 left-[50%] origin-bottom-left animate-[radar_3s_linear_infinite] overflow-hidden mix-blend-screen" style={{ background: 'conic-gradient(from 180deg at 0% 100%, transparent, rgba(0,229,155,0.4))' }}></div>
                            
                            {/* Target points */}
                            <div className="absolute w-2 h-2 rounded-full bg-t2r-green top-1/4 left-1/3 shadow-[0_0_10px_rgba(0,229,155,1)]" />
                            <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 bottom-1/3 right-1/4 shadow-[0_0_8px_rgba(34,211,238,1)]" />
                            <div className="absolute w-1 h-1 rounded-full bg-white top-[60%] left-[20%]" />
                            
                            <div className="relative z-10 font-mono text-xl font-black text-black dark:text-white bg-white dark:bg-black/60 px-4 py-1 rounded-full backdrop-blur-sm border border-black/20 dark:border-white/10 shadow-2xl">PPK</div>
                        </div>
                        
                        <div className="mt-8 text-center w-full">
                            <div className="text-3xl font-black text-black dark:text-white tracking-tight">MULTI-GNSS</div>
                            <div className="text-sm text-t2r-green font-mono uppercase tracking-widest mt-1">Conexão Estável</div>
                        </div>
                    </div>

                    {/* Block 3: Stats / Data Points */}
                    <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-[#0a0a0a] border border-black/20 dark:border-white/10 rounded-3xl p-6 lg:p-8 relative group hover:border-t2r-green/50 transition-colors overflow-hidden opacity-0 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards]">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-t2r-green/10 blur-[50px] group-hover:bg-t2r-green/20 transition-all pointer-events-none" />
                        
                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <div className="text-black dark:text-white/40 font-mono text-xs uppercase tracking-widest">Avaliação Média</div>
                                <div className="text-t2r-green">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                </div>
                            </div>
                            <div>
                                <div className="text-[5rem] font-bold text-black dark:text-white leading-none tracking-tighter group-hover:text-t2r-green transition-colors mt-8">4.9<span className="text-3xl text-black dark:text-white/20 tracking-normal">/5</span></div>
                                <div className="mt-3 text-black/80 dark:text-white/50 text-sm font-medium">No Google Review Brasil.<br/>Baseado em operações reais.</div>
                            </div>
                        </div>
                    </div>

                    {/* Block 4: Feature List */}
                    <div className="md:col-span-12 lg:col-span-8 bg-white dark:bg-[#0a0a0a] border border-black/20 dark:border-white/10 rounded-3xl p-6 lg:p-8 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 h-full items-center">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/10 flex items-center justify-center shrink-0">
                                    <span className="w-3 h-3 bg-t2r-green shadow-[0_0_15px_1px_rgba(0,229,155,0.8)] rounded-full" />
                                </div>
                                <div>
                                    <div className="font-bold text-black dark:text-white text-lg">Geotagging T2R</div>
                                    <div className="text-black dark:text-white/40 text-xs font-mono mt-1 tracking-wider uppercase">Processamento</div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/10 flex items-center justify-center shrink-0 relative overflow-hidden">
                                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-cyan-400/20" />
                                     <svg className="w-5 h-5 text-black dark:text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                                </div>
                                <div>
                                    <div className="font-bold text-black dark:text-white text-lg">Compatibilidade</div>
                                    <div className="text-black dark:text-white/40 text-xs font-mono mt-1 tracking-wider uppercase">Metashape / PIX4D</div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group cursor-default">
                                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/10 flex items-center justify-center shrink-0 transition-transform group-hover:-translate-y-1">
                                   <svg className="w-5 h-5 text-t2r-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <div className="font-bold text-black dark:text-white text-lg">Suporte Técnico</div>
                                    <div className="text-black dark:text-white/40 text-xs font-mono mt-1 tracking-wider uppercase">Engenheiros PRONTOS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            {/* Base gradient to blend into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-0" />
        </section>
    );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 backdrop-blur-md transition-colors hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/30 dark:border-white/20">
            <span className="text-t2r-green drop-shadow-[0_0_5px_rgba(0,229,155,0.8)]">{icon}</span>
            <span className="text-xs font-semibold tracking-wider text-black/95 dark:text-white/80 uppercase">{text}</span>
        </div>
    );
}

function SatelliteIcon() {
    return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}
function SignalIcon() {
    return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.789M12 12h.008v.007H12V12z" /></svg>;
}
function TargetIcon() {
    return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>;
}
function StarIcon() {
    return <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
}
