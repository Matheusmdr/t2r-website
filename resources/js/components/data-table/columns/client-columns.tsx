import { Badge } from '@/components/ui/badge';
import { Client } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const clientColumns: ColumnDef<Client>[] = [
  {
    accessorKey: 'logo',
    header: 'Logo',
    cell: ({ row }) => (
      <div className="flex h-10 w-20 items-center justify-center overflow-hidden rounded bg-gray-100 p-1">
        <img
          src={row.original.logo}
          alt={row.original.name}
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'link',
    header: 'Link',
    cell: ({ row }) => {
      const link = row.getValue('link') as string;
      return link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 underline"
        >
          {link}
        </a>
      ) : (
        <span className="text-muted-foreground">-</span>
      );
    },
  },
  {
    accessorKey: 'is_active',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={row.original.is_active ? 'default' : 'secondary'}>
        {row.original.is_active ? 'Ativo' : 'Inativo'}
      </Badge>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        editUrl="/admin/clients/edit/"
        deleteUrl="/admin/clients/delete/"
      />
    ),
  },
];
