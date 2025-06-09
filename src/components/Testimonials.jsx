import React from "react";

function Testimonials() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">What Our Customers Say</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        <div className="bg-gray-100 p-6 rounded shadow text-left">
          <p className="italic text-gray-700">
            “Kellen is the ultimate professional. He arrived on time, his workmanship is flawless and he is extremely pleasant. Highly recommended!”
          </p>
          <p className="mt-4 font-semibold text-gray-800">— Robert O. (Yelp)</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow text-left">
          <p className="italic text-gray-700">
            “Kellen did a magnificent job on our windows—they are beautiful inside and out! He was a total pleasure to have in our home and extremely knowledgeable about all aspects of window washing.”
          </p>
          <p className="mt-4 font-semibold text-gray-800">— Connie H. (Google)</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow text-left">
          <p className="italic text-gray-700">
            “Kellen did an outstanding job. He was very thorough, polite, and professional, and the gorgeous results speak for themselves. Pricing and scheduling were very reasonable. Highly recommended!”
          </p>
          <p className="mt-4 font-semibold text-gray-800">— Thomas B. (Yelp)</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

