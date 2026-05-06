import type { ReactNode } from 'react';

const PATHS = {
  window:  (<><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 12h18M12 3v18"/></>),
  home:    (<><path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></>),
  sparkle: (<path d="M12 2l1.6 4.4 4.4 1.6-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6z"/>),
  broom:   (<><path d="M19 3l-7 7"/><path d="M9 11l-4 4 4 4M5 15h11l3 5"/></>),
  phone:   (<path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.9 19.9 0 0 1 2 4.18 2 2 0 0 1 4 2h3.08a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2z"/>),
  mail:    (<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 8l9 6 9-6"/></>),
  pin:     (<><circle cx="12" cy="11" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z"/></>),
  clock:   (<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>),
  check:   (<polyline points="20 6 9 17 4 12"/>),
  plus:    (<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>),
  arrow:   (<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 5 20 12 13 19"/></>),
  menu:    (<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>),
  close:   (<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>),
  shield:  (<path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/>),
  info:    (<><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="8"/><path d="M12 12v5"/></>),
  star:    (<polygon points="12 2 15 9 22 10 17 15 18 22 12 19 6 22 7 15 2 10 9 9"/>),
  building:(<><rect x="4" y="3" width="16" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></>),
  drop:    (<path d="M12 3s7 7 7 12a7 7 0 1 1-14 0c0-5 7-12 7-12z"/>),
  euro:    (<><path d="M18 7a6 6 0 1 0 0 10"/><path d="M3 10h11M3 14h11"/></>),
  calendar:(<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></>),
  flag:    (<path d="M5 21V4h12l-2 4 2 4H5"/>),
  tools:   (<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-7 7 2 2 7-7a4 4 0 0 0 5.4-5.4l-3 3-2-2 3-3z"/>),
} as const satisfies Record<string, ReactNode>;

export type IconName = keyof typeof PATHS;

type IconProps = {
  name: IconName;
  size?: number;
  stroke?: number;
};

export function Icon({ name, size = 20, stroke = 1.75 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
