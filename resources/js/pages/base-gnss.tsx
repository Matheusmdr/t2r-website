import PublicLayout from '@/layouts/public-layout';
import CtaSection from '@/components/public/CtaSection';

export default function BaseGnss() {
    return (
        <PublicLayout seo={{ title: 'Base PPK L1/L2 / Rover RTK Ntrip via Bluetooth | T2R Soluções', description: 'Solução profissional para RTK, PPK, topografia e geodésia, com alta precisão e operação prática via Bluetooth.', canonical: 'https://t2rtecnologia.com.br/base-gnss' }}>
            
            {/* 1. HERO MASSIVE BLACK */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,155,0.08),transparent_50%)] pointer-events-none" />
                
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Text Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                                 HOME / PRODUTOS / BASE GNSS
                            </div>
                            <h1 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                                BASE PPK L1/L2 <br/>
                                <span className="text-t2r-green drop-shadow-[0_0_25px_rgba(0,229,155,0.4)]">ROVER RTK NTRIP</span>
                            </h1>
                            <p className="max-w-2xl text-xl text-black/80 dark:text-white/50 font-light leading-relaxed mb-10 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                                Solução profissional extrema para RTK, PPK, topografia e geodésia. Alta precisão com operação sem fio via Bluetooth e compatibilidade nativa com serviços de correção NTRIP.
                            </p>
                            <div className="flex flex-wrap gap-4 opacity-0 animate-[fade-in-up_1s_ease-out_0.8s_forwards]">
                                <a href="https://wa.me/5518996131404?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Base%20GNSS." target="_blank" rel="noopener noreferrer" 
                                   className="rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-3.5 font-bold text-sm transition-transform hover:scale-105 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                   Solicitar Orçamento
                                </a>
                                <a href="#especificacoes" className="rounded-full border border-black/30 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-md px-8 py-3.5 font-bold text-sm text-black dark:text-white transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/40">
                                    Ver Especificações
                                </a>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 flex-shrink-0 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent border border-black/10 dark:border-white/5 transition-all duration-700 hover:border-t2r-green/20 hover:shadow-[0_20px_80px_rgba(0,229,155,0.06)]">
                                <img
                                    src="/images/base-gnss-hero.png"
                                    alt="Base GNSS T2R — Receptor Geodésico Profissional"
                                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. BENEFÍCIOS - DARK BENTO */}
            <section id="beneficios" className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 sm:py-32 overflow-hidden border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="text-left mb-16 max-w-3xl opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
                        <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight uppercase">Vantagens Táticas</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {([
                            ['NTRIP via Bluetooth', 'Compatível com correções NTRIP via Bluetooth', 'M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303'],
                            ['Múltiplas Aplicações', 'Ideal para RTK, PPK, topografia e geodésia', 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'],
                            ['Operação Prática', 'Operação direta pelo celular', 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'],
                            ['Alta Precisão', 'Para levantamentos estáticos e cinemáticos', 'M4.5 12.75l6 6 9-13.5'],
                            ['Multiconstelação', 'Rastreio multiconstelação para maior confiabilidade', 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582'],
                            ['Versátil', 'Solução para diferentes rotinas de campo', 'M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1'],
                        ] as [string, string, string][]).map(([title, desc, path], idx) => (
                            <div key={idx} style={{ animationDelay: `${1 + idx * 0.15}s` }} className="group rounded-[32px] border border-black/10 dark:border-white/5 bg-white dark:bg-[#0a0a0a] p-8 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-t2r-green/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(0,229,155,0.1)] hover:-translate-y-1 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-t2r-green/10 text-t2r-green border border-t2r-green/20 group-hover:scale-110 group-hover:bg-t2r-green/20 transition-all">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d={path} /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-t2r-green transition-colors">{title}</h3>
                                <p className="text-sm text-black/80 dark:text-white/50 leading-relaxed font-light">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ESPECIFICAÇÕES TÉCNICAS */}
            <section id="especificacoes" className="relative w-full bg-white dark:bg-black py-24 sm:py-32 selection:bg-cyan-400 selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5">
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight uppercase mb-16 text-center">Especificações Técnicas</h2>
                    
                    <div className="overflow-hidden rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a]">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="border-b border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5">
                                    <th className="px-6 py-4 text-xs font-mono font-bold text-black/80 dark:text-white/50 uppercase tracking-widest w-1/3">Parâmetro</th>
                                    <th className="px-6 py-4 text-xs font-mono font-bold text-black/80 dark:text-white/50 uppercase tracking-widest">Valor/Capacidade</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {([
                                    ['Rastreio das constelações/frequências', 'GPS/QZSS: L1C/A, L2C | GLONASS: L1OF, L2OF | Galileo: E1-B/C, E5b | BeiDou: B1I, B2I'],
                                    ['Número de canais', '184'],
                                    ['Storage interno', '32 GB'],
                                    ['Conectividade', 'Wi-Fi (Http/FTP)'],
                                    ['Formato', 'RAW/UBX'],
                                    ['Bateria', 'Autonomia de 10 horas | 4h para carga completa | Conector USB-C'],
                                    ['Taxa de coleta de dados brutos', 'De 1Hz a 10Hz'],
                                    ['Acurácia Estático', 'V: 4 mm + 0.5 ppm | H: 8 mm + 1 ppm'],
                                    ['Acurácia Cinemático', 'V: 10 mm + 1 ppm | H: 5 mm + 0,5 ppm'],
                                ] as [string, string][]).map(([spec, value], idx) => (
                                    <tr key={idx} className="hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4 font-bold text-black dark:text-white border-r border-black/10 dark:border-white/5">{spec}</td>
                                        <td className="px-6 py-4 text-black/90 dark:text-white/70 font-mono text-sm tracking-wide">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. INDICADO PARA & INCLUSOS */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 sm:py-32">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Indicado Para */}
                        <div className="lg:col-span-1 rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/10 p-8 flex flex-col">
                            <h2 className="text-2xl font-black text-black dark:text-white mb-6 uppercase tracking-wide">Casos de Uso</h2>
                            <div className="flex flex-col gap-3">
                                {['Levantamentos topográficos', 'Georreferenciamento', 'Apoio para operações com PPK', 'Trabalhos com RTK em campo', 'Aplicações em geodésia', 'Coleta de pontos com alta precisão'].map((text, idx) => (
                                    <div key={idx} className="flex items-center gap-3 rounded-full border border-black/10 dark:border-white/5 bg-white dark:bg-[#0a0a0a] px-5 py-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                        <span className="text-sm font-medium text-black/95 dark:text-white/80">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Incluso */}
                        <div className="lg:col-span-1 rounded-[32px] bg-white dark:bg-[#0a0a0a] border border-t2r-green/20 p-8 shadow-[0_0_30px_rgba(0,229,155,0.03)]">
                            <h2 className="text-2xl font-black text-black dark:text-white mb-6 flex items-center gap-3 uppercase"><span className="w-2.5 h-2.5 rounded-full bg-t2r-green animate-pulse" /> Incluso no Kit</h2>
                            <ul className="space-y-4">
                                {['1 Receptor GNSS', '1 Carregador de bateria de alta eficiência', '1 Cabo de dados USB Tipo C', '1 Mala rígida antichoque para transporte'].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-sm text-black/90 dark:text-white/70 font-light">
                                        <svg className="h-5 w-5 text-t2r-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Não Incluso */}
                        <div className="lg:col-span-1 rounded-[32px] bg-white dark:bg-[#0a0a0a] border border-red-500/20 p-8 shadow-[0_0_30px_rgba(239,68,68,0.03)]">
                            <h2 className="text-2xl font-black text-black dark:text-white mb-6 flex items-center gap-3 uppercase"><span className="text-red-500 text-lg">✕</span> Não Incluso</h2>
                            <ul className="space-y-4">
                                {['App de campo para RTK', 'Acessórios mecânicos de apoio (bipé, bastão, tripés e similares)'].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-sm text-black dark:text-white/40 font-light italic">
                                        <svg className="h-5 w-5 text-red-500/50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. GARANTIA */}
            <section className="relative w-full bg-white dark:bg-black py-24 overflow-hidden border-t border-black/10 dark:border-white/5">
                 <div className="mx-auto max-w-4xl px-4 text-center">
                    <div className="inline-flex rounded-[32px] bg-white dark:bg-[#0a0a0a] border border-black/20 dark:border-white/10 p-12 flex-col items-center">
                        <svg className="h-10 w-10 text-cyan-400 mb-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                        <h2 className="text-2xl font-black text-black dark:text-white mb-2 uppercase">Garantia Técnica</h2>
                        <p className="text-base text-black/80 dark:text-white/50 leading-relaxed font-light mb-6">Equipamento de alta fidelidade montado para cenários extremos.</p>
                        <hr className="w-16 border-black/20 dark:border-white/10 mb-6 mx-auto" />
                        <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase">1 Ano contra defeitos de fabricação</p>
                    </div>
                 </div>
            </section>

            <CtaSection title="A independência que seu mapeamento precisa." subtitle="Disponha de uma base robusta e precisa. A T2R aproxima você da alta precisão em campo." />
        </PublicLayout>
    );
}
