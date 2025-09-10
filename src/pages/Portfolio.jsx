import React from 'react';
import P1 from '../assets/P1.png';  
import P2 from '../assets/P2.png'; 
import P3 from '../assets/P3.png';
import P4 from '../assets/P4.png';  
import P5 from '../assets/P5.png';  


// Data for the portfolio projects
const projectsData = [
  {
    title: 'Project Name',
    description: '[Project Description]',
    tags: ['UX Research', 'UX Design', 'Sass'],
    image: P1, // Fixed: Removed curly braces
  },
  {
    title: 'Project Name',
    description: '[Project Description]',
    tags: ['UX Research', 'UX Design', 'Sass'],
    image: P2, // Fixed: Removed curly braces
  },
  {
    title: 'Project Name',
    description: '[Project Description]',
    tags: ['UX Research', 'UX Design', 'Sass'],
    image: P3, // Fixed: Removed curly braces
  },
  {
    title: 'Project Name',
    description: '[Project Description]',
    tags: ['UX Research', 'UX Design', 'Sass'],
    image: P4, // Fixed: Removed curly braces
  },
  {
    title: 'Project Name',
    description: '[Project Description]',
    tags: ['UX Research', 'UX Design', 'Sass'],
    image: P5, // Fixed: Removed curly braces
  },
  {
    title: 'Project Name',
    description: '[Project Description]',
    tags: ['UX Research', 'UX Design', 'Sass'],
    image: P5, // Fixed: Removed curly braces
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* 1. Header/Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Our Work Speaks for Itself</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We've helped global brands and growing startups bring their ideas to life. Explore some of our featured projects
            and see how we create impactful digital experiences.
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
      </section>

      {/* 2. Portfolio Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <div className="mb-4">
                  <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-2">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-gray-500 text-sm md:flex-grow">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}