import React from 'react';
import { SEO } from '../components/SEO';

export function Legal({ type }: { type: 'privacy' | 'cookie' | 'terms' | 'disclaimer' }) {
  
  const content = {
    privacy: {
        title: "Privacy Policy",
        body: `
          <h3>Introduction</h3>
          <p>This privacy policy explains how Wood You Do It ("we", "us", "our") collects and processes your personal data when you use the website woodyoudoit.net.</p>
          
          <h3>Data Collection & Advertising</h3>
          <p>We use third-party advertising companies, such as Google AdSense, to serve ads when you visit our website. These companies may use aggregated information (not including your name, address, email address, or telephone number) about your visits to this and other Web sites in order to provide advertisements about goods and services of interest to you.</p>

          <h3>Log Files</h3>
          <p>As with most other websites, we collect and use the data contained in log files. The information in the log files include your IP (internet protocol) address, your ISP, the browser you used to visit our site, the time you visited our site, and which pages you visited throughout our site.</p>

          <h3>Contact</h3>
          <p>If you have any questions regarding this Privacy Policy, please contact us via the contact form on this website.</p>
        `
    },
    cookie: {
        title: "Cookie Policy",
        body: `
          <h3>What are Cookies?</h3>
          <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
          
          <h3>How We Use Cookies</h3>
          <p>We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services.</p>

          <h3>Cookie Consent</h3>
          <p>When you first visit our site, you are presented with a cookie consent banner. You may choose to accept or reject non-essential cookies. You can clear your cookies in your browser settings at any time to reset this choice.</p>
        `
    },
    terms: {
        title: "Terms of Use",
        body: `
          <h3>Acceptance of Terms</h3>
          <p>By accessing and using woodyoudoit.net, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h3>Intellectual Property</h3>
          <p>All content included on this site, such as text, graphics, logos, images, audio clips, video clips, and free plans, is the property of Wood You Do It and is protected by international copyright laws. Free plans are provided for personal, non-commercial use only.</p>

          <h3>Safety Warning</h3>
          <p>Woodworking, laser engraving, and 3D printing involve inherent risks. Operating power tools and lasers can result in severe injury or death. The project guides provided on this site are for informational purposes only. By reading this site, you agree to take full responsibility for your own safety and actions. Always use appropriate personal protective equipment (PPE) and follow manufacturer safety guidelines.</p>
        `
    },
    disclaimer: {
        title: "Affiliate & Liability Disclaimer",
        body: `
          <h3>Affiliate & External Links</h3>
          <p>

Some pages on this website may contain links to products, tools, software or services that I personally use, review or recommend. These links are provided for informational purposes and to help visitors find the products mentioned.

In some cases, affiliate links may be used. If a purchase is made through an affiliate link, I may receive a small commission at no additional cost to you. Any such support helps fund new projects, tools and content for the channel.</p>
          
          <h3>Liability</h3>
          <p>The information contained on this website is for general information purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability with respect to the website or the information, products, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
        `
    }
  }[type];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO 
        title={`${content.title} - Wood You Do It`} 
        description={`Read the ${content.title} for woodyoudoit.net.`}
      />
      
      <div className="prose prose-lg prose-invert prose-zinc mx-auto prose-headings:font-serif">
        <h1>{content.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.body }} />
      </div>
    </div>
  );
}
