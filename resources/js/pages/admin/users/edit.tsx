import { CreateAndEditUser } from '@/components/forms/components/create-and-edit-user';
import AppLayout from '@/layouts/app-layout';
import { User } from '@/types';

interface Props {
  user: User;
}

export default function Page({ user }: Props) {
  return (
    <AppLayout breadcrumbs={[{ title: 'Editar Usuário', href: '#' }]}>
      <div className="p-4">
        <CreateAndEditUser data={user} />
      </div>
    </AppLayout>
  );
}
