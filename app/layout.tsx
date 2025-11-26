import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Photographer Portfolio | Professional Photography Services',
  description: 'Professional photographer specializing in portraits, events, and commercial photography. Capturing moments that last a lifetime with artistic vision and technical excellence.',
  keywords: 'photographer, photography, portrait photography, event photography, commercial photography, professional photographer',
  authors: [{ name: 'Photographer Portfolio' }],
  openGraph: {
    title: 'Photographer Portfolio | Professional Photography Services',
    description: 'Professional photographer specializing in portraits, events, and commercial photography.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photographer Portfolio | Professional Photography Services',
    description: 'Professional photographer specializing in portraits, events, and commercial photography.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}