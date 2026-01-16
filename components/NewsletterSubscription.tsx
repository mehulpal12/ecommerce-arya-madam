'use client';

import { useState } from 'react';

type Message = {
  type: 'success' | 'error';
  text: string;
};

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // 🔥 yaha future mein real API call aayegi
      await new Promise((res) => setTimeout(res, 1000));

      setMessage({
        type: 'success',
        text: 'Thank you for subscribing! Check your email for confirmation.',
      });
      setEmail('');
    } catch {
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#3d6b82] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block mb-6 px-6 py-2 border-2 border-orange-400/50 rounded-full text-orange-300 text-sm font-medium uppercase">
          Exclusive Offer
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join Our Professional Network
        </h2>

        {/* Description */}
        <p className="text-white/90 text-lg mb-10 max-w-3xl mx-auto">
          Subscribe to receive exclusive offers, industry insights, and early access
          to new collections. Get 10% off your first order.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 bg-white/10 border-2 border-white/20 rounded-lg
                       text-white placeholder:text-white/60 focus:outline-none
                       focus:border-orange-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-orange-400 hover:bg-orange-500
                       text-white font-semibold rounded-lg
                       disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {/* Message */}
        {message && (
          <div
            className={`mb-4 p-3 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-500/20 text-green-100'
                : 'bg-red-500/20 text-red-100'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Privacy */}
        <p className="text-white/70 text-sm">
          By subscribing, you agree to our{' '}
          <a href="/privacy-policy" className="text-orange-300 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
