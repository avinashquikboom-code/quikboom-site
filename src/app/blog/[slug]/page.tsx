import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { BLOG_POSTS, AGENCY_BRAND } from '@/data/agency-data';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${AGENCY_BRAND.name}`,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Insights &amp; Blog
        </Link>

        <header className="mt-8">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-indigo-400" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-indigo-400" />
              {post.publishedAt}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-indigo-400" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg">
          <p className="font-medium text-slate-200">{post.excerpt}</p>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center">
          <h2 className="text-xl font-bold text-white">
            Need help executing this strategy?
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Talk to our growth &amp; engineering team for a personalized audit.
          </p>
          <Link
            href="/#contact"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
