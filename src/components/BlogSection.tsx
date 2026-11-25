'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '@/data/agency-data';

export function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Insights &amp; Playbooks
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Latest from Our Digital Growth Blog
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-bold text-white">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="size-3.5" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 transition group-hover:gap-2.5"
                >
                  Read More
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
