import React from 'react';
import { SEO } from '../components/SEO';
import { CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';


export function Support() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      
      <SEO title="Support the Channel" description="Support Wood You Do It." />

      <h1 className="text-4xl font-serif font-bold text-white mb-6">
        Support the Workshop
      </h1>

      <p className="text-xl text-gray-400 mb-16">
        All guides are free. If they helped you, consider supporting the project.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

        {/* BUY ME A COFFEE */}
        <a
          href="https://buymeacoffee.com/woodyoudoit"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#15181E] border border-yellow-400 p-10 rounded-2xl hover:scale-105 transition-all"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            className="h-14 mx-auto mb-4"
            alt="Buy me a coffee"
          />
          <span className="text-white text-xl font-serif">
            Buy me a coffee
          </span>
        </a>

        {/* PAYPAL */}
        <a
          href="https://www.paypal.me/djpedrog"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#15181E] border border-blue-500 p-10 rounded-2xl hover:scale-105 transition-all flex flex-col items-center gap-4"
        >
          <img
  src="public/images/paypal.png" 
  alt="PayPal"
  className="w-10 h-10 object-contain"
/>

          <span className="text-white text-xl font-serif">
            PayPal Donation
          </span>

          {/* EXTRA (confiança) */}
          <p className="text-gray-500 text-sm">
            Secure donation powered by PayPal
          </p>
        </a>

      </div>

      {/* INFO */}
      <div className="mt-16 text-sm text-gray-500">
        <p>
  Want to support further? Check out the Merch Store in the{" "}
  <Link to="/shop" className="text-brand hover:underline">
    Shop
  </Link>{" "}
  section.
</p>

      </div>

    </div>
  );
}
