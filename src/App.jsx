import React, { useState } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/glass-action-logo-4x-current.png";
import heroImage from "./assets/hero-image.jpg";
import truckImage from "./assets/truck-photo.jpg";
import windowImg from "./assets/window-cleaning.jpg";
import pressureImg from "./assets/pressure-washing-2.jpg";
import solarImg from "./assets/solar-panel-cleaning.jpg";
import Schema from "./Schema.jsx";




function App() {
  const [showSolar, setShowSolar] = useState(false);
  const [showPressure, setShowPressure] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [showPressureOther, setShowPressureOther] = useState(false);
  const [showWindowOther, setShowWindowOther] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "solar") setShowSolar(checked);
    if (name === "pressure") setShowPressure(checked);
    if (name === "window") setShowWindow(checked);
  };

  return (
    <div className="w-full font-sans bg-white">
      {/* Header */}
      <header className="w-full px-4 py-2 md:py-4 shadow bg-white sticky top-0 z-50">
  <div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center text-center md:text-left">

    {/* Desktop Nav + Instagram (left) */}
    <nav className="hidden md:flex items-center gap-6">
      <a href="#services" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Services</a>
      <a href="#about" className="text-gray-700 hover:text-blue-600 text-sm font-medium">About</a>
      <a href="#testimonials" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Testimonials</a>
      <a href="#quote" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Contact</a>
      <a
        href="https://www.instagram.com/glassactioncleaning?igsh=NTc4MTIwNjQ2YQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-pink-500 text-xl"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </nav>

    {/* Mobile Left: Hamburger + Instagram */}
    <div className="md:hidden flex items-center gap-3">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="text-xl text-gray-700"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <a
        href="https://www.instagram.com/glassactioncleaning?igsh=NTc4MTIwNjQ2YQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-gray-700 hover:text-pink-500"
      >
        <FaInstagram />
      </a>
    </div>

    {/* Center Logo */}
    <div className="flex justify-center">
      <a href="#hero">
        <img
          src={logo}
          alt="Glass Action Cleaning Logo"
          className="h-12 sm:h-14 md:h-20 object-contain cursor-pointer"
        />
      </a>
    </div>

    {/* Quote Button (right) */}
    <div className="flex justify-end items-center mt-1 md:mt-0">
      <a
        href="#quote"
        className="bg-blue-600 text-white px-4 py-2 text-[13px] md:text-sm whitespace-nowrap rounded-lg shadow hover:bg-blue-700 transition"
      >
        REQUEST A QUOTE
      </a>
    </div>
  </div>

  {/* Mobile Dropdown Menu with Animation */}
  <div
    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
      mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <div className="px-4 pb-4 pt-2 space-y-3 text-sm font-medium text-gray-800 bg-white shadow-md">
      <a
        href="#services"
        onClick={() => setMobileMenuOpen(false)}
        className="block hover:text-blue-500 py-2 px-2"
      >
        Services
      </a>
      <a
        href="#about"
        onClick={() => setMobileMenuOpen(false)}
        className="block hover:text-blue-500 py-2 px-2"
      >
        About
      </a>
      <a
        href="#testimonials"
        onClick={() => setMobileMenuOpen(false)}
        className="block hover:text-blue-500 py-2 px-2"
      >
        Testimonials
      </a>
      <a
        href="#quote"
        onClick={() => setMobileMenuOpen(false)}
        className="block hover:text-blue-500 py-2 px-2"
      >
        Contact
      </a>
    </div>
  </div>
</header>



      {/* Hero Section */}
      <section id="hero" className="scroll-mt-40 md:scroll-mt-28 w-full py-16 px-4 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            WINDOW CLEANING, PRESSURE WASHING & SOLAR PANEL CLEANING IN LONG BEACH, CA
          </h1>
          <p className="text-blue-600 text-xl italic font-semibold mb-2">Your trusted cleaning company</p>
          <p className="text-lg text-gray-600 mb-6">
            Glass Action Cleaning provides professional cleaning services for residents and businesses in and around Long Beach, CA.
          </p>
          <a href="#quote" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Request a Free Quote
          </a>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img src={heroImage} alt="Ocean view windows" className="w-full rounded-xl shadow-xl object-cover" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-40 md:scroll-mt-28 py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-8">

      {/* Window Cleaning */}
  <div className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
    <img src={windowImg} alt="Window Cleaning" className="mx-auto mb-4 h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-cover rounded shadow-2xl" />
    <h3 className="text-xl font-bold mb-1">Window Cleaning</h3>
    <p className="text-gray-500 text-sm mb-4">Residential and commercial cleaning services.</p>
    <ul className="space-y-2">
      <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500">✔</span> Interior & exterior windows</li>
      <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500">✔</span> Screen cleaning</li>
      <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500">✔</span> Track & sill cleaning</li>
    </ul>
  </div>

  {/* Pressure Washing */}
  <div className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
    <img src={pressureImg} alt="Pressure Washing" className="mx-auto mb-4 h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-cover rounded shadow-2xl" />
    <h3 className="text-xl font-bold mb-1">Pressure Washing</h3>
    <p className="text-gray-500 text-sm mb-4">High-pressure and soft wash solutions.</p>
    <ul className="space-y-2">
      <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500">✔</span> Home & business exteriors</li>
      <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500">✔</span> Removes tough stains</li>
      <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500">✔</span> Bring surfaces back to life</li>
    </ul>
  </div>

  {/* Solar Panel Cleaning */}
  <div className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
    <img src={solarImg} alt="Solar Panel Cleaning" className="mx-auto mb-4 h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-cover rounded shadow-2xl" />
    <h3 className="text-xl font-bold mb-1">Solar Panel Cleaning</h3>
    <p className="text-gray-500 text-sm mb-4">Specialized cleaning for optimal performance.</p>
    <ul className="space-y-2">
      <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500">✔</span> Increased energy efficiency</li>
      <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500">✔</span> Extends panel lifespan</li>
      <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-500">✔</span> Protect your investment 
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section id="about" className="scroll-mt-40 md:scroll-mt-28 bg-gray-100 py-16 px-4">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-blue-700 tracking-tight">
        Why Choose Glass Action Cleaning
      </h2>

      <p className="text-base text-gray-700 leading-relaxed mb-4">
        We take pride in delivering exceptional cleaning services with attention to detail and customer satisfaction as the top priorities.
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-4">
        Glass Action is equipped to handle your cleaning needs by using the right equipment, at the right time, for the right job.
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-6">
        Owner Kellen Ringen is a CSU Long Beach Alumni with over a decade of experience serving his community. His goal is to go above and beyond creating long-lasting relationships with each and every customer.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <ul className="list-disc list-outside pl-6 space-y-3 text-gray-800 text-base md:text-lg font-semibold">
          <li>Locally owned and operated since 2014</li>
          <li>Friendly and professional service</li>
          <li>Modern tools & techniques to ensure amazing results</li>
        </ul>
      </div>
    </div>

    <div>
      <img src={truckImage} alt="Glass Action truck" className="w-full rounded-xl shadow-xl" />
    </div>
  </div>
</section>

      


      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-mt-40 md:scroll-mt-28 bg-gray-50 py-16 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
    <div className="grid md:grid-cols-3 gap-8">

      {/* Robert O. */}
      <div className="bg-white p-6 rounded-xl shadow-md text-left flex flex-col items-start">
        <div className="flex text-yellow-400 text-lg mb-2">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="text-gray-700 mb-2">
          "Kellen is the ultimate professional. He arrived on time, his workmanship is flawless and he is extremely pleasant. Highly recommended!"
        </p>
        <p className="font-semibold text-blue-600">– Robert O. (via Yelp)</p>
      </div>

      {/* Connie H. */}
      <div className="bg-white p-6 rounded-xl shadow-md text-left flex flex-col items-start">
        <div className="flex text-yellow-400 text-lg mb-2">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="text-gray-700 mb-2">
          "Kellen did a magnificent job on our windows—they are beautiful inside and out! He was a total pleasure to have in our home and extremely knowledgeable about all aspects of window washing."
        </p>
        <p className="font-semibold text-blue-600">– Connie H. (via Google)</p>
      </div>

      {/* Thomas B. */}
      <div className="bg-white p-6 rounded-xl shadow-md text-left flex flex-col items-start">
        <div className="flex text-yellow-400 text-lg mb-2">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="text-gray-700 mb-2">
          "Kellen did an outstanding job. He was very thorough, polite, and professional, and the gorgeous results speak for themselves. Pricing and scheduling were very reasonable. Highly recommended!"
        </p>
        <p className="font-semibold text-blue-600">– Thomas B. (via Yelp)</p>
      </div>

    </div>
  </div>

  <section className="text-center mt-12 px-4">
  <h3 className="text-xl font-semibold mb-2">See More 5-Star Reviews</h3>
  <p className="mb-4">
     ⭐️⭐️⭐️⭐️⭐️ 
  </p>
  <div className="flex justify-center gap-8 items-center">

    {/* Google Reviews */}
    <div className="flex flex-col items-center">
      <a
        href="https://www.google.com/maps/place/Glass+Action+Cleaning/@33.7769826,-118.1577912,17z/data=!4m8!3m7!1s0x80dd31bbea5e506b:0xb63143262eea0639!8m2!3d33.7769826!4d-118.1552163!9m1!1b1!16s%2Fg%2F11bc73bx89?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-8 w-8 mb-1">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.2 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.6 0 5 0.9 6.9 2.4l6-6C33.5 5.1 28.9 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 19.3-7.6 20.9-17.5.1-.5.1-1 .1-1.5 0-1.5-.1-2.9-.4-4.5z"/>
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.3 16 18.8 13 24 13c2.6 0 5 0.9 6.9 2.4l6-6C33.5 5.1 28.9 3 24 3c-7.7 0-14.3 3.8-18.4 9.7z"/>
          <path fill="#4CAF50" d="M24 45c5.2 0 9.9-1.8 13.5-4.8l-6.3-5.2c-1.9 1.4-4.3 2.2-7.2 2.2-5.2 0-9.6-3.5-11.2-8.2l-6.5 5c3.9 7.4 11.5 12.3 20.2 12.3z"/>
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.3-3.6 6-6.8 7.6l.1.1 6.3 5.2c-.4.3 7.1-5.2 7.1-15.4 0-1.5-.1-2.9-.4-4.5z"/>
        </svg>
      </a>
      <p className="text-xs text-gray-600">Google Reviews</p>
    </div>

    {/* Yelp Reviews */}
    <div className="flex flex-col items-center">
      <a
        href="https://www.yelp.com/biz/glass-action-cleaning-long-beach"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"
          alt="Yelp Reviews"
          className="h-6 mb-1"
        />
      </a>
      <p className="text-xs text-gray-600">Yelp Reviews</p>
    </div>

  </div>
</section>

  


      </section>

      {/* Quote Form Section */}
<section id="quote" className="py-16 px-4 bg-white scroll-mt-28">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
    
    {/* Contact Info (Left Column) */}
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-6">
        Ready to experience the best cleaning services? Reach out to us for a free quote or to schedule a service.
      </p>
      <div className="space-y-4 text-gray-800">
        <p><strong>📞 Phone:</strong> (562) 280–4661</p>
        <p><strong>📧 Email:</strong> glassactioncleaning@gmail.com</p>
        <p><strong>📍 Location:</strong> Long Beach, CA</p>
      </div>
    </div>

    {/* Embedded Markate Form (Right Column) */}
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Request a Quote
      </h2>
      <div className="w-full">
        <iframe
          id="markate-widget-contact-iframe"
          src="https://www.markate.com/public/widget/contact?id=354173a034482a00258a54ec76edea93:36100:09b15aee"
          width="100%"
          height="1100"
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          style={{ border: "none", overflow: "hidden" }}
          title="Get a Quote - Glass Action Cleaning"
        />
      </div>
    </div>
    
  </div>
</section>

<div className="hidden">
  window cleaning, window cleaning long beach, window cleaning service, window cleaning service long beach, pressure washing, pressure washing long beach, solar panel cleaning, solar panel cleaning long beach, wash, washing, window washing, clean, cleaning, window washing long beach, pressure cleaning, pressure cleaning long beach, power washing, power washing long beach, soft washing,
  house, apartment, building, cement, concrete, concrete washing, driveway, siding, stucco, tile, roof, shingles, vinyl, hardi board, organic, wood, deck, fence, oxidation, garage, gutter, gutters,
  long beach, seal beach, huntington beach, lakewood, rossmoor, naples, naples island, peninsula, belmont shore, belmont shores, belmont heights, bixby, bixby knolls, signal hill, carson, torrance, san pedro, bellflower, cypress, cerritos, sunset beach, los al, los altos,
  90804, 90803, 90802, 90805,
  pane in the glass, coastline shine, jt's solar and window cleaning, prime power clean, guru solar cleaning, puff window cleaning, flamingo window pro house wash, ssc window cleaning, better home pros, legends, hydro pressure washing, natural pro, derf, derf's, pacific pressure, residential window cleaning in Long Beach, professional pressure washing service near Seal Beach, solar panel cleaning experts in Lakewood, soft washing for stucco and siding in 90803, affordable concrete cleaning in Belmont Shore, deck and fence power washing in Bixby Knolls, roof washing and gutter cleaning in Signal Hill, compare Glass Action Cleaning with JT's or Legends, exterior house cleaning Long Beach CA, driveway pressure washing services near me, solar panel washing companies near Long Beach CA, gutter and roof cleaning services in Huntington Beach, pressure washing for patios and garages in Lakewood, trusted soft wash house cleaners in Rossmoor, vinyl siding and stucco cleaning near 90802, who does pressure washing in Long Beach, best rated window cleaner in 90803, local solar panel cleaners near Seal Beach, driveway cleaning company near Lakewood, how to clean gutters in Belmont Heights, mobile soft washing near Naples Island, roof and siding washing in Carson CA, exterior cleaning pros Long Beach, Long Beach window cleaning company reviews, affordable power washing near Bixby Knolls



</div>

    <footer className="bg-gray-100 text-gray-600 text-sm text-center py-6 mt-12 border-t">
  <div className="max-w-7xl mx-auto px-4">
    <p>© {new Date().getFullYear()} Glass Action Cleaning. All rights reserved.</p>
    <p className="mt-1">
      Serving Long Beach, Seal Beach, Lakewood, and surrounding areas.
    </p>
    <p className="mt-1">
      <a
        href="https://www.instagram.com/glassactioncleaning"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Instagram
      </a>{" "}
      |{" "}
      <a
        href="https://www.yelp.com/biz/glass-action-cleaning-long-beach"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Yelp
      </a>{" "}
      |{" "}
      <a
        href="https://www.google.com/maps/place/Glass+Action+Cleaning/@33.7769826,-118.1577912,17z/data=!4m8!3m7!1s0x80dd31bbea5e506b:0xb63143262eea0639!8m2!3d33.7769826!4d-118.1552163!9m1!1b1!16s%2Fg%2F11bc73bx89?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Google Reviews
      </a>
    </p>
  </div>
</footer>

<Schema />

</div>
  );
}

export default App;



