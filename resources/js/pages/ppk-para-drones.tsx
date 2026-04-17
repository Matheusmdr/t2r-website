import PublicLayout from '@/layouts/public-layout';
import PrecisionTableSection from '@/components/public/home/PrecisionTableSection';
import CtaSection from '@/components/public/CtaSection';

const DRONE_MODELS = [
    { id: 13, name: 'DJI Mini 4 Pro', category: 'Kit L1/L2', specs: { antena: 'Helicoidal Multi-GNSS L1/L2 (removível)', constelacoes: 'GPS + GLONASS + GALILEO + BEIDOU', frequencias: '2 (L1 e L2)', canais: '184', armazenamento: '32 GB', consumo: '130 mA em 5 Vcc (menos de 1 W)', linhaBase: 'Até 25 km (máxima recomendada)', tempoFixo: 'Cerca de 1 min em linhas curtas; Até 5 min em linhas longas' } },
    { id: 6, name: 'DJI Mini 3', category: 'Kit L1/L2', specs: { antena: 'Helicoidal Multi-GNSS L1/L2 (removível)', constelacoes: 'GPS + GLONASS + GALILEO + BEIDOU', frequencias: '2 (L1 e L2)', canais: '184', armazenamento: '32 GB', consumo: '130 mA em 5 Vcc (menos de 1 W)', linhaBase: 'Até 25 km (máxima recomendada)', tempoFixo: 'Cerca de 1 min em linhas curtas; Até 5 min em linhas longas' } },
    { id: 9, name: 'DJI Air 2S', category: 'Kit L1/L2', specs: { antena: 'Helicoidal Multi-GNSS L1/L2 (removível)', constelacoes: 'GPS + GLONASS + GALILEO + BEIDOU', frequencias: '2 (L1 e L2)', canais: '184', armazenamento: '32 GB', consumo: '130 mA em 5 Vcc (menos de 1 W)', linhaBase: 'Até 25 km (máxima recomendada)', tempoFixo: 'Cerca de 1 min em linhas curtas; Até 5 min em linhas longas' } },
    { id: 7, name: 'DJI Mavic 2 Pro', category: 'Kit L1/L2', specs: { antena: 'Helicoidal Multi-GNSS L1/L2 (removível)', constelacoes: 'GPS + GLONASS + GALILEO + BEIDOU', frequencias: '2 (L1 e L2)', canais: '184', armazenamento: '32 GB', consumo: '130 mA em 5 Vcc (menos de 1 W)', linhaBase: 'Até 25 km (máxima recomendada)', tempoFixo: 'Cerca de 1 min em linhas curtas; Até 5 min em linhas longas' } },
    { id: 8, name: 'DJI Phantom 4 ADV/PRO/PROv2', category: 'Kit L1/L2', specs: { antena: 'Helicoidal Multi-GNSS L1/L2 (removível)', constelacoes: 'GPS + GLONASS + GALILEO + BEIDOU', frequencias: '2 (L1 e L2)', canais: '184', armazenamento: '32 GB', consumo: '130 mA em 5 Vcc (menos de 1 W)', linhaBase: 'Até 25 km (máxima recomendada)', tempoFixo: 'Cerca de 1 min em linhas curtas; Até 5 min em linhas longas' } },
    { id: 10, name: 'DJI Mini 2', category: 'Kit L1', specs: { antena: 'Helicoidal Multi-GNSS L1 (removível)', constelacoes: 'GPS + GLONASS + GALILEO + BEIDOU', frequencias: '1 (L1)', canais: '72', armazenamento: '32 GB', consumo: '130 mA em 5 Vcc (menos de 1 W)', linhaBase: 'Até 5 km (máxima recomendada)', tempoFixo: '5 minutos' } },
];

const SPEC_LABELS: Record<string, string> = { antena: 'Antena', constelacoes: 'Constelações', frequencias: 'Nº de Frequências', canais: 'Nº Canais', armazenamento: 'Armazenamento', consumo: 'Consumo Energético', linhaBase: 'Distância Linha de Base', tempoFixo: 'Tempo para Status Fixo' };

export default function PpkParaDrones() {
    return (
        <PublicLayout seo={{ title: 'Kit PPK L1/L2 para Drones DJI | T2R Soluções Tecnológicas', description: 'Transforme seu drone DJI em uma solução de mapeamento com posicionamento de alta precisão via PPK.', canonical: 'https://t2rtecnologia.com.br/ppk-para-drones' }}>
            
            {/* 1. HERO MASSIVE BLACK */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,155,0.08),transparent_50%)] pointer-events-none" />
                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-t2r-green/50 to-transparent top-1/4 animate-[scan_4s_ease-in-out_infinite] opacity-30" />
                
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                         HOME / PRODUTOS / PPK PARA DRONES
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                        KIT PPK L1/L2 <br/>
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

            {/* 2. CATÁLOGO DE DRONES (PRODUCTS LIST) - ULTRA MODERN */}
            <section id="compatibilidade" className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 sm:py-32 selection:bg-cyan-400 selection:text-white dark:selection:text-black opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    
                    <div className="mb-16 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
                        <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight uppercase">Sistemas Compatíveis</h2>
                        <p className="mt-4 text-black/80 dark:text-white/50 text-lg max-w-2xl font-light">Se o seu drone não estiver na lista, entre em contato. Desenvolvemos integrações personalizadas avaliando a viabilidade da fuselagem.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {DRONE_MODELS.map((drone, idx) => (
                            <div key={drone.id} style={{ animationDelay: `${1 + idx * 0.15}s` }} className="group relative rounded-[32px] bg-white dark:bg-[#0a0a0a] border border-black/20 dark:border-white/10 p-8 hover:border-t2r-green/40 transition-all duration-500 overflow-hidden flex flex-col shadow-lg dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,229,155,0.15)] opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                                <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-t2r-green/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-black/20 dark:border-white/10 pb-6 mb-6">
                                    <div>
                                        <div className="inline-block px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/5 text-xs font-mono text-black/90 dark:text-white/70 tracking-widest mb-3">
                                            {drone.category}
                                        </div>
                                        <h3 className="text-3xl font-bold text-black dark:text-white group-hover:text-t2r-green transition-colors">{drone.name}</h3>
                                    </div>
                                    <a href={`https://wa.me/5518996131404?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20PPK%20para%20${encodeURIComponent(drone.name)}.`} target="_blank" rel="noopener noreferrer"
                                        className="shrink-0 rounded-full bg-t2r-green/10 border border-t2r-green/30 text-t2r-green px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-t2r-green hover:text-black transition-colors">
                                        Solicitar Orçamento
                                    </a>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-x-4 gap-y-6 flex-1 relative z-10">
                                    {Object.entries(drone.specs).map(([key, value]) => (
                                        <div key={key} className="flex flex-col gap-1">
                                            <p className="text-[10px] font-mono text-black dark:text-white/40 uppercase tracking-widest">{SPEC_LABELS[key]}</p>
                                            <p className="text-sm text-black/95 dark:text-white/80 font-medium">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
