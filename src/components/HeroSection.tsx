'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, CheckCircle2, Sparkles, Zap } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{val}{suffix}</span>;
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white pt-14 pb-20 lg:pt-20 lg:pb-28"
    >
      {/* Ambient Decorative Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-24 size-96 rounded-full bg-emerald-200/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 -right-24 size-96 rounded-full bg-teal-200/30 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-800">
            <Sparkles className="size-3.5 text-emerald-600" />
            Full-Stack Digital Growth &amp; Engineering Agency
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
            Transform Your Business Into a{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Powerful Digital Brand.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We combine creative design, smart technology and performance-driven marketing to help
            businesses grow faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition hover:bg-emerald-800"
            >
              Explore Our Services
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-700"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Animated Counters */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-7">
            <div>
              <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                <AnimatedCounter target={180} suffix="+" />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                <AnimatedCounter target={3} suffix=".5x" />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">Average Client ROAS</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                <AnimatedCounter target={98} suffix="%" />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">Client Retention</p>
            </div>
          </div>
        </motion.div>

        {/* Right Abstract 3D-Style Visual Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative lg:col-span-6"
        >
          <div
            className="relative mx-auto max-w-xl rounded-3xl border border-slate-200/80 bg-white p-3 shadow-2xl shadow-emerald-950/10"
            style={{ transform: 'perspective(1200px) rotateY(-4deg) rotateX(2deg)' }}
          >
            <div className="overflow-hidden rounded-2xl bg-slate-900">
              <Image
                src="/images/portfolio-dashboard.png"
                alt="Digital Marketing & Analytics Platform"
                width={900}
                height={620}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating Growth Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <BarChart3 className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">+240% Qualified Leads</p>
                <p className="text-[11px] text-slate-500">SEO, Ads &amp; CRM Automation</p>
              </div>
            </motion.div>

            {/* Floating Tech Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-3 hidden items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-700 px-4 py-2.5 text-white shadow-xl sm:flex"
            >
              <Zap className="size-4 text-emerald-200" />
              <span className="text-xs font-bold">Next.js + AI Automation</span>
            </motion.div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-600" /> Performance Marketing
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-600" /> Custom Web &amp; Mobile Apps
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-600" /> CRM &amp; WhatsApp Funnels
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
