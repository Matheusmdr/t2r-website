/* ═══════════════════════════════════════════════════════
   T2R Soluções Tecnológicas — Domain Interfaces
   ═══════════════════════════════════════════════════════ */

// ─── Navigation ──────────────────────────────────────

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
    isExternal?: boolean;
}

export interface NavbarProps {
    items: NavItem[];
}

// ─── Footer ──────────────────────────────────────────

export interface Department {
    id: number;
    name: string;
    phone: string | null;
    whatsapp: string;
    email: string;
    sort_order: number;
}

export interface SiteSettings {
    address: string;
    facebook_url: string;
    instagram_url: string;
    linkedin_url: string;
    youtube_url: string;
}

export interface FooterData {
    departments: Department[];
    settings: SiteSettings;
}

// ─── Home Page ───────────────────────────────────────

export interface PainPoint {
    icon: string;
    title: string;
    description: string;
}

export interface Solution {
    icon: string;
    title: string;
    description: string;
    href: string;
}

export interface Application {
    icon: string;
    title: string;
    description: string;
}

export interface PrecisionRow {
    drone: string;
    withoutPPK_h: string;
    withoutPPK_v: string;
    withPPK_h: string;
    withPPK_v: string;
}

export interface GoogleReview {
    author: string;
    rating: number;
    text: string;
    date: string;
}

export interface ClientLogo {
    id: number;
    name: string;
    logo: string;
    link: string | null;
}

// ─── Products ────────────────────────────────────────

export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
}

export interface Product {
    id: number;
    product_category_id: number;
    title: string;
    slug: string;
    sku: string | null;
    short_description: string | null;
    description: string;
    cover_image: string;
    gallery_images: string[];
    tags: string[] | null;
    tech_specs: string | null;
    is_active: boolean;
    price: string;
}

// ─── Blog ────────────────────────────────────────────

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    content: string;
    cover_image: string;
    tags: string[];
    embed_videos: string[] | null;
    is_published: boolean;
    created_at: string;
    updated_at: string;
}

export interface BlogCategory {
    slug: string;
    label: string;
    count: number;
}

// ─── Contact ─────────────────────────────────────────

export interface ContactFormData {
    nome: string;
    whatsapp: string;
    cidade_estado: string;
    interesse: ContactInterest;
}

export type ContactInterest =
    | 'kit-ppk'
    | 'base-gnss'
    | 't2r-geotagger'
    | 'metashape'
    | 'suporte-tecnico'
    | 'outro';

export interface ContactInterestOption {
    value: ContactInterest;
    label: string;
}

// ─── FAQ ─────────────────────────────────────────────

export interface FAQItem {
    question: string;
    answer: string;
}

// ─── Metashape ───────────────────────────────────────

export interface MetashapePlan {
    name: string;
    type: 'standard' | 'professional';
    description: string;
    features: string[];
    highlighted: boolean;
}

// ─── PPK vs RTK Comparison ──────────────────────────

export interface ComparisonRow {
    criteria: string;
    ppk: string;
    rtk: string;
    winner: 'ppk' | 'rtk' | 'tie';
}

// ─── Banner ──────────────────────────────────────────

export interface Banner {
    id: number;
    title: string;
    image_path: string;
    image_path_mobile: string | null;
    link_url: string | null;
    order: number;
    is_active: boolean;
}

// ─── SEO ─────────────────────────────────────────────

export interface SEOData {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonical?: string;
}

// ─── i18n (Catalonia as separate country) ────────────

export interface Country {
    code: string;
    name: string;
    flag: string;
}

export const SUPPORTED_COUNTRIES: Country[] = [
    { code: 'BR', name: 'Brasil', flag: '🇧🇷' },
    { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
    { code: 'ES', name: 'España', flag: '🇪🇸' },
    { code: 'CA', name: 'Catalunya', flag: '🏴' },
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'AO', name: 'Angola', flag: '🇦🇴' },
    { code: 'MZ', name: 'Moçambique', flag: '🇲🇿' },
];
