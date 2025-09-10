import React, { useState } from 'react';
import DemoImgAboutUs from '../assets/demo_img_aboutus.png';
import AboutImage2 from '../assets/AboutImage2.png';
import FaceImg from '../assets/face_img.png';
import demoImg from '../assets/demo_image.jpg';
import GlobeHome from '../assets/globe_home.png';
import A1 from '../assets/A1.png';
import A2 from '../assets/A2.png';
import A3 from '../assets/A3.png'; // Add this import for the globe image
import A4 from '../assets/A4.png';

const WhyPartnerWithUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const partnerItems = [
    {
      title: "Global Expertise",
      description: "Serving diverse industries.",
    },
    {
      title: "Innovation Focus",
      description: "Delivering cutting-edge solutions.",
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority.",
    },
    {
      title: "Proven Results",
      description: "Driving measurable growth.",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-center text-3xl font-extrabold mb-16">
        Why Partner With Us?
      </h2>

      {/* Semi-circle container */}
      <div className="relative flex flex-col items-center">
        <div className="relative w-[600px] h-[300px]">
          {/* Semi-circle arc */}
          <svg
            viewBox="0 0 600 300"
            className="absolute top-0 left-0 w-full h-full"
          >
            <path
              d="M50 250 A250 250 0 0 1 550 250"
              fill="transparent"
              stroke="#d1d5db"
              strokeWidth="2"
            />
          </svg>

          {/* Globe inside the arc */}
          <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2">
            <img src={GlobeHome} alt="Globe" className="w-48 mx-auto" />
          </div>

          {/* Numbers placed along arc */}
          {[0, 1, 2, 3].map((index) => {
            // distribute evenly: 0 = far left, 3 = far right
            const angle = Math.PI - (index * Math.PI) / 3; // 4 points across π radians
            const radius = 250;
            const cx = 300; // center x of semi-circle
            const cy = 250; // baseline y of arc
            const x = cx + radius * Math.cos(angle);
            const y = cy - radius * Math.sin(angle);

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-orange-500 text-white scale-110 shadow-lg"
                    : "bg-gray-800 text-white hover:bg-gray-600"
                }`}
                style={{ left: `${x}px`, top: `${y}px` }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content */}
        <div className="text-center max-w-xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {partnerItems[activeIndex].title}
          </h3>
          <p className="text-gray-600 text-lg">
            {partnerItems[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section: Who We Are */}
      <section className="relative bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">Who We Are</h1>
          <p className="mt-4 text-xl text-gray-600">
            At Small Copper, we don't just build software—we craft solutions that empower
            businesses to scale and innovate.
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              Work With Us
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">
              Explore Services
            </button>
          </div>
        </div>
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <img src={DemoImgAboutUs} alt="Team working" className="rounded-lg shadow-xl w-full" />
        </div>
      </section>
      
      {/* Our Journey, Mission, Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-gray-700 leading-relaxed">
              Founded with the belief that technology should empower, not overwhelm, Small Copper began as a
              small team of passionate developers and designers. Over the years, we have grown into a global
              technology partner trusted by startups, enterprises, and forward-thinking brands. Our focus has always
              been on delivering simple, scalable, and impactful solutions that create lasting value for our clients.
            </p>
          </div>
          <div className="grid grid-rows-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver innovative, secure, and scalable IT
                solutions that enable businesses to thrive in the
                digital age.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a global leader in technology innovation,
                known for empowering organizations to achieve
                sustainable growth and meaningful transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Core Values</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-orange-500 text-4xl mb-4">🚀</span>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-700 text-sm">Always staying ahead with emerging technologies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-orange-500 text-4xl mb-4">🤝</span>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h4>
            <p className="text-gray-700 text-sm">Partnering with clients for long-term success.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-orange-500 text-4xl mb-4">⚖️</span>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h4>
            <p className="text-gray-700 text-sm">Transparent, honest, and ethical practices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-orange-500 text-4xl mb-4">🧑‍💼</span>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Customer-Centricity</h4>
            <p className="text-gray-700 text-sm">Building solutions tailored to real needs.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div>
            <p className="text-5xl font-bold text-orange-500">50+</p>
            <p className="text-lg text-gray-700 mt-2">Global Clients</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-orange-500">120+</p>
            <p className="text-lg text-gray-700 mt-2">Projects Delivered</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-orange-500">30+</p>
            <p className="text-lg text-gray-700 mt-2">Skilled Professionals</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-orange-500">10+</p>
            <p className="text-lg text-gray-700 mt-2">Industry Experience</p>
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Team</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 px-4">
          Behind every successful project is a team of innovators, strategists, and engineers who bring ideas to life. At Small Copper, our people are our greatest strength – we combine passion with unparalleled expertise to drive lasting impact.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div className="flex flex-col items-center">
            <img src={A1} alt="Rohan Mehta" className="w-32 h-32 rounded-md object-cover mb-4 shadow-md" />
            <h4 className="text-xl font-semibold text-gray-900">Rohan Mehta</h4>
            <p className="text-gray-600 text-sm">Co-founder & CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={A2} alt="Aditi Sharma" className="w-32 h-32 rounded-md object-cover mb-4 shadow-md" />
            <h4 className="text-xl font-semibold text-gray-900">Aditi Sharma</h4>
            <p className="text-gray-600 text-sm">Head of Product Design</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={A3} alt="Kunal Verma" className="w-32 h-32 rounded-md object-cover mb-4 shadow-md" />
            <h4 className="text-xl font-semibold text-gray-900">Kunal Verma</h4>
            <p className="text-gray-600 text-sm">CTO</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={A4} alt="Priya Nair" className="w-32 h-32 rounded-md object-cover mb-4 shadow-md" />
            <h4 className="text-xl font-semibold text-gray-900">Priya Nair</h4>
            <p className="text-gray-600 text-sm">Client Success Manager</p>
          </div>
        </div>
      </section>

      {/* New Why Partner With Us Section */}
      <WhyPartnerWithUs />

      {/* Call to Action (CTA) */}
      <section
        className="py-12 text-white text-center rounded-md"
        style={{
          backgroundImage: `url(${demoImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <div className="max-w-4xl mx-auto pb-8">
          <h2 className="text-4xl font-bold mb-4">Let's Shape the Future Together</h2>
          <p className="text-xl mb-6">Have a project in mind? Let's collaborate to turn your vision into reality.</p>
          <div className="space-x-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Start Project
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}