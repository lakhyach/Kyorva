import { motion } from 'framer-motion';
import { features } from '../assets/data';

export default function Features() {
  return (
    <section
      id="product"
      className="border-y border-line dark:border-line-dark bg-paper-2/40 dark:bg-night-2/40 py-20 sm:py-28"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-muted dark:text-muted-dark">What Clayo does</p>
          <h2 id="product-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Everything you need to understand behaviour
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-body dark:text-body-dark">
            A focused toolkit for product teams — capture, analyse, and act on user behaviour
            with tooling that stays out of your way.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between rounded-2xl border border-line dark:border-line-dark bg-white dark:bg-night p-7 min-h-[220px] transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-volt dark:bg-volt dark:text-ink transition-transform group-hover:scale-105">
                  <Icon size={20} />
                </div>
                <div className="mt-6">
                  <h3 className="text-base font-semibold text-ink dark:text-paper">{f.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-body dark:text-body-dark">
                    {f.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
