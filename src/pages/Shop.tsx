import React from 'react';
import { SEO } from '../components/SEO';
import {
  ExternalLink,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface Product {
  name: string;
  description: string;
  productType: string;
  price: string;
  image: string;
  url: string;
}

export function Shop() {
  const storeUrl =
    'https://app.amazecommerce.com/shop/wood-you-do-it';

  const products: Product[] = [
    {
      name: 'Just Logo',
      description:
        'Official Wood You Do It logo T-shirt, designed for makers, workshop enthusiasts and supporters of the channel.',
      productType: 'Bella + Canvas 3001',
      price: 'US$20.02',
      image: '/images/shop/just-logo.jpg',
      url: 'https://app.amazecommerce.com/shop/wood-you-do-it/just-logo',
    },
  ];

  return (
    <div>
      <SEO
        title="Official Merch Shop"
        description="Shop official Wood You Do It merchandise for makers, DIY enthusiasts and workshop fans, available through Amaze Commerce."
      />

      {/* HERO */}
      <section className="bg-[#15181E] border-b border-[#1F2937] px-4 py-24 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <ShoppingBag className="w-16 h-16 text-brand mx-auto mb-6" />

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-brand">
            Official Wood You Do It Merch
          </p>

          <h1 className="mb-6 font-serif text-5xl font-bold md:text-7xl">
            Merch Store
          </h1>

          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-400">
            Wear the brand in your workshop and help support new projects,
            practical guides and independent maker content.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-20 text-white sm:px-6 lg:px-8">
        {/* INTRODUCTION */}
        <section className="max-w-3xl mx-auto mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <Sparkles className="w-8 h-8 text-brand" />
          </div>

          <h2 className="mb-5 font-serif text-3xl font-bold">
            Support the Workshop
          </h2>

          <p className="text-lg leading-relaxed text-gray-400">
            Every purchase helps support future workshop builds, tool reviews,
            tutorials and improvements to the Wood You Do It channel. Products
            are created and fulfilled securely through Amaze Commerce.
          </p>
        </section>

        {/* PRODUCTS */}
        <section aria-labelledby="featured-products">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-left">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand">
                New Collection
              </p>

              <h2
                id="featured-products"
                className="font-serif text-3xl font-bold"
              >
                Featured Products
              </h2>
            </div>

            <p className="max-w-md text-left text-sm leading-relaxed text-gray-500 sm:text-right">
              More products and designs will be added as the new collection
              grows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.url}
                className="group overflow-hidden rounded-2xl border border-[#1F2937] bg-[#15181E] shadow-xl transition duration-300 hover:-translate-y-1 hover:border-brand/60"
              >
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${product.name} on Amaze Commerce`}
                  className="block"
                >
                  <div className="aspect-square overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={`${product.name} official Wood You Do It merchandise`}
                      loading="lazy"
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 text-left">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-brand">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {product.productType}
                        </p>
                      </div>

                      <span className="shrink-0 font-bold text-white">
                        {product.price}
                      </span>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-gray-400">
                      {product.description}
                    </p>

                    <span className="inline-flex items-center gap-2 font-semibold text-brand">
                      View product
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* STORE INFORMATION */}
        <section className="mt-16 rounded-2xl border border-[#1F2937] bg-[#15181E] p-8 md:flex md:items-center md:justify-between md:gap-10">
          <div className="flex items-start gap-4 text-left">
            <ShieldCheck className="w-9 h-9 shrink-0 text-brand" />

            <div>
              <h2 className="mb-2 text-xl font-bold">
                Secure Checkout through Amaze Commerce
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-400">
                Product options, current pricing, shipping availability and
                payment are handled on the official Amaze Commerce storefront.
                Product links open securely in a new browser tab.
              </p>
            </div>
          </div>

          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-bold text-black transition-opacity hover:opacity-90 md:mt-0"
          >
            Visit Full Store
            <ExternalLink className="w-4 h-4" />
          </a>
        </section>

        {/* PRICE NOTICE */}
        <p className="mt-8 text-center text-xs leading-relaxed text-gray-500">
          Displayed prices are indicative and may change depending on product
          options, currency, production costs, shipping destination or
          promotions. Confirm the final amount during checkout.
        </p>
      </main>
    </div>
  );
}
