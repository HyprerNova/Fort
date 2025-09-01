"use client";

import { useTheme } from "@/components/ThemeContext";

const About = () => {
  const { darkMode } = useTheme();
  const name = "<Navneeth/>";

  return (
    <div
    id = "about"
      className={`about flex justify-center items-center min-h-screen py-20 ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="about_container max-w-6xl mx-auto px-4">
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
        
        <div className={`about_container_content p-8 rounded-2xl backdrop-blur-sm ${
          darkMode ? "bg-gray-800/50" : "bg-white/50"
        } shadow-xl`}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Innovative Thinker | Problem Solver | Tech Enthusiast
              </h2>
            </div>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Greetings, my fellow homo sapiens! I see you've stumbled upon this web page. Born in the 21st century, truly the best time to be alive thanks to the revolutionary rise of AI. I couldn't be more thrilled to witness these exciting times. So, what are you waiting for? Scroll through the page and enjoy your day!
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .about_container {
            padding: 1rem;
          }
          
          h1 {
            font-size: 2.5rem;
          }
          
          .about_container_content {
            padding: 1.5rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;