import { Head } from '@inertiajs/react';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import WhatsAppButton from '@/components/public/WhatsAppButton';
import SupportButton from '@/components/public/SupportButton';
import type { SEOData } from '@/types/t2r';

export default function PublicLayout({
    seo,
    children,
}: {
    seo?: SEOData;
    children: React.ReactNode;
}) {
    const defaultSeo: SEOData = {
        title: 'T2R Soluções Tecnológicas | GNSS, PPK e Mapeamento com Drones',
        description:
            'Soluções em GNSS, PPK, georreferenciamento e mapeamento com drones para cartografia, fotogrametria e levantamentos com precisão centimétrica.',
    };

    const meta = { ...defaultSeo, ...seo };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta.ogTitle || meta.title} />
                <meta property="og:description" content={meta.ogDescription || meta.description} />
                <meta property="og:url" content={meta.canonical || 'https://t2rtecnologia.com.br'} />
                <meta property="og:site_name" content="T2R Soluções Tecnológicas" />
                {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.ogTitle || meta.title} />
                <meta name="twitter:description" content={meta.ogDescription || meta.description} />

                {/* Canonical */}
                {meta.canonical && <link rel="canonical" href={meta.canonical} />}

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col bg-background">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <WhatsAppButton />
                <SupportButton />
            </div>
        </>
    );
}
