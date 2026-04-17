import { CreateAndEditBanner } from '@/components/forms/components/create-and-edit-banner';
import AppLayout from '@/layouts/app-layout';

export default function Page() {
  return (
    <AppLayout breadcrumbs={[]}>
      <div className="p-4">
        <CreateAndEditBanner />
      </div>
    </AppLayout>
  );
}
