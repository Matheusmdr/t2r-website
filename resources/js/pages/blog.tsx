import PublicLayout from '@/layouts/public-layout';
import { Link } from '@inertiajs/react';
import type { BlogPost } from '@/types/t2r';

const MOCK_POSTS: BlogPost[] = [
    { id: 1, title: 'Como a precisão do PPK revolucionou o mapeamento rural', slug: 'precisao-ppk-mapeamento-rural', content: '', cover_image: 'https://images.unsplash.com/photo-1586771107584-5666242484d8?q=80&w=800&auto=format&fit=crop', tags: ['PPK', 'Agricultura', 'Topografia'], embed_videos: null, is_published: true, created_at: '2024-03-12T10:00:00Z', updated_at: '2024-03-12T10:00:00Z' },
    { id: 2, title: 'Base GNSS T2R vs Bases Tradicionais de Mercado', slug: 'base-gnss-t2r-vs-mercado', content: '', cover_image: 'https://images.unsplash.com/photo-1549488344-c6cc5b43deea?q=80&w=800&auto=format&fit=crop', tags: ['Equipamentos', 'Comparativo'], embed_videos: null, is_published: true, created_at: '2024-02-28T14:30:00Z', updated_at: '2024-02-28T14:30:00Z' },
    { id: 3, title: 'Tutorial: Importando os dados do Geotagger no Metashape', slug: 'tutorial-geotagger-metashape', content: '', cover_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', tags: ['Tutorial', 'Software', 'Geotagger'], embed_videos: null, is_published: true, created_at: '2024-02-15T09:15:00Z', updated_at: '2024-02-15T09:15:00Z' },
    { id: 4, title: 'Por que o CG (Centro de Gravidade) do drone importa?', slug: 'importancia-cg-drone', content: '', cover_image: 'https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=800&auto=format&fit=crop', tags: ['Engenharia', 'Drones'], embed_videos: null, is_published: true, created_at: '2024-01-20T16:45:00Z', updated_at: '2024-01-20T16:45:00Z' },
];

export default function Blog({ posts = MOCK_POSTS }: { posts?: BlogPost[] }) {
    return (
        <PublicLayout seo={{ title: 'Blog T2R | Dicas, Engenharia e Topografia com Drones', description: 'Acompanhe nossos artigos sobre fotogrametria, georreferenciamento, PPK, RTK e tecnologia de mapeamento.', canonical: 'https://t2rtecnologia.com.br/blog' }}>
            
            {/* 1. HERO MASSIVE BLACK */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,155,0.08),transparent_50%)] pointer-events-none" />
                <div className="absolute flex gap-4 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-t2r-green/30 to-transparent" />
                
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 uppercase tracking-widest opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                         HOME / INTELLIGENCE LOG
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                        T2R <br/>
                        <span className="text-t2r-green drop-shadow-[0_0_25px_rgba(0,229,155,0.4)]">INTELLIGENCE LOG</span>
                    </h1>
                    <p className="max-w-3xl text-xl text-black/80 dark:text-white/50 font-light leading-relaxed mb-4 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                        Despachos de engenharia, tutoriais de campo e a vanguarda técnica da fotogrametria.
                    </p>
                </div>
            </section>

            {/* 2. BLOG LISTING - DARK SPATIAL UI */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-24 min-h-[50vh] opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                    
                    {/* Dark Tag Filter */}
                    <div className="flex gap-3 mb-16 overflow-x-auto pb-4 scrollbar-hide opacity-0 animate-[fade-in-up_0.8s_ease-out_1s_forwards]">
                        {['Todos', 'PPK', 'Tutorial', 'Engenharia', 'Equipamentos'].map((cat, idx) => (
                            <button key={cat} className={`flex-shrink-0 px-6 py-2.5 rounded-full border ${idx === 0 ? 'bg-t2r-green/10 border-t2r-green/30 text-t2r-green' : 'border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/50 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/30'} text-xs font-mono uppercase tracking-widest transition-colors`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Dark Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} 
                                  style={{ animationDelay: `${1.2 + idx * 0.15}s` }}
                                  className="group flex flex-col rounded-[32px] border border-black/10 dark:border-white/5 bg-white dark:bg-[#0a0a0a] overflow-hidden hover:border-t2r-green/30 transition-all duration-500 shadow-md dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,229,155,0.1)] opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                                
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-t2r-green/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black/80 to-transparent z-10 sm:hidden"></div>
                                    <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                                    
                                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                                        {post.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white dark:bg-black/60 backdrop-blur-md border border-black/20 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-black dark:text-white shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="p-8 flex-1 flex flex-col justify-between relative overflow-hidden">
                                     <div className="absolute -right-8 bottom-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                                         <svg className="w-32 h-32 text-t2r-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                                     </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-t2r-green group-hover:animate-pulse transition-colors" />
                                            <div className="text-xs text-black dark:text-white/40 font-mono tracking-widest uppercase">
                                                {new Date(post.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-bold text-black dark:text-white leading-snug group-hover:text-t2r-green transition-colors">{post.title}</h2>
                                    </div>
                                    
                                    <div className="mt-8 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black/70 dark:text-white/30 group-hover:text-t2r-green transition-colors relative z-10 w-fit">
                                        <span>Acessar Arquivo</span>
                                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>
        </PublicLayout>
    );
}
