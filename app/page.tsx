"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100">
      {/* Hero Section */}
      <section className="w-full max-w-5xl text-center py-20">
        <h1 className="text-6xl font-extrabold tracking-tight text-purple-900">
          Kickstart Romania
        </h1>
        <p className="mt-6 text-xl text-indigo-900 max-w-3xl mx-auto">
          Join the 54-hour Hackathon. Innovate, Build, and Win!
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#register"
            className="rounded-md bg-purple-700 px-6 py-3 text-white text-lg font-semibold hover:bg-purple-800"
          >
            Register Now
          </a>
          <a
            href="#learn-more"
            className="rounded-md border border-purple-700 px-6 py-3 text-purple-700 text-lg font-semibold hover:bg-purple-200"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl py-20" id="features">
        <h2 className="text-4xl font-bold text-indigo-900 mb-12 text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="feature-card bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">24/7 Access</h3>
            <p className="text-indigo-700">
              Work anytime with full access to all facilities and resources.
            </p>
          </div>
          <div className="feature-card bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">Mentorship</h3>
            <p className="text-indigo-700">
              Experienced mentors to guide you through challenges.
            </p>
          </div>
          <div className="feature-card bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">Prizes & Rewards</h3>
            <p className="text-indigo-700">
              Exciting prizes for the best and most innovative projects.
            </p>
          </div>
        </div>
      </section>

      {/* New Mock Features Section */}
      <section className="w-full max-w-5xl py-20 bg-purple-50 rounded-lg shadow-md" id="mock-features">
        <h2 className="text-4xl font-bold text-indigo-900 mb-12 text-center">
          Why Join?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="feature-card bg-white rounded-lg p-8 shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">Innovation</h3>
            <p className="text-indigo-700">
              Bring your creative ideas to life and push the boundaries of technology.
            </p>
          </div>
          <div className="feature-card bg-white rounded-lg p-8 shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">Collaboration</h3>
            <p className="text-indigo-700">
              Work with diverse teams to build incredible projects and learn from peers.
            </p>
          </div>
          <div className="feature-card bg-white rounded-lg p-8 shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">Support</h3>
            <p className="text-indigo-700">
              Get access to expert advice and community support throughout the event.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
