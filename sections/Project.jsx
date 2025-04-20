"use client";

import { useTheme } from "@/components/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import data from "@/public/Data";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub, FaTimes } from "react-icons/fa";

const Projects = () => {
  const { darkMode } = useTheme();
  const name = "<My Projects/>";
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      className={`projects min-h-screen py-20 ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
              darkMode ? "dark:text-white" : "text-black"
            }`}
          >
            {name}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${
                darkMode ? 'bg-gray-800/50 text-white' : 'bg-white/50 text-black'
              } hover:bg-blue-500 hover:text-white transition-all duration-300`}
            >
              <FaChevronLeft size={24} />
            </button>
          )}
          
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-800"
          >
            {data.map((item, i) => (
              <div
                key={i}
                className={`flex-none w-[90%] md:w-[45%] snap-center group relative overflow-hidden rounded-2xl backdrop-blur-sm ${
                  darkMode ? "bg-gray-800/50" : "bg-white/50"
                } shadow-xl transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-[300px] md:h-[400px] rounded-t-xl overflow-hidden">
                    <Image
                      src={item.pic}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={i === 0}
                    />
                  </div>
                  
                  <div className="flex flex-col justify-between flex-grow p-6">
                    <div>
                      <h2
                        className={`text-3xl font-bold mb-4 ${
                          darkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {item.name}
                      </h2>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <button
                        onClick={() => openModal(item)}
                        className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                          darkMode
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${
                darkMode ? 'bg-gray-800/50 text-white' : 'bg-white/50 text-black'
              } hover:bg-blue-500 hover:text-white transition-all duration-300`}
            >
              <FaChevronRight size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`relative max-w-2xl w-full rounded-2xl p-6 ${
            darkMode ? "bg-gray-900" : "bg-white"
          }`}>
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                darkMode ? "text-white hover:bg-gray-800" : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              <FaTimes size={24} />
            </button>
            
            <div className="space-y-6">
              <h2 className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}>
                {selectedProject.name}
              </h2>
              
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={selectedProject.pic}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <p className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                {selectedProject.details}
              </p>
              
              <div className="flex justify-end">
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    darkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
        
        @media (max-width: 768px) {
          .projects {
            padding: 2rem 1rem;
          }
          
          h1 {
            font-size: 2.5rem;
          }
          
          .w-\[90\%\] {
            width: 85%;
          }
          
          h2 {
            font-size: 2rem;
          }
          
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;