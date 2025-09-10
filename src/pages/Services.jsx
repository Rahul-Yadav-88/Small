import React from 'react';

// Import all service images directly from the src folder
import webDevImage from '../assets/WebD.png'; 
import mobileAppImage from '../assets/Mobile.png';
import cloudDevopsImage from '../assets/Cloud.png';
import aiMlImage from '../assets/AI.png';
import uiUxDesignImage from '../assets/UI.png';
import itConsultingImage from '../assets/IT.png';
import DemoImage from '../assets/demo_image.jpg';
import DemoImage2 from '../assets/demo_img_service.png';
import { useState, useEffect, useRef } from 'react';

// Data for the services section
const servicesData = [
  {
    title: 'Web Development',
    description: 'Custom websites and enterprise platforms that are fast, secure, and scalable.',
    image: webDevImage,
  },
  {
    title: 'Mobile App Development',
    description: 'Engaging iOS & Android apps designed for exceptional mobile-first experience.',
    image: mobileAppImage,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Reliable cloud infrastructure and DevOps practices for agility and scalability.',
    image: cloudDevopsImage,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Smart solutions powered by data, automation, and AI-driven insights.',
    image: aiMlImage,
  },
  {
    title: 'UI / UX Design',
    description: 'Intuitive and user-friendly experiences that keep customers engaged.',
    image: uiUxDesignImage,
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance to align technology with your business goals.',
    image: itConsultingImage,
  },
];

// --- OurWorkInAction Component ---
const OurWorkInAction = () => {
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { title: "IDAS Platform", category: "Web Service", description: "A comprehensive web service platform with advanced features.", image: DemoImage, year: 2024 },
    { title: "ADIDAS Portal", category: "Web Service", description: "Enterprise portal solution for global brand management.", image: DemoImage, year: 2024 },
    { title: "E-Commerce Solution", category: "Web Application", description: "Complete online shopping experience with seamless checkout.", image: DemoImage, year: 2023 },
    { title: "Finance Dashboard", category: "Data Visualization", description: "Interactive financial data visualization and analytics.", image: DemoImage, year: 2023 },
    { title: "Mobile Banking App", category: "Mobile Application", description: "Secure banking application with biometric authentication.", image: DemoImage, year: 2024 }
  ];

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleScroll = () => {
      const galleryRect = gallery.getBoundingClientRect();
      const galleryCenter = galleryRect.left + galleryRect.width / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(gallery.children).forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(childCenter - galleryCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    gallery.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      gallery.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeIndex]);

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-8">Our Work in Action</h2>
      <div ref={galleryRef} className="flex gap-8 overflow-x-auto scrollbar-hide py-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className={`flex-shrink-0 w-80 transition-all duration-500 ${index === activeIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-40 blur-md'}`}>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">{project.category}</span>
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">{project.year}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

// --- Services Page ---
export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Main Content Area */}
      <main className="relative">
        
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">Solutions That Transform Businesses</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              From web development to AI-driven innovations, we deliver technology that helps companies grow, thrive, and stay future-ready.
            </p>
            <div className="mt-8 space-x-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">Work With Us</button>
              <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">Explore Services</button>
            </div>
           <div className="mt-12">
  <img 
    src={DemoImage2} 
    alt="Solutions" 
    className="w-full h-auto rounded-lg shadow-xl" 
  />
</div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our services are designed to solve real business challenges while unlocking new opportunities for growth.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                  <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Replace old Our Work in Action with new component */}
        <OurWorkInAction />

      </main>
    </div>
  );
}
