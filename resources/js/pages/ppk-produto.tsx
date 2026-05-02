import PublicLayout from '@/layouts/public-layout';
import CtaSection from '@/components/public/CtaSection';
import { Link } from '@inertiajs/react';
import { Product } from '@/types/t2r';

const SPEC_LABELS: Record<string, string> = {
    antena: 'Antena',
    constelacoes: 'Constelações',
    frequencias: 'Nº de Frequências',
    canais: 'Nº Canais',
    armazenamento: 'Armazenamento',
    consumo: 'Consumo Energético',
    linhaBase: 'Distância Linha de Base',
    tempoFixo: 'Tempo para Status Fixo',
};

interface Props {
    product: Product;
    relatedProducts: Product[];
}

export default function PpkProduto({ product, relatedProducts }: Props) {
    const specs: any = product.tech_specs || {};
    const heroSpecs = [
        { label: 'Frequências', value: specs.frequencias || '-' },
        { label: 'Canais', value: specs.canais || '-' },
        { label: 'Linha Base', value: (specs.linhaBase || '').replace(' (máxima recomendada)', '') || '-' },
    ];
    const detailSpecs = Object.entries(specs).filter(
        ([key]) => !['frequencias', 'canais', 'linhaBase'].includes(key),
    );

    return (
        <PublicLayout
            seo={{
                title: `${product.title} — Kit PPK L1/L2 | T2R Soluções Tecnológicas`,
                description: product.short_description || `Conheça o ${product.title}. Kit PPK L1/L2 de alta precisão para drones DJI.`,
                canonical: `https://t2rtecnologia.com.br/ppk-para-drones/${product.slug}`,
            }}
        >
            {/* 1. HERO */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,155,0.08),transparent_50%)] pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                        <Link href="/" className="hover:underline">HOME</Link>
                        <span>/</span>
                        <Link href="/produtos" className="hover:underline">PRODUTOS</Link>
                        <span>/</span>
                        <Link href="/ppk-para-drones" className="hover:underline">PPK PARA DRONES</Link>
                        <span>/</span>
                        <span className="uppercase">{product.title}</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Image */}
                        <div className="w-full lg:w-1/2 flex-shrink-0 opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent border border-black/10 dark:border-white/5 transition-all duration-700 hover:border-white/10 hover:shadow-[0_20px_80px_rgba(0,229,155,0.06)]">
                                <img
                                    src={product.cover_image}
                                    alt={product.title}
                                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="w-full lg:w-1/2 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                            <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/20 bg-t2r-green/5 px-4 py-1.5 text-xs font-mono text-t2r-green mb-4 uppercase tracking-[0.2em]">
                                <span className="w-1.5 h-1.5 rounded-full bg-t2r-green shadow-[0_0_8px_rgba(0,229,155,0.6)]" />
                                {(product as any).category?.title || 'Kit PPK'}
                            </div>

                            <h1 className="text-4xl sm:text-6xl font-black text-black dark:text-white tracking-tighter mb-6 leading-[0.9]">
                                {product.title}
                            </h1>

                            {product.short_description && (
                                <p className="max-w-2xl text-xl text-black/80 dark:text-white/50 font-light leading-relaxed mb-8">
                                    {product.short_description}
                                </p>
                            )}

                            {/* Key Specs */}
                            <div className="grid grid-cols-3 gap-3 mb-8">
                                {heroSpecs.map((spec, i) => (
                                    <div key={i} className="rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/5 p-4 text-center">
                                        <p className="text-lg sm:text-xl font-black text-t2r-green leading-tight">{spec.value}</p>
                                        <p className="text-[10px] font-mono text-black/50 dark:text-white/40 uppercase tracking-widest mt-1">{spec.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href={`https://wa.me/5518996131404?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20PPK%20para%20${encodeURIComponent(product.title)}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn inline-flex items-center gap-3 rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-3.5 font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            >
                                <svg className="h-4 w-4 text-t2r-green" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.583l-.39-.236-3.296 1.103 1.104-3.29-.248-.395A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                                <span>Solicitar Orçamento</span>
                                <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. GALLERY */}
            {product.gallery_images && product.gallery_images.length > 0 && (
                <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 sm:py-32 border-b border-black/10 dark:border-white/5">
                    <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                        <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight uppercase mb-16 text-center">
                            Galeria
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.gallery_images.map((img, idx) => (
                                <div key={idx} className="group rounded-3xl overflow-hidden border border-black/10 dark:border-white/5 bg-white dark:bg-white/[0.02] transition-all duration-500 hover:border-t2r-green/30 hover:shadow-[0_20px_60px_rgba(0,229,155,0.08)]">
                                    <img
                                        src={img}
                                        alt={`${product.title} - imagem ${idx + 1}`}
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 3. FULL TECH SPECS TABLE */}
            {Object.keys(specs).length > 0 && (
                <section className="relative w-full bg-white dark:bg-black py-24 sm:py-32 border-b border-black/10 dark:border-white/5">
                    <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
                        <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight uppercase mb-16 text-center">
                            Especificações Técnicas
                        </h2>

                        <div className="overflow-hidden rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a]">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="border-b border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5">
                                        <th className="px-6 py-4 text-xs font-mono font-bold text-black/80 dark:text-white/50 uppercase tracking-widest w-1/3">Parâmetro</th>
                                        <th className="px-6 py-4 text-xs font-mono font-bold text-black/80 dark:text-white/50 uppercase tracking-widest">Valor</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5 dark:divide-white/5">
                                    {Object.entries(specs).map(([key, value]) => (
                                        <tr key={key} className="hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-4 font-bold text-black dark:text-white border-r border-black/10 dark:border-white/5">{SPEC_LABELS[key] || key}</td>
                                            <td className="px-6 py-4 text-black/90 dark:text-white/70 font-mono text-sm tracking-wide">{String(value)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            {/* 4. DESCRIPTION */}
            {product.description && (
                <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 sm:py-32 border-b border-black/10 dark:border-white/5">
                    <div className="mx-auto max-w-[800px] px-4 sm:px-6">
                        <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight uppercase mb-12 text-center">
                            Detalhes do Produto
                        </h2>
                        <div className="prose prose-lg dark:prose-invert prose-p:text-black/80 dark:prose-p:text-white/70 prose-headings:font-black prose-headings:tracking-tight max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: product.description }} />
                        </div>
                    </div>
                </section>
            )}

            {/* 5. RELATED PRODUCTS */}
            {relatedProducts && relatedProducts.length > 0 && (
                <section className="relative w-full bg-white dark:bg-black py-24 border-b border-black/10 dark:border-white/5">
                    <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-black text-black dark:text-white tracking-tighter uppercase">Outros Kits PPK</h2>
                            <Link href="/ppk-para-drones" className="hidden sm:inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-t2r-green hover:opacity-80 transition-opacity">
                                Ver todos <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/ppk-para-drones/${related.slug}`}
                                    className="group flex flex-col rounded-[24px] border border-black/10 dark:border-white/5 bg-[#f7f7f7] dark:bg-[#0a0a0a] overflow-hidden hover:border-t2r-green/30 transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <div className="absolute inset-0 bg-t2r-green/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img
                                            src={related.cover_image}
                                            alt={related.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-black dark:text-white leading-snug group-hover:text-t2r-green transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaSection title="A PRÓXIMA MISSÃO REQUER EXATIDÃO." subtitle="Acione a nossa engenharia corporativa e orce o seu sistema." />
        </PublicLayout>
    );
}
