import { BarChart3,Sliders,Smartphone} from "lucide-react";

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

  // Team Section Data
  const team = [
    { name: "Ava Summers", role: "Chief Marketing Officer", img: "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFic3RyYWN0JTIwZ3JhZGllbnRzfGVufDB8fDB8fHww" },
    { name: "Noah Carter", role: "Product Marketing Lead", img: "https://images.unsplash.com/photo-1579546928937-641f7ac9bced?q=80&w=639&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mia Patel", role: "UX Strategy Director", img: "https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Leo Chen", role: "Growth Operations Manager", img: "https://images.unsplash.com/photo-1646038572815-43fe759e459b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ethan Brooks", role: "Content Strategy Director", img: "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sophia Lee", role: "Brand Experience Specialist", img: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Advisory has been a game-changer for our business. With its comprehensive financial management tools, we've been able to streamline our processes and make more informed decisions. The customer support team is also top-notch.",
      image: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBncmFkaWVudHN8ZW58MHx8MHx8fDA%3D",
      author: "John Doe",
      title: "CEO, Tech Innovations"
    },
    {
      quote: "Advisory has been a game-changer for our business. With its comprehensive financial management tools, we've been able to streamline our processes and make more informed decisions. The customer support team is also top-notch.",
      image: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBncmFkaWVudHN8ZW58MHx8MHx8fDA%3D",
      author: "John Doe",
      title: "CEO, Tech Innovations"
    },
    {
      quote: "Advisory has been a game-changer for our business. With its comprehensive financial management tools, we've been able to streamline our processes and make more informed decisions. The customer support team is also top-notch.",
      image: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBncmFkaWVudHN8ZW58MHx8MHx8fDA%3D",
      author: "John Doe",
      title: "CEO, Tech Innovations"
    }
  ];

  // Articles/Insights Data
  const articles = [
    {
      tag: "Finance",
      title: "The Ultimate Guide to Budgeting in 2024",
      desc: "Master the art of budgeting with our comprehensive guide. Learn how to create a budget that works for you.",
      img: "https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      tag: "Finance",
      title: "Top Investment Strategies for Long-Term Growth",
      desc: "Discover the best investment strategies to build and monitor your wealth over time. From stocks to bonds.",
      img: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBncmFkaWVudHN8ZW58MHx8MHx8fDA%3D"
    },
    {
      tag: "Finance",
      title: "Understanding Cryptocurrency: What You Need to Know",
      desc: "Cryptocurrency continues to make headlines, but what does it mean for your finances? Get a clear understanding of trends.",
      img: "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  export { features, team, testimonials, articles };