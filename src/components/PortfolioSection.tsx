'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/data/agency-data';

const CATEGORIES = ['All', 'Digital Marketing', 'Web & App', 'Branding & UI/UX', 'CRM & Automation'] as const;

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="bg-slate-50/80 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Case Studies
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Selected Work &amp; Measurable Outcomes
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  activeCategory === cat
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-slate-800 shadow-xs">
                  {project.industry}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{project.shortDesc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.services.slice(0, 2).map((srv) => (
                      <span
                        key={srv}
                        className="rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="mt-6 inline-flex items-center justify-between rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-900 transition hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
                >
                  View Project
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
