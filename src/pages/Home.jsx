import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HexagonShape from "../assets/hexagon_shape.png";
import GlobeHome from "../assets/globe_home.png"; // ✅ new image
// logos
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import DemoImage from "../assets/demo_image.jpg";
import LogoPng from "../assets/logo.png";
import FaceImg from "../assets/face_img.png";
import ITC from "../assets/ITC.png";
import UII from "../assets/UII.png";
import WEB from "../assets/WEB.png";
import CLOUDD from "../assets/CLOUDD.png";
import MOBILEE from "../assets/MOBILEE.png";
import AII from "../assets/AII.png";
import ADIDASSS from "../assets/ADIDASSS.png";
import Mercedes from "../assets/Mercedes.png";
import UNI from "../assets/UNI.png";
import GIRL from "../assets/GIRL.png";
import BBC from "../assets/BBC.png";
import GIRL2 from "../assets/GIRL2.png";
import GIRL3 from "../assets/GIRL3.png";
import BLACK from "../assets/BLACK.png";
import I1 from "../assets/I1.png";
import I2 from "../assets/I2.png";
import I3 from "../assets/I3.png";
import I4 from "../assets/I4.png";
import I5 from "../assets/I5.png";


// ---------------------- Our Work in Action ----------------------
const OurWorkInAction = () => {
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "IDAS Platform",
      category: "Web Service",
      description: "A comprehensive web service platform with advanced features.",
      image: DemoImage,
      year: 2024,
    },
    {
      title: "ADIDAS Portal",
      category: "Web Service",
      description: "Enterprise portal solution for global brand management.",
      image: DemoImage,
      year: 2024,
    },
    {
      title: "E-Commerce Solution",
      category: "Web Application",
      description: "Complete online shopping experience with seamless checkout.",
      image: DemoImage,
      year: 2023,
    },
    {
      title: "Finance Dashboard",
      category: "Data Visualization",
      description: "Interactive financial data visualization and analytics.",
      image: DemoImage,
      year: 2023,
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Application",
      description: "Secure banking application with biometric authentication.",
      image: DemoImage,
      year: 2024,
    },
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

    gallery.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      gallery.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeIndex]);

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our Work in Action
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our portfolio of successful projects and see how we've helped
        businesses transform.
      </p>

      <div
        ref={galleryRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide py-8 px-4"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-80 transition-all duration-500 ${
              index === activeIndex
                ? "scale-100 opacity-100"
                : "scale-90 opacity-40 blur-md"
            }`}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                    {project.category}
                  </span>
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                    {project.year}
                  </span>
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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

// ---------------------- Services ----------------------
const ServicesCardGrid = () => {
  const services = [
    {
      title: "AI/ML Solutions",
      popText: "Smarter decision-making with AI.",
      button: "View More",
      img: AII,
      href: "/ai-ml",
    },
    {
      title: "Mobile Apps",
      popText: "Seamless experiences on the go.",
      button: "View More",
      img: MOBILEE,
      href: "/mobile-apps",
    },
    {
      title: "Web Development",
      popText: "Robust modern web solutions.",
      button: "View More",
      img: WEB,
      href: "/web-development",
    },
    {
      title: "Cloud & DevOps",
      popText: "Empower scalability & automation.",
      button: "View More",
      img: CLOUDD,
      href: "/cloud-devops",
    },
    {
      title: "UI/UX Design",
      popText: "Delightful and intuitive design.",
      button: "View More",
      img: UII,
      href: "/ui-ux",
    },
    {
      title: "IT Consulting",
      popText: "Strategic technology guidance.",
      button: "View More",
      img: ITC,
      href: "/it-consulting",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative group h-80 rounded-2xl shadow-xl overflow-hidden cursor-pointer bg-black"
          >
            <img
              src={service.img}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-white/90 mb-6">{service.popText}</p>
              <a
                href={service.href}
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors"
              >
                {service.button}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ---------------------- Why Partner With Us (NEW UI) ----------------------
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

// ---------------------- What Clients Say ----------------------
const WhatClientsSay = () => {
  const testimonials = [
    {
      type: "face",
      image: FaceImg,
      name: "Aarav Sharma",
      title: "CEO, Nexora Technologies",
      quote: "The team at Small Copper built our app seamlessly and ahead of schedule. Their innovative approach made the whole process effortless."
    },
    {
      type: "logo",
      logo: Mercedes,
      name: "Mercedes-Benz"
    },
    {
      type: "quote",
      quote: "The team at Small Copper built our app seamlessly and ahead of schedule. Their innovative approach made the whole process effortless.",
      name: "Aarav Sharma",
      title: "CEO, Nexora Technologies",
      background: "bg-orange-50"
    },
    {
      type: "logo",
      logo: UNI,
      name: "UNIQLO"
    },
    {
      type: "face",
      image: GIRL,
      name: "Sarah Chen",
      title: "Product Manager"
    },
    {
      type: "logo",
      logo: BBC,
      name: "BBC"
    },
    {
      type: "face",
      image: GIRL2,
      name: "Michael Rodriguez",
      title: "CTO, Tech Solutions"
    },
    {
      type: "quote",
      quote: "Our website redesign improved customer engagement from day one. We're impressed with Small Copper's professionalism and ongoing support.",
      name: "Emily Johnson",
      title: "Director, BrightEdge Solutions",
      background: "bg-gray-50"
    },
    {
      type: "face",
      image: GIRL3,
      name: "Alex Thompson",
      title: "Startup Founder"
    },
    {
      type: "face",
      image: BLACK,
      name: "David Kim",
      title: "Marketing Director"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        What Clients Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
        {testimonials.map((item, index) => {
          if (item.type === "face") {
            return (
              <div
                key={index}
                className={`${
                  index === 0 ? "md:row-span-2" : index === 6 ? "md:row-span-2" : ""
                } bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover min-h-[200px]"
                />
              </div>
            );
          }
          
          if (item.type === "logo") {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center min-h-[160px]"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-full max-h-16 object-contain opacity-80"
                />
              </div>
            );
          }
          
          if (item.type === "quote") {
            return (
              <div
                key={index}
                className={`${item.background} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 2 ? "md:col-span-2" : index === 7 ? "md:col-span-2" : ""
                } min-h-[200px] flex flex-col justify-center`}
              >
                <div className="text-3xl text-gray-400 mb-4 font-serif">"</div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.quote}
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.title}</p>
                </div>
              </div>
            );
          }
          
          return null;
        })}
      </div>
    </section>
  );
};

