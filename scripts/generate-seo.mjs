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

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const staticRoutes = [
    '', '/about', '/contact', '/posts', '/categories', 
    '/laser-engraving', '/3d-printing', '/youtube-channel', 
    '/support', '/shop', '/privacy-policy', '/cookie-policy', '/terms', '/disclaimer'
];

staticRoutes.forEach(route => {
    sitemap += `  <url>\n    <loc>${domain}${route}</loc>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
});

// We generate a route for each post
if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir);
    files.forEach(file => {
        if (file.endsWith('.json')) {
            const data = JSON.parse(fs.readFileSync(path.join(postsDir, file), 'utf-8'));
            if (data.slug && data.category) {
                const categorySlug = data.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                sitemap += `  <url>\n    <loc>${domain}/${categorySlug}/${data.slug}</loc>\n    <changefreq>monthly</changefreq>\n  </url>\n`;
            }
        }
    });
}

sitemap += `</urlset>`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Generated sitemap.xml');

const robots = `User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
console.log('Generated robots.txt');

fs.writeFileSync(path.join(publicDir, '_redirects'), '/* /index.html 200\n');
console.log('Generated _redirects');
