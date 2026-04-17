import type { PrecisionRow } from '@/types/t2r';

const PRECISION_DATA: PrecisionRow[] = [
    { drone: 'DJI Mini 4 Pro', withoutPPK_h: '1–5 m', withoutPPK_v: '2–8 m', withPPK_h: '2–4 cm', withPPK_v: '3–5 cm' },
    { drone: 'DJI Air 2S', withoutPPK_h: '1–5 m', withoutPPK_v: '2–8 m', withPPK_h: '2–4 cm', withPPK_v: '3–5 cm' },
    { drone: 'DJI Mini 3', withoutPPK_h: '1–5 m', withoutPPK_v: '2–8 m', withPPK_h: '2–4 cm', withPPK_v: '3–5 cm' },
    { drone: 'DJI Phantom 4 ADV/PRO', withoutPPK_h: '1–5 m', withoutPPK_v: '2–8 m', withPPK_h: '2–3 cm', withPPK_v: '3–4 cm' },
    { drone: 'DJI Mavic 2 Pro', withoutPPK_h: '1–5 m', withoutPPK_v: '2–8 m', withPPK_h: '2–3 cm', withPPK_v: '3–5 cm' },
];

export default function PrecisionTableSection() {
    return (
        <section className="relative w-full bg-white dark:bg-black py-24 sm:py-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,155,0.05),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 uppercase tracking-widest">
                        PROVA TÉCNICA
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white mb-6 uppercase">
                        RESULTADOS <span className="text-t2r-green">COMPROVADOS</span>
                    </h2>
                    <p className="text-black/80 dark:text-white/50 text-lg font-light">
                        Veja a diferença abissal de precisão nos levantamentos com e sem o Kit PPK T2R.
                        Dados validados em campo com pontos de check rastreados.
                    </p>
                </div>

                {/* Stats */}
                <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <StatCard value="2–4 cm" label="Acurácia Horizontal" />
                    <StatCard value="3–5 cm" label="Acurácia Vertical" />
                    <StatCard value="0 GCPs" label="Otimização" />
                    <StatCard value="L1/L2" label="Sinal Estável" />
                </div>

                {/* Table Bento Box */}
                <div className="overflow-hidden rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-lg dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group">
                                <div className="absolute -top-16 -right-16 w-48 h-48 bg-t2r-green/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="overflow-x-auto relative z-10 p-2 sm:p-8">
                        <table className="w-full text-sm text-left whitespace-nowrap">
                            <thead>
                                <tr>
                                    <th className="px-6 py-4 font-black text-black/95 dark:text-white/80 uppercase tracking-widest border-b border-black/20 dark:border-white/10">Drone + Kit PPK</th>
                                    <th className="px-4 py-4 text-center font-bold text-red-500/80 uppercase tracking-widest border-b border-red-500/10 bg-red-500/5 rounded-tl-xl" colSpan={2}>Sem PPK (Nativo)</th>
                                    <th className="px-4 py-4 text-center font-black text-t2r-green uppercase tracking-widest border-b border-t2r-green/20 bg-t2r-green/10 rounded-tr-xl" colSpan={2}>Com PPK T2R</th>
                                </tr>
                                <tr className="text-xs font-mono text-black dark:text-white/40 uppercase tracking-widest">
                                    <th className="px-6 py-3 border-b border-black/10 dark:border-white/5">Modelo</th>
                                    <th className="px-4 py-3 text-center border-b border-black/10 dark:border-white/5 bg-red-500/5">Horiz.</th>
                                    <th className="px-4 py-3 text-center border-b border-black/10 dark:border-white/5 bg-red-500/5">Vert.</th>
                                    <th className="px-4 py-3 text-center border-b border-black/10 dark:border-white/5 bg-t2r-green/5">Horiz.</th>
                                    <th className="px-4 py-3 text-center border-b border-black/10 dark:border-white/5 bg-t2r-green/5">Vert.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PRECISION_DATA.map((row, idx) => (
                                    <tr key={idx} className="border-b border-black/10 dark:border-white/5 hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-5 font-bold text-black dark:text-white max-w-[200px] truncate">{row.drone}</td>
                                        <td className="px-4 py-5 text-center text-red-400 font-mono bg-red-500/5">{row.withoutPPK_h}</td>
                                        <td className="px-4 py-5 text-center text-red-400 font-mono bg-red-500/5">{row.withoutPPK_v}</td>
                                        <td className="px-4 py-5 text-center font-mono font-bold text-t2r-green bg-t2r-green/5 shadow-[inset_0_1px_rgba(0,229,155,0.02)]">{row.withPPK_h}</td>
                                        <td className="px-4 py-5 text-center font-mono font-bold text-t2r-green bg-t2r-green/5 shadow-[inset_0_1px_rgba(0,229,155,0.02)]">{row.withPPK_v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatCard({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center justify-center rounded-[32px] border border-black/10 dark:border-white/5 bg-white dark:bg-[#0a0a0a] p-6 text-center hover:border-t2r-green/30 transition-colors shadow-md dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-t2r-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-3xl sm:text-4xl font-black text-black dark:text-white group-hover:text-t2r-green transition-colors">{value}</span>
            <span className="relative z-10 mt-2 text-xs font-mono font-bold uppercase tracking-widest text-black dark:text-white/40">{label}</span>
        </div>
    );
}
