'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '@/data/agency-data';

export function TeamSection() {
  return (
    <section id="team" className="bg-slate-50/80 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Strategists, Designers &amp; Engineers Driving Your Growth
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto size-24 overflow-hidden rounded-full border-2 border-emerald-100">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{member.name}</h3>
              <p className="mt-0.5 text-xs font-semibold text-emerald-700">{member.role}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
