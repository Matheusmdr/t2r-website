import { CreateAndEditCategory } from '@/components/forms/components/create-and-edit-category';
import AppLayout from '@/layouts/app-layout';
import { ProductCategory } from '@/types';

interface Props {
  category: ProductCategory;
}

export default function Page({ category }: Props) {
  return (
    <AppLayout>
      <div className="p-4">
        <CreateAndEditCategory data={category} />
      </div>
    </AppLayout>
  );
}
