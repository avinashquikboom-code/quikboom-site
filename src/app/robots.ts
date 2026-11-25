import type { MetadataRoute } from 'next';
import { AGENCY_BRAND } from '@/data/agency-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${AGENCY_BRAND.siteUrl}/sitemap.xml`,
  };
}
