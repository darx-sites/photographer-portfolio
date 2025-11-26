import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Photographer Portfolio | Professional Photography Services',
  description: 'Capturing life\'s precious moments through the lens. Professional photography services for weddings, portraits, events, and commercial projects.',
  keywords: 'photographer, photography, portfolio, wedding photography, portrait photography, professional photographer',
  authors: [{ name: 'Photographer Portfolio' }],
  openGraph: {
    title: 'Photographer Portfolio | Professional Photography Services',
    description: 'Capturing life\'s precious moments through the lens. Professional photography services.',
    url: 'https://photographer-portfolio.darx.site',
    siteName: 'Photographer Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Photographer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photographer Portfolio | Professional Photography Services',
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}