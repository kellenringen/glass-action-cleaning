import React, { useState } from "react";
import logo from "./assets/glass-action-logo-4x-current.png";
import heroImage from "./assets/hero-image.jpg";
import truckImage from "./assets/truck-photo.jpg";

function App() {
  const [showSolar, setShowSolar] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "solar") setShowSolar(checked);
    if (name === "other") setShowOther(checked);
  };

  return (
    <div className="w-full font-sans bg-white">
      {/* Header */}
      <header className="w-full px-4 py-4 shadow bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          <nav className="flex gap-4 text-sm font-medium">
            <a href="#hero" className="hover:text-blue-500">Home</a>
            <a href="#services" className="hover:text-blue-500">Services</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
          </nav>

          <div className="flex justify-center">
            <img
              src={logo}
              alt="Glass Action Cleaning Logo"
              className="h-20 object-contain"
            />
          </div>

          <div className="flex justify-end items-center gap-3">
            <a
              href="#quote"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-sm"
            >
              Get a Quote
            </a>
            <a
              href="https://www.instagram.com/glassactioncleaning?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 hover:text-pink-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="w-full py-16 px-4 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-2 leading-tight">
            WINDOW CLEANING, PRESSURE WASHING & SOLAR PANEL CLEANING IN LONG BEACH, CA
          </h1>
          <p className="text-blue-600 text-lg font-semibold mb-2">
            your trusted cleaning company
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Glass Action Cleaning provides professional cleaning services for residents and businesses in and around Long Beach, CA.
          </p>
          <a
            href="#quote"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Request a Free Quote
          </a>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src={heroImage}
            alt="Ocean view windows"
            className="w-full rounded-xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Why Choose Glass Action Cleaning</h2>
            <p className="text-gray-700 mb-4">
              We take pride in delivering exceptional cleaning services with attention to detail and customer satisfaction as the top priorities.
              <br /><br />
              Glass Action is equipped to handle your cleaning needs by using the right equipment, at the right time, for the right job - ensuring the highest quality results.
              Owner Kellen Ringen is a CSU Long Beach Alumni with over a decade of experience serving his community. His goal is to go above and beyond creating long-lasting relationships with each and every customer.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Locally owned and operated</li>
              <li>Eco-friendly and pet-safe products</li>
              <li>Modern tools & spotless results</li>
            </ul>
          </div>
          <div>
            <img
              src={truckImage}
              alt="Glass Action truck"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Window Cleaning</h3>
              <p className="text-gray-600">
                Professional window cleaning for residential and commercial properties.
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Interior & exterior windows</li>
                <li>Screen cleaning</li>
                <li>Track & sill cleaning</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Pressure Washing</h3>
              <p className="text-gray-600">High-pressure and soft wash solutions.</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Removes tough stains</li>
                <li>House exteriors and roofs</li>
                <li>Concrete & brick surfaces</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Solar Panel Cleaning</h3>
              <p className="text-gray-600">
                Specialized cleaning for optimal solar panel performance.
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Increased energy efficiency</li>
                <li>Extends panel lifespan</li>
                <li>No-damage guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          <div className="space-y-8">
            <blockquote className="italic text-gray-700">
              Review #1 by Robert O. on Yelp – Kellen is the ultimate professional. He arrived on time, his workmanship is flawless and he is extremely pleasant. Highly recommended!
            </blockquote>
            <blockquote className="italic text-gray-700">
              Review #2 by Connie H. on Google – Kellen did a magnificent job on our windows—they are beautiful inside and out! He was a total pleasure to have in our home and extremely knowledgeable about all aspects of window washing.
            </blockquote>
            <blockquote className="italic text-gray-700">
              Review #3 by Thomas B. on Yelp – Kellen did an outstanding job. He was very thorough, polite, and professional, and the gorgeous results speak for themselves. Pricing and scheduling were very reasonable. Highly recommended!
            </blockquote>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Get a Free Quote</h2>
          <form
            className="space-y-4"
            action="https://www.markate.com/public/widget/contactform/submit/your-form-id"
            method="POST"
            encType="multipart/form-data"
          >
            <input type="text" name="name" placeholder="Name" required className="w-full border px-4 py-2 rounded" />
            <input type="text" name="address" placeholder="Address" required className="w-full border px-4 py-2 rounded" />
            <input type="email" name="email" placeholder="Email" required className="w-full border px-4 py-2 rounded" />
            <input type="tel" name="phone" placeholder="Phone" required className="w-full border px-4 py-2 rounded" />

            <div className="space-y-2">
              <label className="block font-medium">Services Requested:</label>
              <div className="space-y-1">
                <label className="block">
                  <input type="checkbox" name="window" onChange={handleCheckboxChange} /> Window Cleaning
                </label>
                <label className="block">
                  <input type="checkbox" name="pressure" /> Pressure Washing
                </label>
                <label className="block">
                  <input type="checkbox" name="solar" onChange={handleCheckboxChange} /> Solar Panel Cleaning
                </label>
                <label className="block">
                  <input type="checkbox" name="other" onChange={handleCheckboxChange} /> Other Cleaning
                </label>
              </div>
            </div>

            {showSolar && (
              <input
                type="text"
                name="panel_count"
                placeholder="Number of solar panels"
                className="w-full border px-4 py-2 rounded"
              />
            )}

            {showOther && (
              <textarea
                name="other_description"
                placeholder="Please describe the service"
                className="w-full border px-4 py-2 rounded"
              ></textarea>
            )}

            <div>
              <label className="block font-medium mb-1">Upload Photos (optional):</label>
              <input type="file" name="photos" className="w-full" multiple />
            </div>

            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer + Hidden SEO */}
      <footer className="text-center py-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Glass Action Cleaning. All rights reserved.
        <div className="text-xs text-white invisible">
          window cleaning, power washing, house washing, driveway cleaning, solar panel rinse, panel wash, home exterior cleaning, soft wash, stucco wash, vinyl siding, roof cleaning, fence restoration, deck brightening, gutter wash, professional glass cleaning in Long Beach, CA, Signal Hill, Belmont Shore, Naples, and surrounding areas.
        </div>
      </footer>
    </div>
  );
}

export default App;
