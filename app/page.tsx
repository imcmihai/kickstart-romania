import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 flex items-center justify-center text-white px-6">
      <section className="max-w-5xl text-center">
        <h1 className="text-6xl font-extrabold mb-6">
          Kickstart Romania
        </h1>
        <p className="text-2xl mb-4">
          Join us for a thrilling 54-hour hackathon full of innovation, collaboration, and creativity!
        </p>
        <p className="text-lg mb-8">
          Whether you're a coder, designer, or entrepreneur, Kickstart Romania is the place to be.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#register" className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-100 transition">
            Register Now
          </a>
          <a href="#learn-more" className="border border-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition">
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
