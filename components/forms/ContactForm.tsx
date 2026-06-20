'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { FaSpinner, FaPaperPlane } from 'react-icons/fa';

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email'),
  phone:   z.string().regex(/^[+\d\s\-()]{7,20}$/, 'Enter a valid phone number').optional().or(z.literal('')),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

// Replace YOUR_FORM_ID with your actual Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Submission failed');
      toast.success("Message sent! We'll be in touch shortly.", {
        style: { background: '#fff', color: '#111827', border: '1px solid #22C55E' },
        iconTheme: { primary: '#22C55E', secondary: '#fff' },
      });
      reset();
    } catch {
      toast.error('Something went wrong. Please try again.', {
        style: { background: '#fff', color: '#111827', border: '1px solid #EF4444' },
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputBase =
    'block w-full rounded-xl border bg-white dark:bg-gray-800 px-4 py-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-200 focus:ring-2';
  const inputNormal =
    'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:ring-brand-blue/25 focus:border-brand-blue';
  const inputError =
    'border-red-400 focus:ring-red-400/25 focus:border-red-400';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Full Name <span style={{ color: '#1565C0' }}>*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Smith"
            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
            {...register('name')}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email Address <span style={{ color: '#1565C0' }}>*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@company.com"
            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
            {...register('email')}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
            {...register('phone')}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Subject <span style={{ color: '#1565C0' }}>*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Project Inquiry"
            className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
            {...register('subject')}
          />
          {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
          Message <span style={{ color: '#1565C0' }}>*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Describe your project or inquiry..."
          className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
          {...register('message')}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold text-white
                   transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
                   disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
      >
        {isSubmitting ? (
          <><FaSpinner className="animate-spin" /> Sending…</>
        ) : (
          <><FaPaperPlane className="text-xs" /> Send Message</>
        )}
      </button>
    </form>
  );
}
