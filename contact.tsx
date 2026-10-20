import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Mail, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const encode = (data: Record<string, string>) =>
    new URLSearchParams(data).toString();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      'form-name': 'contact',
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      subject: String(formData.get('subject') || ''),
      message: String(formData.get('message') || ''),
      'bot-field': String(formData.get('bot-field') || ''),
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode(data),
      });

      if (!response.ok) {
        throw new Error('The message could not be sent.');
      }

      form.reset();
      setIsSubmitted(true);
    } catch {
      setErrorMessage(
        'Something went wrong while sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SEO
        title="Contact"
        description="Contact Wood You Do It about DIY projects, woodworking, laser engraving, 3D printing or tool reviews."
      />

      <div className="bg-[#15181E] border-b border-[#1F2937] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="w-16 h-16 text-brand mx-auto mb-6" />

          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Contact
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question about a project, tool review or workshop idea?
            Send a message using the form below.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isSubmitted ? (
          <div className="bg-[#15181E] border border-green-500/30 rounded-2xl p-10 text-center">
            <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-5" />

            <h2 className="text-2xl font-serif font-bold text-white mb-3">
              Message sent successfully
            </h2>

            <p className="text-gray-400">
              Thank you for getting in touch. I will review your message as soon
              as possible.
            </p>

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-8 px-6 py-3 rounded-xl bg-brand text-black font-bold hover:opacity-90 transition-opacity"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-[#15181E] border border-[#1F2937] rounded-2xl p-6 md:p-10 shadow-2xl"
          >
            <input type="hidden" name="form-name" value="contact" />

            <p className="hidden">
              <label>
                Do not fill this out if you are human:
                <input name="bot-field" />
              </label>
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-[#374151] bg-[#0F1115] px-4 py-3 text-white placeholder:text-gray-600 focus:border-brand focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-[#374151] bg-[#0F1115] px-4 py-3 text-white placeholder:text-gray-600 focus:border-brand focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="text-left mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-xl border border-[#374151] bg-[#0F1115] px-4 py-3 text-white placeholder:text-gray-600 focus:border-brand focus:outline-none"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="text-left mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={7}
                className="w-full resize-y rounded-xl border border-[#374151] bg-[#0F1115] px-4 py-3 text-white placeholder:text-gray-600 focus:border-brand focus:outline-none"
                placeholder="Write your message here..."
              />
            </div>

            {errorMessage && (
              <p className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-bold text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>

            <p className="mt-5 text-center text-xs text-gray-500">
              Your details will only be used to respond to your message.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
