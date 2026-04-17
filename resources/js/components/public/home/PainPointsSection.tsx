import type { PainPoint } from '@/types/t2r';

const PAIN_POINTS: PainPoint[] = [
    {
        icon: 'target',
        title: 'Baixa Precisão',
        description: 'Baixa precisão no georreferenciamento que compromete a qualidade do projeto.',
    },
    {
        icon: 'pin',
        title: 'Muitos GCPs',
        description: 'Dependência de muitos pontos de controle, elevando custo e tempo em campo.',
    },
    {
        icon: 'signal',
        title: 'Sem Internet (RTK)',
        description: 'Limitações do RTK em áreas remotas onde não há cobertura de celular ou rádio.',
    },
    {
        icon: 'refresh',
        title: 'Inconsistência',
        description: 'Retrabalho por inconsistência de dados e falhas de processamento fotogramétrico.',
    },
];

function PainIcon({ type }: { type: string }) {
    const cls = "h-6 w-6";
    switch (type) {
        case 'target': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
        case 'pin': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
        case 'signal': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>;
        case 'refresh': return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M20.016 4.657v4.992" /></svg>;
        default: return null;
    }
}

export default function PainPointsSection() {
    return (
        <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 sm:py-32 overflow-hidden selection:bg-red-500 selection:text-white dark:selection:text-black dark:text-white">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-mono text-red-500 mb-6 uppercase tracking-widest">
                        ANÁLISE DE FALHAS COMUNS
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white mb-6">
                        O PREÇO DO <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">RETRABALHO.</span>
                    </h2>
                    <p className="text-black/80 dark:text-white/50 text-lg">
                        Mapeamento sem precisão custa tempo, margem e reputação. Reconhece as dores abaixo no seu dia a dia?
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PAIN_POINTS.map((point, idx) => (
                        <div key={idx} className="group relative rounded-3xl bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/5 p-8 transition-all hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)] overflow-hidden">
                            <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/10 text-black dark:text-white/40 group-hover:text-red-500 group-hover:border-red-500/30 transition-all">
                                <PainIcon type={point.icon} />
                            </div>
                            
                            <h3 className="mb-3 text-lg font-bold text-black dark:text-white group-hover:text-red-400 transition-colors">{point.title}</h3>
                            <p className="text-sm leading-relaxed text-black dark:text-white/40 group-hover:text-black dark:hover:text-white/60 transition-colors">{point.description}</p>

                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
