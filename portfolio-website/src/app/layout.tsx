import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Make sure this import is present

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ahmed Abdul Rahman | Founder & AI Developer',
  description: 'Ahmed Abdul Rahman - Founder, AI Developer, and Computer Science Student',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}