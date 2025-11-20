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
  FileText,
} from "lucide-react";
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const services = [
  {
    id: "web-development",
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
      title: "Professional Web Development Services in Coimbatore | Trulyzer",
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
        "At Trulyzer, we craft digital experiences that blend creativity, technology, and strategy. Our approach focuses on building performance-driven websites that not only look great but deliver measurable results for your business.",
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
        "Explore how Trulyzer has helped businesses grow with modern, performance-first web solutions that drive real results.",
      showStats: true,
      projects: [
        {
          title: "E-commerce Redefined",
          description:
            "Built a blazing-fast online shopping experience with Next.js, Tailwind, and GraphQL for a global fashion brand.",
          image: "/images/work1.png",
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
          image: "/images/work2.png",
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
        highlight: "Questions",
      },
      description:
        "Answers to common questions about our web development services. We aim to make your project smooth and transparent.",
      faqs: [
        {
          question: "How long does a typical web development project take?",
          answer:
            "Most projects take between 4 to 12 weeks depending on the complexity and requirements. We provide detailed timelines during our initial consultation and keep you updated at every milestone.",
          icon: Clock,
          link: {
            text: "View our process",
            url: "/process",
          },
        },
        {
          question: "What technologies do you use for web development?",
          answer:
            "We primarily use React, Next.js, Node.js, GraphQL, Tailwind CSS, and other modern web technologies to build fast and scalable applications. Our tech stack is chosen based on your project requirements.",
          icon: Code,
        },
        {
          question: "Do you provide ongoing support after the project?",
          answer:
            "Yes! We offer post-launch support and maintenance packages to keep your website updated and secure. This includes bug fixes, performance monitoring, content updates, and feature enhancements.",
          icon: Headphones,
        },
        {
          question: "What is the cost of a web development project?",
          answer:
            "Project costs vary based on complexity, features, and timeline. Simple websites start at ₹25,000, while complex web applications are custom quoted. We provide transparent estimates with no hidden fees.",
          icon: DollarSign,
          link: {
            text: "Get a free quote",
            url: "/contact",
          },
        },
      ],
      cta: {
        title: "Still Have Questions?",
        description:
          "Our team is ready to help. Schedule a free 30-minute consultation to discuss your project.",
        primaryText: "Book Free Consultation",
        primaryLink: "/contact",
        secondaryText: "View Portfolio",
        secondaryLink: "/portfolio",
      },
      gradient: {
        primary: "rgba(16,185,129,0.08)",
        badge: "emerald",
        text: "from-emerald-400 to-teal-400",
        card: "from-emerald-500/10 to-teal-500/10",
        icon: "from-emerald-500 to-teal-600",
        bottomBar: "from-emerald-500 to-teal-600",
      },
    },
  },
  {
    id: "ui-ux-design",
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
      title: "Professional UI/UX Design Services | Trulyzer",
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
        highlight: "Our Design Process",
      },
      description:
        "Everything you need to know about working with our design team. Clear answers, no confusion.",
      faqs: [
        {
          question: "What deliverables do I get with a UI/UX design project?",
          answer:
            "You'll receive complete Figma files with wireframes, high-fidelity designs, interactive prototypes, design system/component library, and exported assets ready for development.",
          icon: FileText,
        },
        {
          question: "How long does a design project typically take?",
          answer:
            "Design projects usually take 2-6 weeks depending on scope. This includes research, wireframing, design iterations, and final prototype. We work in sprints with regular check-ins.",
          icon: Clock,
        },
        {
          question: "Do you conduct user research?",
          answer:
            "Yes! We offer user research, competitive analysis, user testing, and data-driven design decisions. This ensures our designs are not just beautiful, but also effective.",
          icon: Palette,
        },
        {
          question: "What's the cost of a UI/UX design project?",
          answer:
            "Design projects start at ₹35,000 for landing pages and ₹1,50,000+ for complete app designs. Final pricing depends on complexity, number of screens, and research requirements.",
          icon: DollarSign,
        },
      ],
      cta: {
        title: "Ready to Start Your Design Project?",
        description:
          "Let's create something beautiful together. Get a free design consultation.",
        primaryText: "Schedule Design Call",
        primaryLink: "/contact",
        secondaryText: "See Our Work",
        secondaryLink: "/portfolio",
      },
      gradient: {
        primary: "rgba(168,85,247,0.08)",
        badge: "purple",
        text: "from-purple-400 to-pink-600",
        card: "from-purple-500/10 to-pink-500/10",
        icon: "from-purple-500 to-pink-600",
        bottomBar: "from-purple-500 to-pink-600",
      },
    },
  },
  {
    id: "seo-digital-marketing",
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
      title: "SEO & Digital Marketing Services in Coimbatore | Trulyzer",
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
  // Add these three objects to your existing services array

  {
    id: "performance-optimization",
    title: "Performance Optimization",
    titleHighlight: "Services",
    subtitle: "Lightning-Fast Web Performance",
    description:
      "Supercharge your website with cutting-edge performance optimization techniques that deliver blazing-fast load times and exceptional user experiences.",
    ctaText: "Optimize My Site ⚡",
    ctaLink: "/contact",
    secondaryCta: {
      text: "Free Speed Audit",
      link: "/speed-audit",
    },
    badge: {
      icon: "⚡",
      text: "Performance Experts",
    },
    features: [
      "Core Web Vitals",
      "Speed Optimization",
      "CDN Setup",
      "Image Optimization",
    ],
    stats: [
      { number: "<2s", label: "Average Load Time" },
      { number: "95+", label: "PageSpeed Score" },
      { number: "70%", label: "Speed Improvement" },
    ],
    gradient: {
      primary: "rgba(249,115,22,0.08)",
      accent: "#fb923c",
      badge: "orange",
      badgeShadow: "rgba(249,115,22,0.5)",
      text: "from-orange-400 to-red-600",
    },
    seo: {
      title: "Website Performance Optimization Services | Trulyzer Coimbatore",
      description:
        "Expert performance optimization services to speed up your website. Core Web Vitals, CDN setup, image optimization in Tamil Nadu.",
      keywords:
        "performance optimization, website speed, Core Web Vitals, CDN, page speed",
    },
    overview: {
      heading: {
        badge: "Speed Matters",
        title: "Accelerate Your",
        highlight: "Website Performance",
      },
      description:
        "Every millisecond counts. We optimize your website to load faster, rank higher, and convert better. Our performance-first approach ensures your users get the best experience across all devices and connections.",
      highlights: [
        {
          icon: "⚡",
          title: "Core Web Vitals Optimization",
          description:
            "Fine-tune LCP, FID, and CLS to meet Google's performance standards and improve search rankings.",
        },
        {
          icon: "🖼️",
          title: "Advanced Image Optimization",
          description:
            "WebP/AVIF conversion, lazy loading, responsive images, and CDN delivery for faster page loads.",
        },
        {
          icon: "📦",
          title: "Code Splitting & Bundling",
          description:
            "Optimize JavaScript and CSS delivery with code splitting, tree shaking, and intelligent bundling.",
        },
        {
          icon: "🌐",
          title: "CDN & Caching Strategy",
          description:
            "Global content delivery networks and smart caching configurations for lightning-fast worldwide access.",
        },
      ],
      gradient: {
        primary: "rgba(249,115,22,0.1)",
        secondary: "rgba(239,68,68,0.1)",
        badge: "orange",
        text: "from-orange-400 to-red-600",
        card: "from-orange-500/10 to-red-500/10",
        icon: "from-orange-500 to-red-600",
      },
    },
    caseStudies: {
      heading: {
        badge: "Speed Wins",
        title: "Performance Results",
        highlight: "That Drive Growth",
      },
      description:
        "See how our performance optimization strategies have transformed slow websites into lightning-fast experiences that boost conversions and rankings.",
      showStats: true,
      projects: [
        {
          title: "E-commerce Speed Boost",
          description:
            "Reduced load time from 8.5s to 1.2s, resulting in 45% increase in conversions and 60% reduction in bounce rate.",
          icon: "🛒",
          category: "E-commerce",
          link: "/portfolio/ecommerce-speed",
          tags: ["Image Opt", "CDN", "Code Split"],
          stats: [
            { icon: Clock, value: "1.2s", label: "Load Time" },
            { icon: TrendingUp, value: "45%", label: "Conversions Up" },
          ],
        },
        {
          title: "News Portal Optimization",
          description:
            "Achieved 98 PageSpeed score and improved Core Web Vitals, increasing ad revenue by 35% through better user engagement.",
          icon: "📰",
          category: "Media",
          link: "/portfolio/news-portal",
          tags: ["Web Vitals", "Lazy Load", "Cache"],
          stats: [
            { icon: Award, value: "98", label: "PageSpeed Score" },
            { icon: TrendingUp, value: "35%", label: "Revenue Increase" },
          ],
        },
        {
          title: "SaaS Dashboard Performance",
          description:
            "Optimized React application bundle size by 60% and improved Time to Interactive by 4 seconds for better UX.",
          icon: "📊",
          category: "SaaS",
          link: "/portfolio/saas-performance",
          tags: ["Bundle Size", "React", "TTI"],
          stats: [
            { icon: TrendingUp, value: "60%", label: "Bundle Reduced" },
            { icon: Clock, value: "4s", label: "TTI Improved" },
          ],
        },
      ],
      cta: {
        text: "Optimize Your Website",
        link: "/contact",
      },
      gradient: {
        primary: "rgba(249,115,22,0.08)",
        badge: "orange",
        text: "from-orange-400 to-red-600",
        card: "from-orange-500/10 to-red-500/10",
        imagePlaceholder: "from-orange-500/20 to-red-500/20",
      },
    },
    techStack: {
      heading: {
        badge: "Performance Tools",
        title: "Advanced Optimization",
        highlight: "Tools & Technologies",
      },
      description:
        "We leverage industry-leading performance tools and monitoring platforms to identify bottlenecks, optimize delivery, and ensure your website runs at peak performance.",
      technologies: [
        {
          name: "Lighthouse",
          emoji: "🏮",
          color: "#F44B21",
          colorAlt: "#FF6347",
          description: "Performance Audits",
        },
        {
          name: "GTmetrix",
          emoji: "📈",
          color: "#1E88E5",
          colorAlt: "#42A5F5",
          description: "Speed Analysis",
        },
        {
          name: "Cloudflare",
          emoji: "☁️",
          color: "#F38020",
          colorAlt: "#FF9645",
          description: "CDN & Security",
        },
        {
          name: "WebPageTest",
          emoji: "⚡",
          color: "#005A9C",
          colorAlt: "#0074C8",
          description: "Real-World Testing",
        },
        {
          name: "Vercel",
          emoji: "▲",
          color: "#000000",
          colorAlt: "#404040",
          description: "Edge Deployment",
        },
        {
          name: "ImageOptim",
          emoji: "🖼️",
          color: "#4CAF50",
          colorAlt: "#66BB6A",
          description: "Image Compression",
        },
      ],
      gradient: {
        primary: "rgba(249,115,22,0.08)",
        badge: "orange",
        text: "from-orange-400 to-red-600",
      },
      bottomNote:
        "All optimizations include before/after reports with measurable performance metrics.",
    },
    faq: {
      heading: {
        badge: "Performance FAQ",
        title: "Questions About",
        highlight: "Website Speed",
      },
      description:
        "Common questions about website performance optimization and how we can make your site faster.",
      faqs: [
        {
          question: "Why is website speed important?",
          answer:
            "Website speed directly impacts user experience, SEO rankings, and conversions. Studies show a 1-second delay can reduce conversions by 7%. Google also uses Core Web Vitals as a ranking factor.",
          icon: TrendingUp,
        },
        {
          question: "How long does performance optimization take?",
          answer:
            "Most optimization projects take 1-3 weeks depending on your site's complexity. We provide quick wins in the first week and continue with deeper optimizations thereafter.",
          icon: Clock,
        },
        {
          question: "What is Core Web Vitals and why does it matter?",
          answer:
            "Core Web Vitals are Google's metrics for page experience: LCP (loading), FID (interactivity), and CLS (visual stability). Meeting these standards improves SEO and user satisfaction.",
          icon: Award,
          link: {
            text: "Learn more about Core Web Vitals",
            url: "https://web.dev/vitals/",
          },
        },
        {
          question: "How much does performance optimization cost?",
          answer:
            "Performance optimization starts at ₹15,000 for basic speed improvements and ₹50,000+ for comprehensive optimization including CDN, image optimization, and ongoing monitoring.",
          icon: DollarSign,
          link: {
            text: "Get a free speed audit",
            url: "/contact",
          },
        },
      ],
      cta: {
        title: "Ready to Speed Up Your Website?",
        description:
          "Get a free performance audit and discover how fast your site could be.",
        primaryText: "Get Free Speed Audit",
        primaryLink: "/contact",
        secondaryText: "See Performance Case Studies",
        secondaryLink: "/portfolio",
      },
      gradient: {
        primary: "rgba(249,115,22,0.08)",
        badge: "orange",
        text: "from-orange-400 to-red-600",
        card: "from-orange-500/10 to-red-500/10",
        icon: "from-orange-500 to-red-600",
        bottomBar: "from-orange-500 to-red-600",
      },
    },
  },
  {
    id: "automation",
    title: "Automation & Integrations",
    titleHighlight: "Services",
    subtitle: "Automate. Integrate. Scale.",
    description:
      "Streamline your business workflows with intelligent automation, API integrations, and AI-powered solutions that save time and boost productivity.",
    ctaText: "Automate Now 🤖",
    ctaLink: "/contact",
    secondaryCta: {
      text: "View Automation Examples",
      link: "/portfolio",
    },
    badge: {
      icon: "🤖",
      text: "Automation Specialists",
    },
    features: [
      "API Integrations",
      "Workflow Automation",
      "AI Solutions",
      "Custom Bots",
    ],
    stats: [
      { number: "80%", label: "Time Saved" },
      { number: "100+", label: "APIs Integrated" },
      { number: "24/7", label: "Automation Running" },
    ],
    gradient: {
      primary: "rgba(234,179,8,0.08)",
      accent: "#fbbf24",
      badge: "yellow",
      badgeShadow: "rgba(234,179,8,0.5)",
      text: "from-yellow-400 to-orange-600",
    },
    seo: {
      title: "Automation & API Integration Services | Trulyzer Coimbatore",
      description:
        "Professional automation services using APIs, webhooks, and AI. Streamline workflows and boost productivity in Tamil Nadu.",
      keywords:
        "automation, API integration, workflow automation, AI solutions, webhooks",
    },
    overview: {
      heading: {
        badge: "Smart Automation",
        title: "Streamline Everything",
        highlight: "With Intelligent Systems",
      },
      description:
        "Stop wasting time on repetitive tasks. We build custom automation solutions that connect your tools, streamline processes, and let you focus on growing your business. From simple webhooks to complex AI integrations.",
      highlights: [
        {
          icon: "🔗",
          title: "API Integrations",
          description:
            "Connect any platform—CRM, payment gateways, analytics, marketing tools—for seamless data flow.",
        },
        {
          icon: "⚙️",
          title: "Workflow Automation",
          description:
            "Automate repetitive tasks using Zapier, Make, n8n, or custom solutions tailored to your needs.",
        },
        {
          icon: "🤖",
          title: "AI-Powered Solutions",
          description:
            "Integrate ChatGPT, Claude, or custom AI models for intelligent chatbots, content generation, and data analysis.",
        },
        {
          icon: "📨",
          title: "Email & Notification Systems",
          description:
            "Automated email sequences, SMS notifications, and real-time alerts triggered by user actions.",
        },
      ],
      gradient: {
        primary: "rgba(234,179,8,0.1)",
        secondary: "rgba(249,115,22,0.1)",
        badge: "yellow",
        text: "from-yellow-400 to-orange-600",
        card: "from-yellow-500/10 to-orange-500/10",
        icon: "from-yellow-500 to-orange-600",
      },
    },
    caseStudies: {
      heading: {
        badge: "Automation Success",
        title: "Real Workflows",
        highlight: "We've Automated",
      },
      description:
        "See how our automation solutions have helped businesses save time, reduce errors, and scale operations without increasing headcount.",
      showStats: true,
      projects: [
        {
          title: "CRM + Email Automation",
          description:
            "Built automated lead nurturing system connecting CRM, email marketing, and analytics for a B2B agency, saving 20 hours weekly.",
          icon: "📧",
          category: "Marketing Automation",
          link: "/portfolio/crm-automation",
          tags: ["Zapier", "API", "Email"],
          stats: [
            { icon: Clock, value: "20hrs", label: "Weekly Time Saved" },
            { icon: TrendingUp, value: "150%", label: "Lead Conversion" },
          ],
        },
        {
          title: "AI Customer Support Bot",
          description:
            "Developed intelligent chatbot using GPT-4 that handles 70% of customer queries automatically, reducing support costs by 60%.",
          icon: "💬",
          category: "AI Integration",
          link: "/portfolio/ai-chatbot",
          tags: ["ChatGPT", "API", "Webhook"],
          stats: [
            { icon: Award, value: "70%", label: "Queries Automated" },
            { icon: TrendingUp, value: "60%", label: "Cost Reduction" },
          ],
        },
        {
          title: "E-commerce Order Sync",
          description:
            "Automated order processing connecting Shopify, inventory system, shipping, and accounting software for seamless operations.",
          icon: "📦",
          category: "E-commerce Automation",
          link: "/portfolio/ecommerce-sync",
          tags: ["Shopify", "Webhooks", "API"],
          stats: [
            { icon: Clock, value: "99%", label: "Error Reduction" },
            { icon: TrendingUp, value: "5x", label: "Order Processing" },
          ],
        },
      ],
      cta: {
        text: "Discuss Your Automation Needs",
        link: "/contact",
      },
      gradient: {
        primary: "rgba(234,179,8,0.08)",
        badge: "yellow",
        text: "from-yellow-400 to-orange-600",
        card: "from-yellow-500/10 to-orange-500/10",
        imagePlaceholder: "from-yellow-500/20 to-orange-500/20",
      },
    },
    techStack: {
      heading: {
        badge: "Automation Stack",
        title: "Tools & Platforms",
        highlight: "We Work With",
      },
      description:
        "We leverage powerful automation platforms and AI technologies to build custom solutions that integrate seamlessly with your existing tools.",
      technologies: [
        {
          name: "Zapier",
          emoji: "⚡",
          color: "#FF4A00",
          colorAlt: "#FF6B35",
          description: "Workflow Automation",
        },
        {
          name: "Make (Integromat)",
          emoji: "🔧",
          color: "#6B47DC",
          colorAlt: "#8561E6",
          description: "Advanced Automation",
        },
        {
          name: "n8n",
          emoji: "🔗",
          color: "#EA4B71",
          colorAlt: "#FF6B8A",
          description: "Open-Source Workflows",
        },
        {
          name: "OpenAI API",
          emoji: "🤖",
          color: "#10A37F",
          colorAlt: "#2DC99B",
          description: "AI Integration",
        },
        {
          name: "Webhook.site",
          emoji: "📨",
          color: "#0066CC",
          colorAlt: "#3385DB",
          description: "Webhook Testing",
        },
        {
          name: "Postman",
          emoji: "📮",
          color: "#FF6C37",
          colorAlt: "#FF8557",
          description: "API Development",
        },
      ],
      gradient: {
        primary: "rgba(234,179,8,0.08)",
        badge: "yellow",
        text: "from-yellow-400 to-orange-600",
      },
      bottomNote:
        "All integrations are fully documented with error handling and monitoring systems.",
    },
    faq: {
      heading: {
        badge: "Automation FAQ",
        title: "Questions About",
        highlight: "Automation & Integration",
      },
      description:
        "Everything you need to know about automating your business processes and integrating your tools.",
      faqs: [
        {
          question: "What can be automated in my business?",
          answer:
            "Almost anything repetitive: lead capture, email follow-ups, data entry, invoice generation, social media posting, customer onboarding, reporting, and much more. We'll audit your workflows and identify automation opportunities.",
          icon: Settings,
        },
        {
          question: "How long does it take to build an automation?",
          answer:
            "Simple automations (2-3 tool integrations) take 1-2 weeks. Complex workflows with multiple platforms and custom logic take 3-6 weeks. Most clients see ROI within the first month.",
          icon: Clock,
        },
        {
          question: "Do you provide training and documentation?",
          answer:
            "Yes! Every automation includes complete documentation, video walkthrough, and optional training sessions. We ensure your team can manage and troubleshoot the automation independently.",
          icon: FileText,
          link: {
            text: "View sample documentation",
            url: "/portfolio",
          },
        },
        {
          question: "What's the cost of automation services?",
          answer:
            "Pricing varies based on complexity. Simple Zapier workflows start at ₹10,000. Custom API integrations and AI chatbots range from ₹50,000 to ₹2,00,000+. We provide clear estimates after understanding your needs.",
          icon: DollarSign,
          link: {
            text: "Schedule automation consultation",
            url: "/contact",
          },
        },
      ],
      cta: {
        title: "Ready to Automate Your Workflow?",
        description:
          "Let's identify repetitive tasks and build automation that saves you time and money.",
        primaryText: "Book Free Automation Audit",
        primaryLink: "/contact",
        secondaryText: "See Automation Examples",
        secondaryLink: "/portfolio",
      },
      gradient: {
        primary: "rgba(234,179,8,0.08)",
        badge: "yellow",
        text: "from-yellow-400 to-orange-600",
        card: "from-yellow-500/10 to-orange-500/10",
        icon: "from-yellow-500 to-orange-600",
        bottomBar: "from-yellow-500 to-orange-600",
      },
    },
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    titleHighlight: "Services",
    subtitle: "Always Online, Always Secure",
    description:
      "Comprehensive website maintenance and technical support to keep your digital assets running smoothly, securely, and at peak performance 24/7.",
    ctaText: "Get Support Plan 🛡️",
    ctaLink: "/contact",
    secondaryCta: {
      text: "Compare Plans",
      link: "/maintenance-plans",
    },
    badge: {
      icon: "🛡️",
      text: "Trusted Support Partner",
    },
    features: [
      "24/7 Monitoring",
      "Security Updates",
      "Backup & Recovery",
      "Priority Support",
    ],
    stats: [
      { number: "99.9%", label: "Uptime Guarantee" },
      { number: "<2hr", label: "Response Time" },
      { number: "200+", label: "Sites Maintained" },
    ],
    gradient: {
      primary: "rgba(34,197,94,0.08)",
      accent: "#4ade80",
      badge: "green",
      badgeShadow: "rgba(34,197,94,0.5)",
      text: "from-green-400 to-emerald-600",
    },
    seo: {
      title: "Website Maintenance & Support Services | Trulyzer Coimbatore",
      description:
        "Professional website maintenance, security updates, backup, and 24/7 support services in Tamil Nadu. Keep your site secure and running smoothly.",
      keywords:
        "website maintenance, technical support, security updates, backup, monitoring",
    },
    overview: {
      heading: {
        badge: "Reliable Support",
        title: "Keep Your Site",
        highlight: "Secure & Updated",
      },
      description:
        "Your website needs constant care to stay secure, fast, and functional. Our maintenance plans provide proactive monitoring, regular updates, security patches, and expert support so you can focus on your business worry-free.",
      highlights: [
        {
          icon: "🔒",
          title: "Security & Updates",
          description:
            "Regular security patches, plugin updates, malware scanning, and SSL certificate management to protect your site.",
        },
        {
          icon: "💾",
          title: "Automated Backups",
          description:
            "Daily automated backups with one-click restore capability. Your data is safe and recoverable anytime.",
        },
        {
          icon: "📊",
          title: "Performance Monitoring",
          description:
            "24/7 uptime monitoring, performance tracking, and instant alerts for any issues or downtime.",
        },
        {
          icon: "🛠️",
          title: "Priority Technical Support",
          description:
            "Direct access to our development team for bug fixes, content updates, and technical assistance.",
        },
      ],
      gradient: {
        primary: "rgba(34,197,94,0.1)",
        secondary: "rgba(16,185,129,0.1)",
        badge: "green",
        text: "from-green-400 to-emerald-600",
        card: "from-green-500/10 to-emerald-500/10",
        icon: "from-green-500 to-emerald-600",
      },
    },
    caseStudies: {
      heading: {
        badge: "Client Success",
        title: "Peace of Mind",
        highlight: "Through Reliable Support",
      },
      description:
        "See how our maintenance services have kept businesses online, secure, and performing at their best without any technical headaches.",
      showStats: true,
      projects: [
        {
          title: "E-commerce Platform",
          description:
            "Maintained 99.99% uptime for high-traffic online store during Black Friday, handling 50K+ concurrent users without a single outage.",
          icon: "🛒",
          category: "E-commerce",
          link: "/portfolio/ecommerce-maintenance",
          tags: ["24/7 Monitoring", "Security", "Backup"],
          stats: [
            { icon: Award, value: "99.99%", label: "Uptime" },
            { icon: TrendingUp, value: "50K+", label: "Peak Users" },
          ],
        },
        {
          title: "Healthcare Portal",
          description:
            "HIPAA-compliant maintenance with zero security breaches, automated daily backups, and <1hr critical issue resolution time.",
          icon: "⚕️",
          category: "Healthcare",
          link: "/portfolio/healthcare-support",
          tags: ["HIPAA", "Security", "Priority Support"],
          stats: [
            { icon: Award, value: "0", label: "Security Breaches" },
            { icon: Clock, value: "<1hr", label: "Issue Resolution" },
          ],
        },
        {
          title: "Corporate Website",
          description:
            "Prevented 12 potential security threats, performed 100+ updates, and maintained perfect performance scores for enterprise client.",
          icon: "🏢",
          category: "Enterprise",
          link: "/portfolio/corporate-maintenance",
          tags: ["Updates", "Security", "Performance"],
          stats: [
            { icon: Award, value: "12", label: "Threats Blocked" },
            { icon: TrendingUp, value: "100+", label: "Updates Done" },
          ],
        },
      ],
      cta: {
        text: "Get Your Maintenance Plan",
        link: "/contact",
      },
      gradient: {
        primary: "rgba(34,197,94,0.08)",
        badge: "green",
        text: "from-green-400 to-emerald-600",
        card: "from-green-500/10 to-emerald-500/10",
        imagePlaceholder: "from-green-500/20 to-emerald-500/20",
      },
    },
    techStack: {
      heading: {
        badge: "Monitoring Tools",
        title: "Professional Support",
        highlight: "Tools & Infrastructure",
      },
      description:
        "We use enterprise-grade monitoring, security, and backup tools to ensure your website stays online, secure, and performing optimally around the clock.",
      technologies: [
        {
          name: "UptimeRobot",
          emoji: "🤖",
          color: "#4A90E2",
          colorAlt: "#6AA7E8",
          description: "Uptime Monitoring",
        },
        {
          name: "Cloudflare",
          emoji: "🛡️",
          color: "#F38020",
          colorAlt: "#FF9645",
          description: "Security & CDN",
        },
        {
          name: "BackupBuddy",
          emoji: "💾",
          color: "#1E8CBE",
          colorAlt: "#3AA5D8",
          description: "Automated Backups",
        },
        {
          name: "Sucuri",
          emoji: "🔒",
          color: "#00A199",
          colorAlt: "#00C4BA",
          description: "Malware Scanning",
        },
        {
          name: "New Relic",
          emoji: "📊",
          color: "#008C99",
          colorAlt: "#00A8B8",
          description: "Performance Monitoring",
        },
        {
          name: "Sentry",
          emoji: "🐛",
          color: "#362D59",
          colorAlt: "#594D7A",
          description: "Error Tracking",
        },
      ],
      gradient: {
        primary: "rgba(34,197,94,0.08)",
        badge: "green",
        text: "from-green-400 to-emerald-600",
      },
      bottomNote:
        "All monitoring includes real-time alerts and detailed monthly reports.",
    },
    faq: {
      heading: {
        badge: "Support FAQ",
        title: "Questions About",
        highlight: "Maintenance & Support",
      },
      description:
        "Common questions about our website maintenance plans and how we keep your site running smoothly.",
      faqs: [
        {
          question: "What's included in a maintenance plan?",
          answer:
            "Our plans include security updates, plugin/theme updates, daily backups, uptime monitoring, performance optimization, malware scanning, SSL management, and priority technical support based on your chosen tier.",
          icon: Settings,
          link: {
            text: "Compare maintenance plans",
            url: "/maintenance-plans",
          },
        },
        {
          question: "How quickly do you respond to issues?",
          answer:
            "Critical issues (site down) get <2hr response on all plans. Non-critical issues are handled within 24hrs (Standard) or 4hrs (Premium). Emergency hotline available for Premium clients.",
          icon: Clock,
        },
        {
          question: "What happens if my site gets hacked?",
          answer:
            "We restore from clean backup, remove malware, patch vulnerabilities, and strengthen security. Premium plans include hack recovery at no extra cost. We also provide post-incident analysis and preventive measures.",
          icon: Lock,
        },
        {
          question: "How much do maintenance plans cost?",
          answer:
            "Plans start at ₹5,000/month (Basic) for small sites with essential monitoring and updates. Standard plans (₹12,000/mo) include priority support. Premium plans (₹25,000+/mo) offer 24/7 support and advanced security.",
          icon: DollarSign,
          link: {
            text: "View pricing details",
            url: "/contact",
          },
        },
      ],
      cta: {
        title: "Protect Your Website Today",
        description:
          "Choose a maintenance plan that fits your needs and sleep better knowing experts are watching your site.",
        primaryText: "Choose Your Plan",
        primaryLink: "/contact",
        secondaryText: "See What's Included",
        secondaryLink: "/maintenance-plans",
      },
      gradient: {
        primary: "rgba(34,197,94,0.08)",
        badge: "green",
        text: "from-green-400 to-emerald-600",
        card: "from-green-500/10 to-emerald-500/10",
        icon: "from-green-500 to-emerald-600",
        bottomBar: "from-green-500 to-emerald-600",
      },
    },
  },
];

export default services;
