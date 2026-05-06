import { clsx } from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'navy' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | 'as'> & {
    as?: 'button';
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | 'as'> & {
    as: 'a';
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const COMMON_KEYS = new Set(['as', 'variant', 'size', 'className']);

function stripCommon<T extends Record<string, unknown>>(props: T): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const k of Object.keys(props)) {
    if (!COMMON_KEYS.has(k)) out[k] = props[k];
  }
  return out;
}

export function Button(props: ButtonProps) {
  const variant: ButtonVariant = props.variant ?? 'primary';
  const size: ButtonSize = props.size ?? 'md';
  const cls = clsx('btn', `btn-${variant}`, `btn-${size}`, props.className);
  const rest = stripCommon(props as unknown as Record<string, unknown>);

  if (props.as === 'a') {
    return <a className={cls} {...rest} />;
  }
  return <button className={cls} type={props.type ?? 'button'} {...rest} />;
}
