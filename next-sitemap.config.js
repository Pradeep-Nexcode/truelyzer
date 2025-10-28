const fetch = require('node-fetch');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.trulyzer.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,

  // Optional: skip internal routes
  exclude: ['/admin/*', '/api/*'],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },

  // ✅ Add dynamic routes for blogs and services
  additionalPaths: async (config) => {
    const baseUrl = process.env.API_URL || 'https://api.trulyzer.com';

    // Fetch dynamic blogs
    const blogRes = await fetch(`${baseUrl}/blogs`);
    const blogs = blogRes.ok ? await blogRes.json() : [];

    // Fetch dynamic services
    const serviceRes = await fetch(`${baseUrl}/services`);
    const services = serviceRes.ok ? await serviceRes.json() : [];

    // Map all dynamic routes
    const blogPaths = blogs.map((blog) => ({
      loc: `/blogs/${blog.slug}`,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: blog.updatedAt || new Date().toISOString(),
    }));

    const servicePaths = services.map((service) => ({
      loc: `/services/${service.slug}`,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: service.updatedAt || new Date().toISOString(),
    }));

    // Return combined
    return [...blogPaths, ...servicePaths];
  },
};
