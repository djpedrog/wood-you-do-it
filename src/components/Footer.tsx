import React from "react";
import { Link } from "react-router-dom";
import { Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0C0F] text-gray-500 py-12 border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg">Wood You Do It</h3>
          <p className="text-sm leading-relaxed">
            DIY Projects, Laser Engraving, 3D Printing, and Workshop Tool Reviews by Pedro Gameiro. Find free plans and
            step-by-step guides.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.youtube.com/@WoodYouDoIt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/wood_you_do_it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/categories/diy-projects" className="hover:text-brand transition-colors">
                DIY Projects
              </Link>
            </li>
            <li>
              <Link to="/tools" className="hover:text-brand transition-colors">
                Tool Reviews
              </Link>
            </li>
            <li>
              <Link to="/laser" className="hover:text-brand transition-colors">
                Laser Engraving
              </Link>
            </li>
            <li>
              <Link to="/3d-printing" className="hover:text-brand transition-colors">
                3D Printing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Support &amp; Shop</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://wood-you-do-it.creator-spring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                Merch Shop
              </a>
            </li>
            <li>
              <a
                href="https://www.paypal.me/djpedrog"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                PayPal Donation
              </a>
            </li>
            <li>
              <a
                href="https://buymeacoffee.com/woodyoudoit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                Buy Me A Coffee
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-brand transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:text-brand transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-brand transition-colors">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-brand transition-colors">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-[#1F2937] text-sm text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Wood You Do It. All rights reserved.</p>

        <div className="flex items-center gap-4">
          {/* Brand-consistent badge (instead of green) */}
          <span className="bg-brand/10 text-brand px-2 py-0.5 rounded border border-brand/30">
            SEO Optimized
          </span>
          <span className="opacity-50">
            Deployed via <strong>Netlify</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
