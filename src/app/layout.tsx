
'use client';

import type {ReactNode} from 'react';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import { Exo_2 } from 'next/font/google';
import {LocalUserProvider} from '@/hooks/useLocalUser';
import {LoadingAnimation} from '@/components/layout/LoadingAnimation';

const exo2 = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
});

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" className={`${exo2.variable}`}>
      <body className="font-sans antialiased">
        <LocalUserProvider loadingComponent={<LoadingAnimation />}>
          {children}
        </LocalUserProvider>
        <Toaster />
      </body>
    </html>
  );
}
