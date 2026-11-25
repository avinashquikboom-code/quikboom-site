'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/agency-data';

export function ProcessSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            How We Work
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Proven Four-Step Growth Process
          </h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute top-11 right-12 left-12 hidden h-0.5 bg-gradient-to-r from-emerald-200 via-teal-400 to-emerald-200 lg:block"
          />

          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="relative z-10 inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-700 text-base font-extrabold text-white shadow-md shadow-emerald-700/20">
                {item.step}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
