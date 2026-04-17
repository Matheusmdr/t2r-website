import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Client } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { UploadImageField } from './fields/upload-image-field';

const getClientSchema = (isEditing: boolean) =>
  z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    link: z.string().url('Link inválido').optional().or(z.literal('')),
    is_active: z.boolean(),
    logo: z
      .object({
        preview: z.string(),
        file: z.instanceof(File).optional(),
      })
      .refine(
        (data) => isEditing || data.preview !== '',
        'A logo é obrigatória na criação.',
      ),
  });

interface Props {
  data?: Client;
}

export function CreateAndEditClient({ data }: Props) {
  const isEditing = !!data;

  const schema = getClientSchema(isEditing);
  type ClientFormValues = z.infer<typeof schema>;

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      name: data?.name ?? '',
      link: data?.link ?? '',
      is_active: true,
      logo: {
        preview: data?.logo ?? '',
        file: undefined,
      },
    },
  });

  function onSubmit(values: ClientFormValues) {
    const url = isEditing ? `/admin/clients/${data?.id}` : '/admin/clients';

    const payload = {
      ...values,
      logo: values.logo.file,
      _method: isEditing ? 'put' : 'post',
    };

    router.post(url, payload);
  }

  const handleDeleteImage = () => {
    form.setValue('logo', { preview: '', file: undefined });
    if (data?.id) {
      router.delete(`/admin/clients/delete-image/${data.id}`, {
        onSuccess: () => toast.success('Imagem removida'),
        onError: () => toast.error('Erro'),
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit as any)}
        className="max-w-xl space-y-6"
      >
        <FormField
          control={form.control as any}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Cliente</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Empresa X" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control as any}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="https://empresa.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <UploadImageField
          form={form}
          name="logo"
          label="Logo do Cliente"
          onDelete={handleDeleteImage}
        />

        <FormField
          control={form.control as any}
          name="is_active"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Ativo</FormLabel>
                <FormDescription>
                  Exibir este cliente no carrossel do site.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {isEditing ? 'Atualizar' : 'Cadastrar'} Cliente
        </Button>
      </form>
    </Form>
  );
}
