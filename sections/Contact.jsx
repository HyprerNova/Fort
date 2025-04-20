"use client";

import { useTheme } from "@/components/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  const name = "<Hire Me!>";

  // Function to add dummy message
  const addDummyMessage = () => {
    document.getElementById("subject").value = "Sorry, I'm trying to figure out the API part 😅";
  };

  return (
    <div
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
            {name}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div
          className={`contact_container rounded-2xl backdrop-blur-sm p-8 shadow-xl ${
            darkMode ? "bg-gray-800/50" : "bg-white/50"
          }`}
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className={`block text-lg font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600 text-gray-300 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className={`block text-lg font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600 text-gray-300 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className={`block text-lg font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="4"
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600 text-gray-300 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none`}
              ></textarea>
            </div>

            <button
              type="button"
              onClick={addDummyMessage}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Submit
            </button>
          </form>
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
          
          input, textarea {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;