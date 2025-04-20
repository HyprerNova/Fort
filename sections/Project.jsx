"use client";

import { useTheme } from "@/components/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import data from "@/public/Data";

const Projects = () => {
  const { darkMode } = useTheme();
  const name = "<My Projects/>";

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

        <div className="space-y-12">
          {data.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm ${
                darkMode ? "bg-gray-800/50" : "bg-white/50"
              } shadow-xl transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={item.pic}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-col justify-center">
                  <h2
                    className={`text-3xl font-bold mb-4 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </h2>
                  
                  <p
                    className={`text-lg leading-relaxed mb-6 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item.details}
                  </p>
                  
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      darkMode
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    View Project
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .projects {
            padding: 2rem 1rem;
          }
          
          h1 {
            font-size: 2.5rem;
          }
          
          .grid {
            grid-template-columns: 1fr;
          }
          
          .relative {
            height: 300px;
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