import React from "react";

function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Window Cleaning</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Exterior & interior glass cleaning</li>
              <li>Screen & track detailing</li>
              <li>Residential & commercial</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Pressure Washing</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>High-pressure and soft wash solutions</li>
              <li>Driveways, patios, siding, & more</li>
              <li>Mildew, grime & organic removal</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Solar Panel Cleaning</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Safe, spot-free solar glass care</li>
              <li>Boost efficiency & lifespan</li>
              <li>Eco-friendly water-fed pole system</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
