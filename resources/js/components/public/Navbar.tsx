import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import type { NavItem, FooterData } from '@/types/t2r';
// Theme toggle imports preserved for eventual reversion:
// import { useAppearance } from '@/hooks/use-appearance';
// import { Moon, Sun } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'PPK para Drones', href: '/ppk-para-drones' },
    { label: 'Base GNSS', href: '/base-gnss' },
    { label: 'T2R Geotagger', href: '/t2r-geotagger' },
    { label: 'Metashape', href: '/metashape' },
    { label: 'Sobre Nós', href: '/sobre-nos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Fale Conosco', href: '/fale-conosco' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    // Theme toggle preserved for eventual reversion:
    // const { appearance, updateAppearance } = useAppearance();
    const { footerData } = usePage<{ footerData?: FooterData }>().props;
    const departmentsArray = Array.isArray(footerData?.departments) ? footerData.departments : [];
    const suporte = departmentsArray.find((d: any) => d?.name?.toLowerCase().includes('suporte')) 
        || { whatsapp: '5518997216319' };
    const whatsappUrl = `https://wa.me/${(suporte.whatsapp || '5518997216319').replace(/\D/g, '')}`;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileOpen]);

    return (
        <header
            id="main-header"
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 border-b ${isScrolled
                    ? 'bg-[#1a1a1a]/95 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                    : 'bg-[#1a1a1a] border-white/5 py-2'
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="group flex items-center">
                    <img src="/logo-t2r-branco.svg" alt="T2R Tecnologia" className="h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-1 lg:flex">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:bg-t2r-green after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden items-center gap-4 lg:flex">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-t2r-green/50 hover:shadow-[0_0_15px_rgba(0,229,155,0.2)]"
                    >
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-t2r-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-t2r-green"></span>
                        </span>
                        <svg className="h-4 w-4 text-t2r-green" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.583l-.39-.236-3.296 1.103 1.104-3.29-.248-.395A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                        Suporte Técnico
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    id="mobile-menu-toggle"
                    type="button"
                    className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-expanded={isMobileOpen}
                    aria-label="Toggle menu"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        {isMobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-[#0a0a0a] transition-all duration-300 lg:hidden ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex h-full flex-col px-6 pt-20 pb-8">
                    <div className="flex flex-1 flex-col gap-1">
                        {NAV_ITEMS.map((item) => (
                            <Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)}
                                className="rounded-md px-4 py-3 text-lg font-medium text-white/80 hover:bg-white/5 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="border-t border-white/10 pt-6 space-y-4">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-t2r-green to-cyan-500 px-6 py-3.5 text-base font-bold text-black shadow-[0_0_20px_rgba(0,229,155,0.3)]">
                            Suporte Técnico
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
