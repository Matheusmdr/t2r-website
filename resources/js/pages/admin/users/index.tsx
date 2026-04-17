import { DataTable } from '@/components/data-table';
import { userColumns } from '@/components/data-table/columns/user-columns';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { User } from '@/types';
import { Link } from '@inertiajs/react';

interface Props {
  users: User[];
}

export default function Page({ users }: Props) {
  return (
    <AppLayout breadcrumbs={[{ title: 'Usuários', href: '/admin/users' }]}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Usuários</h1>
          <Button asChild>
            <Link href="/admin/users/create">Adicionar Usuário</Link>
          </Button>
        </div>
        <DataTable data={users} columns={userColumns} />
      </div>
    </AppLayout>
  );
}
