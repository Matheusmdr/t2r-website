import { DataTable } from '@/components/data-table';
import { clientColumns } from '@/components/data-table/columns/client-columns';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Client } from '@/types';
import { Link } from '@inertiajs/react';

interface Props {
  clients: Client[];
}

export default function Page({ clients }: Props) {
  return (
    <AppLayout breadcrumbs={[{ title: 'Clientes', href: '/admin/clients' }]}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Clientes e Parceiros</h1>
          <Button asChild>
            <Link href="/admin/clients/create">Adicionar Cliente</Link>
          </Button>
        </div>
        <DataTable data={clients} columns={clientColumns} />
      </div>
    </AppLayout>
  );
}
