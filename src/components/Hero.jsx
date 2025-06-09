import heroImage from '@/assets/hero-image.jpg';

export default function Hero() {
  return (
    <section className="w-full py-12 px-4 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
      {/* Left: Text */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Crystal Clear Every Time
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Professional window, solar panel, and pressure washing services for homes and businesses.
        </p>
        <a
          href="#quote"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Right: Hero Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src={heroImage}
          alt="Ocean view windows"
          className="w-full rounded-xl shadow-xl object-cover"
        />
      </div>
    </section>
  );
}







