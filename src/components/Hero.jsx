import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, ease: [0.16, 1, 0.3, 1] } },
};
const item = {
  hidden: { y: 22, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="top" className="relative overflow-hidden">
      {/* editorial grid backdrop */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-line dark:text-line-dark opacity-70"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-4xl px-6 pt-24 pb-16 text-center sm:pt-32 sm:pb-24"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line dark:border-line-dark bg-white/60 dark:bg-night-2/60 px-3 py-1.5 text-xs font-medium text-body dark:text-body-dark backdrop-blur">
            <ShieldCheck size={14} className="text-volt-deep" />
            Cookieless by default
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl font-semibold tracking-tight leading-[1.05] text-ink dark:text-paper sm:text-7xl"
        >
          Product analytics
          <br />
          with the noise removed
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-body dark:text-body-dark sm:text-lg"
        >
          Clayo turns raw product events into funnels, retention, and answers your team can
          trust — without cookies, dashboard clutter, or data lock-in.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={() => scrollTo('start')} className="btn-primary w-full sm:w-auto">
            Start free <ArrowRight size={16} />
          </button>
          <button onClick={() => scrollTo('demo')} className="btn-ghost w-full sm:w-auto">
            Explore the live demo
          </button>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 text-xs text-muted dark:text-muted-dark font-mono uppercase tracking-wider"
        >
          No credit card · Setup in minutes · Export anytime
        </motion.p>
      </motion.div>
    </section>
  );
}
