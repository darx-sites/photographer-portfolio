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
  title: 'Alex Morgan Photography | Professional Portrait & Event Photographer',
  description: 'Capturing life\'s precious moments through the lens. Professional photography services for portraits, events, weddings, and commercial projects.',
  keywords: 'photographer, photography, portraits, events, weddings, professional photography, photo services',
  authors: [{ name: 'Alex Morgan' }],
  openGraph: {
    title: 'Alex Morgan Photography',
    description: 'Professional photography services for all your special moments',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Morgan Photography',
    description: 'Professional photography services for all your special moments',
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