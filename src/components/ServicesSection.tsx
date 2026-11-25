'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  FileText,
  Globe,
  MessageSquare,
  Palette,
  Search,
  Share2,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from 'lucide-react';
import { SERVICES } from '@/data/agency-data';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Share2,
  Search,
  Target,
  Globe,
  Smartphone,
  Palette,
  Sparkles,
  FileText,
  MessageSquare,
  Workflow,
  Code2,
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Our Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            End-to-End Digital Marketing &amp; Technology Services
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Twelve specialized practice areas working together to attract, convert, and retain your
            ideal customers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName] || Sparkles;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: (idx % 4) * 0.05 }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.shortDesc}</p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 transition group-hover:gap-2.5"
                >
                  Learn More
                  <ArrowRight className="size-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
