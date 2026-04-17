import { LucideIcon } from 'lucide-react';

// ─── Base ────────────────────────────────────────────
interface BaseEntity {
  id: number;
  created_at: string;
  updated_at: string;
}

// ─── Product Category ────────────────────────────────
export interface AdminProductCategory extends BaseEntity {
  title: string;
  slug: string;
  description: string | null;
  is_active: boolean;
  products?: AdminProduct[];
}

// ─── Product ─────────────────────────────────────────
export interface AdminProduct extends BaseEntity {
  product_category_id: number;
  title: string;
  slug: string;
  sku: string | null;
  short_description: string | null;
  description: string | null;
  cover_image: string | null;
  gallery_images: string[] | null;
  tags: string[] | null;
  tech_specs: Record<string, string> | null;
  is_active: boolean;
  category?: AdminProductCategory;
  price?: number | null;
}

// ─── Service ─────────────────────────────────────────
export interface ServicePlan {
  name: string;
  link: string;
}

export interface AdminService extends BaseEntity {
  title: string;
  slug: string;
  short_description: string | null;
  content: string;
  features_list: string[] | null;
  plans: ServicePlan[] | null;
  cover_image: string | null;
  is_active: boolean;
}

// ─── Banner ──────────────────────────────────────────
export interface AdminBanner extends BaseEntity {
  title: string;
  image_path: string;
  image_path_mobile: string | null;
  link_url: string | null;
  order: number;
  is_active: boolean;
}

// ─── Post ────────────────────────────────────────────
export interface AdminPost extends BaseEntity {
  title: string;
  slug: string;
  content: string;
  cover_image: string | null;
  tags: string[] | null;
  embed_videos: string[] | null;
  is_published: boolean;
}

// ─── Client ──────────────────────────────────────────
export interface AdminClient extends BaseEntity {
  name: string;
  logo: string;
  link?: string | null;
  is_active: boolean;
}

// ─── Department ──────────────────────────────────────
export interface AdminDepartment extends BaseEntity {
  name: string;
  whatsapp?: string | null;
  email?: string | null;
  sort_order: number;
}

// ─── Site Settings ───────────────────────────────────
export interface AdminSiteSettings extends BaseEntity {
  address: string;
  facebook_url?: string | null;
  instagram_url?: string | null;
  linkedin_url?: string | null;
  youtube_url?: string | null;
  about_clients_count?: string | null;
  about_commitment_percent?: string | null;
  about_states_count?: string | null;
}

// ─── Aliases for backwards compatibility with form imports ─────
export type Product = AdminProduct;
export type ProductCategory = AdminProductCategory;
export type Banner = AdminBanner;
export type Post = AdminPost;
export type Service = AdminService;
export type Client = AdminClient;

