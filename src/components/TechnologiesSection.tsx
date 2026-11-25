'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { TECHNOLOGIES } from '@/data/agency-data';

export function TechnologiesSection() {
  return (
    <section className="bg-slate-50/80 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Technology Stack
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Modern Technologies Powering Your Digital Products
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {TECHNOLOGIES.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-xs transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Code2 className="size-5" />
              </div>
              <p className="mt-3 text-sm font-bold text-slate-900">{tech.name}</p>
              <span className="mt-0.5 text-[11px] font-medium text-slate-500">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
