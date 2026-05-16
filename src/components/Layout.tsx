import { Header } from './Header';
import { Footer } from './Footer';
import { ConsentBanner } from './ConsentBanner';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0F1115] font-sans text-[#F3F4F6] flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  );
}
