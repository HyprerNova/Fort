"use client";

import { useTheme } from "@/components/ThemeContext";
import { useState } from "react";

const Contact = () => {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);
  const email = "navneethksreenivas@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div
    id = "contact"
      className={`contact min-h-screen py-20 ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
              darkMode ? "dark:text-white" : "text-black"
            }`}
          >
            Contact Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div
          className={`contact_container rounded-2xl backdrop-blur-sm p-8 shadow-xl ${
            darkMode ? "bg-gray-800/50" : "bg-white/50"
          }`}
        >
          <div className="flex flex-col items-center space-y-6">
            <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Feel free to reach out to me at:
            </p>
            <div className="flex items-center space-x-4">
              {/* <p className={`text-xl font-mono ${darkMode ? "text-white" : "text-black"}`}>
                email
              </p> */}
              <button
                onClick={copyEmail}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact {
            padding: 2rem 1rem;
          }
          
          h1 {
            font-size: 2.5rem;
          }
          
          .contact_container {
            padding: 1.5rem;
          }
          
          .flex.items-center {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;