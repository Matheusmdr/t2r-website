import { useState } from 'react';
import PublicLayout from '@/layouts/public-layout';
import { usePage } from '@inertiajs/react';
import type { FooterData } from '@/types/t2r';

export default function FaleConosco() {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const { footerData } = usePage<{ footerData?: FooterData }>().props;

    const settings = footerData?.settings || {
        address: 'Avenida Da Saudade, 535, Sala 86 – Parque Empresarial, Presidente Prudente / SP',
    };

    const departmentsArray = Array.isArray(footerData?.departments) ? footerData.departments : [];
    const departments = departmentsArray.length ? departmentsArray : [
        { name: 'Setor Comercial', whatsapp: '+55 18 99613-1404', email: 'contato@t2rtecnologia.com.br' },
        { name: 'Administrativo', whatsapp: '+55 18 99774-9080', email: 'adm@t2rtecnologia.com.br' },
        { name: 'Suporte Técnico', whatsapp: '+55 18 99721-6319', email: 'suporte@t2rtecnologia.com.br' }
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => { setSubmitting(false); setSuccess(true); }, 1000);
    };

    return (
        <PublicLayout seo={{ title: 'Fale Conosco | T2R Soluções Tecnológicas', description: 'Entre em contato com a equipe comercial e suporte técnico da T2R.', canonical: 'https://t2rtecnologia.com.br/fale-conosco' }}>
            
            {/* 1. HERO MASSIVE BLACK */}
            <section className="relative w-full bg-white dark:bg-black pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden selection:bg-t2r-green selection:text-white dark:selection:text-black border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,155,0.08),transparent_50%)] pointer-events-none" />
                
                <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-t2r-green/30 bg-t2r-green/10 px-3 py-1 text-xs font-mono text-t2r-green mb-6 uppercase tracking-widest opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                         HOME / FALE CONOSCO
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
                        SINAL <br/>
                        <span className="text-t2r-green drop-shadow-[0_0_25px_rgba(0,229,155,0.4)]">ESTABELECIDO</span>
                    </h1>
                </div>
            </section>

            {/* 3. MAP & FORM - DARK AESTHETIC */}
            <section className="relative w-full bg-[#f7f7f7] dark:bg-[#050505] pt-0 pb-24 border-b border-black/10 dark:border-white/5 opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
                
                {/* 2. CONTACT INFO BAR - DARK BENTO CHIPS */}
                <div className="relative -mt-12 z-20 mb-20 mx-auto max-w-[1400px] px-4 sm:px-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
                    <div className="rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a]/90 backdrop-blur-xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 shadow-lg dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]" />
                                <h4 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">Endereço Base</h4>
                            </div>
                            <p className="text-sm text-black/80 dark:text-white/50 leading-relaxed font-light">{settings.address}</p>
                        </div>
                        {departments.slice(0, 3).map((dept: any, i: number) => {
                            const colors = ['bg-t2r-green shadow-[0_0_8px_rgba(0,229,155,1)]', 'bg-white/50', 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)] animate-pulse'];
                            const textColors = ['text-t2r-green', 'text-black/80 dark:text-white/50', 'text-black/80 dark:text-white/50'];
                            return (
                                <div key={i}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`w-1.5 h-1.5 rounded-full ${colors[i % colors.length]}`} />
                                        <h4 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">{dept.name}</h4>
                                    </div>
                                    <p className="text-sm font-mono text-black/80 dark:text-white/50 mb-1">{dept.whatsapp}</p>
                                    <p className={`text-sm font-light ${textColors[i % textColors.length]}`}>{dept.email}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        
                        {/* Left: Map + Direct Contacts */}
                        <div className="lg:col-span-7 flex flex-col gap-8">
                            <div className="rounded-[32px] overflow-hidden border border-black/20 dark:border-white/10 bg-white dark:bg-black aspect-video p-1 group">
                                <div className="w-full h-full rounded-[28px] overflow-hidden relative dark:grayscale dark:invert dark:opacity-70 group-hover:dark:grayscale-0 group-hover:dark:invert-0 group-hover:dark:opacity-100 transition-all duration-700">
                                    <iframe src="https://maps.google.com/maps?q=Avenida%20Da%20Saudade%2C%20535%2C%20Sala%2086%2C%20Parque%20Empresarial%2C%20Presidente%20Prudente%2FSP&t=m&z=15&output=embed&iwloc=near" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Avenida Da Saudade, 535, Sala 86, Parque Empresarial, Presidente Prudente/SP" aria-label="Avenida Da Saudade, 535, Sala 86, Parque Empresarial, Presidente Prudente/SP" />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {departments.slice(0, 2).map((dept: any, i: number) => {
                                    const isSupport = dept.name.toLowerCase().includes('suporte');
                                    const hoverClass = isSupport ? 'hover:border-red-500/30' : 'hover:border-t2r-green/30';
                                    const iconBg = isSupport ? 'bg-red-500/10 text-red-500' : 'bg-t2r-green/10 text-t2r-green';
                                    const shadow = isSupport ? 'shadow-[0_0_15px_rgba(239,68,68,0.15)]' : 'shadow-[0_0_15px_rgba(0,229,155,0.15)]';
                                    const textClass = isSupport ? 'text-red-500' : 'text-t2r-green';

                                    return (
                                        <a key={i} href={dept.whatsapp ? `https://wa.me/${(dept.whatsapp || '').replace(/\D/g, '')}` : `mailto:${dept.email}`} target="_blank" rel="noopener noreferrer" className={`flex items-center p-6 rounded-2xl border border-black/10 dark:border-white/5 bg-white dark:bg-[#0a0a0a] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all group ${hoverClass}`}>
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform ${iconBg} ${shadow}`}>
                                                {isSupport ? (
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1" /></svg>
                                                ) : (
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider mb-1">{dept.name}</h4>
                                                <p className={`text-sm font-mono ${textClass}`}>{dept.whatsapp}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: Form (Dark Mode Glass) */}
                        <div className="lg:col-span-5 rounded-[32px] border border-black/20 dark:border-white/10 bg-white dark:bg-[#0a0a0a] p-10 h-fit shadow-lg dark:shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                            <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-widest mb-2">Transmissão T2R</h3>
                            <p className="text-sm text-black/80 dark:text-white/50 font-light mb-8">Canal aberto. Nossa engenharia monitora todas as requisições.</p>

                            {success ? (
                                <div className="bg-t2r-green/10 border border-t2r-green/30 rounded-2xl p-10 text-center shadow-[0_0_30px_rgba(0,229,155,0.1)]">
                                    <div className="inline-flex w-16 h-16 rounded-full bg-t2r-green/20 items-center justify-center mb-6">
                                        <svg className="h-8 w-8 text-t2r-green" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-black dark:text-white mb-2 uppercase tracking-widest">Pacote Entregue!</h4>
                                    <p className="text-sm text-black/80 dark:text-white/50 font-light leading-relaxed mb-6">Sua mensagem foi recebida com sucesso. Retornaremos na frequência solicitada em breve.</p>
                                    <button onClick={() => setSuccess(false)} className="rounded-full border border-black/30 dark:border-white/20 bg-transparent px-6 py-2.5 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors uppercase tracking-widest">Nova Transmissão</button>
                                </div>
                            ) : (
                                <form className="space-y-5 flex flex-col" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <input required type="text" id="nome" className="w-full rounded-2xl border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3.5 text-sm text-black dark:text-white placeholder:text-black/70 dark:text-white/30 focus:bg-black/10 dark:bg-white/10 focus:border-t2r-green focus:ring-0 transition-colors font-light outline-none" placeholder="Nome *" />
                                        </div>
                                        <div>
                                            <input required type="text" id="sobrenome" className="w-full rounded-2xl border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3.5 text-sm text-black dark:text-white placeholder:text-black/70 dark:text-white/30 focus:bg-black/10 dark:bg-white/10 focus:border-t2r-green focus:ring-0 transition-colors font-light outline-none" placeholder="Sobrenome *" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <input required type="email" id="email" className="w-full rounded-2xl border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3.5 text-sm text-black dark:text-white placeholder:text-black/70 dark:text-white/30 focus:bg-black/10 dark:bg-white/10 focus:border-t2r-green focus:ring-0 transition-colors font-light outline-none" placeholder="Email *" />
                                        </div>
                                        <div>
                                            <input type="text" id="celular" className="w-full rounded-2xl border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3.5 text-sm text-black dark:text-white placeholder:text-black/70 dark:text-white/30 focus:bg-black/10 dark:bg-white/10 focus:border-t2r-green focus:ring-0 transition-colors font-light outline-none" placeholder="Celular" />
                                        </div>
                                    </div>
                                    <div>
                                        <input required type="text" id="assunto" className="w-full rounded-2xl border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3.5 text-sm text-black dark:text-white placeholder:text-black/70 dark:text-white/30 focus:bg-black/10 dark:bg-white/10 focus:border-t2r-green focus:ring-0 transition-colors font-light outline-none" placeholder="Assunto *" />
                                    </div>
                                    <div>
                                        <textarea required id="mensagem" rows={4} className="w-full rounded-2xl border border-black/20 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3.5 text-sm text-black dark:text-white placeholder:text-black/70 dark:text-white/30 focus:bg-black/10 dark:bg-white/10 focus:border-t2r-green focus:ring-0 transition-colors font-light resize-none outline-none" placeholder="Mensagem *" />
                                    </div>
                                    <button type="submit" disabled={submitting}
                                        className="w-full rounded-full bg-black px-4 py-4 text-sm font-black text-white dark:bg-white dark:text-black hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 uppercase tracking-widest mt-4">
                                        {submitting ? 'Transmitindo...' : 'Enviar Pacote'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
