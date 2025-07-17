'use client';
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend/email service
    setSubmitted(true);
  };

  return (
    <main className="bg-gradient-to-b from-white to-gray-50 min-h-screen text-gray-800">
      <header className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            UAE Corporate Tax. Automated.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            AI-powered tax assistant that helps you prepare, optimize, and file your UAE corporate tax — no guesswork, no penalties.
          </p>

          {submitted ? (
            <p className="text-green-600 font-semibold text-lg">🎉 You're on the waitlist!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-auto flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
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

        <div className="md:w-1/2">
          <img
            src="/placeholder-illustration.svg"
            alt="Illustration of UAE tax assistant"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </header>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold">Why Businesses Use Us</h2>
          <p className="text-gray-600 mt-2">Built for UAE tax compliance from the ground up.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "📊 Real-time Tax Insights",
              text: "Instantly calculate your tax liability with UAE-specific thresholds and exemptions.",
            },
            {
              title: "📁 Filing-Ready Output",
              text: "Download reports, tax returns, and audit trails pre-formatted for submission.",
            },
            {
              title: "🧠 AI Tax Assistant",
              text: "Get suggestions, alerts, and optimization tips as you prepare your return.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-[#f8fafc] to-[#e2e8f0] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Made for Small Businesses & Tax Professionals Alike</h2>
          <p className="text-gray-700 text-lg">
            Whether you’re managing one Free Zone company or a portfolio of clients — we make corporate tax filing simple, accurate, and stress-free.
          </p>
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} UAE Tax Assistant. Built with ❤️ in the Emirates.
      </footer>
    </main>
  );
}
