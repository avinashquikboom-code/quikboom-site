import type { MetadataRoute } from 'next';
import { AGENCY_BRAND, BLOG_POSTS, PORTFOLIO_ITEMS, SERVICES } from '@/data/agency-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = AGENCY_BRAND.siteUrl;
  const staticRoutes = ['', '/privacy-policy', '/terms'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.4,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const portfolioRoutes = PORTFOLIO_ITEMS.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(b.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes];
}
