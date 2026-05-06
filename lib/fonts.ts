import localFont from 'next/font/local';

export const barlow = localFont({
  variable: '--font-barlow',
  display: 'swap',
  src: [
    { path: '../public/fonts/Barlow-Regular.ttf',   weight: '400', style: 'normal' },
    { path: '../public/fonts/Barlow-Italic.ttf',    weight: '400', style: 'italic' },
    { path: '../public/fonts/Barlow-Medium.ttf',    weight: '500', style: 'normal' },
    { path: '../public/fonts/Barlow-SemiBold.ttf',  weight: '600', style: 'normal' },
    { path: '../public/fonts/Barlow-Bold.ttf',      weight: '700', style: 'normal' },
    { path: '../public/fonts/Barlow-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
});
