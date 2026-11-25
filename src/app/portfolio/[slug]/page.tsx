import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { PORTFOLIO_ITEMS, AGENCY_BRAND } from '@/data/agency-data';

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_ITEMS.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${project.title} – Case Study`,
    description: project.shortDesc,
    openGraph: {
      title: `${project.title} | ${AGENCY_BRAND.name}`,
      description: project.shortDesc,
      images: [project.thumbnail],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_ITEMS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                {project.industry}
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-medium text-slate-300">
                Client: {project.client}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-slate-300">{project.shortDesc}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.services.map((srv) => (
                <span
                  key={srv}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  <Layers className="h-3.5 w-3.5 text-indigo-400" />
                  {srv}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
                <h2 className="text-lg font-bold text-white">The Challenge</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.challenge}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
                <h2 className="text-lg font-bold text-white">Our Solution</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6">
              <h2 className="text-lg font-bold text-white">Measurable Impact</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {project.results.map((result) => (
                  <div
                    key={result.label}
                    className="flex items-start gap-2.5 rounded-xl border border-emerald-500/20 bg-slate-950/60 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <div className="text-base font-bold text-white">{result.value}</div>
                      <div className="text-xs text-slate-300">{result.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8">
              <p className="text-sm text-slate-400">
                Want similar results for your business?
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
