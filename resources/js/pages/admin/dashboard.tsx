import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import {
  ArrowUpRight,
  FileText,
  Image as ImageIcon,
  LucideIcon,
  MoreHorizontal,
  Package,
  Plus,
  Tags,
} from 'lucide-react';

// Definição dos tipos esperados do Backend
interface DashboardProps {
  stats: {
    total_products: number;
    active_products: number;
    total_posts: number;
    published_posts: number;
    active_banners: number;
    total_categories: number;
  };
  recent_products: Array<{
    id: number;
    title: string;
    category: string;
    cover_image: string | null;
    created_at: string;
    is_active: boolean;
  }>;
  recent_posts: Array<{
    id: number;
    title: string;
    is_published: boolean;
    created_at: string;
  }>;
}

const StatCard = ({
  title,
  value,
  subtext,
  icon: Icon,
  href,
}: {
  title: string;
  value: number;
  subtext: string;
  icon: LucideIcon;
  href?: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="mb-4 text-xs text-muted-foreground">{subtext}</p>
      {href && (
        <Link
          href={href}
          className="flex items-center text-xs text-primary hover:underline"
        >
          Gerenciar <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
      )}
    </CardContent>
  </Card>
);

export default function Dashboard({
  stats,
  recent_products,
  recent_posts,
}: DashboardProps) {
  return (
    <AppLayout breadcrumbs={[{ title: 'Dashboard', href: '/dashboard' }]}>
      <Head title="Dashboard" />

      <div className="flex flex-1 flex-col gap-8 p-6 pt-6 md:p-8">
        {/* Cabeçalho com Ações Rápidas */}
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Visão Geral</h2>
          <div className="flex items-center space-x-2">
            <Button asChild>
              <Link href="/admin/products/create">
                <Plus className="mr-2 h-4 w-4" /> Novo Produto
              </Link>
            </Button>
          </div>
        </div>

        {/* Grid de Estatísticas (KPIs) */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Produtos Totais"
            value={stats.total_products}
            subtext={`${stats.active_products} ativos na loja`}
            icon={Package}
            href="/admin/products"
          />
          <StatCard
            title="Posts no Blog"
            value={stats.total_posts}
            subtext={`${stats.published_posts} publicados`}
            icon={FileText}
            href="/admin/posts"
          />
          <StatCard
            title="Banners Ativos"
            value={stats.active_banners}
            subtext="Rotacionando na home"
            icon={ImageIcon}
            href="/admin/banners"
          />
          <StatCard
            title="Categorias"
            value={stats.total_categories}
            subtext="Setores cadastrados"
            icon={Tags}
            href="/admin/categories"
          />
        </div>

        {/* Seção de Listas Recentes */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Card: Produtos Recentes (Ocupa 4 colunas) */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Produtos Recentes</CardTitle>
              <CardDescription>
                Últimos produtos cadastrados na plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recent_products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md border bg-muted">
                        {product.cover_image ? (
                          <img
                            src={product.cover_image}
                            alt={product.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-secondary text-xs">
                            N/A
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm leading-none font-medium">
                          {product.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {product.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant={product.is_active ? 'default' : 'secondary'}
                      >
                        {product.is_active ? 'Ativo' : 'Inativo'}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/products/edit/${product.id}`}>
                              Editar
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
                {recent_products.length === 0 && (
                  <div className="py-4 text-center text-sm text-muted-foreground">
                    Nenhum produto encontrado.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Card: Posts Recentes (Ocupa 3 colunas) */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Últimos Posts</CardTitle>
              <CardDescription>Atividade recente no blog.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recent_posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <p className="max-w-[200px] truncate text-sm leading-none font-medium">
                        {post.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {post.created_at}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${post.is_published ? 'bg-green-500' : 'bg-yellow-500'}`}
                      />
                      <span className="text-xs text-muted-foreground">
                        {post.is_published ? 'Publicado' : 'Rascunho'}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        asChild
                      >
                        <Link href={`/admin/posts/edit/${post.id}`}>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
                {recent_posts.length === 0 && (
                  <div className="py-4 text-center text-sm text-muted-foreground">
                    Nenhum post encontrado.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
