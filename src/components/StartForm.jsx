import { useState } from 'react';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function StartForm() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | submitting | success
  const [error, setError] = useState('');

  function validate() {
    if (!email.trim()) return 'Enter your work email to continue.';
    if (!EMAIL_RE.test(email.trim())) return 'That email address does not look right.';
    return '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = validate();
    if (msg) {
      setError(msg);
      setStatus('error');
      return;
    }
    setError('');
    setStatus('submitting');
    // No backend exists for this demo. Simulate a short async save, then
    // show a clearly-labelled success state. Nothing is sent or stored.
    window.setTimeout(() => setStatus('success'), 900);
  }

  return (
    <section
      id="start"
      className="border-t border-line dark:border-line-dark bg-ink text-paper dark:bg-night-2 py-20 sm:py-28"
      aria-labelledby="start-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <p className="eyebrow text-volt">Get started</p>
          <h2 id="start-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl leading-[1.15]">
            Set up Clayo on your product in minutes
          </h2>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-zinc-300">
            Add the SDK, define your first events, and watch funnels build themselves. No credit
            card, no cookies, and your data stays exportable from day one.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-zinc-300">
            {['1 SDK call to capture events', 'Realtime dashboards out of the box', 'Cancel and export anytime'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-volt" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-paper text-ink p-8 sm:p-10 dark:bg-night dark:text-paper border border-line dark:border-line-dark">
          {status === 'success' ? (
            <div role="status" aria-live="polite" className="flex h-full flex-col items-start justify-center gap-4 py-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-volt text-ink">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-semibold">You're on the list</h3>
              <p className="text-sm text-body dark:text-body-dark max-w-sm">
                Thanks, {email}. This is a demo form — your details were validated in your
                browser and <strong>not sent or stored anywhere</strong>.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setEmail('');
                  setRole('');
                }}
                className="btn-ghost mt-2"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? 'email-error' : undefined}
                  placeholder="you@company.com"
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 dark:bg-night-2 dark:text-paper ${
                    status === 'error'
                      ? 'border-red-500'
                      : 'border-line focus:border-ink dark:border-line-dark dark:focus:border-volt'
                  }`}
                />
                {status === 'error' && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                    {error}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-1.5">
                  Your role <span className="text-muted">(optional)</span>
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  autoComplete="organization-title"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Product, engineering, growth…"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-ink dark:border-line-dark dark:bg-night-2 dark:text-paper dark:focus:border-volt"
                />
              </div>

              <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-70">
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Setting up…
                  </>
                ) : (
                  <>
                    Request access <ArrowRight size={16} />
                  </>
                )}
              </button>

              <p className="text-[11px] leading-relaxed text-muted dark:text-muted-dark">
                Demo form: input is validated locally in your browser only. Nothing is transmitted
                or stored, and we never ask for passwords here.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
