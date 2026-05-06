'use client';

import type { ReactNode } from 'react';
import { Button, type ButtonProps } from '@/components/ui/Button';
import { useQuoteDialog } from './QuoteDialogProvider';

type Props = Omit<Extract<ButtonProps, { as?: 'button' }>, 'as' | 'onClick' | 'children'> & {
  children: ReactNode;
};

export function QuoteTrigger({ children, ...rest }: Props) {
  const { openDialog } = useQuoteDialog();
  return (
    <Button {...rest} onClick={openDialog}>
      {children}
    </Button>
  );
}
