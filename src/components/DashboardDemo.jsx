import { useMemo, useState } from 'react';
import {
  sampleTimeseries,
  sampleFunnel,
  metrics,
  SAMPLE_NOTICE,
} from '../assets/data';

const W = 620;
const H = 240;
const PAD = 16;

function buildPath(values) {
  const max = Math.max(...values) || 1;
  const n = values.length;
  const xFor = (i) => (n === 1 ? W / 2 : (i / (n - 1)) * (W - PAD * 2) + PAD);
  const yFor = (v) => H - PAD - (v / max) * (H - PAD * 2);

  const line = values
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yFor(v).toFixed(1)}`)
    .join(' ');
  const area = `${line} L${xFor(n - 1).toFixed(1)},${H - PAD} L${xFor(0).toFixed(1)},${H - PAD} Z`;
  const points = values.map((v, i) => ({ x: xFor(i), y: yFor(v), v }));
  return { line, area, points, max, peakIndex: values.indexOf(Math.max(...values)) };
}

export default function DashboardDemo() {
  const [active, setActive] = useState('views');

  const series = useMemo(() => sampleTimeseries.map((d) => d[active]), [active]);
  const { line, area, points, peakIndex } = useMemo(() => buildPath(series), [series]);
  const meta = metrics.find((m) => m.key === active);

  const total = series.reduce((a, b) => a + b, 0);
  const avg = Math.round(total / series.length);
  const first = series[0];
  const last = series[series.length - 1];
  const delta = first ? Math.round(((last - first) / first) * 100) : 0;

  return (
    <div
      id="demo"
      className="mx-auto max-w-6xl px-6 lg:px-12 py-20 sm:py-28 scroll-mt-24"
      aria-labelledby="demo-heading"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-10">
        <div>
          <p className="eyebrow text-muted dark:text-muted-dark">Live, in your browser</p>
          <h2 id="demo-heading" className="text-3xl sm:text-4xl font-semibold tracking-tight mt-2">
            A dashboard that actually responds
          </h2>
        </div>
        <p className="text-xs text-muted dark:text-muted-dark max-w-xs leading-relaxed">
          Every chart below is computed on the fly from sample data. Switch the metric — the
          numbers and the curve update instantly.
        </p>
      </div>

      <div className="rounded-3xl border border-line dark:border-line-dark bg-white dark:bg-night-2 shadow-sm overflow-hidden">
        {/* Chart header + metric switch (real tabs) */}
        <div className="flex flex-col gap-4 border-b border-line dark:border-line-dark p-6 sm:p-8 sm:flex-row sm:items-center sm:justify-between">
          <div role="tablist" aria-label="Choose metric" className="inline-flex rounded-full bg-paper-2 dark:bg-night p-1 gap-1 self-start">
            {metrics.map((m) => {
              const selected = m.key === active;
              return (
                <button
                  key={m.key}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="demo-chart"
                  id={`tab-${m.key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(m.key)}
                  onKeyDown={(e) => {
                    const idx = metrics.findIndex((x) => x.key === active);
                    if (e.key === 'ArrowRight') setActive(metrics[(idx + 1) % metrics.length].key);
                    if (e.key === 'ArrowLeft') setActive(metrics[(idx - 1 + metrics.length) % metrics.length].key);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selected
                      ? 'bg-ink text-paper dark:bg-volt dark:text-ink'
                      : 'text-muted hover:text-ink dark:hover:text-paper'
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

          <div className="flex gap-8">
            <Stat label="Total (14d)" value={total.toLocaleString()} unit={meta.unit} />
            <Stat label="Daily avg" value={avg.toLocaleString()} unit={meta.unit} />
            <Stat
              label="Trend"
              value={`${delta > 0 ? '+' : ''}${delta}%`}
              tone={delta >= 0 ? 'up' : 'down'}
            />
          </div>
        </div>

        {/* The chart */}
        <div className="p-6 sm:p-8" id="demo-chart" role="tabpanel" aria-labelledby={`tab-${active}`}>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-64"
            preserveAspectRatio="none"
            role="img"
            aria-label={`${meta.label} over 14 days. Total ${total}, daily average ${avg}, ${delta >= 0 ? 'up' : 'down'} ${Math.abs(delta)}% across the period.`}
          >
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-volt)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--color-volt)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* baseline gridlines */}
            {[0.25, 0.5, 0.75].map((g) => (
              <line
                key={g}
                x1={PAD}
                x2={W - PAD}
                y1={H - PAD - g * (H - PAD * 2)}
                y2={H - PAD - g * (H - PAD * 2)}
                stroke="currentColor"
                className="text-line dark:text-line-dark"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            <path d={area} fill="url(#areaFill)" />
            <path
              d={line}
              fill="none"
              stroke="var(--color-ink)"
              className="dark:opacity-90"
              strokeWidth="2.5"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            {points.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={i === peakIndex ? 5 : 3}
                fill={i === peakIndex ? 'var(--color-volt)' : 'var(--color-ink)'}
                stroke="var(--color-volt)"
                strokeWidth={i === peakIndex ? 0 : 0}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* Funnel */}
          <div className="mt-10">
            <h3 className="eyebrow text-muted dark:text-muted-dark mb-4">Conversion funnel</h3>
            <div className="space-y-3">
              {sampleFunnel.map((f, i) => (
                <div key={f.step} className="flex items-center gap-4">
                  <span className="w-28 shrink-0 text-sm font-medium">{f.step}</span>
                  <div className="h-8 flex-1 rounded-md bg-paper-2 dark:bg-night overflow-hidden">
                    <div
                      className={`h-full rounded-md flex items-center justify-end pr-2 text-[11px] font-semibold ${
                        i === sampleFunnel.length - 1
                          ? 'bg-volt text-ink'
                          : 'bg-ink text-paper dark:bg-ink-2'
                      }`}
                      style={{ width: `${f.value}%` }}
                    >
                      {f.value}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper-2 dark:bg-night px-3 py-1.5 text-[11px] font-medium text-muted dark:text-muted-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-volt-deep" aria-hidden="true" />
            {SAMPLE_NOTICE}
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, unit, tone }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-muted dark:text-muted-dark">{label}</div>
      <div
        className={`text-2xl font-semibold tracking-tight tabular-nums ${
          tone === 'up' ? 'text-volt-deep' : tone === 'down' ? 'text-red-500' : ''
        }`}
      >
        {value}
        {unit && <span className="ml-1 text-xs font-normal text-muted">{unit}</span>}
      </div>
    </div>
  );
}
