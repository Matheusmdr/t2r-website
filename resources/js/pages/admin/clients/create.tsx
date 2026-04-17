import { CreateAndEditClient } from '@/components/forms/components/create-and-edit-client';
import AppLayout from '@/layouts/app-layout';

export default function Page() {
  return (
    <AppLayout breadcrumbs={[{ title: 'Novo Cliente', href: '#' }]}>
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold">Cadastrar Cliente</h1>
        <CreateAndEditClient />
      </div>
    </AppLayout>
  );
}
