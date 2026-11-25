'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { AGENCY_BRAND, SERVICES } from '@/data/agency-data';

interface EnquiryFormValues {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  budget: string;
  message: string;
}

export function ContactSection() {
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    defaultValues: {
      service: SERVICES[0].title,
      budget: '₹50,000 – ₹1,50,000',
    },
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setStatusMessage(null);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || 'Could not submit enquiry. Please try again.');
      }
      setStatusMessage({
        type: 'success',
        text: data?.message || 'Thank you! Your enquiry has been saved and our team will reach out shortly.',
      });
      reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to send enquiry.';
      setStatusMessage({ type: 'error', text: msg });
    }
  };

  return (
    <section id="contact" className="bg-slate-50/90 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Info & Map */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Start a Project
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Let&apos;s Build Your Next Growth Engine
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Share your goals and our strategists will prepare a tailored growth and technology
                roadmap within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${AGENCY_BRAND.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 transition hover:bg-emerald-100"
              >
                <MessageCircle className="size-5 text-emerald-700" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">WhatsApp Direct</p>
                  <p className="text-sm font-bold">{AGENCY_BRAND.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${AGENCY_BRAND.email}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-800 transition hover:border-emerald-300"
              >
                <Mail className="size-5 text-emerald-700" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Us</p>
                  <p className="text-sm font-bold">{AGENCY_BRAND.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-800">
                <MapPin className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Office Address</p>
                  <p className="text-sm font-medium text-slate-700">{AGENCY_BRAND.address}</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <iframe
                title="Office Location Map"
                src={AGENCY_BRAND.mapEmbedUrl}
                loading="lazy"
                className="h-48 w-full border-0"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
            >
              <h3 className="text-xl font-bold text-slate-900">Request a Free Consultation</h3>

              {statusMessage ? (
                <div
                  role="alert"
                  className={`flex items-start gap-2.5 rounded-xl border p-3.5 text-xs font-semibold ${
                    statusMessage.type === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : 'border-rose-200 bg-rose-50 text-rose-700'
                  }`}
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                  <span>{statusMessage.text}</span>
                </div>
              ) : null}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">Full Name *</label>
                  <input
                    {...register('fullName', { required: 'Full name is required' })}
                    placeholder="Rahul Sharma"
                    className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-emerald-600"
                  />
                  {errors.fullName ? <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p> : null}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Valid email is required' })}
                    placeholder="rahul@company.com"
                    className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-emerald-600"
                  />
                  {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p> : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">Phone Number *</label>
                  <div className="relative mt-1.5">
                    <Phone className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate-400" />
                    <input
                      {...register('phone', { required: 'Phone number is required' })}
                      placeholder="+91 98765 43210"
                      className="h-11 w-full rounded-xl border border-slate-200 pr-3.5 pl-10 text-sm outline-none focus:border-emerald-600"
                    />
                  </div>
                  {errors.phone ? <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p> : null}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700">Company Name</label>
                  <input
                    {...register('companyName')}
                    placeholder="Acme Industries"
                    className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">Service Interested In</label>
                  <select
                    {...register('service')}
                    className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-emerald-600"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700">Project Budget</label>
                  <select
                    {...register('budget')}
                    className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-emerald-600"
                  >
                    <option value="Under ₹50,000">Under ₹50,000</option>
                    <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
                    <option value="₹1,50,000 – ₹5,00,000">₹1,50,000 – ₹5,00,000</option>
                    <option value="₹5,00,000+">₹5,00,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">Message *</label>
                <textarea
                  rows={4}
                  {...register('message', { required: 'Please share a brief note about your project' })}
                  placeholder="Tell us about your goals, timeline, and current challenges..."
                  className="mt-1.5 w-full rounded-xl border border-slate-200 p-3.5 text-sm outline-none focus:border-emerald-600"
                />
                {errors.message ? <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p> : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800 disabled:opacity-60"
              >
                <Send className="size-4" />
                {isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
