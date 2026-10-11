import { motion } from 'framer-motion';
import { Lock, Database, Eye } from 'lucide-react';
import { principles } from '../assets/data';

const icons = [Lock, Database, Eye];

export default function Privacy() {
  return (
    <section id="privacy" className="py-20 sm:py-28" aria-labelledby="privacy-heading">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <p className="eyebrow text-muted dark:text-muted-dark">Privacy &amp; ownership</p>
          <h2 id="privacy-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl leading-[1.15]">
            Analytics that respect your users — and your independence
          </h2>
          <p className="mt-5 max-w-xl text-sm sm:text-base font-light leading-relaxed text-body dark:text-body-dark">
            Most analytics tools trade insight for surveillance and lock you in with data you
            can barely get out. Clayo is built the other way around: collect only what you need,
            keep it legible, and hand it back whenever you ask.
          </p>
          <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-body dark:text-body-dark">
            These are the commitments we design against — not marketing claims, but the defaults
            you get the moment you install the SDK.
          </p>
        </div>

        <div className="space-y-4">
          {principles.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 rounded-2xl border border-line dark:border-line-dark bg-white dark:bg-night p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper-2 dark:bg-night-2 text-ink dark:text-volt">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink dark:text-paper">{p.label}</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-body dark:text-body-dark">
                    {p.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
