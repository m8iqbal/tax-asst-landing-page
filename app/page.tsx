'use client';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-gray-900 font-sans">
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 md:py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Automate UAE Corporate Tax Filing
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-5">
              For SMEs, Free Zone entities & accountants. Upload your financials, get your return — FTA-ready.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <p className="text-green-600 font-semibold text-lg">
                ✅ You're on the waitlist! We'll be in touch soon.
              </p>
            )}
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/uae-tax-illustration.svg"
              alt="Tax Filing Assistant"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Businesses Love It</h2>
          <p className="text-gray-600 mb-10 text-base sm:text-lg">
            Smart, simple, and stress-free UAE corporate tax compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '📊 Real-time Tax Insights',
                text: 'Instant tax projections with Free Zone logic and Small Business Relief.',
              },
              {
                title: '📁 FTA-Ready Output',
                text: 'Download formatted tax return summaries and supporting docs.',
              },
              {
                title: '🧠 Built-In Compliance Assistant',
                text: 'We flag risky expenses and help you avoid penalties — year-round.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Be among the first to simplify your UAE tax filing.
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Join the early access list for discounts and priority onboarding.
          </p>
          {!submitted && (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} UAE Tax Assistant — Built for compliance & simplicity.
      </footer>
    </main>
  );
}
