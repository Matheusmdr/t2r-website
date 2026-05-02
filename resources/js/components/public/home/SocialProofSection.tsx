import type { GoogleReview, ClientLogo } from '@/types/t2r';

const REVIEWS: GoogleReview[] = [
    { author: 'Eduardo M.', rating: 5, text: 'Excelente suporte técnico e produtos de qualidade. O Kit PPK transformou a precisão dos meus levantamentos. Recomendo fortemente!', date: '3 meses atrás' },
    { author: 'Carlos A.', rating: 5, text: 'Equipe altamente qualificada. O Thiago e a equipe da T2R são referência em PPK no Brasil. Suporte impecável do início ao fim.', date: '2 meses atrás' },
    { author: 'Renata S.', rating: 5, text: 'Investimento que se paga rapidamente. Com o PPK eliminei pontos de controle em 90% dos meus projetos. Produtividade nas alturas!', date: '1 mês atrás' },
];

interface SocialProofSectionProps {
    clients?: ClientLogo[];
}

export default function SocialProofSection({ clients = [] }: SocialProofSectionProps) {
    return (
        <section className="relative w-full bg-white dark:bg-black py-24 sm:py-32 overflow-hidden selection:bg-yellow-400 selection:text-white dark:selection:text-black">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-mono text-yellow-500 mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        OPERAÇÕES VALIDADAS
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white mb-6">
                        O PADRÃO DOS <span className="text-yellow-400">PROFISSIONAIS DE ELITE.</span>
                    </h2>
                </div>

                {/* Google Rating */}
                <div className="mx-auto mb-16 flex max-w-md items-center justify-center gap-6 rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a] px-8 py-6 shadow-[0_0_40px_rgba(250,204,21,0.05)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-[50px] pointer-events-none" />
                    
                    <div className="flex flex-col items-center relative z-10">
                        <span className="text-5xl font-black text-black dark:text-white tracking-tighter">4.9</span>
                        <div className="flex items-center gap-1 mt-2">
                            {[1,2,3,4,5].map(s => (
                                <svg key={s} className="h-5 w-5 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div className="h-16 w-px bg-black/10 dark:bg-white/10 relative z-10"></div>
                    <div className="text-left relative z-10">
                        <p className="text-lg font-bold text-black dark:text-white">Google Reviews</p>
                        <p className="text-sm font-mono text-black dark:text-white/40 uppercase tracking-widest mt-1">Certeza Absoluta</p>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="group relative flex flex-col rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a] p-8 transition-all hover:-translate-y-1 hover:border-yellow-400/30 overflow-hidden">
                            <div className="absolute -top-16 -right-16 w-56 h-56 bg-yellow-400/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="mb-6 flex items-center gap-1">
                                {[1,2,3,4,5].map(s => (
                                    <svg key={s} className={`h-4 w-4 ${s <= review.rating ? 'text-yellow-400 drop-shadow-[0_0_2px_rgba(250,204,21,0.8)]' : 'text-black/60 dark:text-white/10'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="flex-1 text-base font-light leading-relaxed text-black dark:text-white/60 mb-8 relative z-10">
                                &ldquo;{review.text}&rdquo;
                            </blockquote>
                            <div className="mt-auto flex items-center justify-between border-t border-black/10 dark:border-white/5 pt-6 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-sm font-bold text-yellow-500 border border-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                                        {review.author.charAt(0)}
                                    </div>
                                    <span className="font-bold text-black dark:text-white tracking-wide">{review.author}</span>
                                </div>
                                <span className="text-xs font-mono text-black/70 dark:text-white/30 uppercase">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Client logos */}
                <div className="mt-32">
                    <p className="mb-10 text-center text-xs font-mono text-black/70 dark:text-white/30 uppercase tracking-[0.2em]">
                        Empresas que escalaram sua precisão com a T2R
                    </p>
                    <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
                        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white dark:from-black to-transparent" />
                        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white dark:from-black to-transparent" />
                        <div className="flex animate-[marquee_60s_linear_infinite] items-center gap-6 sm:gap-8">
                            {clients.length > 0 ? (
                                [...clients, ...clients, ...clients, ...clients].map((client, idx) => (
                                    <div key={`${client.id}-${idx}`} className="flex-shrink-0 w-48 h-24 sm:w-56 sm:h-28 flex items-center justify-center rounded-2xl border border-black/10 dark:border-white/10 bg-white p-2 sm:p-4 transition-all">
                                        {client.logo ? (
                                            <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
                                        ) : (
                                            <span className="whitespace-nowrap text-sm sm:text-base font-bold tracking-wide text-black">{client.name}</span>
                                        )}
                                    </div>
                                ))
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
