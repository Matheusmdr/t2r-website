import PublicLayout from '@/layouts/public-layout';
import HeroSection from '@/components/public/home/HeroSection';
import PainPointsSection from '@/components/public/home/PainPointsSection';
import SolutionsSection from '@/components/public/home/SolutionsSection';
import ApplicationsSection from '@/components/public/home/ApplicationsSection';
import PrecisionTableSection from '@/components/public/home/PrecisionTableSection';
import SocialProofSection from '@/components/public/home/SocialProofSection';
import CtaSection from '@/components/public/CtaSection';
import { ClientLogo } from '@/types/t2r';

interface HomeProps {
    clients: ClientLogo[];
}

export default function Home({ clients }: HomeProps) {
    return (
        <PublicLayout
            seo={{
                title: 'T2R Soluções Tecnológicas | GNSS, PPK e Mapeamento com Drones',
                description:
                    'Soluções em GNSS, PPK, georreferenciamento e mapeamento com drones para cartografia, fotogrametria e levantamentos com precisão centimétrica.',
                canonical: 'https://t2rtecnologia.com.br',
            }}
        >
            {/* Block A — Hero */}
            <HeroSection />

            {/* Block B — Dores do cliente */}
            <PainPointsSection />

            {/* Block C — O que a T2R entrega */}
            <SolutionsSection />

            {/* Block D — Aplicações */}
            <ApplicationsSection />

            {/* Block E — Prova técnica com tabela de precisão */}
            <PrecisionTableSection />

            {/* Block F — Prova Social */}
            <SocialProofSection clients={clients} />

            {/* Block G — CTA Final */}
            <CtaSection
                title="Pronto para elevar a precisão dos seus levantamentos?"
                subtitle="Fale com um especialista da T2R e descubra a solução ideal para sua operação com drones. Atendemos todo o Brasil."
                ctaText="Falar com especialista"
                ctaHref="https://wa.me/5518996131404?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista."
                secondaryText="Ver soluções"
                secondaryHref="/ppk-para-drones"
                isExternal={true}
            />
        </PublicLayout>
    );
}
