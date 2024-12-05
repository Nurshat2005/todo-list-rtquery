import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import ReduxProviders from '@/providers/ReduxProviders';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'rtk-query',
  description: 'Todo-list rtk-query',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProviders> {children}</ReduxProviders>
      </body>
    </html>
  );
}
