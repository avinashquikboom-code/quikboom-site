export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  features: string[];
}

export interface PricingPlan {
  name: string;
  subtitle: string;
  popular: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  youtubeId: string;
}

export interface Testimonial {
  name: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_DATA = {
  hero: {
    badge: "Official Digital Marketing Agency",
    subBadge: "High-Performance Digital Scale",
    heading1: "We Engineer",
    heading2: "Digital Excellence",
    heading3: "To Accelerate Your Business",
    description: "Elevate your brand with tailored digital strategies — from cinematic web experiences and next-gen mobile platforms to result-driven SEO, brand identities, and high-ROI marketing campaigns.",
    stats: [
      { value: "200%+", label: "Avg. Lead Growth" },
      { value: "140%", label: "Conversion Lift" },
      { value: "99.8%", label: "Client Satisfaction" },
      { value: "24/7", label: "Dedicated SLA Support" }
    ]
  },

  trustedCompanies: [
    "Google", "Amazon", "Microsoft", "Netflix", "Spotify", 
    "Apple", "Tesla", "Meta", "Shopify", "Figma"
  ],

  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description: "High-performance, scalable web applications built with modern architectural frameworks and cinematic visuals.",
      iconName: "Globe",
      tag: "Modern Stack",
      features: ["Next.js & Vite SPAs", "WebGL & 3D Interactive Design", "Enterprise Scalability", "Lightning-Fast Core Web Vitals"]
    },
    {
      id: "app-dev",
      title: "App Development",
      description: "Native and cross-platform mobile apps for iOS and Android engineered for fluid touch experiences and high retention.",
      iconName: "Smartphone",
      tag: "iOS & Android",
      features: ["React Native & Flutter", "Native Performance", "Secure APIs & Offline First", "App Store Optimization"]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Data-driven multi-channel growth campaigns that maximize ROI, lower acquisition costs, and drive sustainable growth.",
      iconName: "TrendingUp",
      tag: "High ROI",
      features: ["Performance Ads (Meta & Google)", "Audience Funnel Architecture", "Conversion Rate Optimization", "Live Attribution Tracking"]
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Dominate search rankings and drive high-intent organic traffic that converts into paying customers.",
      iconName: "Search",
      tag: "Rank #1",
      features: ["Technical Core Web Audits", "High-Intent Keyword Mapping", "High-Authority Backlink Assets", "Google Business Profile Scale"]
    },
    {
      id: "social-media",
      title: "Social Media Strategy",
      description: "Engaging content calendars and cinematic reels that build loyal customer communities and viral brand reach.",
      iconName: "Share2",
      tag: "Viral Reach",
      features: ["High-Impact Reels & Shorts", "Custom Graphic Creatives", "Community Engagement", "Influencer Strategy"]
    },
    {
      id: "marketplace",
      title: "Marketplace Management",
      description: "Optimize operations, product positioning, and catalog ad spend on Amazon, Shopify, Flipkart, and major platforms.",
      iconName: "ShoppingBag",
      tag: "E-Commerce",
      features: ["Amazon A+ Content & SEO", "Shopify Store Optimization", "Marketplace PPC Management", "Inventory & Order Flow Sync"]
    },
    {
      id: "branding",
      title: "Branding & Visual Design",
      description: "Distinctive visual identities, design systems, and art direction that resonate deeply with your target demographic.",
      iconName: "Palette",
      tag: "Brand Identity",
      features: ["Logo & Brand Guidelines", "Typography & Color Palettes", "Marketing Collaterals", "UI/UX Design Systems"]
    },
    {
      id: "ai-automation",
      title: "AI & Workflow Automation",
      description: "Streamline repetitive workflows, customer intake, and sales pipelines with cutting-edge artificial intelligence.",
      iconName: "Cpu",
      tag: "Futuristic",
      features: ["AI Chat & Support Bots", "Automated Lead Routing", "CRM & Pipeline Automation", "Custom LLM Integrations"]
    }
  ] as ServiceItem[],

  whyChoose: {
    badge: "Why Choose QuikBoom",
    headlineMain: "We Don't Just Build Apps, We Build",
    headlineAccent: "Businesses",
    description: "In a crowded digital landscape, we engineer unfair advantages for ambitious brands through precision design, bleeding-edge engineering, and high-impact growth campaigns.",
    pillars: [
      {
        title: "Fast Delivery",
        desc: "Rapid agile sprints delivering production-ready releases on aggressive schedules without cutting corners.",
        icon: "Zap"
      },
      {
        title: "Expert Team",
        desc: "Elite designers, full-stack engineers, and marketing strategists with battle-tested track records.",
        icon: "Users"
      },
      {
        title: "Affordable Pricing",
        desc: "Transparent tiered pricing with no hidden costs, maximizing ROI on every dollar deployed.",
        icon: "ShieldCheck"
      },
      {
        title: "24/7 Dedicated Support",
        desc: "Continuous SLA monitoring, instant ticket resolution, and proactive technical assistance.",
        icon: "Clock"
      },
      {
        title: "Quality Assurance",
        desc: "Rigorous automated testing, cross-browser audits, and zero-defect deployment pipelines.",
        icon: "CheckCircle2"
      },
      {
        title: "Custom Solutions",
        desc: "Tailor-made architectures and growth strategies built specifically around your distinct business goals.",
        icon: "Sparkles"
      }
    ]
  },

  pricing: [
    {
      name: "Basic Package",
      subtitle: "Starter Plan",
      popular: false,
      monthlyPrice: 6999,
      yearlyPrice: 5599,
      features: [
        "2 Social Media Platforms (Instagram + Facebook)",
        "5-10 Static Posts/Month (graphics + captions)",
        "2 Reels / Short Videos per Month",
        "Monthly Performance & Analytics Report",
        "Basic SEO (On-page for up to 5 pages)",
        "1 SEO Blog/Month (500-700 words)",
        "Google Business Profile Setup & Optimization"
      ]
    },
    {
      name: "Standard Package",
      subtitle: "Growth Plan",
      popular: true,
      monthlyPrice: 12999,
      yearlyPrice: 10399,
      features: [
        "3 Platforms (Instagram, Facebook, LinkedIn/YouTube)",
        "12-15 Static/Carousel Posts per Month",
        "4 High-Impact Reels / Short Videos per Month",
        "Curated Monthly Content Calendar",
        "Hashtag & In-Depth Competitor Analysis",
        "2 SEO Long-form Blogs/Month",
        "Monthly Report with Insights + Recommendations",
        "Google My Business Management (Updates + Posts)"
      ]
    },
    {
      name: "Premium Package",
      subtitle: "Scale Plan",
      popular: false,
      monthlyPrice: 25999,
      yearlyPrice: 20799,
      features: [
        "Up to 4 Platforms with Full Coverage",
        "20+ Custom Posts (Static + Infographics + Carousels)",
        "8 High-Quality Reels (with audio transitions & trends)",
        "Video Scripting + Creative Direction",
        "4 Comprehensive Blogs/Month (SEO optimized)",
        "Weekly Content Plan & Strategic Advisory Call",
        "Advanced Analytics & Lead Conversion Tracking",
        "Community Engagement & Light DM Management",
        "Full Local SEO & Google Business Profile Domination"
      ]
    }
  ] as PricingPlan[],

  portfolio: {
    projects: [
      {
        id: "proj-1",
        title: "FinTech Dashboard",
        category: "Web Design",
        image: "/images/portfolio-web.png",
        tags: ["React", "TypeScript", "TailwindCSS", "Financial UI"],
        description: "An ultra-secure, institutional-grade analytics portal for asset managers and trading desks."
      },
      {
        id: "proj-2",
        title: "NeoBank Mobile App",
        category: "Mobile Apps",
        image: "/images/portfolio-mobile.png",
        tags: ["React Native", "iOS & Android", "Banking", "Fintech"],
        description: "A frictionless mobile banking experience with biometric auth and instant payment settlement."
      },
      {
        id: "proj-3",
        title: "Fashion E-Commerce",
        category: "E-Commerce",
        image: "/images/portfolio-ecommerce.png",
        tags: ["Next.js", "Shopify", "Headless", "Design System"],
        description: "High-conversion luxury lifestyle shopping platform featuring sub-second page loads."
      },
      {
        id: "proj-4",
        title: "Analytics Platform",
        category: "Dashboard",
        image: "/images/portfolio-dashboard.png",
        tags: ["Vue / React", "Data Visualization", "Real-Time Metrics"],
        description: "Real-time enterprise intelligence dashboard with custom interactive telemetry charts."
      },
      {
        id: "proj-5",
        title: "HR Management System",
        category: "SaaS",
        image: "/images/portfolio-saas.png",
        tags: ["SaaS Platform", "Cloud Architecture", "RBAC Security"],
        description: "End-to-end workforce operations platform automating payroll, leaves, and team performance."
      },
      {
        id: "proj-6",
        title: "Gourmet Experience",
        category: "Restaurant",
        image: "/images/portfolio-restaurant.png",
        tags: ["Brand Identity", "Interactive Menu", "Booking Engine"],
        description: "Sensory digital destination for Michelin-tier culinary concepts with table reservations."
      }
    ] as PortfolioProject[],

    reels: [
      { id: "r1", title: "Pushpa Knows The Rule", category: "Digital Marketing", duration: "0:30", youtubeId: "VVN1PVUm2PY" },
      { id: "r2", title: "Build Your Brand Identity", category: "Branding", duration: "0:30", youtubeId: "2VvqbY9qxeE" },
      { id: "r3", title: "Every Business Needs Growth", category: "Business Growth", duration: "0:30", youtubeId: "CpbxJoGTdUU" },
      { id: "r4", title: "Get Your Business Online", category: "Digital Marketing", duration: "0:30", youtubeId: "8idbVlrq5DA" },
      { id: "r5", title: "Business Big Or Small", category: "Business Growth", duration: "0:30", youtubeId: "oRi7H7bfqpU" },
      { id: "r6", title: "Leads, Branding & Sales", category: "Digital Marketing", duration: "0:30", youtubeId: "HTxjpTEMhBs" }
    ] as VideoItem[]
  },

  testimonials: [
    {
      name: "Sarah Jenkins",
      company: "TechNova Solutions",
      avatar: "/images/avatar-1.png",
      quote: "QuikBoom completely transformed our online presence. Our conversion rate increased by 140% within the first three months of launching the new site.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Elevate Finance",
      avatar: "/images/avatar-2.png",
      quote: "The mobile app they built for us is flawless. The team was responsive, professional, and delivered ahead of schedule. Highly recommended agency.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Luxe Retail",
      avatar: "/images/avatar-3.png",
      quote: "Their SEO strategies put us on the first page of Google for our most competitive keywords. It's rare to find an agency that actually delivers real results.",
      rating: 5
    },
    {
      name: "David Okafor",
      company: "BrightPath Media",
      avatar: "/images/avatar-4.png",
      quote: "From branding to digital marketing, QuikBoom handled everything seamlessly. Our brand awareness grew 3x in just 6 months. Incredible team!",
      rating: 5
    },
    {
      name: "Anjali Mehta",
      company: "FreshMart India",
      avatar: "/images/avatar-5.png",
      quote: "Working with QuikBoom was a game changer. Their attention to detail and creative approach helped us stand out in a very competitive market.",
      rating: 5
    },
    {
      name: "James Whitfield",
      company: "Apex Ventures",
      avatar: "/images/avatar-6.png",
      quote: "The results speak for themselves — 200% more leads within 90 days. QuikBoom's digital marketing expertise is second to none.",
      rating: 5
    }
  ] as Testimonial[],

  faq: [
    {
      question: "How long does it take to build a website?",
      answer: "A standard business website typically takes 2-4 weeks from kickoff to launch. More complex projects like custom web applications or e-commerce platforms can take 8-12 weeks depending on the specific requirements."
    },
    {
      question: "Do you build native mobile apps?",
      answer: "Yes, we build both native apps (Swift for iOS, Kotlin for Android) and cross-platform apps using frameworks like React Native and Flutter, ensuring optimal performance for your specific use case."
    },
    {
      question: "What is included in your SEO services?",
      answer: "Our SEO services include comprehensive technical audits, keyword research, on-page optimization, high-quality backlink building, content strategy, and monthly performance reporting."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely. We offer various SLA packages to ensure your digital products stay secure, updated, and performant long after the initial launch."
    },
    {
      question: "How does your pricing structure work?",
      answer: "We offer both fixed-price project quotes based on clear scopes of work, and retainer-based pricing for ongoing services like marketing and SEO. We're fully transparent with no hidden fees."
    },
    {
      question: "What is the typical project timeline?",
      answer: "Every project starts with a Discovery phase, followed by Design, Development, Testing, and Deployment. We provide a detailed Gantt chart during onboarding so you know exactly when to expect deliverables."
    }
  ] as FaqItem[],

  contact: {
    headline: "Let's discuss your next project",
    subheadline: "Whether you need a complete digital transformation, a high-converting web application, or targeted growth strategies, our team of experts is ready to help you achieve your goals.",
    officeLocation: {
      title: "Office Location",
      addressLines: [
        "7th Floor, Office No. 711, Shivanta Highstreet,",
        "Gorwa, Vadodara 391330, Gujarat, India"
      ]
    },
    email: {
      title: "Email Us",
      primary: "info@quikboom.in",
      secondary: "support@quikboom.in"
    },
    call: {
      title: "Call Us",
      phone: "+91 (915) 795-9503",
      hours: "Monday – Saturday, 10:00 AM – 7:00 PM IST"
    },
    whatsapp: {
      title: "WhatsApp",
      phone: "+91 (915) 795-9503",
      rawNumber: "919157959503",
      note: "Instant replies during business hours"
    }
  },

  legal: {
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "January 1, 2026",
      content: `At QuikBoom, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.

Information We Collect
We collect information you provide directly to us, such as your name, email address, phone number, and project details when you sign up for our services or contact us.

How We Use Your Information
We use the information we collect to provide, maintain, and improve our services, communicate with you regarding proposals, project milestones, and comply with legal obligations.

Data Security
We implement industry-standard encryption, SSL protocols, and restricted access measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.

Contact Us
If you have any questions about this Privacy Policy, please contact us at info@quikboom.in.`
    },
    termsOfService: {
      title: "Terms of Service",
      lastUpdated: "January 1, 2026",
      content: `Welcome to QuikBoom. By accessing or using our website and services, you agree to be bound by these Terms of Service.

Use of Services
You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any client credentials.

Payments & Deliverables
All service retainers and milestone invoices are due as agreed upon in formal project statements of work. Scope changes are documented and approved mutually.

Intellectual Property
Upon full settlement of project fees, all bespoke code, custom graphics, and final deliverables become the client's intellectual property.

Limitation of Liability
QuikBoom shall not be liable for any indirect, incidental, or consequential business damages arising from third-party server outages or external API changes.`
    },
    cookiePolicy: {
      title: "Cookie Policy",
      lastUpdated: "January 1, 2026",
      content: `This Cookie Policy explains how QuikBoom uses cookies and similar technologies to enhance your experience.

What Are Cookies
Cookies are small data files placed on your device that help us understand navigation patterns, optimize load speed, and remember your display preferences.

Managing Cookies
Most web browsers allow you to control or disable cookies through their settings. You can choose to block or delete cookies at any time.`
    }
  }
};
