import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '../assets/data';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Articles() {
  return (
    <section
      id="insights"
      className="border-t border-line dark:border-line-dark py-20 sm:py-28"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <p className="eyebrow text-muted dark:text-muted-dark">Insights</p>
            <h2 id="insights-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
              Notes from building Clayo
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-body dark:text-body-dark">
            Short, honest writing about product, privacy, and the engineering behind fast
            analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#insights"
                onClick={(e) => e.preventDefault()}
                aria-disabled="true"
                title="Article content is illustrative for this demo site"
                className="group flex h-full cursor-default flex-col rounded-2xl border border-line dark:border-line-dark bg-white dark:bg-night p-7 transition-colors hover:border-ink dark:hover:border-volt"
              >
                <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-muted dark:text-muted-dark">
                  <span className="rounded bg-paper-2 dark:bg-night-2 px-2 py-0.5 text-body dark:text-body-dark">
                    {a.tag}
                  </span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-ink dark:text-paper">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-body dark:text-body-dark">
                  {a.desc}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted dark:text-muted-dark">
                  <time dateTime={a.date}>{formatDate(a.date)}</time>
                  <ArrowUpRight size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted dark:text-muted-dark">
          These posts are example entries written for this demo — they describe Clayo's design
          thinking rather than linking to a live blog.
        </p>
      </div>
    </section>
  );
}
