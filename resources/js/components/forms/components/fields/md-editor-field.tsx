import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import html2md from 'html-to-md';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useEffect, useMemo, useState } from 'react';
import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface MdEditorFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  className?: string;
  htmlValue?: string;
}

export function MdEditorField<T extends FieldValues>({
  form,
  name,
  label,
  className,
  htmlValue,
}: MdEditorFieldProps<T>) {
  // Detect theme from document class
  const mdTheme = useMemo(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  }, []);

  const [text, setText] = useState<string>(() => {
    const initialValue = form.getValues(name);
    if (initialValue) return initialValue;
    return htmlValue ? html2md(htmlValue, { skipTags: [] }) : '';
  });

  useEffect(() => {
    if (htmlValue) {
      const converted = html2md(htmlValue, { skipTags: [] });
      setText(converted);
    }
  }, [htmlValue]);

  return (
    <FormField
      control={form.control as any}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col', className)}>
          <FormLabel>{label}</FormLabel>
          <MdEditor
            editorId={name}
            language="en-US"
            theme={mdTheme}
            modelValue={text}
            onChange={(val) => {
              setText(val);
            }}
            onHtmlChanged={field.onChange}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
