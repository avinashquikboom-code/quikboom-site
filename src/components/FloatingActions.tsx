'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { AGENCY_BRAND } from '@/data/agency-data';

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {showTop ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-lg transition hover:border-emerald-600 hover:text-emerald-700"
        >
          <ArrowUp className="size-5" />
        </button>
      ) : null}

      <a
        href={`https://wa.me/${AGENCY_BRAND.whatsappNumber}?text=${encodeURIComponent('Hi! I would like to discuss a digital growth project.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-13 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 transition hover:scale-105 hover:bg-emerald-700"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
