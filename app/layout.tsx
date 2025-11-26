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
  title: 'Alex Morgan Photography | Professional Photographer Portfolio',
  description: 'Capturing life\'s precious moments through the lens. Professional photography services for weddings, portraits, events, and commercial projects.',
  keywords: 'photographer, photography, portfolio, wedding photographer, portrait photography, professional photography, photo services',
  authors: [{ name: 'Alex Morgan' }],
  creator: 'Alex Morgan Photography',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexmorganphotography.com',
    title: 'Alex Morgan Photography | Professional Photographer Portfolio',
    description: 'Capturing life\'s precious moments through the lens. Professional photography services for weddings, portraits, events, and commercial projects.',
    siteName: 'Alex Morgan Photography',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Alex Morgan Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Morgan Photography | Professional Photographer Portfolio',
    description: 'Capturing life\'s precious moments through the lens.',
    images: ['https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}