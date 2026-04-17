import PublicLayout from '@/layouts/public-layout';
import CtaSection from '@/components/public/CtaSection';

export default function SobreNos() {
    return (
        <PublicLayout seo={{ title: 'Sobre a T2R | Soluções Tecnológicas', description: 'A T2R é uma empresa de tecnologia que desenvolve soluções em Cartografia, Geodésia por Satélites, Fotogrametria, Ciência da Computação e Eletrônica.', canonical: 'https://t2rtecnologia.com.br/sobre-nos' }}>
            
            {/* 1. HERO MASSIVE BLACK */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,229,155,0.08),transparent_50%)] pointer-events-none" />
                <div className="absolute top-1/4 right-0 w-1/2 h-[1px] bg-gradient-to-l from-t2r-green/50 to-transparent animate-[scan_4s_ease-in-out_infinite_alternate]" />
                
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 uppercase tracking-widest opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                         HOME / SOBRE NÓS
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                        ENGENHARIA E <br/>
                        <span className="text-t2r-green drop-shadow-[0_0_25px_rgba(0,229,155,0.4)]">PESQUISA BRASILEIRA</span>
                    </h1>
                </div>
            </section>

            {/* 2. NUMBERS - GLOWING STATS */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-20 border-b border-black/10 dark:border-white/5 overflow-hidden opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
                <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none"></div>
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
                        <div className="pt-8 sm:pt-0 pb-8 sm:pb-0 flex flex-col items-center justify-center">
                            <div className="text-6xl font-black text-black dark:text-white drop-shadow-[0_0_20px_rgba(0,229,155,0.2)] mb-2 group"><span className="text-t2r-green">141</span>+</div>
                            <div className="text-sm text-black/80 dark:text-white/50 font-mono uppercase tracking-[0.2em]">Clientes Atendidos</div>
                        </div>
                        <div className="py-8 sm:py-0 flex flex-col items-center justify-center">
                            <div className="text-6xl font-black text-black dark:text-white drop-shadow-[0_0_20px_rgba(0,229,155,0.2)] mb-2"><span className="text-cyan-400">100</span>%</div>
                            <div className="text-sm text-black/80 dark:text-white/50 font-mono uppercase tracking-[0.2em]">Comprometimento Tático</div>
                        </div>
                        <div className="pt-8 sm:pt-0 flex flex-col items-center justify-center">
                            <div className="text-6xl font-black text-black dark:text-white drop-shadow-[0_0_20px_rgba(0,229,155,0.2)] mb-2"><span className="text-t2r-green">19</span>+</div>
                            <div className="text-sm text-black/80 dark:text-white/50 font-mono uppercase tracking-[0.2em]">Estados de Operação</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. STORY & CAPABILITIES - DARK BENTO GRID */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 sm:py-32 overflow-hidden border-b border-black/10 dark:border-white/5">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* Story Block */}
                        <div className="lg:col-span-8 rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a] p-10 sm:p-14 shadow-[0_0_40px_rgba(0,229,155,0.03)] relative overflow-hidden group opacity-0 animate-[fade-in-up_0.8s_ease-out_1s_forwards]">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-40 h-40 text-t2r-green" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-10-5v10l10 5 10-5v-10l-10 5z"/></svg>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8 uppercase tracking-widest relative z-10">CORE DA <span className="text-t2r-green">T2R</span></h2>
                            <p className="text-xl sm:text-2xl text-black/95 dark:text-white/80 font-light leading-relaxed mb-8 relative z-10">
                                A T2R é um hub de inteligência tecnológica voltado à Cartografia, Geodésia por Satélites, Fotogrametria, Ciência da Computação e Eletrônica Embarcada.
                            </p>
                            <p className="text-lg text-black dark:text-white/40 leading-relaxed font-light relative z-10">
                                Realizamos a integração profunda de sistemas eletro/eletrônicos e industriais. Desenvolvemos algoritmos assíncronos para sistemas embarcados e IoT, com processamento massivo de dados geográficos e automações críticas para áreas agrícolas e de infraestrutura pesada.
                            </p>
                        </div>

                        {/* Capabilities Grid */}
                        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                            {([
                                ['Integração de Sistemas', 'M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1'],
                                ['Desenvolvimento de Algoritmos', 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z'],
                                ['Análise em Larga Escala', 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'],
                                ['Automação de Hardware', 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'],
                            ] as [string, string][]).map(([title, path], idx) => (
                                <div key={idx} className="rounded-2xl border border-black/10 dark:border-white/5 bg-white dark:bg-white/[0.01] p-6 flex items-center gap-6 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:border-t2r-green/20 transition-all">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-t2r-green/10 text-t2r-green shadow-[0_0_15px_rgba(0,229,155,0.15)]">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d={path} /></svg>
                                    </div>
                                    <h3 className="text-base font-bold text-black dark:text-white uppercase tracking-wide">{title}</h3>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. LOCATION */}
            <section className="relative w-full bg-white dark:bg-black py-24 overflow-hidden border-b border-black/10 dark:border-white/5">
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                     <svg className="w-[800px] h-[800px] text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
                    <svg className="mx-auto h-12 w-12 text-t2r-green mb-6 drop-shadow-[0_0_15px_rgba(0,229,155,0.3)] animate-pulse" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    <h2 className="text-3xl font-black text-black dark:text-white uppercase tracking-widest mb-6">Laboratório Base no Brasil</h2>
                    <p className="text-lg text-black/80 dark:text-white/50 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                        Nosso pólo de tecnologia, engenharia e montagem está estrategicamente localizado em São Paulo, permitindo logística rápida de equipamentos e assistência VIP em todo o território nacional.
                    </p>
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-full border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a] px-8 py-5 shadow-2xl">
                        <span className="w-2 h-2 rounded-full bg-t2r-green animate-[ping_2s_infinite]"></span>
                        <span className="text-sm font-mono text-black/90 dark:text-white/70 uppercase tracking-widest">Avenida Da Saudade, 535, Sala 86 – Presidente Prudente/SP</span>
                    </div>
                </div>
            </section>

            <CtaSection title="Sua operação no limiar técnico." subtitle="Nossa equipe de engenheiros está de prontidão para desenhar a arquitetura da sua próxima frota autônoma." ctaText="Falar com Engenharia" />
        </PublicLayout>
    );
}
