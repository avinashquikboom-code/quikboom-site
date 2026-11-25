import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { AGENCY_BRAND } from '@/data/agency-data';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(AGENCY_BRAND.siteUrl),
  title: {
    default: `${AGENCY_BRAND.name} | ${AGENCY_BRAND.tagline}`,
    template: `%s | ${AGENCY_BRAND.name}`,
  },
  description:
    'We combine creative design, smart technology and performance-driven marketing to help businesses grow faster. Full-service digital marketing, web & mobile development, SEO, and CRM automation.',
  keywords: [
    'Digital Marketing Agency',
    'Website Development',
    'Mobile App Development',
    'SEO Services',
    'Google Ads & PPC',
    'CRM Automation',
    'VeloceDigital',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: AGENCY_BRAND.siteUrl,
    siteName: AGENCY_BRAND.name,
    title: `${AGENCY_BRAND.name} | ${AGENCY_BRAND.tagline}`,
    description:
      'Transform your business into a powerful digital brand with creative design, smart technology, and performance-driven marketing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${AGENCY_BRAND.name} | ${AGENCY_BRAND.tagline}`,
    description:
      'Creative design, smart technology, and performance-driven marketing for measurable growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: AGENCY_BRAND.name,
    description: AGENCY_BRAND.tagline,
    url: AGENCY_BRAND.siteUrl,
    email: AGENCY_BRAND.email,
    telephone: AGENCY_BRAND.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: AGENCY_BRAND.address,
      addressCountry: 'IN',
    },
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
