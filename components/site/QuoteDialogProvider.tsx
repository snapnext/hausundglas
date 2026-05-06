'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { QuoteDialog } from '@/components/sections/QuoteDialog';

type Ctx = {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

const QuoteDialogContext = createContext<Ctx | null>(null);

export function useQuoteDialog() {
  const ctx = useContext(QuoteDialogContext);
  if (!ctx) throw new Error('useQuoteDialog must be used within QuoteDialogProvider');
  return ctx;
}

export function QuoteDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openDialog = useCallback(() => setOpen(true), []);
  const closeDialog = useCallback(() => setOpen(false), []);

  return (
    <QuoteDialogContext.Provider value={{ open, openDialog, closeDialog }}>
      {children}
      {open && <QuoteDialog onClose={closeDialog} />}
    </QuoteDialogContext.Provider>
  );
}
