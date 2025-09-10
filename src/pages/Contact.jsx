import React from "react";
import WorldMap from '../assets/world_map.png'; 
import HexagonBg from '../assets/hexagon_shape_bg.png'; 
import { FiSend } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="min-h-screen text-gray-800 font-sans">

      {/* 1. Header/Hero Section */}
      <section className=" py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let's Build Something Together
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have an idea or a project in mind? We'd love to hear about it. Our team
            is ready to help you bring it to life.
          </p>
        </div>
      </section>
      
      {/* 2. Form & Contact Info Section */}
      <section
        className="relative py-16 flex flex-col items-center"
        style={{
          backgroundImage: `url(${HexagonBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
                 <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Fill Out Your Details
          </h2>
        {/* Contact Info */}
         <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-3">
            <BsPhone className="text-black text-xl" />
            <span className="text-black font-medium">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <LuMail className="text-black text-xl" />
            <span className="text-black font-medium">hello@smallcopper.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FiSend className="text-black text-xl" />
            <span className="text-black font-medium">Address</span>
          </div>
        </div>

        {/* Form (transparent background) */}
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-3xl p-8 rounded-xl shadow-x"
        >
          <div className="space-y-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full border border-black rounded-xl px-4 py-3 shadow-xl focus:ring-2 focus:ring-orange-500 outline-none bg-white"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border border-black rounded-xl px-4 py-3 shadow-xl focus:ring-2 focus:ring-orange-500 outline-none bg-white"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full border border-black rounded-xl px-4 py-3 shadow-xl focus:ring-2 focus:ring-orange-500 outline-none bg-white"
              />
            </div>
            <select
              name="serviceInterestedIn"
              className="w-full border border-black rounded-xl px-4 py-3 shadow-xl focus:ring-2 focus:ring-orange-500 outline-none bg-white"
            >
              <option value="">Service Interested In</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>UI/UX Design</option>
              <option>Consulting</option>
            </select>
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              className="w-full border border-black rounded-xl px-4 py-3 shadow-xl focus:ring-2 focus:ring-orange-500 outline-none bg-white"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-10 py-3 rounded-full font-medium hover:bg-orange-600 transition shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
      
      {/* 3. World Map Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <img src={WorldMap} alt="World Map" className="w-full h-auto" />
        </div>
      </section>
      
    </div>
  );
}

export default App;
