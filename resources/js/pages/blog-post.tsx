import PublicLayout from '@/layouts/public-layout';
import { Link } from '@inertiajs/react';
import type { BlogPost } from '@/types/t2r';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
    post: BlogPost;
    relatedPosts: BlogPost[];
}

export default function BlogPostPage({ post, relatedPosts }: Props) {
    return (
        <PublicLayout seo={{ title: `${post.title} | Blog T2R`, description: 'Leia o artigo completo no Intelligence Log da T2R.', canonical: `https://t2rtecnologia.com.br/blog/${post.slug}` }}>
            
            {/* HERO DO POST */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,155,0.08),transparent_50%)] pointer-events-none" />
                
                <div className="relative z-10 mx-auto max-w-[1000px] px-4 sm:px-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 uppercase tracking-widest opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                         <Link href="/blog" className="hover:underline">INTELLIGENCE LOG</Link> / POST
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[1.1] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                        {post.title}
                    </h1>
                    
                    <div className="flex justify-center items-center gap-4 text-xs font-mono tracking-widest text-black/60 dark:text-white/40 uppercase mb-10 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
                        <span>T2R ENGINEERING</span>
                        <span>•</span>
                        <span>{new Date(post.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                    </div>

                    <div className="flex justify-center flex-wrap gap-2 opacity-0 animate-[fade-in-up_1s_ease-out_0.8s_forwards]">
                        {post.tags?.map((tag, i) => (
                            <span key={i} className="px-4 py-1.5 rounded-full border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-mono uppercase tracking-widest text-black/80 dark:text-white/70 shadow-sm">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTEÚDO DO POST */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-16 sm:py-24">
                <div className="mx-auto max-w-[800px] px-4 sm:px-6">
                    
                    {post.cover_image && (
                        <div className="w-full aspect-[21/9] rounded-[32px] overflow-hidden mb-16 shadow-2xl border border-black/10 dark:border-white/10 opacity-0 animate-[fade-in-up_1s_ease-out_1s_forwards]">
                            <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    )}

                    <article className="prose prose-lg dark:prose-invert prose-p:text-black/80 dark:prose-p:text-white/70 prose-a:text-t2r-green prose-a:no-underline hover:prose-a:underline prose-headings:font-black prose-headings:tracking-tight max-w-none prose-img:rounded-[24px] prose-img:border prose-img:border-black/10 dark:prose-img:border-white/10">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </article>

                </div>
            </section>

            {/* ARTIGOS RELACIONADOS */}
            {relatedPosts && relatedPosts.length > 0 && (
                <section className="relative w-full bg-white dark:bg-black py-24 border-t border-black/10 dark:border-white/5">
                    <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-black text-black dark:text-white tracking-tighter uppercase">Leituras Relacionadas</h2>
                            <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-t2r-green hover:opacity-80 transition-opacity">
                                Ver todos os logs <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group flex flex-col rounded-[24px] border border-black/10 dark:border-white/5 bg-[#f7f7f7] dark:bg-[#0a0a0a] overflow-hidden hover:border-t2r-green/30 transition-all duration-500 hover:-translate-y-2">
                                    <div className="aspect-[16/9] overflow-hidden relative">
                                        <div className="absolute inset-0 bg-t2r-green/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img src={relatedPost.cover_image || 'https://images.unsplash.com/photo-1586771107584-5666242484d8?q=80&w=800&auto=format&fit=crop'} alt={relatedPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs text-black/40 dark:text-white/40 font-mono tracking-widest uppercase mb-3">
                                            {new Date(relatedPost.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                        </div>
                                        <h3 className="text-lg font-bold text-black dark:text-white leading-snug group-hover:text-t2r-green transition-colors line-clamp-2">{relatedPost.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

        </PublicLayout>
    );
}
