import { Link } from '@inertiajs/react';
import type { Solution } from '@/types/t2r';

const SOLUTIONS: Solution[] = [
    {
        icon: 'wrench',
        title: 'PPK para Drones',
        description: 'Tecnologia embarcada e fluxo completo para precisão centimétrica sem depender de rede RTK.',
        href: '/ppk-para-drones',
    },
    {
        icon: 'satellite',
        title: 'Base GNSS T2R',
        description: 'Estação de referência robusta. Gravação estática (PPK), transmissão NTRIP e uso como rover.',
        href: '/base-gnss',
    },
    {
        icon: 'code',
        title: 'T2R Geotagger',
        description: 'Software desenvolvido pela T2R. Processe a trajetória e integre dados GNSS às fotos facilmente.',
        href: '/t2r-geotagger',
    },
    {
        icon: 'cube',
        title: 'Agisoft Metashape',
        description: 'Revenda oficial das licenças Standard e Professional do algoritmo líder em fotogrametria.',
        href: '/metashape',
    },
];

function SolutionIcon({ type }: { type: string }) {
    const cls = "h-6 w-6";
    switch (type) {
        case 'wrench': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L15.17 4.33a2.121 2.121 0 013 3l-7.75 7.84zM15 12l3-3m-3 3l-3 3" /></svg>;
        case 'satellite': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
        case 'code': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>;
        case 'cube': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>;
        default: return null;
    }
}

export default function SolutionsSection() {
    return (
        <section className="relative w-full bg-white dark:bg-black py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-pattern-grid opacity-10 pointer-events-none" />
            
            <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 uppercase tracking-widest">
                        O que a T2R Entrega?
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white mb-6 uppercase">
                        ECOSSISTEMA <span className="text-t2r-green">COMPLETO</span>
                    </h2>
                    <p className="text-black/80 dark:text-white/50 text-lg">
                        Atalhos diretos para as verticais de geotecnologia projetadas para garantir segurança e precisão.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SOLUTIONS.map((s, idx) => (
                        <Link key={idx} href={s.href} className="group relative rounded-[32px] bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/5 p-8 transition-all duration-500 hover:border-t2r-green/40 hover:bg-black/5 dark:hover:bg-[#0f0f0f] flex flex-col h-full shadow-md dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(0,229,155,0.05)]">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/50 border border-black/20 dark:border-white/10 group-hover:bg-t2r-green/10 group-hover:text-t2r-green group-hover:border-t2r-green/30 transition-all duration-500">
                                <SolutionIcon type={s.icon} />
                            </div>
                            
                            <h3 className="mb-3 text-2xl font-bold text-black dark:text-white group-hover:text-t2r-green transition-colors">{s.title}</h3>
                            <p className="flex-1 text-sm leading-relaxed text-black dark:text-white/40 mb-8">{s.description}</p>
                            
                            <div className="mt-auto flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black/70 dark:text-white/30 group-hover:text-t2r-green transition-colors">
                                <span>Acessar</span>
                                <svg className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
