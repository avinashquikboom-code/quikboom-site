'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Compass, Rocket, ShieldCheck } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-50/70 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Visual Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative lg:col-span-6"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
            <Image
              src="/images/portfolio-saas.png"
              alt="Agency Strategy and Engineering"
              width={800}
              height={560}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
              <Award className="size-5 text-emerald-700" />
              <p className="mt-2 text-xl font-extrabold text-slate-900">8+ Years</p>
              <p className="text-xs text-slate-500">Digital &amp; Product Excellence</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
              <ShieldCheck className="size-5 text-emerald-700" />
              <p className="mt-2 text-xl font-extrabold text-slate-900">100% Transparent</p>
              <p className="text-xs text-slate-500">Data-Backed Attribution</p>
            </div>
          </div>
        </motion.div>

        {/* Copy Right */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            About Our Agency
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Creative Thinking. Smart Technology. Measurable Growth.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We are a multidisciplinary digital marketing and software engineering agency helping
            ambitious brands bridge the gap between attention and automated revenue. Instead of
            treating design, marketing, and engineering as silos, we build unified growth systems.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Compass className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Our Vision</h3>
                <p className="mt-1 text-sm text-slate-600">
                  To empower growing enterprises with the creative polish and smart automation of
                  category-leading digital brands.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Rocket className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Our Mission</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Deliver measurable customer acquisition, high-speed digital products, and seamless
                  CRM workflows that compound ROI month over month.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
