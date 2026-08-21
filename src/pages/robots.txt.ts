import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const site = import.meta.env.SITE;
  const sitemapUrl = new URL('sitemap-index.xml', site).href;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
