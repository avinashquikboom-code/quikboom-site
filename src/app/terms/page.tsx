import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AGENCY_BRAND } from '@/data/agency-data';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `Terms and conditions for ${AGENCY_BRAND.name}.`,
};

export default function TermsPage() {
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
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: November 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="text-lg font-bold text-white">1. Services &amp; Scope</h2>
            <p className="mt-2">
              {AGENCY_BRAND.name} provides digital marketing, web and mobile application
              development, UI/UX design, SEO, paid advertising, and CRM automation
              services. Specific project deliverables, timelines, and commercial terms are
              governed by signed Statements of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">2. Intellectual Property</h2>
            <p className="mt-2">
              All website content, case studies, graphics, and proprietary frameworks
              displayed on this site remain the intellectual property of{' '}
              {AGENCY_BRAND.name}. Client project deliverables transfer according to the
              applicable service agreement upon full payment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">3. Limitation of Liability</h2>
            <p className="mt-2">
              While we follow data-driven best practices across advertising, SEO, and
              software engineering, marketing campaign outcomes also depend on market
              dynamics and third-party platforms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">4. Contact</h2>
            <p className="mt-2">
              Questions regarding these terms may be directed to{' '}
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
