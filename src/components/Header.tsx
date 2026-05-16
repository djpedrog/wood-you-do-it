import React from "react";
import { Link } from "react-router-dom";
import { Youtube, Instagram, ShoppingBag, Menu, X, Mail } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-[#15181E] text-[#F3F4F6] border-b border-[#1F2937] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo-v1-branco.png" className="h-10 w-auto" />
            <span className="font-serif font-bold text-xl tracking-tight text-brand">
              Wood You Do It
            </span>
          </Link>

          {/* NAV + ICONS */}
          <div className="hidden md:flex items-center gap-8">

            {/* MENU */}
            <nav className="flex gap-8 text-sm font-medium">
              <Link to="/posts" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/laser" className="text-gray-400 hover:text-white transition-colors">
                Laser Engraving
              </Link>
              <Link to="/3d-printing" className="text-gray-400 hover:text-white transition-colors">
                3D Printing
              </Link>
              <Link to="/youtube-channel" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </Link>
            </nav>

            {/* DIVIDER */}
            <div className="h-6 w-px bg-[#374151]" />

            {/* ICONS (✅ AQUI É QUE TEM DE ESTAR O ENVELOPE) */}
            <div className="flex items-center gap-4">

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@WoodYouDoIt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-brand transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/wood_you_do_it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-brand transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* ✅ CONTACT (ENVELOPE CORRETO) */}
              <Link
                to="/contact"
                className="text-zinc-400 hover:text-brand transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>

              {/* Shop */}
              <Link
                to="/shop"
                className="text-zinc-400 hover:text-brand transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
              </Link>

            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 pb-6 space-y-3 bg-[#15181E] border-b border-[#1F2937]">
          <Link to="/posts" className="block py-2 text-gray-300">Projects</Link>
          <Link to="/laser-engraving" className="block py-2 text-gray-300">Laser Engraving</Link>
          <Link to="/3d-printing" className="block py-2 text-gray-300">3D Printing</Link>
          <Link to="/youtube-channel" className="block py-2 text-gray-300">YouTube</Link>
          <Link to="/contact" className="block py-2 text-brand">Contact</Link>
        </div>
      )}
    </header>
  );
}