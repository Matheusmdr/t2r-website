import { Badge } from '@/components/ui/badge';
import { User } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Função',
    cell: ({ row }) => {
      const role = row.getValue('role') as string;
      return (
        <Badge variant={role === 'owner' ? 'default' : 'secondary'}>
          {role === 'owner' ? 'Owner' : 'Administrador'}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'created_at',
    header: 'Criado em',
    cell: ({ row }) =>
      format(new Date(row.getValue('created_at')), 'dd/MM/yyyy'),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        editUrl="/admin/users/edit/"
        deleteUrl="/admin/users/delete/"
      />
    ),
  },
];
