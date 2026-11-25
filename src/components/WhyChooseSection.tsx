'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Headphones, Sliders, Target, Users } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/data/agency-data';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Target,
  Cpu,
  Eye,
  Headphones,
  Sliders,
};

export function WhyChooseSection() {
  return (
    <section className="bg-slate-950 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built for Speed, Transparency &amp; Long-Term ROI
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            We operate as an accountable growth partner—combining senior strategists, engineers,
            and creative specialists under one roof.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName] || Target;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xs transition hover:border-emerald-500/50 hover:bg-white/[0.07]"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
