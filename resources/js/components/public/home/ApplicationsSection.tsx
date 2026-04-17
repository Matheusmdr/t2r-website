import type { Application } from '@/types/t2r';

const APPLICATIONS: Application[] = [
    { icon: 'ruler', title: 'Topografia e Georreferenciamento', description: 'Levantamentos planialtimétricos, divisas e georreferenciamento de imóveis rurais com precisão centimétrica.' },
    { icon: 'mining', title: 'Mineração e Movimentação de Terra', description: 'Cálculo volumétrico, monitoramento de taludes e acompanhamento de lavra com dados precisos.' },
    { icon: 'plant', title: 'Agricultura de Precisão', description: 'Mapeamento de áreas de plantio, MDT para sistematização de terrenos e planejamento agrícola.' },
    { icon: 'building', title: 'Construção Civil e Obras', description: 'Acompanhamento de obras, levantamentos de as-built e planejamento urbano com mapeamento aéreo.' },
    { icon: 'leaf', title: 'Meio Ambiente e Licenciamento', description: 'Monitoramento ambiental, mapeamento de APP, florestas e áreas de preservação com alta resolução.' },
    { icon: 'bolt', title: 'Energia e Infraestrutura', description: 'Inspeção de linhas de transmissão, usinas solares, estradas e ferrovias com ortomosaicos precisos.' },
];

function AppIcon({ type }: { type: string }) {
    const cls = "h-6 w-6 relative z-10";
    switch (type) {
        case 'ruler': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>;
        case 'mining': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>;
        case 'plant': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" /></svg>;
        case 'building': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" /></svg>;
        case 'leaf': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9m0-18c-4.97 0-9 4.03-9 9s4.03 9 9 9m0-18v18m-4.5-7.5h9" /></svg>;
        case 'bolt': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;
        default: return null;
    }
}

export default function ApplicationsSection() {
    return (
        <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-20 sm:py-32 overflow-hidden selection:bg-cyan-500 selection:text-white dark:selection:text-black">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-t2r-green opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-mono text-cyan-400 mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        SISTEMAS OPERACIONAIS
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black dark:text-white mb-6">
                        DOMÍNIO EM <br className="sm:hidden" /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-t2r-green">QUALQUER TERRENO.</span>
                    </h2>
                    <p className="text-lg text-black/80 dark:text-white/50 font-light">
                        As soluções da T2R são desenvolvidas para suportar demandas extremas na engenharia, cartografia avançada e agronegócio.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {APPLICATIONS.map((app, idx) => (
                        <div key={idx} className="group relative rounded-3xl bg-white dark:bg-[#0a0a0a] border border-black/20 dark:border-white/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(34,211,238,0.05)] overflow-hidden">
                            <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-400/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/10 text-black dark:text-white/60 mb-6 group-hover:scale-110 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-500" />
                                <AppIcon type={app.icon} />
                            </div>
                            
                            <h3 className="text-xl font-bold text-black dark:text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">{app.title}</h3>
                            <p className="text-sm leading-relaxed text-black dark:text-white/40 group-hover:text-black dark:hover:text-white/60 transition-colors duration-300">{app.description}</p>
                            
                            {/* Technical bottom border indicator */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-t2r-green transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
