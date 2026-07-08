/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tamkeen-es.com',
  generateRobotsTxt: false,
  exclude: ['/404'],
  generateIndexSitemap: false,
  outDir: 'public',
  transform: async (config, path) => {
    const priorities = { '/': 1.0, '/services/': 0.9, '/about/': 0.8, '/contact/': 0.8, '/products/': 0.6, '/blog/': 0.6 };
    const changefreqs = { '/': 'weekly', '/services/': 'monthly', '/about/': 'monthly', '/contact/': 'monthly', '/products/': 'monthly', '/blog/': 'weekly' };
    const servicePaths = ['/services/power-gen/', '/services/marine-auto/', '/services/industrial-electrical/', '/services/ev-solar/', '/services/oil-gas/', '/services/turbine-services/'];
    const priority = priorities[path] ?? (servicePaths.includes(path) ? 0.7 : 0.5);
    const changefreq = changefreqs[path] ?? 'monthly';
    return { loc: path, changefreq, priority, lastmod: new Date().toISOString() };
  },
};
