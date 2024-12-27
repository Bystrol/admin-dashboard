import type { Metadata } from 'next';
import './globals.css';
import { CssBaseline } from '@mui/material';
import { Providers } from '@/providers';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning>
        <CssBaseline />
        <body>{children}</body>
      </html>
    </Providers>
  );
}
