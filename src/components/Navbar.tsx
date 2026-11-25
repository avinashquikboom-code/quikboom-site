'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { AGENCY_BRAND, SERVICES } from '@/data/agency-data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-white/75 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/20">
            <Sparkles className="size-5" />
          </div>
          <div>
            <span className="block text-lg font-extrabold tracking-tight text-slate-900">
              {AGENCY_BRAND.name}
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
              Growth &amp; Tech
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
          <Link href="/#home" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-700">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-700">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="inline-flex items-center gap-1 py-2 text-sm font-semibold text-slate-700 transition hover:text-emerald-700"
            >
              Services
              <ChevronDown className={`size-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen ? (
              <div className="absolute top-full left-1/2 z-50 w-[560px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
                <div className="grid grid-cols-2 gap-1.5">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="rounded-xl px-3 py-2 text-left transition hover:bg-emerald-50"
                    >
                      <p className="text-xs font-bold text-slate-900">{s.title}</p>
                      <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-500">{s.shortDesc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <Link href="/#portfolio" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-700">
            Portfolio
          </Link>
          <Link href="/#team" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-700">
            Our Team
          </Link>
          <Link href="/#blog" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-700">
            Blog
          </Link>
          <Link href="/#contact" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-700">
            Contact Us
          </Link>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-emerald-700 sm:inline-flex"
          >
            Get a Free Consultation
            <ArrowRight className="size-3.5" />
          </Link>
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col space-y-2.5">
            {[
              ['Home', '/#home'],
              ['About Us', '/#about'],
              ['Services', '/#services'],
              ['Portfolio', '/#portfolio'],
              ['Our Team', '/#team'],
              ['Blog', '/#blog'],
              ['Contact Us', '/#contact'],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-emerald-50"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-bold text-white"
            >
              Get a Free Consultation
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
