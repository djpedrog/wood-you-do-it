import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const domain = 'https://woodyoudoit.net';
const postsDir = path.join(rootDir, 'src', 'content', 'posts');
const publicDir = path.join(rootDir, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const toSlug = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const addUrl = ({
  loc,
  changefreq = 'monthly',
  priority = '0.6',
  lastmod,
}) => {
  sitemap += '  <url>\n';
  sitemap += `    <loc>${escapeXml(loc)}</loc>\n`;

  if (lastmod) {
    sitemap += `    <lastmod>${escapeXml(lastmod)}</lastmod>\n`;
  }

  sitemap += `    <changefreq>${changefreq}</changefreq>\n`;
  sitemap += `    <priority>${priority}</priority>\n`;
  sitemap += '  </url>\n';
};

let sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

const staticRoutes = [
  {
    route: '',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    route: '/posts',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    route: '/laser',
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    route: '/3d-printing',
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    route: '/tools',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    route: '/youtube-channel',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/shop',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/support',
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    route: '/about',
    changefreq: 'yearly',
    priority: '0.6',
  },
  {
    route: '/contact',
    changefreq: 'yearly',
    priority: '0.6',
  },
  {
    route: '/privacy-policy',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    route: '/cookie-policy',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    route: '/terms',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    route: '/disclaimer',
    changefreq: 'yearly',
    priority: '0.3',
  },
];

staticRoutes.forEach(({ route, changefreq, priority }) => {
  addUrl({
    loc: `${domain}${route}`,
    changefreq,
    priority,
  });
});

const categorySlugs = new Set();

if (fs.existsSync(postsDir)) {
  const files = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.json'))
    .sort();

  files.forEach((file) => {
    try {
      const filePath = path.join(postsDir, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      if (!data.slug || !data.category) {
        console.warn(`Skipped ${file}: missing slug or category.`);
        return;
      }

      const categorySlug = toSlug(data.category);
      categorySlugs.add(categorySlug);

      addUrl({
        loc: `${domain}/${categorySlug}/${data.slug}`,
        changefreq: 'monthly',
        priority: '0.8',
        lastmod: data.date || undefined,
      });
    } catch (error) {
      console.error(`Could not process ${file}:`, error.message);
      process.exitCode = 1;
    }
  });
}

categorySlugs.forEach((categorySlug) => {
  addUrl({
    loc: `${domain}/categories/${categorySlug}`,
    changefreq: 'weekly',
    priority: '0.7',
  });
});

sitemap += '</urlset>\n';

fs.writeFileSync(
  path.join(publicDir, 'sitemap.xml'),
  sitemap,
  'utf-8'
);

console.log('Generated public/sitemap.xml');

const robots = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync(
  path.join(publicDir, 'robots.txt'),
  robots,
  'utf-8'
);

console.log('Generated public/robots.txt');

const redirects = '/*    /index.html    200\n';

fs.writeFileSync(
  path.join(publicDir, '_redirects'),
  redirects,
  'utf-8'
);

console.log('Generated public/_redirects');
