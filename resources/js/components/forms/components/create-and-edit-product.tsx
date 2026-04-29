import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Product, ProductCategory } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';
import { UploadImageField } from './fields/upload-image-field';
import { UploadImagesField } from './fields/upload-images-field';

const productSchema = z.object({
  title: z.string().min(1, 'Título obrigatório'),
  product_category_id: z.string().min(1, 'Selecione uma categoria'),
  sku: z.string().optional(),
  description: z.string().optional(),
  coverImage: z
    .object({
      preview: z.string(),
      file: z.instanceof(File).optional(),
    })
    .refine((val) => val.preview !== '', 'Imagem obrigatória'),
  // [ADICIONADO] Validação da galeria (Array de objetos de imagem)
  gallery_images: z
    .array(
      z.object({
        preview: z.string(),
        file: z.instanceof(File).optional(),
        // id opcional caso venha do backend para manter a referência
        id: z.number().optional(),
      }),
    )
    .optional(),
  is_active: z.boolean().optional(),
  price: z.string().refine((val) => {
    const parsed = parseFloat(val);
    return !isNaN(parsed) && parsed >= 0;
  }, 'O preço deve ser maior ou igual a 0'),
  tags: z.string().optional(),
  tech_specs: z.array(
    z.object({
      key: z.string().min(1, 'Chave obrigatória'),
      value: z.string().min(1, 'Valor obrigatório'),
    })
  ).optional(),
});

export function CreateAndEditProduct({
  data,
  categories,
}: {
  data?: Product;
  categories: ProductCategory[];
}) {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema) as any,
    defaultValues: {
      title: data?.title ?? '',
      product_category_id: data?.product_category_id.toString() ?? '',
      sku: data?.sku ?? '',
      description: data?.description ?? '',
      coverImage: { preview: data?.cover_image ?? '', file: undefined },

      gallery_images: data?.gallery_images
        ? data.gallery_images.map((img: any) => ({
            preview: img.url || img,
            file: undefined,
            id: img.id,
          }))
        : [],
      is_active: data?.is_active ?? true,
      price: String(data?.price ?? '0'),
      tech_specs: data?.tech_specs 
        ? Object.entries(data.tech_specs).map(([key, value]) => ({ key, value: String(value) }))
        : [],
    },
  });

  const { fields: techSpecsFields, append: appendTechSpec, remove: removeTechSpec } = useFieldArray({
    control: form.control as any,
    name: "tech_specs"
  });

  function onSubmit(values: z.infer<typeof productSchema>) {
    const url = data ? `/admin/products/${data.id}` : '/admin/products';

    const newGalleryFiles = values.gallery_images
      ?.map((g) => g.file)
      .filter((f): f is File => f !== undefined);

    const techSpecsObject = values.tech_specs?.reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {} as Record<string, string>);

    router.post(url, {
      ...values,
      cover_image: values.coverImage.file,
      price: Number(values.price),
      gallery_images: newGalleryFiles,
      tech_specs: techSpecsObject,
      tags: values.tags?.split(',').map((tag) => tag.trim()),
      _method: data ? 'put' : 'post',
    });
  }

  const handleDeleteImage = () => {
    form.setValue('coverImage', { preview: '', file: undefined });
    if (data?.id) {
      router.delete(`/admin/products/delete-image/${data.id}`, {
        onSuccess: () => toast.success('Imagem removida'),
        onError: () => toast.error('Erro'),
      });
    }
  };

  const handleDeleteGalleryImage = (index: number) => {
    if (!data?.id) return;

    router.delete(`/admin/products/delete-gallery-image/${data.id}/${index}`, {
      preserveScroll: true,
      onSuccess: () => {
        const currentImages = form.getValues('gallery_images') || [];
        const newImages = currentImages.filter((_, i) => i !== index);

        form.setValue('gallery_images', newImages, { shouldDirty: true });

        toast.success('Imagem removida da galeria');
      },
      onError: () => {
        toast.error('Erro ao remover imagem');
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control as any}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Produto</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control as any}
            name="product_category_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id.toString()}>
                        {cat.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control as any}
            name="sku"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SKU</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control as any}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço (R$)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control as any}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags (Separe por vírgula)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Promoção, Lançamento, Verão"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <UploadImageField
            form={form}
            name="coverImage"
            label="Imagem Principal"
            onDelete={handleDeleteImage}
          />

          <UploadImagesField
            form={form}
            name="gallery_images"
            label="Galeria de Imagens"
            onRemove={handleDeleteGalleryImage}
          />
        </div>

        <div className="space-y-4 rounded-xl border border-border p-4 bg-muted/20">
          <div>
            <h3 className="text-sm font-semibold">Especificações Técnicas</h3>
            <p className="text-xs text-muted-foreground">
              Adicione chaves e valores para as características (Ex: chave: "frequencias", valor: "L1/L2").
              Drones PPK exigem chaves exatas: "frequencias", "canais", "linhaBase" para renderização correta do painel rápido.
            </p>
          </div>
          
          {techSpecsFields.map((field, index) => (
            <div key={field.id} className="flex items-start gap-2">
              <FormField
                control={form.control as any}
                name={`tech_specs.${index}.key`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Chave (Ex: frequencias, bateria)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control as any}
                name={`tech_specs.${index}.value`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Valor (Ex: L1/L2, 5000mAh)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" variant="destructive" size="icon" onClick={() => removeTechSpec(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={() => appendTechSpec({ key: '', value: '' })}
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Especificação
          </Button>
        </div>

        <MdEditorField
          form={form}
          name="description"
          label="Descrição Completa"
          htmlValue={data?.description || ''}
        />

        <Button type="submit">
          {data ? 'Atualizar' : 'Cadastrar'} Produto
        </Button>
      </form>
    </Form>
  );
}
