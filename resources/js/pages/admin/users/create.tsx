import { CreateAndEditUser } from '@/components/forms/components/create-and-edit-user';
import AppLayout from '@/layouts/app-layout';

export default function Page() {
  return (
    <AppLayout breadcrumbs={[{ title: 'Criar Usuário', href: '#' }]}>
      <div className="p-4">
        <CreateAndEditUser />
      </div>
    </AppLayout>
  );
}
