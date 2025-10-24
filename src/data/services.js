import {
  Code2,
  Palette,
  Zap,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Globe,
  Layers,
  Package,
  GitBranch,
  Settings,
  Code,
  Headphones,
  DollarSign,
  FileText
} from "lucide-react";
import { ArrowRight, ExternalLink, TrendingUp, Clock, Award } from 'lucide-react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

const services = [
  {
    title: "Web Development",
    titleHighlight: "Services",
    subtitle: "Build Your Digital Future",
    description:
      "Create fast, scalable, and user-focused web experiences that drive results and stand out in a digital-first world.",
    ctaText: "Start Your Project 🚀",
    ctaLink: "/contact",
    secondaryCta: {
      text: "View Portfolio",
      link: "/portfolio",
    },
    badge: {
      icon: "💻",
      text: "Professional Web Development",
    },
    features: [
      "Next.js & React",
      "Mobile Responsive",
      "SEO Optimized",
      "Lightning Fast",
    ],
    stats: [
      { number: "50+", label: "Projects Delivered" },
      { number: "<2s", label: "Average Load Time" },
      { number: "98%", label: "Client Satisfaction" },
    ],
    gradient: {
      primary: "rgba(16,185,129,0.08)",
      accent: "#6ee7b7",
      badge: "emerald",
      badgeShadow: "rgba(16,185,129,0.5)",
      text: "from-emerald-400 to-emerald-600",
    },
    seo: {
      title: "Professional Web Development Services in Coimbatore | Truelyzer",
      description:
        "Expert web development services using Next.js, React, and modern technologies. Build fast, scalable websites in Coimbatore, Tamil Nadu.",
      keywords: "web development, Next.js, React, Coimbatore, Tamil Nadu",
    },
    overview: {
      heading: {
        badge: "What We Deliver",
        title: "Comprehensive Web",
        highlight: "Development Solutions",
      },
      description:
        "At Truelyzer, we craft digital experiences that blend creativity, technology, and strategy. Our approach focuses on building performance-driven websites that not only look great but deliver measurable results for your business.",
      highlights: [
        {
          icon: "⚡",
          title: "Custom Web Applications",
          description:
            "Tailored solutions built to your unique business goals, scalable architecture, and future-ready technology stack.",
        },
        {
          icon: "🧠",
          title: "Full-Stack Development",
          description:
            "Seamless front-end and back-end integration using React, Next.js, Node.js, and modern databases.",
        },
        {
          icon: "🔗",
          title: "API Integration",
          description:
            "Connect your systems for powerful automation. Third-party APIs, custom endpoints, and webhooks.",
        },
        {
          icon: "🛍️",
          title: "CMS & E-commerce Solutions",
          description:
            "Scalable, user-friendly, and secure platforms with payment gateways and inventory management.",
        },
      ],
      gradient: {
        primary: "rgba(16,185,129,0.1)",
        secondary: "rgba(59,130,246,0.1)",
        badge: "emerald",
        text: "from-emerald-400 to-teal-400",
        card: "from-emerald-500/10 to-teal-500/10",
        icon: "from-emerald-500 to-teal-600",
      },
    },
    caseStudies: {
      heading: {
        badge: "Success Stories",
        title: "Projects We've Built",
        highlight: "With These Technologies",
      },
      description:
        "Explore how Truelyzer has helped businesses grow with modern, performance-first web solutions that drive real results.",
      showStats: true,
      projects: [
        {
          title: "E-commerce Redefined",
          description:
            "Built a blazing-fast online shopping experience with Next.js, Tailwind, and GraphQL for a global fashion brand.",
          image: "/images/work1.jpg",
          category: "E-commerce",
          link: "/portfolio/ecommerce-fashion",
          tags: ["Next.js", "Tailwind", "GraphQL"],
          stats: [
            { icon: TrendingUp, value: "150%", label: "Sales Increase" },
            { icon: Clock, value: "1.2s", label: "Load Time" },
          ],
        },
        {
          title: "SaaS Dashboard Platform",
          description:
            "Developed a secure, scalable dashboard for a B2B SaaS company with real-time analytics and API integrations.",
          image: "/images/work2.jpg",
          category: "SaaS",
          link: "/portfolio/saas-dashboard",
          tags: ["React", "Node.js", "MongoDB"],
          stats: [
            { icon: Award, value: "5000+", label: "Active Users" },
            { icon: TrendingUp, value: "99.9%", label: "Uptime" },
          ],
        },
        {
          title: "Creative Agency Website",
          description:
            "Delivered a minimal yet interactive website that boosted engagement and conversions for a digital agency.",
          image: "/images/work3.jpg",
          category: "Portfolio",
          link: "/portfolio/creative-agency",
          tags: ["Next.js", "Framer", "GSAP"],
          stats: [
            { icon: TrendingUp, value: "200%", label: "Traffic Boost" },
            { icon: Clock, value: "0.8s", label: "Load Time" },
          ],
        },
      ],
      cta: {
        text: "View Full Portfolio",
        link: "/portfolio",
      },
      gradient: {
        primary: "rgba(16,185,129,0.08)",
        badge: "emerald",
        text: "from-emerald-400 to-teal-400",
        card: "from-emerald-500/10 to-teal-500/10",
        imagePlaceholder: "from-emerald-500/20 to-teal-500/20",
      },
    },
    techStack: {
      heading: {
        badge: "Powered By",
        title: "Modern Tech",
        highlight: "Stack We Use",
      },
      description:
        "We leverage cutting-edge web technologies to deliver lightning-fast, secure, and scalable digital products. From frontend aesthetics to backend power, our stack ensures top-tier performance.",
      technologies: [
        {
          name: "React",
          emoji: "⚛️",
          color: "#61DAFB",
          colorAlt: "#4FC3F7",
          description: "UI Library",
          badge: "v19",
        },
        {
          name: "Next.js",
          emoji: "▲",
          color: "#000000",
          colorAlt: "#404040",
          description: "React Framework",
          badge: "v15",
        },
        {
          name: "TypeScript",
          emoji: "📘",
          color: "#3178C6",
          colorAlt: "#2B6CB0",
          description: "Type Safety",
        },
        {
          name: "Tailwind CSS",
          emoji: "🎨",
          color: "#06B6D4",
          colorAlt: "#0891B2",
          description: "Styling",
        },
        {
          name: "Node.js",
          emoji: "🟢",
          color: "#339933",
          colorAlt: "#26A65B",
          description: "Backend Runtime",
        },
        {
          name: "MongoDB",
          emoji: "🍃",
          color: "#47A248",
          colorAlt: "#3FA037",
          description: "Database",
        },
      ],
      gradient: {
        primary: "rgba(16,185,129,0.08)",
        badge: "emerald",
        text: "from-emerald-400 to-teal-400",
      },
      bottomNote:
        "We stay updated with the latest technologies to deliver cutting-edge solutions.",
    },
    faq: {
      heading: {
    badge: "Got Questions?",
    title: "Frequently Asked",
    highlight: "Questions"
  },
  description: "Answers to common questions about our web development services. We aim to make your project smooth and transparent.",
  faqs: [
    {
      question: "How long does a typical web development project take?",
      answer: "Most projects take between 4 to 12 weeks depending on the complexity and requirements. We provide detailed timelines during our initial consultation and keep you updated at every milestone.",
      icon: Clock,
      link: {
        text: "View our process",
        url: "/process"
      }
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We primarily use React, Next.js, Node.js, GraphQL, Tailwind CSS, and other modern web technologies to build fast and scalable applications. Our tech stack is chosen based on your project requirements.",
      icon: Code
    },
    {
      question: "Do you provide ongoing support after the project?",
      answer: "Yes! We offer post-launch support and maintenance packages to keep your website updated and secure. This includes bug fixes, performance monitoring, content updates, and feature enhancements.",
      icon: Headphones
    },
    {
      question: "What is the cost of a web development project?",
      answer: "Project costs vary based on complexity, features, and timeline. Simple websites start at ₹25,000, while complex web applications are custom quoted. We provide transparent estimates with no hidden fees.",
      icon: DollarSign,
      link: {
        text: "Get a free quote",
        url: "/contact"
      }
    }
  ],
  cta: {
    title: "Still Have Questions?",
    description: "Our team is ready to help. Schedule a free 30-minute consultation to discuss your project.",
    primaryText: "Book Free Consultation",
    primaryLink: "/contact",
    secondaryText: "View Portfolio",
    secondaryLink: "/portfolio"
  },
  gradient: {
    primary: "rgba(16,185,129,0.08)",
    badge: "emerald",
    text: "from-emerald-400 to-teal-400",
    card: "from-emerald-500/10 to-teal-500/10",
    icon: "from-emerald-500 to-teal-600",
    bottomBar: "from-emerald-500 to-teal-600"
  }
    }
  },
  {
    title: "UI/UX Design",
    titleHighlight: "Services",
    subtitle: "Design That Converts",
    description:
      "Create stunning, intuitive user experiences that elevate your brand and drive engagement through data-driven design decisions.",
    ctaText: "Start Design Project",
    ctaLink: "/contact",
    secondaryCta: {
      text: "See Our Designs",
      link: "/portfolio",
    },
    badge: {
      icon: "🎨",
      text: "Award-Winning Design",
    },
    features: ["User Research", "Prototyping", "Figma Expert", "Mobile First"],
    stats: [
      { number: "100+", label: "Designs Created" },
      { number: "40%", label: "Avg Conversion Boost" },
      { number: "5★", label: "Client Rating" },
    ],
    gradient: {
      primary: "rgba(168,85,247,0.08)",
      accent: "#c084fc",
      badge: "purple",
      badgeShadow: "rgba(168,85,247,0.5)",
      text: "from-purple-400 to-pink-600",
    },
    seo: {
      title: "Professional UI/UX Design Services | Truelyzer",
      description:
        "Expert UI/UX design services creating beautiful, user-centered experiences. Figma, prototyping, user research in Coimbatore.",
      keywords: "UI design, UX design, Figma, prototyping, user experience",
    },
    overview: {
      heading: {
        badge: "Our Design Process",
        title: "Crafting Beautiful",
        highlight: "User Experiences",
      },
      description:
        "We design with purpose—every pixel, every interaction, every screen is crafted to engage users and drive conversions. Our data-driven approach ensures designs that work as beautifully as they look.",
      highlights: [
        {
          icon: "🎨",
          title: "User Research & Strategy",
          description:
            "Deep dive into your users' needs, behaviors, and pain points to create solutions that truly resonate.",
        },
        {
          icon: "✨",
          title: "Wireframing & Prototyping",
          description:
            "Interactive prototypes in Figma that bring your ideas to life before development begins.",
        },
        {
          icon: "📱",
          title: "Mobile-First Design",
          description:
            "Responsive designs optimized for every device, from smartphones to 4K displays.",
        },
        {
          icon: "🔄",
          title: "Design Systems",
          description:
            "Scalable component libraries ensuring consistency across your entire product ecosystem.",
        },
      ],
      gradient: {
        primary: "rgba(168,85,247,0.1)",
        secondary: "rgba(236,72,153,0.1)",
        badge: "purple",
        text: "from-purple-400 to-pink-600",
        card: "from-purple-500/10 to-pink-500/10",
        icon: "from-purple-500 to-pink-600",
      },
    },
    caseStudies: {
      heading: {
        badge: "Design Portfolio",
        title: "Beautiful Designs",
        highlight: "That Convert",
      },
      description:
        "See how our user-centered design approach has helped brands create memorable experiences that drive engagement and revenue.",
      showStats: true,
      projects: [
        {
          title: "FinTech Mobile App",
          description:
            "Redesigned mobile banking experience with intuitive UI and secure authentication for 100K+ users.",
          icon: "📱",
          category: "Mobile Design",
          link: "/portfolio/fintech-app",
          tags: ["Figma", "iOS", "Android"],
          stats: [
            { icon: Award, value: "4.8★", label: "App Rating" },
            { icon: TrendingUp, value: "80%", label: "User Retention" },
          ],
        },
        {
          title: "Healthcare Dashboard",
          description:
            "Clean, accessible dashboard design for healthcare professionals managing patient data and appointments.",
          icon: "⚕️",
          category: "Web Design",
          link: "/portfolio/healthcare-dashboard",
          tags: ["Figma", "Design System", "Accessibility"],
          stats: [
            { icon: Award, value: "WCAG AA", label: "Accessibility" },
            { icon: TrendingUp, value: "60%", label: "Time Saved" },
          ],
        },
        {
          title: "Food Delivery App",
          description:
            "Delightful ordering experience with micro-interactions and real-time tracking for hungry customers.",
          icon: "🍕",
          category: "Mobile Design",
          link: "/portfolio/food-delivery",
          tags: ["Figma", "Prototype", "Animation"],
          stats: [
            { icon: TrendingUp, value: "40%", label: "Order Increase" },
            { icon: Award, value: "2.5min", label: "Avg Order Time" },
          ],
        },
      ],
      cta: {
        text: "See More Designs",
        link: "/portfolio",
      },
      gradient: {
        primary: "rgba(168,85,247,0.08)",
        badge: "purple",
        text: "from-purple-400 to-pink-600",
        card: "from-purple-500/10 to-pink-500/10",
        imagePlaceholder: "from-purple-500/20 to-pink-500/20",
      },
    },
    techStack: {
      heading: {
        badge: "Design Tools",
        title: "Professional Design",
        highlight: "Software & Tools",
      },
      description:
        "We use industry-leading design tools and software to create stunning, user-centered experiences that drive engagement and conversions.",
      technologies: [
        {
          name: "Figma",
          emoji: "🎨",
          color: "#F24E1E",
          colorAlt: "#FF7262",
          description: "Design & Prototyping",
        },
        {
          name: "Adobe XD",
          emoji: "🖌️",
          color: "#FF61F6",
          colorAlt: "#EA5AFF",
          description: "UI Design",
        },
        {
          name: "Sketch",
          emoji: "💎",
          color: "#F7B500",
          colorAlt: "#FFC947",
          description: "Vector Design",
        },
        {
          name: "Framer",
          emoji: "🎬",
          color: "#05F",
          colorAlt: "#0055FF",
          description: "Interactive Prototypes",
        },
        {
          name: "Illustrator",
          emoji: "✏️",
          color: "#FF9A00",
          colorAlt: "#FFAB2E",
          description: "Vector Graphics",
        },
        {
          name: "Photoshop",
          emoji: "🖼️",
          color: "#31A8FF",
          colorAlt: "#4DB8FF",
          description: "Image Editing",
        },
      ],
      gradient: {
        primary: "rgba(168,85,247,0.08)",
        badge: "purple",
        text: "from-purple-400 to-pink-600",
      },
      bottomNote:
        "All designs are delivered in production-ready formats with complete design systems.",
    },
    faq: {
      heading: {
    badge: "Design FAQ",
    title: "Common Questions About",
    highlight: "Our Design Process"
  },
  description: "Everything you need to know about working with our design team. Clear answers, no confusion.",
  faqs: [
    {
      question: "What deliverables do I get with a UI/UX design project?",
      answer: "You'll receive complete Figma files with wireframes, high-fidelity designs, interactive prototypes, design system/component library, and exported assets ready for development.",
      icon: FileText
    },
    {
      question: "How long does a design project typically take?",
      answer: "Design projects usually take 2-6 weeks depending on scope. This includes research, wireframing, design iterations, and final prototype. We work in sprints with regular check-ins.",
      icon: Clock
    },
    {
      question: "Do you conduct user research?",
      answer: "Yes! We offer user research, competitive analysis, user testing, and data-driven design decisions. This ensures our designs are not just beautiful, but also effective.",
      icon: Palette
    },
    {
      question: "What's the cost of a UI/UX design project?",
      answer: "Design projects start at ₹35,000 for landing pages and ₹1,50,000+ for complete app designs. Final pricing depends on complexity, number of screens, and research requirements.",
      icon: DollarSign
    }
  ],
  cta: {
    title: "Ready to Start Your Design Project?",
    description: "Let's create something beautiful together. Get a free design consultation.",
    primaryText: "Schedule Design Call",
    primaryLink: "/contact",
    secondaryText: "See Our Work",
    secondaryLink: "/portfolio"
  },
  gradient: {
    primary: "rgba(168,85,247,0.08)",
    badge: "purple",
    text: "from-purple-400 to-pink-600",
    card: "from-purple-500/10 to-pink-500/10",
    icon: "from-purple-500 to-pink-600",
    bottomBar: "from-purple-500 to-pink-600"
  }
    }
  },
  {
    title: "SEO & Digital Marketing",
    titleHighlight: "Services",
    subtitle: "Rank Higher, Grow Faster",
    description:
      "Maximize your online visibility with data-driven SEO strategies that deliver measurable results and sustainable growth.",
    ctaText: "Boost Your Rankings 📈",
    ctaLink: "/contact",
    secondaryCta: {
      text: "Free SEO Audit",
      link: "/seo-audit",
    },
    badge: {
      icon: "🚀",
      text: "Proven SEO Results",
    },
    features: [
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Analytics",
    ],
    stats: [
      { number: "150%", label: "Avg Traffic Increase" },
      { number: "#1", label: "Page Rankings" },
      { number: "6mo", label: "To See Results" },
    ],
    gradient: {
      primary: "rgba(59,130,246,0.08)",
      accent: "#60a5fa",
      badge: "blue",
      badgeShadow: "rgba(59,130,246,0.5)",
      text: "from-blue-400 to-cyan-600",
    },
    seo: {
      title: "SEO & Digital Marketing Services in Coimbatore | Truelyzer",
      description:
        "Professional SEO services to improve rankings and drive organic traffic. Technical SEO, content marketing in Tamil Nadu.",
      keywords:
        "SEO services, digital marketing, search engine optimization, Coimbatore",
    },
    overview: {
      heading: {
        badge: "Proven SEO Strategy",
        title: "Drive Organic Growth",
        highlight: "With Data-Driven SEO",
      },
      description:
        "Our SEO strategies are built on proven methodologies and real-world results. We don't just improve rankings—we drive qualified traffic that converts into customers and revenue.",
      highlights: [
        {
          icon: "🔍",
          title: "Technical SEO Audit",
          description:
            "Comprehensive site analysis identifying issues with crawlability, indexation, and Core Web Vitals.",
        },
        {
          icon: "📝",
          title: "Content Strategy",
          description:
            "Keyword research, content planning, and optimization that targets your ideal customers.",
        },
        {
          icon: "🔗",
          title: "Link Building",
          description:
            "White-hat link acquisition strategies that build domain authority and trust.",
        },
        {
          icon: "📊",
          title: "Analytics & Reporting",
          description:
            "Monthly reports tracking rankings, traffic, conversions, and ROI with actionable insights.",
        },
      ],
      gradient: {
        primary: "rgba(59,130,246,0.1)",
        secondary: "rgba(34,211,238,0.1)",
        badge: "blue",
        text: "from-blue-400 to-cyan-600",
        card: "from-blue-500/10 to-cyan-500/10",
        icon: "from-blue-500 to-cyan-600",
      },
    },
    caseStudies: {
      heading: {
        badge: "Client Success",
        title: "SEO Results",
        highlight: "That Speak for Themselves",
      },
      description:
        "Real businesses, real growth. See how our SEO strategies have helped companies dominate search rankings and drive qualified traffic.",
      showStats: true,
      projects: [
        {
          title: "Local Restaurant Chain",
          description:
            "Increased local search visibility by 300% and doubled online orders through strategic SEO and Google My Business optimization.",
          icon: "🍴",
          category: "Local SEO",
          tags: ["Local SEO", "GMB", "Content"],
          stats: [
            { icon: TrendingUp, value: "300%", label: "Visibility Up" },
            { icon: Award, value: "#1", label: "Local Rankings" },
          ],
        },
        {
          title: "B2B SaaS Company",
          description:
            "Generated 500+ qualified leads per month through technical SEO improvements and content marketing strategy.",
          icon: "💼",
          category: "Enterprise SEO",
          tags: ["Technical SEO", "Content", "Link Building"],
          stats: [
            { icon: TrendingUp, value: "500+", label: "Leads/Month" },
            { icon: Award, value: "250%", label: "Traffic Growth" },
          ],
        },
        {
          title: "E-commerce Store",
          description:
            "Achieved first-page rankings for 50+ high-value keywords, resulting in 5x increase in organic revenue.",
          icon: "🛍️",
          category: "E-commerce SEO",
          tags: ["Product SEO", "Schema", "Speed"],
          stats: [
            { icon: TrendingUp, value: "5x", label: "Revenue Growth" },
            { icon: Award, value: "50+", label: "Page 1 Keywords" },
          ],
        },
      ],
      cta: {
        text: "Start Your SEO Journey",
        link: "/contact",
      },
      gradient: {
        primary: "rgba(59,130,246,0.08)",
        badge: "blue",
        text: "from-blue-400 to-cyan-600",
        card: "from-blue-500/10 to-cyan-500/10",
        imagePlaceholder: "from-blue-500/20 to-cyan-500/20",
      },
    },
    techStack: {
      heading: {
        badge: "SEO Tools",
        title: "Professional SEO",
        highlight: "Tools & Platforms",
      },
      description:
        "We use advanced SEO tools and analytics platforms to track performance, identify opportunities, and deliver measurable results for your business.",
      technologies: [
        {
          name: "Google Analytics",
          emoji: "📊",
          color: "#E37400",
          colorAlt: "#F9AB00",
          description: "Web Analytics",
        },
        {
          name: "Search Console",
          emoji: "🔍",
          color: "#4285F4",
          colorAlt: "#5E9FF4",
          description: "Search Insights",
        },
        {
          name: "Ahrefs",
          emoji: "🔗",
          color: "#FF7A59",
          colorAlt: "#FF947A",
          description: "Backlink Analysis",
        },
        {
          name: "SEMrush",
          emoji: "📈",
          color: "#FF642D",
          colorAlt: "#FF7F54",
          description: "Keyword Research",
        },
        {
          name: "Screaming Frog",
          emoji: "🐸",
          color: "#6BBE44",
          colorAlt: "#82C95C",
          description: "Site Audits",
        },
        {
          name: "GTmetrix",
          emoji: "⚡",
          color: "#1E88E5",
          colorAlt: "#42A5F5",
          description: "Performance",
        },
      ],
      gradient: {
        primary: "rgba(59,130,246,0.08)",
        badge: "blue",
        text: "from-blue-400 to-cyan-600",
      },
      bottomNote:
        "Monthly reports include data from all major SEO platforms and analytics tools.",
    },
  },
];


export default services;