import { cn } from '@/lib/utils';
import { PaginationLink } from '@/types';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  links: PaginationLink[];
}

export function Pagination({ links }: Props) {
  if (links.length <= 3) return null; // Only Previous, 1, and Next means no actual pagination needed

  return (
    <div className="mt-12 flex items-center justify-center gap-1">
      {links.map((link, index) => {
        const isFirst = index === 0;
        const isLast = index === links.length - 1;

        if (isFirst) {
          return (
            <Link
              key={index}
              href={link.url || '#'}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors',
                link.url
                  ? 'hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                  : 'pointer-events-none opacity-50',
              )}
              preserveScroll
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>
          );
        }

        if (isLast) {
          return (
            <Link
              key={index}
              href={link.url || '#'}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors',
                link.url
                  ? 'hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                  : 'pointer-events-none opacity-50',
              )}
              preserveScroll
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          );
        }

        return (
          <Link
            key={index}
            href={link.url || '#'}
            className={cn(
              'flex h-10 min-w-10 items-center justify-center rounded-lg px-2 text-sm font-medium transition-colors',
              link.active
                ? 'bg-zinc-900 text-white'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
              !link.url && 'pointer-events-none',
            )}
            preserveScroll
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        );
      })}
    </div>
  );
}
