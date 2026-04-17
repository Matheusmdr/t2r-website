export default function SupportButton() {
    return (
        <a
            id="support-float"
            href="https://wa.me/5518997216319?text=Olá!%20Preciso%20de%20suporte%20técnico."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Suporte Técnico"
            className="group fixed right-5 bottom-20 z-50 flex items-center gap-2 rounded-full border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a]/90 backdrop-blur-md px-4 py-2.5 text-xs font-medium text-black dark:text-white shadow-[0_0_20px_rgba(0,229,155,0.15)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,155,0.4)] hover:border-t2r-green/50 sm:right-6 sm:bottom-[5.5rem]"
        >
            <div className="relative flex h-5 w-5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-t2r-green opacity-30 group-hover:opacity-60"></span>
                <svg className="relative h-4 w-4 flex-shrink-0 text-t2r-green" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
            </div>
            <span className="hidden sm:inline tracking-wide">SYS_SUPPORT</span>
        </a>
    );
}
