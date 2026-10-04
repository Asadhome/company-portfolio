// Single source of truth for the site's copy. Edit this file to update the
// site — every section pulls from here instead of hardcoding text inline.
//
// "Creatpixl" is an agency name/brand built from the real work history in
// the underlying resumes (web development + email marketing/CRM
// integration). Swap `company.email` and any other placeholder before this
// goes live — see README.md.

export const company = {
  name: "Creatpixl",
  shortName: "creatpixl",
  tagline: "Web Development, Design & Marketing Automation",
  location: "Lahore, Pakistan",
  // Placeholder — swap for a real inbox once a domain is registered.
  email: "createpixl55@gmail.com",
  yearsExperience: 8,
  summary:
    "A full-service digital shop building e-commerce and content platforms on Shopify, WordPress, and React/Next.js, and the email marketing and CRM integrations — Klaviyo, HubSpot, Braze, Salesforce Marketing Cloud — that turn that traffic into lifecycle revenue.",
  stats: [
    { value: "8+", label: "years building" },
    { value: "30+", label: "projects shipped" },
    { value: "6", label: "services offered" },
  ],
};

export const navItems = [
  { href: "#home", label: "~/Home" },
  { href: "#services", label: "~/Services" },
  { href: "#stack", label: "~/Stack" },
  { href: "#work", label: "~/Work" },
  { href: "#contact", label: "~/Contact" },
];

