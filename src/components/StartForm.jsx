import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// CTA band that gives the template's "Get Started" buttons a real
// destination. Validation states are reused from the previous iteration,
// restyled to the project's original zinc/black design language.
export default function StartForm({ darkMode }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | submitting | success

  const submit = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error');
      return;
    }
    // No backend exists for this project yet: the request is not sent or
    // stored anywhere, and the UI says so honestly after the local check.
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 900);
  };

  return (
    <section id="get-started" className={`py-24 mx-auto max-w-7xl px-6 lg:px-12 ${darkMode ? 'bg-[#0B0B0B]' : ''}`}>
      <div className={`${darkMode ? 'bg-[#111111] border-zinc-800' : 'bg-[#F5F5F5] border-zinc-200/60'} border rounded-[2.5rem] px-6 py-16 sm:px-12 text-center`}>
        <div className={`flex items-center justify-center gap-2 text-xs font-medium tracking-wide uppercase mb-4 ${darkMode ? 'text-zinc-400' : 'text-zinc-400'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span>Get started</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-semibold tracking-tight mb-3 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
          See your numbers clearly
        </h2>
        <p className={`text-sm font-light max-w-md mx-auto leading-relaxed mb-8 ${darkMode ? 'text-zinc-300' : 'text-zinc-500'}`}>
          Leave your email and we'll reach out when Kyorva opens early access.
        </p>

        {status === 'success' ? (
          <p role="status" className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            Thanks — you're on the list for early access.
          </p>
        ) : (
          <form onSubmit={submit} noValidate className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="waitlist-email" className="sr-only">Work email</label>
              <input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                placeholder="you@company.com"
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'waitlist-error' : undefined}
                className={`flex-1 text-sm px-5 py-3.5 rounded-full border outline-none transition-colors ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-400'
                    : 'bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500'
                }`}
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-zinc-800 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : <>Notify me <ArrowUpRight size={14} /></>}
              </button>
            </div>
            {status === 'error' && (
              <p id="waitlist-error" role="alert" className={`text-xs mt-3 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                Please enter a valid email address.
              </p>
            )}
          </form>
        )}

        <p className={`text-[10px] font-light mt-6 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
          Demo form — this site has no backend yet, so nothing is sent or stored.
        </p>
      </div>
    </section>
  );
}
