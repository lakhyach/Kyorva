import {
  Activity,
  Filter,
  Users,
  ShieldCheck,
  Gauge,
  Plug,
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────
   MARKETING CONTENT — original, honest descriptions of Clayo
   as a product. No fabricated customers, quotes, or metrics.
   ──────────────────────────────────────────────────────────── */

export const features = [
  {
    icon: Activity,
    title: 'Event tracking',
    desc: 'Capture every product interaction with a single lightweight SDK. Events stream in real time and are queryable the moment they land.',
  },
  {
    icon: Filter,
    title: 'Funnels & conversion',
    desc: 'Build multi-step funnels without SQL. See exactly where users drop off and how each step converts, segment by segment.',
  },
  {
    icon: Users,
    title: 'Retention cohorts',
    desc: 'Understand which users come back and why. Cohort retention is computed automatically from your event stream.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy by design',
    desc: 'Cookieless collection, IP anonymisation, and data residency controls. No third-party trackers, no ad-tech baggage.',
  },
  {
    icon: Gauge,
    title: 'Sub-second queries',
    desc: 'A columnar event store keeps dashboards responsive even on hundreds of millions of events. Answers in the time you think.',
  },
  {
    icon: Plug,
    title: 'Open integrations',
    desc: 'Export to your warehouse, sync with common tools, or query the REST API. Your data stays portable — no lock-in.',
  },
];

/* Honest product principles — not fabricated social proof. */
export const principles = [
  {
    label: 'No cookies',
    detail: 'Identification uses first-party, privacy-safe tokens — never cross-site tracking cookies.',
  },
  {
    label: 'You own the data',
    detail: 'Raw events are exportable at any time in open formats. Leave whenever you want, with everything.',
  },
  {
    label: 'Readable by default',
    detail: 'Every metric shows its definition and source so the number on screen means what you think it means.',
  },
];

/* Written insight posts — real authored content for the demo site. */
export const articles = [
  {
    tag: 'Product',
    readTime: '4 min',
    title: 'Why we made retention cohorts the first thing you see',
    desc: 'Most teams do not need more charts — they need to know which users come back. Here is the reasoning behind our default dashboard.',
    date: '2026-09-18',
  },
  {
    tag: 'Privacy',
    readTime: '6 min',
    title: 'Cookieless analytics without losing the plot',
    desc: 'A practical look at how Clayo attributes behaviour to product decisions while staying fully cookie-free and GDPR-friendly.',
    date: '2026-08-02',
  },
  {
    tag: 'Engineering',
    readTime: '5 min',
    title: 'Making a columnar event store feel instant in the browser',
    desc: 'Query planning, pre-aggregation, and the small rendering decisions that keep big dashboards under a second.',
    date: '2026-07-11',
  },
];

export const navLinks = [
  { id: 'product', label: 'Product' },
  { id: 'demo', label: 'Live demo' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'insights', label: 'Insights' },
];

/* ────────────────────────────────────────────────────────────
   ILLUSTRATIVE SAMPLE DATA for the interactive demo.
   Synthetic and deterministic — clearly labelled in the UI.
   ──────────────────────────────────────────────────────────── */

export const SAMPLE_NOTICE =
  'Illustrative sample data generated in your browser. Not live production metrics.';

// 14 synthetic days of events per metric (deterministic, no randomness).
export const sampleTimeseries = [
  { day: 'Mon', views: 1240, signups: 96, purchases: 34 },
  { day: 'Tue', views: 1580, signups: 112, purchases: 41 },
  { day: 'Wed', views: 1490, signups: 104, purchases: 38 },
  { day: 'Thu', views: 1820, signups: 138, purchases: 52 },
  { day: 'Fri', views: 1675, signups: 121, purchases: 47 },
  { day: 'Sat', views: 1120, signups: 74, purchases: 28 },
  { day: 'Sun', views: 1010, signups: 68, purchases: 22 },
  { day: 'Mon', views: 1730, signups: 131, purchases: 49 },
  { day: 'Tue', views: 1980, signups: 152, purchases: 61 },
  { day: 'Wed', views: 2120, signups: 168, purchases: 72 },
  { day: 'Thu', views: 2050, signups: 160, purchases: 69 },
  { day: 'Fri', views: 2240, signups: 178, purchases: 80 },
  { day: 'Sat', views: 1610, signups: 108, purchases: 44 },
  { day: 'Sun', views: 1490, signups: 99, purchases: 39 },
];

export const metrics = [
  { key: 'views', label: 'Product views', unit: 'events' },
  { key: 'signups', label: 'Trial signups', unit: 'users' },
  { key: 'purchases', label: 'Paid conversions', unit: 'orders' },
];

export const sampleFunnel = [
  { step: 'Visited', value: 100 },
  { step: 'Signed up', value: 61 },
  { step: 'Activated', value: 38 },
  { step: 'Subscribed', value: 19 },
];