export type Service = {
  title: string;
  description: string;
  stack: string[];
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom storefronts and sites on Shopify, WordPress, and React/Next.js — from theme builds to the APIs and backends behind them.",
    stack: ["Shopify", "WordPress", "React", "Next.js"],
  },
  {
    title: "Web & Logo Design",
    description:
      "Site layouts, UI systems, and brand identity — wireframes, design systems, logos, typography, and brand guidelines built in Figma that carry consistently across the site and beyond it.",
    stack: ["UI/UX Design", "Figma", "Design Systems", "Logo Design", "Brand Identity"],
  },
  {
    title: "Email Marketing & Automation",
    description:
      "Lifecycle flows, segmentation, and campaign builds — welcome series, abandoned cart, post-purchase, re-engagement — on Klaviyo, HubSpot, Braze, and Salesforce Marketing Cloud.",
    stack: ["Klaviyo", "HubSpot", "Braze", "Salesforce Marketing Cloud"],
  },
  {
    title: "CRM & API Integrations",
    description:
      "Connecting commerce, CRM, and marketing platforms so customer, order, and event data moves cleanly between systems for accurate targeting.",
    stack: ["REST APIs", "GraphQL", "Webhooks"],
  },
  {
    title: "AI & Workflow Automation",
    description:
      "Automated workflows that connect your apps, CRM, and data pipelines — lead routing, scheduled reports, AI-assisted triage — built primarily on n8n.",
    stack: ["n8n", "Workflow Automation", "APIs", "Scripting"],
  },
  {
    title: "Social Media Marketing",
    description:
      "Content calendars, paid campaigns, and community management that grow your audience and drive traffic back to your site across Instagram, Facebook, LinkedIn, and TikTok.",
    stack: ["Instagram", "Facebook", "LinkedIn", "Paid Ads", "Content Strategy"],
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "~/Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Liquid"],
  },
  {
    label: "~/Backend",
    skills: ["Node.js", "PHP", "GraphQL", "REST APIs", "Express"],
  },
  {
    label: "Email & CRM Platforms",
    skills: ["Klaviyo", "HubSpot", "Braze", "Salesforce Marketing Cloud", "Mailchimp"],
  },
  {
    label: "CMS & E-commerce",
    skills: ["Shopify", "Shopify CLI", "WordPress", "WooCommerce"],
  },
  {
    label: "~/Data",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    label: "~/Tooling",
    skills: ["Git", "GitHub", "Bitbucket", "Postman", "VS Code", "Vercel", "Figma", "n8n"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Web Development" | "Email Marketing";
  platform: string;
  description: string;
  tags: string[];
  href?: string;
};

// Real client/project work drawn from the team's resumes. Descriptions are
// paraphrased summaries of the original engagements.
export const projects: Project[] = [
  {
    slug: "konmari",
    title: "Konmari",
    category: "Web Development",
    platform: "WordPress",
    description:
      "Frontend development and WordPress theme work for Marie Kondo's global lifestyle brand site.",
    tags: ["WordPress", "JavaScript", "Responsive"],
    href: "https://konmari.com",
  },
  {
    slug: "playmonster",
    title: "PlayMonster",
    category: "Web Development",
    platform: "WordPress",
    description: "Frontend build and CMS integration for the toy and game maker's consumer site.",
    tags: ["WordPress", "JavaScript"],
    href: "https://playmonster.com",
  },
  {
    slug: "sarcos",
    title: "Sarcos",
    category: "Web Development",
    platform: "WordPress",
    description: "Custom WordPress theme and plugin development for the robotics company's corporate site.",
    tags: ["WordPress", "PHP"],
    href: "https://sarcos.com",
  },
  {
    slug: "naval-aviation-museum",
    title: "Naval Aviation Museum",
    category: "Web Development",
    platform: "WordPress",
    description: "Custom WordPress frontend for the National Naval Aviation Museum's public site.",
    tags: ["WordPress", "Responsive"],
    href: "https://www.navalaviationmuseum.org",
  },
  {
    slug: "fashionphile",
    title: "Fashionphile",
    category: "Email Marketing",
    platform: "Klaviyo · SFCC",
    description:
      "Integrated Klaviyo into the SFCC storefront — synced customer, order, and product data via API and built welcome, abandoned-cart, and post-purchase flows.",
    tags: ["Klaviyo", "SFCC", "API"],
    href: "https://www.fashionphile.com",
  },
  {
    slug: "travismathew",
    title: "TravisMathew",
    category: "Email Marketing",
    platform: "Klaviyo · Shopify",
    description:
      "Implemented Klaviyo on the Shopify store, syncing customer and order data and configuring event tracking for segmented campaigns.",
    tags: ["Klaviyo", "Shopify", "Automation"],
    href: "https://www.travismathew.com",
  },
  {
    slug: "biooptimizers",
    title: "BioOptimizers",
    category: "Email Marketing",
    platform: "Klaviyo · SFCC",
    description:
      "Set up Klaviyo integration with list segmentation and product/order sync to support repeat-purchase lifecycle flows.",
    tags: ["Klaviyo", "SFCC", "Segmentation"],
    href: "https://www.bioptimizers.com",
  },
  {
    slug: "gp-immigration",
    title: "GP Immigration",
    category: "Email Marketing",
    platform: "HubSpot · WordPress",
    description:
      "Integrated HubSpot CRM into the WordPress site — configured lead capture forms, contact records, and nurture workflows.",
    tags: ["HubSpot", "WordPress", "CRM"],
    href: "https://gpimmigration.com/",
  },
  {
    slug: "ariat-australia",
    title: "Ariat Australia",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront development for the Australian arm of Ariat, a performance western and equestrian boots & apparel brand.",
    tags: ["Shopify", "E-commerce", "Responsive"],
    href: "https://www.ariat.com.au/",
  },
  {
    slug: "carrera",
    title: "Carrera",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify theme and storefront work for Carrera, the Italian designer eyewear and sunglasses brand.",
    tags: ["Shopify", "E-commerce"],
    href: "https://us.carreraworld.com",
  },
  {
    slug: "shop-mahina",
    title: "Shop Mahina",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront build for Shop Mahina, a Hawaii-based apparel and lifestyle boutique.",
    tags: ["Shopify", "E-commerce"],
    href: "https://shopmahina.com",
  },
  {
    slug: "prive-revaux",
    title: "Prive Revaux",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront work for Prive Revaux, a direct-to-consumer sunglasses and eyewear brand.",
    tags: ["Shopify", "E-commerce"],
    href: "https://priverevaux.com",
  },
  {
    slug: "ren-skincare",
    title: "REN Skincare",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront development for REN Clean Skincare, a UK-based clean beauty and skincare brand.",
    tags: ["Shopify", "E-commerce"],
    href: "https://renskincare.com/",
  },
  {
    slug: "living-proof",
    title: "Living Proof Pro",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify-based professional ordering portal for Living Proof, a haircare science brand sold through salons.",
    tags: ["Shopify", "B2B Portal"],
    href: "https://pro.livingproof.com/account/login",
  },
  {
    slug: "konmari-shop",
    title: "KonMari Shop",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront for the KonMari e-commerce shop, Marie Kondo's home-organization product line — separate from the brand's WordPress content site.",
    tags: ["Shopify", "E-commerce"],
    href: "https://shop.konmari.com/",
  },
  {
    slug: "ethel-m",
    title: "Ethel M Chocolates",
    category: "Web Development",
    platform: "Next.js",
    description:
      "Headless storefront work for Ethel M Chocolates (Mars Inc.), a premium chocolate brand, on a Next.js front end.",
    tags: ["Next.js", "Headless Commerce"],
    href: "https://www.ethelm.com/",
  },
  {
    slug: "apt2b",
    title: "Apt2B",
    category: "Web Development",
    platform: "E-commerce",
    description:
      "Storefront development for Apt2B, a made-to-order sofa and sectional furniture retailer.",
    tags: ["E-commerce", "Responsive"],
    href: "https://www.apt2b.com/",
  },
  {
    slug: "presonus",
    title: "PreSonus",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront work for PreSonus, a professional audio hardware and software manufacturer.",
    tags: ["Shopify", "E-commerce"],
    href: "https://www.presonus.com/",
  },
  {
    slug: "jackson-guitars",
    title: "Jackson Guitars",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront development for Jackson Guitars, an electric and bass guitar manufacturer.",
    tags: ["Shopify", "E-commerce"],
    href: "https://www.jacksonguitars.com/",
  },
  {
    slug: "fender",
    title: "Fender",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront work on Fender's international store, serving the guitar and amplifier maker's global customers.",
    tags: ["Shopify", "E-commerce"],
    href: "https://intl.fender.com/",
  },
  {
    slug: "g-form",
    title: "G-Form",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront build for G-Form, a sports and tactical impact-protection gear maker.",
    tags: ["Shopify", "E-commerce"],
    href: "https://g-form.com/",
  },
  {
    slug: "remembrance-store",
    title: "Remembrance Store",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront work for The Remembrance Store by Batesville, a memorial and keepsake products retailer.",
    tags: ["Shopify", "E-commerce"],
    href: "https://remembrancestore.com/",
  },
  {
    slug: "grande-cosmetics",
    title: "Grandé Cosmetics",
    category: "Web Development",
    platform: "Shopify",
    description:
      "Shopify storefront development for Grandé Cosmetics, the lash and brow serum beauty brand.",
    tags: ["Shopify", "E-commerce"],
    href: "https://grandecosmetics.com/",
  },
];

export const contact = {
  heading: "Have a project in mind?",
  body: "We take on web development, design, email marketing, CRM integration, and automation work — reach out and let's talk scope.",
};
