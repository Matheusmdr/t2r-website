import PublicLayout from '@/layouts/public-layout';
import CtaSection from '@/components/public/CtaSection';

export default function T2rGeotagger() {
    return (
        <PublicLayout seo={{ title: 'T2R Geotagger - Processamento PPK | T2R Soluções', description: 'Software próprio em português para pós-processamento PPK rápido e sem complicações.', canonical: 'https://t2rtecnologia.com.br/t2r-geotagger' }}>
            
            {/* 1. HERO MASSIVE BLACK */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.08),transparent_50%)] pointer-events-none" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-[scan_6s_ease-in-out_infinite]" />
                
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-mono text-cyan-400 mb-6 uppercase tracking-widest opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                         HOME / SERVIÇOS / T2R GEOTAGGER
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-bold text-t2r-green uppercase tracking-wider mb-6 ml-3 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.3s_forwards]">
                         Software Proprietário
                    </span>
                    <h1 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                        T2R <br/>
                        <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">GEOTAGGER</span>
                    </h1>
                    <p className="max-w-3xl text-xl text-black/80 dark:text-white/50 font-light leading-relaxed mb-10 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                        Visando alcançar coordenadas de altíssima precisão e acurácia, dispomos de um fluxo de pós-processamento de engenharia pura. Cruzamos a trajetória bruta do Drone com a Base GNSS no T2R Geotagger para fixar coordenadas milimétricas em cada imagem.
                    </p>
                </div>
            </section>

            {/* 2. APP MOCK - DARK HUD */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 sm:py-32 overflow-hidden border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                    
                    <div className="rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-[0_0_40px_rgba(34,211,238,0.05)] overflow-hidden mb-24 relative group opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
                        {/* Fake window bar */}
                        <div className="flex items-center gap-3 px-6 py-4 border-b border-black/10 dark:border-white/5 bg-white dark:bg-white/[0.02]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20 hover:bg-red-500 transition-colors"></div>
                                <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20 hover:bg-yellow-500 transition-colors"></div>
                                <div className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20 hover:bg-green-500 transition-colors"></div>
                            </div>
                            <span className="text-xs text-black dark:text-white/40 font-mono tracking-widest pl-2">T2R GEOTAGGER V2.1.0_PRO</span>
                        </div>
                        
                        {/* Fake app body */}
                        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[400px] sm:min-h-[500px]">
                            <div className="hidden md:flex col-span-1 border-r border-black/10 dark:border-white/5 p-6 flex-col gap-4 bg-white dark:bg-white/[0.01]">
                                <div className="h-2 w-12 bg-black/10 dark:bg-white/10 rounded-full mb-2"></div>
                                <div className="h-10 rounded-xl bg-black/5 dark:bg-white/5 w-full flex items-center px-4"><span className="w-2 h-2 rounded-full bg-t2r-green mr-3 animate-pulse"></span> <span className="text-xs font-mono text-black dark:text-white/60">Importar RINEX</span></div>
                                <div className="h-10 rounded-xl bg-white dark:bg-white/[0.02] border border-black/10 dark:border-white/5 w-full flex items-center px-4"><span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20 mr-3"></span> <span className="text-xs font-mono text-black dark:text-white/40">Sincronizar Trajeto</span></div>
                                <div className="h-10 rounded-xl bg-white dark:bg-white/[0.02] border border-black/10 dark:border-white/5 w-full flex items-center px-4"><span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20 mr-3"></span> <span className="text-xs font-mono text-black dark:text-white/40">Geotagging Exato</span></div>
                                <div className="mt-auto h-12 rounded-full bg-cyan-400/10 border border-cyan-400/20 w-full flex items-center justify-center text-xs font-bold text-cyan-400 uppercase tracking-widest hover:bg-cyan-400/20 cursor-pointer transition-colors">Processar</div>
                            </div>
                            <div className="col-span-1 md:col-span-3 p-8 sm:p-16 flex flex-col justify-center items-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,155,0.05),transparent_70%)] pointer-events-none" />
                                
                                <div className="w-24 h-24 rounded-full bg-white dark:bg-black border border-black/20 dark:border-white/10 flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-0 rounded-full border border-t2r-green/30 animate-[ping_3s_infinite]" />
                                    <div className="absolute inset-2 rounded-full border border-cyan-400/20 animate-spin-slow" />
                                    <svg className="h-10 w-10 text-t2r-green relative z-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-black text-black dark:text-white mb-3 uppercase tracking-wide">Kernel Pronto</h3>
                                <p className="text-lg text-black dark:text-white/40 text-center max-w-lg font-light mb-10">Sincronize o RINEX da base, o OBN do drone e o diretório de imagens. Nós cuidamos da matemática pesada.</p>
                                
                                <div className="w-full max-w-md relative">
                                    <div className="flex justify-between text-xs font-mono text-cyan-400 tracking-widest mb-2 px-1">
                                        <span>PROCESSANDO</span>
                                        <span>66%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden w-full backdrop-blur-sm">
                                        <div className="h-full w-2/3 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] relative">
                                            <div className="absolute inset-0 bg-black/20 dark:bg-white/20 w-8 animate-[scan_2s_linear_infinite]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Bento */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {([
                            ['Processamento Turbo', 'Processa milhares de fotos em poucos minutos utilizando o poder do processador local da sua máquina. Zero delay de uploads de rede.', 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'],
                            ['100% em Português', 'Adeus jargões estrangeiros. O T2R Geotagger foi escrito por engenheiros brasileiros para falar a linguagem do topógrafo no campo.', 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3'],
                            ['Integração Metashape Exata', 'Exporta de forma automática relatórios e o formato `.csv` milimetricamente exigido pelo Agisoft Metashape, cravando seu workflow.', 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'],
                        ] as [string, string, string][]).map(([title, desc, path], idx) => (
                            <div key={idx} style={{ animationDelay: `${1.2 + idx * 0.15}s` }} className="group rounded-[32px] border border-black/10 dark:border-white/5 bg-white dark:bg-[#0a0a0a] p-8 sm:p-10 hover:border-cyan-400/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)] hover:-translate-y-1 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-cyan-400 border border-black/20 dark:border-white/10 group-hover:bg-cyan-400/10 group-hover:scale-110 transition-all">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d={path} /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-4 group-hover:text-cyan-400 transition-colors">{title}</h3>
                                <p className="text-base text-black/80 dark:text-white/50 leading-relaxed font-light">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection title="Hardware & Software Inquebráveis." subtitle="O T2R Geotagger acompanha nossos receptores e kits PPK com licença vitalícia. Chega de mensalidades." ctaText="Falar com Engenharia" />
        </PublicLayout>
    );
}
