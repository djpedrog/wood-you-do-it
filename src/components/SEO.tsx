import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: string;
  url?: string;
  schema?: Record<string, unknown>;
}

export function SEO({
  title,
  description,
  type = 'website',
  image = '/images/placeholder.svg',
  url,
  schema,
}: SEOProps) {
  const location = useLocation();

  const domain = 'https://woodyoudoit.net';
  const fullTitle = `${title} | Wood You Do It`;

  const currentPath =
    location.pathname === '/' ? '' : location.pathname.replace(/\/+$/, '');

  const explicitUrl = url
    ? url.startsWith('http')
      ? url
      : `${domain}${url.startsWith('/') ? url : `/${url}`}`
    : null;

  const fullUrl = explicitUrl || `${domain}${currentPath}`;

  const fullImage = image.startsWith('http')
    ? image
    : `${domain}${image.startsWith('/') ? image : `/${image}`}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Wood You Do It" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
