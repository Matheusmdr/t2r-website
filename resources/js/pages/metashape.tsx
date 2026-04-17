import PublicLayout from '@/layouts/public-layout';
import CtaSection from '@/components/public/CtaSection';

const COMPARISON_FEATURES = [
    { name: 'Integração/Mapeamento', professional: true, standard: true },
    { name: 'Nuvem de pontos dense: edição e classificação', professional: true, standard: true },
    { name: 'Modelo digital de elevação: DSM/DTM', professional: true, standard: false },
    { name: 'Geração de ortomosaicos georreferenciados', professional: true, standard: false },
    { name: 'Suporte de objetos GNSS', professional: true, standard: false },
    { name: 'Pontos de controle no solo / pontos de check', professional: true, standard: false },
    { name: 'Medições de distância, áreas, volumes', professional: true, standard: false },
    { name: 'Produção multicâmera', professional: true, standard: false },
    { name: 'Modelo 3D: geração e texturização', professional: true, standard: true },
    { name: 'Geração de modelo hierárquico (tiled) e cena', professional: true, standard: false },
    { name: 'Modelagem 4D: point cloud dinâmicos', professional: true, standard: false },
    { name: 'Cores panorâmicas', professional: true, standard: false },
    { name: 'Processamento de imagens multiespectrais', professional: true, standard: false },
    { name: 'Cálculos de índices de vegetação', professional: true, standard: false },
    { name: 'Processamento de imagens de satélite', professional: true, standard: false },
    { name: 'API Python e Java', professional: true, standard: false },
    { name: 'Processamento de rede', professional: true, standard: false },
    { name: 'Processamento (cortex-aware)', professional: true, standard: false },
];

export default function Metashape() {
    return (
        <PublicLayout seo={{ title: 'Licença Agisoft Metashape no Brasil | T2R Soluções', description: 'Revenda autorizada Agisoft no Brasil. Adquira a licença do Metashape Professional com suporte técnico nacional.', canonical: 'https://t2rtecnologia.com.br/metashape' }}>
            
            {/* 1. HERO MASSIVE BLACK */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-blue-400 selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.08),transparent_50%)] pointer-events-none" />
                <div className="absolute flex gap-4 top-1/4 -left-10 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-[radar_6s_linear_infinite] opacity-50 origin-bottom-right" />
                
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-mono text-blue-400 mb-6 uppercase tracking-widest opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                         HOME / SOFTWARES / METASHAPE
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                        AGISOFT <br/>
                        <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.4)]">METASHAPE</span>
                    </h1>
                    <p className="max-w-3xl text-xl text-black/80 dark:text-white/50 font-light leading-relaxed mb-10 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                        Revenda Oficial no Brasil. O motor fotogramétrico definitivo que empurra os limites da tecnologia com machine learning e processamento denso em larga escala.
                    </p>
                    <div className="flex flex-wrap gap-4 opacity-0 animate-[fade-in-up_1s_ease-out_0.8s_forwards]">
                        <a href="#licencas" className="rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-3.5 font-bold text-sm transition-transform hover:scale-105 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">Comparar Licenças</a>
                    </div>
                </div>
            </section>

            {/* 2. OVERVIEW VIDEO - BENTO STYLE */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 sm:py-32 overflow-hidden border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
                            <div className="relative rounded-[32px] overflow-hidden border border-black/20 dark:border-white/10 bg-white dark:bg-black aspect-video p-1 shadow-[0_0_40px_rgba(96,165,250,0.05)] group hover:shadow-[0_10px_50px_rgba(96,165,250,0.15)] hover:-translate-y-1 transition-all duration-500">
                                <div className="absolute inset-0 bg-blue-400/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none rounded-[32px]"></div>
                                <div className="w-full h-full rounded-[28px] overflow-hidden relative z-20">
                                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/videoseries?list=PLyAE06t_cFl9RP3ZbH_R2dbbqAqg74SHL" title="Agisoft Metashape" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <h2 className="text-3xl font-black text-black dark:text-white mb-6 uppercase tracking-wider">A Vanguarda da Fotogrametria</h2>
                            <p className="text-lg text-black/80 dark:text-white/50 leading-relaxed font-light mb-6">
                                O Agisoft Metashape é uma solução de software de ponta, com tecnologia para levar a fotogrametria ao seu limite, contando com técnicas de machine learning para tarefas de pós-processamento e análise.
                            </p>
                            <p className="text-base text-black/70 dark:text-white/30 leading-relaxed font-light">
                                Permite processar imagens de câmeras RGB ou multiespectrais, incluindo sistemas multicâmeras, gerando informações espaciais de alto valor estratégico na forma de nuvens de pontos densas, ortomosaicos georreferenciados e modelos DSMs/DTMs perfeitos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COMPARISON TABLE - DARK INTERFACE */}
            <section id="licencas" className="relative w-full bg-white dark:bg-black py-24 sm:py-32 selection:bg-t2r-green selection:text-white dark:selection:text-black">
                <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                        <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight uppercase">Matriz de Funcionalidades</h2>
                        <a href="https://wa.me/5518996131404?text=Olá!%20Gostaria%20de%20uma%20cotação%20para%20licença%20do%20Metashape." target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-500/10 border border-blue-500/30 px-6 py-3 text-sm font-bold text-blue-400 hover:bg-blue-500 hover:text-black dark:hover:text-white transition-all uppercase tracking-wider whitespace-nowrap">
                            Falar com um Consultor
                        </a>
                    </div>
                    
                    <div className="overflow-hidden rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a]">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="border-b border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5">
                                    <th className="px-6 py-5 text-xs font-mono font-bold text-black dark:text-white/40 uppercase tracking-widest w-1/2">Funcionalidade Central</th>
                                    <th className="px-6 py-5 text-center text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/5">Versão Professional</th>
                                    <th className="px-6 py-5 text-center text-xs font-mono font-bold text-black/80 dark:text-white/50 uppercase tracking-widest">Versão Standard</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {COMPARISON_FEATURES.map((f, idx) => (
                                    <tr key={idx} className="hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-6 py-4 font-medium text-black/95 dark:text-white/80 group-hover:text-black dark:hover:text-white transition-colors">{f.name}</td>
                                        
                                        <td className="px-6 py-4 text-center bg-blue-500/5">
                                            {f.professional ? (
                                                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400">
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full text-black dark:text-white/20">
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                                </div>
                                            )}
                                        </td>
                                        
                                        <td className="px-6 py-4 text-center">
                                            {f.standard ? (
                                                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 text-black/90 dark:text-white/70">
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full text-black/60 dark:text-white/10">
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-6 bg-gradient-to-t from-white dark:from-black to-transparent flex justify-center border-t border-black/10 dark:border-white/5">
                             <span className="text-xs font-mono text-black/70 dark:text-white/30 uppercase tracking-widest text-center">Software Licenciado - Certificação T2R</span>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection title="Garanta o motor fotogramétrico do seu negócio." subtitle="Profissionalize suas entregas: voo com Kit PPK e processamento de ponta." ctaText="Adquirir Licença" />
        </PublicLayout>
    );
}
