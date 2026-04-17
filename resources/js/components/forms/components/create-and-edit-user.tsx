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
import { User } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Função auxiliar para gerar o schema baseado no contexto (Edição ou Criação)
const getUserSchema = (isEditing: boolean) => {
  return z.object({
    name: z.string().min(1, 'Nome obrigatório'),
    email: z.string().email('Email inválido'),
    role: z.enum(['owner', 'adm']),
    password: isEditing
      ? z.string().optional() // Na edição, pode ser vazio
      : z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'), // Na criação, é obrigatório
  });
};

interface Props {
  data?: User; // Torna opcional para reutilizar no Create
}

export function CreateAndEditUser({ data }: Props) {
  const isEditing = !!data;

  // Gera o schema correto baseado na presença de 'data'
  const schema = getUserSchema(isEditing);
  type UserFormValues = z.infer<typeof schema>;

  const form = useForm<UserFormValues>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      name: data?.name ?? '',
      email: data?.email ?? '',
      role: data?.role ?? 'adm',
      password: '',
    },
  });

  function onSubmit(values: UserFormValues) {
    const url = isEditing ? `/admin/users/${data.id}` : '/admin/users';

    // Se estiver editando e a senha estiver vazia, removemos do payload
    // O TypeScript reclama se deletarmos direto, então criamos um novo objeto
    const payload = { ...values };
    if (isEditing && !payload.password) {
      delete payload.password;
    }

    router.post(url, {
      ...payload,
      _method: isEditing ? 'put' : 'post',
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit as any)}
        className="max-w-lg space-y-6"
      >
        <FormField
          control={form.control as any}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome do usuário" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control as any}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email@exemplo.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control as any}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Função</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="adm">Administrador</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control as any}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {isEditing ? 'Nova Senha (Opcional)' : 'Senha'}
              </FormLabel>
              <FormControl>
                <Input type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {isEditing ? 'Atualizar' : 'Cadastrar'} Usuário
        </Button>
      </form>
    </Form>
  );
}
