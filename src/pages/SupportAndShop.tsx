import React from 'react';
import { SEO } from '../components/SEO';

export function Support() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <SEO title="Support the Channel" description="Support Wood You Do It." />

      <h1 className="text-4xl font-serif font-bold text-white mb-6">
        Support the Workshop
      </h1>

      <p className="text-xl text-gray-400 mb-16">
        All guides are free. If it helped you, consider supporting the project.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

        <a href="https://buymeacoffee.com/woodyoudoit" target="_blank" rel="noopener noreferrer"
           className="bg-[#15181E] border border-yellow-400 p-10 rounded-2xl hover:scale-105 transition-all">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" className="h-14 mx-auto mb-4" />
          <span className="text-white text-xl font-serif">Buy me a coffee</span>
        </a>

        <a href="https://www.paypal.me/djpedrog" target="_blank" rel="noopener noreferrer"
           className="bg-[#15181E] border border-blue-500 p-10 rounded-2xl hover:scale-105 transition-all">
          <span className="text-white text-xl font-serif">PayPal Donation</span>
        </a>

      </div>
    </div>
  );
}

export function Shop() {

  const products = [
    ["https://mockup-api.teespring.com/v3/image/Ypf26NgsO7_Rv6732jRdHJ6vY1c/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/just-my-logo-yellow?product=387&variation=103471","Just my logo - Yellow","Premium Tee","€19.92"],
    ["https://mockup-api.teespring.com/v3/image/N3oqE5f39PlY3G-v31YCggLIpCo/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it-yellow?product=387&variation=103471","Wood You Do It? Yellow","Premium Tee","€19.92"],
    ["https://mockup-api.teespring.com/v3/image/FeBV7wnn90fyHU7k6eXhruS6SUI/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/new-just-my-logo?product=387&variation=101810","Just my logo - Black","Premium Tee","€34.84"],
    ["https://mockup-api.teespring.com/v3/image/ZKSTJJT5H-a-PapHyIjS2uPxMvw/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/new-just-my-logo?product=793&variation=103538","Just my logo - Black","Pullover Hoodie","€71.69"],

    ["https://mockup-api.teespring.com/v3/image/IiGBxacVEKM-Zx-rNiE2VtYE1VE/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it?product=793&variation=103538","Wood You Do It Black","Hoodie","€39.83"],
    ["https://mockup-api.teespring.com/v3/image/nNVj6y79f-rKehsNOJpibVoYuSM/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it?product=375&variation=100052","Women's Tee","Classic Tee","€19.92"],
    ["https://mockup-api.teespring.com/v3/image/FeBV7wnn90fyHU7k6eXhruS6SUI/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/new-just-my-logo?product=387&variation=101810","Logo Tee Black","Premium Tee","€34.84"],
    ["https://mockup-api.teespring.com/v3/image/ZKSTJJT5H-a-PapHyIjS2uPxMvw/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/new-just-my-logo?product=793&variation=103538","Hoodie Black","Pullover Hoodie","€71.69"],

    ["https://mockup-api.teespring.com/v3/image/oiyMFVF9b2jsxpwZr9fJMoZTH5g/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/new-just-my-logo?product=1566&variation=104946","Logo Mug","Mug","€13.92"],
    ["https://mockup-api.teespring.com/v3/image/IiGBxacVEKM-Zx-rNiE2VtYE1VE/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it?product=793&variation=103538","Hoodie Premium","Pullover Hoodie","€39.83"],
    ["https://mockup-api.teespring.com/v3/image/nNVj6y79f-rKehsNOJpibVoYuSM/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it?product=375&variation=100052","Classic Tee","Premium Tee","€19.92"],
    ["https://mockup-api.teespring.com/v3/image/G5vKgq33cViiE3ORCYIYKHnHSWY/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/just-my-logo-yellow?product=379&variation=102653","Long Sleeve Yellow","Long Sleeve","€24.90"],

    ["https://mockup-api.teespring.com/v3/image/sTeYMPSQQa2yofSdDwYu7q24H3g/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it-yellow?product=379&variation=102653","Yellow Long Sleeve","Long Sleeve","€19.92"],
    ["https://mockup-api.teespring.com/v3/image/azvEL0tB1wwzxoA_i5-Y5LN5T-0/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/new-just-my-logo?product=753&variation=103294","Black Tee","Premium Tee","€19.92"],
    ["https://mockup-api.teespring.com/v3/image/HE-PFftj7dNdqGN9EGw6KfnVBKI/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/new-just-my-logo?product=756&variation=103344","Long Sleeve Black","Premium Long Sleeve","€24.80"],
    ["https://mockup-api.teespring.com/v3/image/RBxkR7jG-e8A_2wEjmPKmCDBSnA/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/new-just-my-logo?product=1096&variation=104162","Zip Hoodie","Zip Hoodie","€63.72"],

    ["https://mockup-api.teespring.com/v3/image/BOf4pDToS41oU3Pn4LSS-6qoRrI/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it?product=753&variation=103294","V-Neck Tee","Premium Tee","€19.92"],
    ["https://mockup-api.teespring.com/v3/image/ew0WUqqTqahT_9WD0ua4QeFSKs8/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it?product=387&variation=101810","Classic Tee","Premium Tee","€19.92"],
    ["https://mockup-api.teespring.com/v3/image/v8wkK1Fp576xQLdBfAgKixesXz8/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it?product=757&variation=103349","Women's V-Neck","Premium Tee","€19.92"],
    ["https://mockup-api.teespring.com/v3/image/6MVvwF_k1z44ZWuCs-8GxStcwy0/800/800.jpg","https://wood-you-do-it.creator-spring.com/listing/wood-you-do-it?product=379&variation=100095","Classic Long Sleeve","Long Sleeve","€19.92"]
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">

      <SEO title="Merch Shop" description="Official merch" />

      <h1 className="text-4xl font-serif font-bold text-white mb-6">
        Official Merch Shop
      </h1>

      <p className="text-gray-400 mb-10">
        Click a product to view and purchase in the official store.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {products.map((p, i) => (
          <a key={i} href={p[1]} target="_blank" rel="noopener noreferrer"
             className="bg-[#15181E] border border-[#1F2937] rounded-xl overflow-hidden hover:scale-[1.02] transition-all">

            <img src={p[0]} className="w-full bg-white" />

            <div className="p-4 text-left">
              <h3 className="text-white text-sm font-semibold">{p[2]}</h3>

              <div className="flex justify-between mt-2">
                <span className="text-gray-400 text-xs">{p[3]}</span>
                <span className="text-white font-bold text-sm">{p[4]}</span>
              </div>
            </div>

          </a>
        ))}

      </div>

    </div>
  );
}
