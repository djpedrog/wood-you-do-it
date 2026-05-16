import React from "react";
import { Mail } from "lucide-react";
import { SEO } from "../components/SEO";

export function Contact() {
  return (
    <div>
      <SEO title="Contact" description="Get in touch" />

      <section className="px-4 py-16 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">
          Get In Touch
        </h1>

        <p className="text-gray-400 mb-12">
          Have a question about a build? Interested in a sponsorship? Drop a message!
        </p>

        {/* BOX */}
        <div className="bg-[#15181E] border border-[#1F2937] rounded-2xl p-10 text-left">

          <div className="flex flex-col items-center mb-6">
            <Mail className="w-10 h-10 text-brand mb-4" />
            <h2 className="text-xl font-bold text-white">Send a Message</h2>
            <p className="text-gray-400 text-sm mt-2 text-center">
              Fill the form below and I’ll get back to you.
            </p>
          </div>

          {/* ✅ NETLIFY FORM */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            {/* obrigatório para Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Anti-spam (invisível) */}
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-[#0F1115] border border-[#1F2937] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-[#0F1115] border border-[#1F2937] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full bg-[#0F1115] border border-[#1F2937] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand"
              required
            />

            <button
              type="submit"
              className="w-full bg-brand text-black font-bold py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>
    </div>
  );
}