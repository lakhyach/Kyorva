import { BarChart3, Sliders, Smartphone } from "lucide-react";

// Product features (original template copy, kept as the project's concept)
const features = [
  {
    icon: BarChart3,
    title: "Real-time analytics",
    desc: "Gain actionable insights with our real-time analytics platform."
  },
  {
    icon: Sliders,
    title: "Customizable reports",
    desc: "Tailor your financial overviews with automated workflows."
  },
  {
    icon: Smartphone,
    title: "Mobile accessibility",
    desc: "Manage your finances on the go with our mobile-friendly platform."
  }
];

// Honest product-approach statements in the testimonial layout.
// No invented customers or quotes. (The old `team` export lived here;
// it was replaced by the UseCases section once personal names came down.)
const testimonials = [
  {
    quote: "Numbers should arrive the moment you ask a question — dashboards that wait until tomorrow answer nothing.",
    author: "Principle",
    title: "Real-time by default"
  },
  {
    quote: "Every report should be reshaped by the person reading it, not locked behind a vendor's definition of useful.",
    author: "Principle",
    title: "Reports you own"
  },
  {
    quote: "A financial overview is only trustworthy if it works as clearly on a phone as it does on a trading desk.",
    author: "Principle",
    title: "Consistent on mobile"
  }
];

// Article teasers keep the template's finance topics. `art` is a local CSS
// gradient in place of the previous Unsplash hotlinks (abstract-gradient art,
// same visual role, zero external requests).
const articles = [
  {
    tag: "Finance",
    title: "The Ultimate Guide to Budgeting in 2026",
    desc: "Master the art of budgeting with our comprehensive guide. Learn how to create a budget that works for you.",
    art: "from-[#c7d2fe] via-[#e0e7ff] to-[#fecdd3]"
  },
  {
    tag: "Finance",
    title: "Top Investment Strategies for Long-Term Growth",
    desc: "Discover the best investment strategies to build and monitor your wealth over time. From stocks to bonds.",
    art: "from-[#fbcfe8] via-[#ede9fe] to-[#bfdbfe]"
  },
  {
    tag: "Finance",
    title: "Understanding Cryptocurrency: What You Need to Know",
    desc: "Cryptocurrency continues to make headlines, but what does it mean for your finances? Get a clear understanding of trends.",
    art: "from-[#d9f99d] via-[#fef9c3] to-[#fbcfe8]"
  }
];

export { features, testimonials, articles };
