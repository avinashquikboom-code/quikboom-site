import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES, AGENCY_BRAND } from '@/data/agency-data';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | ${AGENCY_BRAND.name}`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Services
        </Link>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            {service.category}
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            {service.fullDesc}
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-xl font-bold text-white">Key Deliverables</h2>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-xl font-bold text-white">Expected Business Outcomes</h2>
              <ul className="mt-4 space-y-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/80 to-slate-900 p-6">
            <div>
              <h3 className="text-lg font-bold text-white">
                Ready to scale with {service.title}?
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Book a free strategy call with our specialists for a tailored roadmap.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white">Explore Other Services</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-indigo-500/50"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {rel.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white group-hover:text-indigo-300">
                  {rel.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">{rel.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
