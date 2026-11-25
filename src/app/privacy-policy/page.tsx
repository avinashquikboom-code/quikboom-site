import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AGENCY_BRAND } from '@/data/agency-data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${AGENCY_BRAND.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: November 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p className="mt-2">
              When you submit a consultation request, contact form, or newsletter
              subscription on {AGENCY_BRAND.name}, we collect the contact details you
              provide such as your name, email address, phone number, company name, and
              project requirements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">2. How We Use Your Data</h2>
            <p className="mt-2">
              We use your information solely to respond to your inquiries, prepare
              tailored proposals, deliver contracted digital marketing or software
              services, and share relevant updates when you subscribe to our newsletter.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">3. Data Protection &amp; Retention</h2>
            <p className="mt-2">
              We implement industry-standard security controls to safeguard your data
              against unauthorized access. We never sell or rent your personal contact
              details to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">4. Contact Us</h2>
            <p className="mt-2">
              For privacy questions or data deletion requests, contact us at{' '}
              <a
                href={`mailto:${AGENCY_BRAND.email}`}
                className="text-indigo-400 underline hover:text-indigo-300"
              >
                {AGENCY_BRAND.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
