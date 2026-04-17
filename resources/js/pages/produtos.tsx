import PublicLayout from '@/layouts/public-layout';
import { Link } from '@inertiajs/react';
import CtaSection from '@/components/public/CtaSection';

export default function Produtos() {
    const products = [
        {
            title: 'Sistemas PPK para Drones',
            description: 'Eletrônica embarcada de precisão. O upgrade definitivo para mapeamento milimétrico com VANTs DJI.',
            href: '/ppk-para-drones',
            icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', // Bolt
            image: 'https://images.unsplash.com/photo-1549488344-c6cc5b43deea?q=80&w=800&auto=format&fit=crop',
            tags: ['Hardware', 'Alta Precisão', 'DJI Compatível']
        },
        {
            title: 'Base GNSS T2R',
            description: 'Laboratório em campo. Estação rastreadora geodésica autônoma para referenciamento em tempo real.',
            href: '/base-gnss',
            icon: 'M9.348 14.651a3.75 3.75 0 110-5.303m5.304 0a3.75 3.75 0 110 5.303m-7.425 2.122a6.75 6.75 0 110-9.546m9.546 0a6.75 6.75 0 110 9.546M5.106 18.894c3.808 3.808 9.98 3.808 13.788 0M5.106 5.106c3.808-3.808 9.98-3.808 13.788 0', // Signal
            image: 'https://images.unsplash.com/photo-1586771107584-5666242484d8?q=80&w=800&auto=format&fit=crop',
            tags: ['Hardware', 'Geodésia', 'RTK/PPK']
        },
        {
            title: 'T2R Geotagger',
            description: 'Poder de processamento na nuvem. Sincronize fotogrametria com GNSS com clique único e precisão absoluta.',
            href: '/t2r-geotagger',
            icon: 'M20.25 10.5b0 7.142-7.5 11.25-7.5 11.25S5.25 17.642 5.25 10.5a7.5 7.5 0 1115 0z', // Map Pin
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
            tags: ['Software', 'Pós-processamento', 'Nuvem']
        },
        {
            title: 'Agisoft Metashape',
            description: 'Licenciamento oficial do algoritmo líder global em reconstrução 3D e fotogrametria tática.',
            href: '/metashape',
            icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z', // Code
            image: 'https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=800&auto=format&fit=crop',
            tags: ['Software', 'Licença', 'Fotogrametria']
        }
    ];

    return (
        <PublicLayout seo={{ title: 'Hardware e Software | T2R', description: 'Portfólio de engenharia de alta precisão da T2R. Softwares e Equipamentos.', canonical: 'https://t2rtecnologia.com.br/produtos' }}>
            {/* 1. HERO MASSIVE BLACK */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,155,0.08),transparent_50%)] pointer-events-none" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-t2r-green/30 to-transparent animate-[scan_6s_ease-in-out_infinite]" />
                
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 uppercase tracking-widest opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                         HOME / PRODUTOS
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                        ARSENAL <br/>
                        <span className="text-t2r-green drop-shadow-[0_0_25px_rgba(0,229,155,0.4)]">TECNOLÓGICO</span>
                    </h1>
                    <p className="max-w-3xl text-xl text-black/80 dark:text-white/50 font-light leading-relaxed mb-4 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                        Integração completa de Hardware e Software para transformar dados aéreos brutos em inteligência milimétrica de mercado.
                    </p>
                </div>
            </section>

            {/* 2. CATALOGO BENTO DARK */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 border-b border-black/10 dark:border-white/5 min-h-[50vh] opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
                <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 relative z-10">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {products.map((produto, idx) => (
                            <Link key={idx} href={produto.href} 
                                  style={{ animationDelay: `${1 + idx * 0.2}s` }}
                                  className="group relative rounded-[32px] border border-black/10 dark:border-white/5 bg-white dark:bg-[#0a0a0a] overflow-hidden hover:border-t2r-green/40 transition-all duration-500 shadow-lg dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,229,155,0.15)] flex flex-col sm:flex-row h-full opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                                
                                {/* Image Box */}
                                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden flex-shrink-0">
                                    <div className="absolute inset-0 bg-t2r-green/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black/80 to-transparent z-10 sm:hidden"></div>
                                    <img src={produto.image} alt={produto.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                                </div>
                                
                                {/* Content Box */}
                                <div className="p-8 sm:w-3/5 flex flex-col justify-between relative">
                                    <div className="absolute -right-10 -bottom-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:-rotate-12">
                                        <svg className="w-48 h-48 text-t2r-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={produto.icon} /></svg>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {produto.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-black/90 dark:text-white/70 group-hover:border-t2r-green/30 group-hover:text-black dark:hover:text-white transition-colors">{tag}</span>
                                            ))}
                                        </div>
                                        
                                        <h2 className="text-2xl font-black text-black dark:text-white leading-tight mb-4 group-hover:text-t2r-green transition-colors uppercase tracking-wide">{produto.title}</h2>
                                        <p className="text-sm text-black/80 dark:text-white/50 font-light leading-relaxed mb-8">{produto.description}</p>
                                    </div>

                                    <div className="relative z-10 mt-auto inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black/70 dark:text-white/30 group-hover:text-t2r-green transition-colors w-fit">
                                        <span>Inspecionar Módulo</span>
                                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            <CtaSection title="Sistemas táticos customizados." subtitle="Converse com um engenheiro para definir o setup ideal da sua próxima missão." ctaText="Solicitar Arquitetura" />
        </PublicLayout>
    );
}
