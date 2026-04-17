import { CreateAndEditClient } from '@/components/forms/components/create-and-edit-client';
import AppLayout from '@/layouts/app-layout';
import { Client } from '@/types';

interface Props {
  client: Client;
}

export default function Page({ client }: Props) {
  return (
    <AppLayout breadcrumbs={[{ title: 'Editar Cliente', href: '#' }]}>
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold">Editar Cliente</h1>
        <CreateAndEditClient data={client} />
      </div>
    </AppLayout>
  );
}
