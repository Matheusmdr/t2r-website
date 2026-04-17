import { Link } from '@inertiajs/react';

export default function CtaSection({
    title = 'Pronto para elevar a precisão dos seus levantamentos?',
    subtitle = 'Fale com um especialista da T2R e descubra a solução ideal para sua operação com drones.',
    ctaText = 'Falar com especialista',
    ctaHref = 'https://wa.me/5518996131404?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista.',
    secondaryText = 'Ver soluções',
    secondaryHref = '/ppk-para-drones',
    isExternal = true,
}: {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
    secondaryText?: string;
    secondaryHref?: string;
    isExternal?: boolean;
}) {
    return (
        <section className="bg-white dark:bg-t2r-dark py-20 sm:py-28 relative overflow-hidden opacity-0 animate-[fade-in_1s_ease-out_forwards]">
            <div className="absolute inset-0 bg-t2r-green/5 blur-[150px] pointer-events-none" />
            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                <h2 className="text-3xl font-black text-black dark:text-white sm:text-4xl tracking-tight">{title}</h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-black/80 dark:text-white/50 font-light">{subtitle}</p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    {isExternal ? (
                        <a href={ctaHref} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-t2r-green px-8 py-4 text-base font-bold text-black transition-all hover:bg-t2r-green-light hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,229,155,0.3)]">
                            {ctaText}
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                        </a>
                    ) : (
                        <Link href={ctaHref} className="inline-flex items-center gap-2 rounded-full bg-t2r-green px-8 py-4 text-base font-bold text-black transition-all hover:bg-t2r-green-light hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,229,155,0.3)]">
                            {ctaText}
                        </Link>
                    )}
                    <Link href={secondaryHref} className="inline-flex items-center gap-2 rounded-full border border-black/30 dark:border-white/20 px-8 py-4 text-base font-bold text-black dark:text-white transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/40">
                        {secondaryText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
