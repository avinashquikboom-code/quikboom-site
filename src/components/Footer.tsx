'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AGENCY_BRAND, SERVICES } from '@/data/agency-data';

export function Footer() {
  const [subMessage, setSubMessage] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<{ email: string }>();

  const onSubscribe = async (values: { email: string }) => {
    setSubMessage(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      setSubMessage(data?.message || 'Subscribed!');
      reset();
    } catch {
      setSubMessage('Unable to subscribe right now.');
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-600">
              <Sparkles className="size-4" />
            </div>
            <span className="text-lg font-extrabold">{AGENCY_BRAND.name}</span>
          </Link>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            Performance-driven digital marketing, custom software engineering, and CRM automation
            built for ambitious businesses.
          </p>
          <div className="mt-5 space-y-1 text-xs text-slate-400">
            <p>{AGENCY_BRAND.email}</p>
            <p>{AGENCY_BRAND.phone}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-xs">
            {[
              ['Home', '/#home'],
              ['About Us', '/#about'],
              ['Portfolio', '/#portfolio'],
              ['Our Team', '/#team'],
              ['Blog', '/#blog'],
              ['Contact Us', '/#contact'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="transition hover:text-emerald-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Top Services</h4>
          <ul className="mt-4 space-y-2.5 text-xs">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition hover:text-emerald-400">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Newsletter</h4>
          <p className="mt-4 text-xs text-slate-400">
            Get actionable SEO, paid ads, and automation insights delivered monthly.
          </p>
          <form onSubmit={handleSubmit(onSubscribe)} className="mt-4 flex gap-2">
            <input
              type="email"
              required
              {...register('email', { required: true })}
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-xl border border-white/15 bg-white/5 px-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="Subscribe"
              className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white transition hover:bg-emerald-500"
            >
              <ArrowRight className="size-4" />
            </button>
          </form>
          {subMessage ? <p className="mt-2 text-xs text-emerald-400">{subMessage}</p> : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 {AGENCY_BRAND.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
