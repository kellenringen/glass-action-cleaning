import React from "react";
import heroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <section
      className="bg-cover bg-center text-white text-center py-32 px-6 md:px-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md mb-4">
        Glass Action Cleaning
      </h1>
      <p className="text-lg md:text-xl mb-2 drop-shadow-md">
        Window Cleaning, Pressure Washing & Solar Panel Cleaning in Long Beach, CA
      </p>
      <p className="max-w-xl mx-auto mb-6 text-white drop-shadow-md">
        Glass Action Cleaning provides professional cleaning services for residents and businesses in and around Long Beach, CA.
      </p>
      <a
        href="#quote"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
      >
        Request a Quote
      </a>
    </section>
  );
}

export default Hero;
