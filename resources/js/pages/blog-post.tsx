import PublicLayout from '@/layouts/public-layout';
import { Link } from '@inertiajs/react';
import type { BlogPost } from '@/types/t2r';

interface Props {
    post: BlogPost;
    relatedPosts: BlogPost[];
}

/**
 * Extracts a YouTube video ID from various URL formats.
 */
function extractYouTubeId(url: string): string | null {
    try {
        const u = new URL(url);
        if (u.hostname.includes('youtu.be')) {
            return u.pathname.slice(1);
        }
        if (u.hostname.includes('youtube.com')) {
            // /watch?v=ID
            if (u.searchParams.get('v')) return u.searchParams.get('v');
            // /embed/ID
            if (u.pathname.startsWith('/embed/')) return u.pathname.split('/embed/')[1]?.split('?')[0];
            // /shorts/ID
            if (u.pathname.startsWith('/shorts/')) return u.pathname.split('/shorts/')[1]?.split('?')[0];
        }
    } catch {
        // not a valid URL — try as raw ID
        if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
    }
    return null;
}

/**
 * Detects embed type and returns an iframe-compatible embed URL.
 */
function getEmbedUrl(url: string): string | null {
    // YouTube
    const ytId = extractYouTubeId(url);
    if (ytId) return `https://www.youtube.com/embed/${ytId}`;

    // Vimeo
    try {
        const u = new URL(url);
        if (u.hostname.includes('vimeo.com')) {
            const id = u.pathname.split('/').filter(Boolean).pop();
            if (id) return `https://player.vimeo.com/video/${id}`;
        }
    } catch { /* ignore */ }

    // If it's already an embed URL, return as-is
    if (url.includes('/embed/') || url.includes('player.vimeo.com')) return url;

    return null;
}

export default function BlogPostPage({ post, relatedPosts }: Props) {
    const plainTextContent = post.content?.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
    return (
        <PublicLayout seo={{ title: `${post.title} | Blog T2R`, description: plainTextContent?.substring(0, 160) || 'Leia o artigo completo no Intelligence Log da T2R.', canonical: `https://t2rtecnologia.com.br/blog/${post.slug}` }}>

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

                    {post.tags && post.tags.length > 0 && (
                        <div className="flex justify-center flex-wrap gap-2 opacity-0 animate-[fade-in-up_1s_ease-out_0.8s_forwards]">
                            {post.tags.map((tag, i) => (
                                <span key={i} className="px-4 py-1.5 rounded-full border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-mono uppercase tracking-widest text-black/80 dark:text-white/70 shadow-sm">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CONTEÚDO DO POST */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] py-16 sm:py-24">
                <div className="mx-auto max-w-[800px] px-4 sm:px-6">

                    {/* Cover Image */}
                    {post.cover_image && (!post.embed_videos || post.embed_videos.length === 0) && (
                        <div className="w-full aspect-[21/9] rounded-[32px] overflow-hidden mb-16 shadow-2xl border border-black/10 dark:border-white/10 opacity-0 animate-[fade-in-up_1s_ease-out_1s_forwards]">
                            <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    )}

                    {/* Embedded Videos */}
                    {post.embed_videos && post.embed_videos.length > 0 && (
                        <div className="mb-16 space-y-8">
                            {post.embed_videos.map((videoUrl, idx) => {
                                const embedUrl = getEmbedUrl(videoUrl);
                                if (!embedUrl) return null;
                                return (
                                    <div key={idx} className="w-full rounded-[24px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl opacity-0 animate-[fade-in-up_1s_ease-out_1.2s_forwards]">
                                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                            <iframe
                                                src={embedUrl}
                                                title={`Vídeo ${idx + 1} — ${post.title}`}
                                                className="absolute inset-0 w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Article Content */}
                    <article 
                        className="prose prose-lg dark:prose-invert prose-p:text-black/80 dark:prose-p:text-white/70 prose-a:text-t2r-green prose-a:no-underline hover:prose-a:underline prose-headings:font-black prose-headings:tracking-tight max-w-none prose-img:rounded-[24px] prose-img:border prose-img:border-black/10 dark:prose-img:border-white/10 prose-blockquote:border-l-t2r-green prose-code:text-t2r-green/80 prose-pre:bg-black/5 dark:prose-pre:bg-white/5 prose-pre:rounded-[16px] prose-pre:border prose-pre:border-black/10 dark:prose-pre:border-white/10"
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
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
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-t2r-green group-hover:animate-pulse transition-colors" />
                                                <div className="text-xs text-black/40 dark:text-white/40 font-mono tracking-widest uppercase">
                                                    {new Date(relatedPost.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-black dark:text-white leading-snug group-hover:text-t2r-green transition-colors line-clamp-2">{relatedPost.title}</h3>
                                        </div>
                                        <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black/50 dark:text-white/30 group-hover:text-t2r-green transition-colors w-fit">
                                            <span>Ler artigo</span>
                                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                        </div>
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
