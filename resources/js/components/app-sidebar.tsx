import { Link } from '@inertiajs/react';
import { FileText, Settings, User, Users2 } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';

import banners from '@/routes/admin/banners';
import clients from '@/routes/admin/clients';
import posts from '@/routes/admin/posts';
import categories from '@/routes/admin/product-categories';
import products from '@/routes/admin/products';
import services from '@/routes/admin/services';
import { Image, Package, Tags, Wrench } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
  {
    title: 'Serviços',
    href: services.index(),
    icon: Wrench,
  },
  {
    title: 'Produtos',
    href: products.index(),
    icon: Package,
  },
  {
    title: 'Categorias de Produtos',
    href: categories.index(),
    icon: Tags,
  },
  {
    title: 'Banners',
    href: banners.index(),
    icon: Image,
  },
  {
    title: 'Posts',
    href: posts.index(),
    icon: FileText,
  },
  {
    title: 'Clientes',
    href: clients.index(),
    icon: Users2,
  },
];

const navFooterItems = [
  {
    href: '/admin/settings',
    title: 'Configurações',
    icon: Settings,
  },
  {
    href: '/admin/users',
    title: 'Usuários',
    icon: User,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={'/admin'} prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavMain items={navFooterItems} />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
