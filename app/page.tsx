// app/page.tsx (Next.js 13+ App Router)
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend or service like Formspree
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Stay Compliant. File Smart.
        </h1>
        <p className="text-xl mb-6 text-gray-600">
          Your UAE corporate tax assistant — built for SMEs, Free Zones, and
          finance teams.
        </p>

        {submitted ? (
          <p className="text-green-600 font-medium text-lg">
            🎉 You're on the waitlist! We'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex justify-center gap-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-xl border w-full max-w-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-900 transition"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </section>

      <section className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-left">
        {[
          {
            title: "📊 Real-time Tax Estimation",
            text: "Upload Excel or sync with Xero to see what you owe instantly — including Small Business Relief logic.",
          },
          {
            title: "📁 FTA-Ready Reports",
            text: "Generate ready-to-file tax returns, summary reports, and adjustment breakdowns in seconds.",
          },
          {
            title: "🧠 Smart Compliance Alerts",
            text: "Get notified when something in your books violates UAE tax rules — before it becomes a problem.",
          },
        ].map((f, i) => (
          <div key={i} className="p-4 border rounded-2xl shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-2">Who’s This For?</h2>
        <p className="text-gray-600 mb-4">
          SMEs, Free Zone companies, freelancers, and tax agents across the UAE.
        </p>
        <p className="text-gray-500 text-sm">
          No accounting software? No problem. You can upload Excel.
        </p>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} UAE Tax Assistant. All rights reserved.
      </footer>
    </main>
  );
}
