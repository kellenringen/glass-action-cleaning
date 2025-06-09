import React, { useState } from "react";

function QuoteForm() {
  const [showWindowOptions, setShowWindowOptions] = useState(false);
  const [showPressureOptions, setShowPressureOptions] = useState(false);
  const [showSolarInput, setShowSolarInput] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "window") setShowWindowOptions(checked);
    if (name === "pressure") setShowPressureOptions(checked);
    if (name === "solar") setShowSolarInput(checked);
    if (name === "other") setShowOtherInput(checked);
  };

  return (
    <form className="max-w-3xl mx-auto p-6 bg-white shadow rounded my-10 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Get a Free Quote</h2>
      <input type="text" name="name" placeholder="Name" className="input" />
      <input type="text" name="address" placeholder="Address" className="input" />
      <input type="tel" name="phone" placeholder="Phone" className="input" />
      <input type="email" name="email" placeholder="Email" className="input" />

      <label className="block font-medium">Select Services:</label>
      <div className="space-y-2">
        <label><input type="checkbox" name="window" onChange={handleCheckboxChange} /> Window Cleaning</label>
        {showWindowOptions && <select className="input"><option>Exterior</option><option>Interior & Exterior</option></select>}
        
        <label><input type="checkbox" name="pressure" onChange={handleCheckboxChange} /> Pressure Washing</label>
        {showPressureOptions && <select className="input"><option>Driveway</option><option>Siding</option></select>}
        
        <label><input type="checkbox" name="solar" onChange={handleCheckboxChange} /> Solar Panel Cleaning</label>
        {showSolarInput && <input type="number" placeholder="Number of Panels" className="input" />}
        
        <label><input type="checkbox" name="other" onChange={handleCheckboxChange} /> Other Cleaning</label>
        {showOtherInput && <input type="text" placeholder="Please describe" className="input" />}
      </div>

      <label className="block font-medium mt-4">Upload Photos (optional):</label>
      <input type="file" accept="image/*" multiple className="input" />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
    </form>
  );
}

export default QuoteForm;
