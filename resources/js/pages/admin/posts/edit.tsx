import { CreateAndEditPost } from '@/components/forms/components/create-and-edit-post';
import AppLayout from '@/layouts/app-layout';
import { Post } from '@/types';

interface Props {
  post: Post;
}

export default function Page({ post }: Props) {
  return (
    <AppLayout>
      <div className="p-4">
        <CreateAndEditPost data={post} />
      </div>
    </AppLayout>
  );
}
