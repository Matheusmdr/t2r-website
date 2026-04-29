import { usePage } from '@inertiajs/react';
import type { FooterData } from '@/types/t2r';

export default function WhatsAppButton() {
    const { footerData } = usePage<{ footerData?: FooterData }>().props;
    const departmentsArray = Array.isArray(footerData?.departments) ? footerData.departments : [];
    const comercial = departmentsArray.find((d: any) => d?.name?.toLowerCase().includes('comercial')) 
        || { whatsapp: '5518996131404' };

    const whatsappUrl = `https://wa.me/${(comercial.whatsapp || '5518996131404').replace(/\D/g, '')}?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista.`;

    return (
        <a
            id="whatsapp-float"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com especialista no WhatsApp"
            className="fixed right-5 bottom-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-black dark:text-white shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/40 sm:right-6 sm:bottom-6"
        >
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.583l-.39-.236-3.296 1.103 1.104-3.29-.248-.395A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            <span className="hidden sm:inline">Falar com especialista</span>
        </a>
    );
}
