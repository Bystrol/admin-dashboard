import type { Metadata } from 'next';
import './globals.css';
import { CssBaseline } from '@mui/material';
import { Providers } from '@/providers';
import { Mona_Sans } from 'next/font/google';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { MantineProvider } from '@/providers/mantine';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

const monaSans = Mona_Sans({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" className={monaSans.className} {...mantineHtmlProps}>
        <head>
          <ColorSchemeScript />
        </head>
        <CssBaseline />
        <body>
          <MantineProvider>
            <NuqsAdapter>{children}</NuqsAdapter>
          </MantineProvider>
        </body>
      </html>
    </Providers>
  );
}
