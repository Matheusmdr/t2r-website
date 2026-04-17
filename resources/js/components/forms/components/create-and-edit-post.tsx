import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Post } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { Plus, Trash2, Video } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';
import { UploadImageField } from './fields/upload-image-field';

// Simples conversão de string de tags para array
const stringToTags = (str: string) =>
  str
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

const postSchema = z.object({
  title: z.string().min(1, 'Título obrigatório'),
  content: z.string().optional(),
  tags: z.string().optional(), // Recebe string no input, converte no submit
  coverImage: z
    .object({
      preview: z.string().nullable().optional(),
      file: z.instanceof(File).optional(),
    })
    .optional(),
  embed_videos: z.array(z.string()).optional(),
  is_published: z.boolean().optional(),
});

export function CreateAndEditPost({ data }: { data?: Post }) {
  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema) as any,
    defaultValues: {
      title: data?.title ?? '',
      content: data?.content ?? '',
      // Se tags vierem como array do backend, converte para string para edição
      tags: Array.isArray(data?.tags) ? data.tags.join(', ') : '',
      coverImage: { preview: data?.cover_image ?? '', file: undefined },
      embed_videos: data?.embed_videos ?? [],
      is_published: data?.is_published ?? false,
    },
  });

  const embedVideos = form.watch('embed_videos') ?? [];

  function addEmbedVideo() {
    const current = form.getValues('embed_videos') ?? [];
    form.setValue('embed_videos', [...current, '']);
  }

  function removeEmbedVideo(index: number) {
    const current = form.getValues('embed_videos') ?? [];
    form.setValue(
      'embed_videos',
      current.filter((_, i) => i !== index),
    );
  }

  function updateEmbedVideo(index: number, value: string) {
    const current = form.getValues('embed_videos') ?? [];
    const updated = [...current];
    updated[index] = value;
    form.setValue('embed_videos', updated);
  }

  function onSubmit(values: z.infer<typeof postSchema>) {
    const url = data ? `/admin/posts/${data.id}` : '/admin/posts';

    // Filtrar URLs vazias
    const filteredVideos = (values.embed_videos ?? []).filter(
      (v) => v.trim() !== '',
    );

    router.post(url, {
      ...values,
      cover_image: values.coverImage?.file,
      embed_videos: filteredVideos.length > 0 ? filteredVideos : [],
      // Converte a string de tags de volta para array para o backend
      tags: values.tags ? stringToTags(values.tags) : [],
      _method: data ? 'put' : 'post',
    });
  }

  const handleDeleteImage = () => {
    form.setValue('coverImage', { preview: '', file: undefined });
    if (data?.id) {
      router.delete(`/admin/posts/delete-image/${data.id}`, {
        onSuccess: () => toast.success('Imagem removida'),
        onError: () => toast.error('Erro'),
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control as any}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título do Post</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control as any}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (separadas por vírgula)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Notícias, Tecnologia, Update"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <UploadImageField
            form={form}
            name="coverImage"
            label="Imagem de Capa"
            onDelete={handleDeleteImage}
          />

          <FormField
            control={form.control as any}
            name="is_published"
            render={({ field }) => (
              <FormItem className="mt-8 flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Publicar Agora</FormLabel>
                  <p className="text-sm text-muted-foreground">
                    Se marcado, o post ficará visível publicamente.
                  </p>
                </div>
              </FormItem>
            )}
          />
        </div>

        <MdEditorField
          form={form}
          name="content"
          label="Conteúdo do Post"
          htmlValue={data?.content || ''}
        />

        {/* Embed Videos Section */}
        <div className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-muted-foreground" />
              <FormLabel className="text-base font-semibold">
                Vídeos de Embed
              </FormLabel>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addEmbedVideo}
              className="gap-1"
            >
              <Plus className="h-4 w-4" />
              Adicionar Vídeo
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Cole as URLs de embed do YouTube ou Vimeo. Ex:
            https://www.youtube.com/embed/VIDEO_ID
          </p>

          {embedVideos.length === 0 && (
            <div className="rounded-md border border-dashed p-6 text-center text-sm text-muted-foreground">
              Nenhum vídeo adicionado. Clique em "Adicionar Vídeo" para
              incluir.
            </div>
          )}

          <div className="space-y-3">
            {embedVideos.map((video, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={video}
                  onChange={(e) => updateEmbedVideo(index, e.target.value)}
                  placeholder="https://www.youtube.com/embed/VIDEO_ID"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => removeEmbedVideo(index)}
                  className="shrink-0"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit">{data ? 'Atualizar' : 'Criar'} Post</Button>
      </form>
    </Form>
  );
}