// ---------------------- Home Page ----------------------
export default function Home() {
  const words = ["Web Experiences", "Digital Product", "IT Solution"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center text-center px-4 overflow-hidden bg-gray-50">
      {/* Hero */}
      <div className="relative z-10 pt-24">
        <p className="text-orange-400 font-semibold text-lg">
          // Innovate. Build. Scale //
        </p>
        <h1 className="text-6xl md:text-7xl font-extrabold mt-4 leading-tight">
          We Build Future-Ready
        </h1>
        <div
          className="relative mt-3 h-[60px] md:h-[72px]"
          style={{ perspective: "1000px" }}
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ rotateX: 90, opacity: 0, y: 10 }}
              animate={{ rotateX: 0, opacity: 1, y: 0 }}
              exit={{ rotateX: -90, opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.26, 0.8, 0.25, 1] }}
              className="absolute inset-0 text-5xl md:text-6xl font-bold text-orange-500 leading-snug will-change-transform"
              style={{ backfaceVisibility: "hidden" }}
            >
              {words[index]}
            </motion.h2>
          </AnimatePresence>
        </div>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          From web to mobile to AI, we design and develop technology that drives
          business growth.
        </p>
        <div className="mt-8 flex gap-6 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-orange-400 text-white text-lg rounded-full shadow-lg hover:bg-orange-500 transition"
          >
            Work With Us
          </a>
          <a
            href="/services"
            className="px-8 py-4 border text-lg rounded-full hover:bg-gray-100 transition"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Honeycomb */}
      <div className="relative mt-16 flex justify-center w-full z-0">
        <img
          src={HexagonShape}
          alt="Honeycomb"
          className="w-[900px] opacity-90 mt-8"
        />
      </div>

      {/* Trusted By */}
      <section className="mt-24 w-full max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-10">Trusted by</h3>
        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-12 px-4 w-max mx-auto">
            <img src={Logo1} alt="Client 1" className="h-12 object-contain" />
            <img src={Logo2} alt="Client 2" className="h-12 object-contain" />
            <img src={Logo1} alt="Client 3" className="h-12 object-contain" />
            <img src={Logo2} alt="Client 4" className="h-12 object-contain" />
            <img src={Logo1} alt="Client 5" className="h-12 object-contain" />
            <img src={Logo2} alt="Client 6" className="h-12 object-contain" />
            <img src={Logo1} alt="Client 7" className="h-12 object-contain" />
            <img src={Logo2} alt="Client 8" className="h-12 object-contain" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          <div>
            <p className="text-4xl font-bold text-orange-500">50+</p>
            <p className="mt-2 text-gray-700">Global Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">120+</p>
            <p className="mt-2 text-gray-700">Projects Delivered</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">30+</p>
            <p className="mt-2 text-gray-700">Skilled Professionals</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">10+</p>
            <p className="mt-2 text-gray-700">Industry Experience</p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <ServicesCardGrid />
      <WhyPartnerWithUs />
      <OurWorkInAction />
      <WhatClientsSay />
    </div>
  );
}