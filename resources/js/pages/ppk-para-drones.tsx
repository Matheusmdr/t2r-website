import PublicLayout from '@/layouts/public-layout';
import PrecisionTableSection from '@/components/public/home/PrecisionTableSection';
import CtaSection from '@/components/public/CtaSection';
import { Product } from '@/types/t2r';

const SPEC_LABELS: Record<string, string> = { antena: 'Antena', constelacoes: 'Constelações', frequencias: 'Nº de Frequências', canais: 'Nº Canais', armazenamento: 'Armazenamento', consumo: 'Consumo Energético', linhaBase: 'Distância Linha de Base', tempoFixo: 'Tempo para Status Fixo' };

interface Props {
    drones: Product[];
}

export default function PpkParaDrones({ drones }: Props) {
    return (
        <PublicLayout seo={{ title: 'Kit PPK L1/L2 para Drones DJI | T2R Soluções Tecnológicas', description: 'Transforme seu drone DJI em uma solução de mapeamento com posicionamento de alta precisão via PPK.', canonical: 'https://t2rtecnologia.com.br/ppk-para-drones' }}>

            {/* 1. HERO MASSIVE BLACK */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,155,0.08),transparent_50%)] pointer-events-none" />
                {/* Scan line removed — kept for reversion:
                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-t2r-green/50 to-transparent top-1/4 animate-[scan_4s_ease-in-out_infinite] opacity-30" />
                */}

                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                        HOME / PRODUTOS / PPK PARA DRONES
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                        KIT PPK L1/L2 <br />
                        <span className="text-t2r-green drop-shadow-[0_0_25px_rgba(0,229,155,0.4)]">PARA DRONES DJI</span>
                    </h1>
                    <p className="max-w-2xl text-xl text-black/80 dark:text-white/50 font-light leading-relaxed mb-10 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                        Transforme seu drone DJI em uma solução de mapeamento com posicionamento de alta precisão via PPK, reduzindo drasticamente a dependência de pontos de apoio em campo.
                    </p>
                    <div className="flex flex-wrap gap-4 opacity-0 animate-[fade-in-up_1s_ease-out_0.8s_forwards]">
                        <a href="#compatibilidade" className="rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-3.5 font-bold text-sm transition-transform hover:scale-105 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">Ver Catálogo de Drones</a>
                        <a href="#beneficios" className="rounded-full border border-black/30 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-md px-8 py-3.5 font-bold text-sm text-black dark:text-white transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/40">Especificações e Benefícios</a>
                    </div>
                </div>
            </section>

            {/* 2. CATÁLOGO DE DRONES — DJI-style alternating sections */}
            <section id="compatibilidade" className="relative w-full bg-[#050505] py-24 sm:py-32 selection:bg-cyan-400 selection:text-black">
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">

                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">Sistemas Compatíveis</h2>
                        <p className="text-white/50 text-lg font-light">Se o seu drone não estiver na lista, entre em contato. Desenvolvemos integrações personalizadas avaliando a viabilidade da fuselagem.</p>
                    </div>

                    <div className="space-y-0">
                        {drones.map((drone, idx) => {
                            const isReversed = idx % 2 !== 0;
                            const specs: any = drone.tech_specs || {};
                            const keySpecs = [
                                { label: 'Frequências', value: specs.frequencias || '-' },
                                { label: 'Canais', value: specs.canais || '-' },
                                { label: 'Linha Base', value: (specs.linhaBase || '').replace(' (máxima recomendada)', '') },
                            ];

                            return (
                                <div key={drone.id} className={`relative py-16 sm:py-20 ${idx !== drones.length - 1 ? 'border-b border-white/5' : ''}`}>
                                    {/* Subtle ambient glow */}
                                    <div className={`absolute ${isReversed ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-t2r-green/[0.03] blur-[120px] rounded-full pointer-events-none`} />

                                    <div className={`relative z-10 flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>

                                        {/* Image Side */}
                                        <div className="w-full lg:w-1/2 flex-shrink-0">
                                            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 p-6 sm:p-10 transition-all duration-700 hover:border-white/10 hover:shadow-[0_20px_80px_rgba(0,229,155,0.06)]">
                                                <img
                                                    src={drone.cover_image}
                                                    alt={drone.title}
                                                    className="w-full h-auto max-h-[400px] object-contain transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>

                                        {/* Text + Specs Side */}
                                        <div className="w-full lg:w-1/2">
                                            <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/20 bg-t2r-green/5 px-4 py-1.5 text-xs font-mono text-t2r-green mb-4 uppercase tracking-[0.2em]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-t2r-green shadow-[0_0_8px_rgba(0,229,155,0.6)]" />
                                                {(drone as any).category?.title || 'Kit PPK'}
                                            </div>

                                            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-6">
                                                {drone.title}
                                            </h3>

                                            {/* Key Specs - prominent */}
                                            <div className="grid grid-cols-3 gap-3 mb-8">
                                                {keySpecs.map((spec, i) => (
                                                    <div key={i} className="rounded-2xl bg-white/[0.03] border border-white/5 p-4 text-center">
                                                        <p className="text-lg sm:text-xl font-black text-t2r-green leading-tight">{spec.value}</p>
                                                        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">{spec.label}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Detail specs */}
                                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
                                                {Object.entries(specs)
                                                    .filter(([key]) => !['frequencias', 'canais', 'linhaBase'].includes(key))
                                                    .map(([key, value]) => (
                                                        <div key={key} className="flex flex-col gap-0.5">
                                                            <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{SPEC_LABELS[key] || key}</p>
                                                            <p className="text-sm text-white/70 font-medium">{String(value)}</p>
                                                        </div>
                                                    ))}
                                            </div>

                                            {/* CTA */}
                                            <a
                                                href={`https://wa.me/5518996131404?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20PPK%20para%20${encodeURIComponent(drone.title)}.`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center gap-3 rounded-full bg-white text-black px-7 py-3.5 font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                                            >
                                                <svg className="h-4 w-4 text-t2r-green" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.583l-.39-.236-3.296 1.103 1.104-3.29-.248-.395A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                                                <span>Solicitar Orçamento</span>
                                                <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. BENEFÍCIOS - DARK BENTO */}
            <section id="beneficios" className="relative w-full bg-white dark:bg-black py-24 sm:py-32 overflow-hidden border-t border-black/10 dark:border-white/5">
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight">O FIM DO RETRABALHO</h2>
                        <p className="mt-6 text-black/80 dark:text-white/50 text-lg font-light leading-relaxed">Com tecnologia GNSS de pós-processamento (PPK), obtenha coordenadas de altíssima precisão sem depender de correção RTK vulnerável em tempo real.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {([
                            ['Redução de GCPs', 'Redução ou eliminação da necessidade de GCPs, conforme o tipo de projeto', 'M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'],
                            ['Independência de Link', 'Independência absoluta de link RTK, 4G ou rádio UHF em campo', 'M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546'],
                            ['Robustez Operacional', 'Proteção máxima contra perda de dados em vales e áreas isoladas', 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'],
                            ['Controle de Qualidade', 'Métricas de variância visíveis durante todo o processamento de rotas', 'M4.5 12.75l6 6 9-13.5'],
                            ['Integração Não-Invasiva', 'Hardware embarcado extremamente leve (menos de 50g) focado na DJI', 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971z'],
                            ['Qualidade Comprovada', 'Reduz saltos milimétricos, minimiza paralaxe e cravamento de malha 3D', 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M20.016 4.657v4.992'],
                        ] as [string, string, string][]).map(([title, desc, path], idx) => (
                            <div key={idx} className="group rounded-3xl border border-black/10 dark:border-white/5 bg-white dark:bg-white/[0.02] p-8 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:scale-110 transition-transform">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d={path} /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{title}</h3>
                                <p className="text-sm text-black/80 dark:text-white/50 leading-relaxed font-light">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. INCLUSO E INDICADO - BLACK/RED/GREEN */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 border-t border-b border-black/10 dark:border-white/5">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Incluso */}
                        <div className="rounded-[32px] bg-white dark:bg-[#0a0a0a] border border-t2r-green/20 p-8 sm:p-12">
                            <h2 className="text-2xl font-black text-black dark:text-white mb-8 flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-t2r-green animate-pulse" /> O QUE ESTÁ INCLUSO</h2>
                            <ul className="space-y-4">
                                {['Instalação completa do sistema PPK no drone', 'Antena helicoidal Multi-GNSS L1/L2 removível', 'Software proprietário T2R Geotagger original', 'Suporte técnico de engenharia (12 meses)', 'Treinamento remoto intensivo para até 2 pessoas', 'Documentação técnica e relatórios de padronização'].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-base text-black/90 dark:text-white/70 font-light">
                                        <svg className="h-6 w-6 text-t2r-green flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Não Incluso */}
                        <div className="rounded-[32px] bg-white dark:bg-[#0a0a0a] border border-red-500/20 p-8 sm:p-12">
                            <h2 className="text-2xl font-black text-black dark:text-white mb-8 flex items-center gap-3"><span className="text-red-500">✕</span> NÃO INCLUSO NO PACOTE</h2>
                            <ul className="space-y-4">
                                {['O próprio Drone (venda apenas do sistema de inteligência)', 'Base GNSS de solo (vendida como acessório extra)', 'Capacitação primária em pilotagem de drones', 'Softwares de fotogrametria caros (PIX4D, Metashape)'].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-base text-black dark:text-white/40 font-light italic">
                                        <svg className="h-6 w-6 text-red-500/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. INSTALAÇÃO E GARANTIA */}
            <section className="relative w-full bg-white dark:bg-black py-24 overflow-hidden">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <div className="inline-flex rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/10 p-12 flex-col items-center">
                        <svg className="h-12 w-12 text-cyan-400 mb-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                        <h2 className="text-3xl font-black text-black dark:text-white mb-6 uppercase">Sobre Instalação & Garantia T2R</h2>
                        <p className="text-lg text-black/80 dark:text-white/50 leading-relaxed font-light mb-6">A instalação do PPK é cirúrgica e realizada por nossa equipe de engenharia. O drone deve ser enviado fisicamente ao laboratório T2R. Prazo de turnaround extremo: <strong>Até 5 dias úteis.</strong> Testes de solo e voo são conduzidos antes do sistema de hardware ser chancelado.</p>
                        <hr className="w-24 border-black/20 dark:border-white/10 my-6 mx-auto" />
                        <p className="text-sm font-mono text-cyan-400 tracking-widest uppercase">Garantia Técnica de 1 Ano em todos os componentes</p>
                    </div>
                </div>
            </section>

            {/* 6. TABELA DE PRECISÃO (Componente Externo) */}
            <div className="bg-white dark:bg-black border-t border-black/10 dark:border-white/5">
                <PrecisionTableSection />
            </div>

            <CtaSection title="A PRÓXIMA MISSÃO REQUER EXATIDÃO." subtitle="Acione a nossa engenharia corporativa e orce o seu sistema." />
        </PublicLayout>
    );
}
