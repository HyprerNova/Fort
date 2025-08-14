"use client";
import { useTheme } from "@/components/ThemeContext";
import Image from "next/image";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div
      id="home"
      className={`home min-h-screen flex justify-center items-center flex-col relative ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="home_wrapper_text min-h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-4">
        <div className="home_wrapper_text_above flex animate-slideFromTop  items-center gap-12">
          <div className="home_wrapper_text_above_text flex-1">
            <h1
              className={`text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                darkMode ? "dark:text-white" : "text-black"
              }`}
            >
              Navneeth
            </h1>
            <p
              className={`text-xl font-sans mb-8 ${
                darkMode ? "dark:text-white" : "text-black"
              }`}
            >
              Here’s to ideas, effort, and everything in between. Welcome to my
              corner of the internet ! 
            </p>
            <div className="social_links flex gap-4">
              <a
                href="https://www.instagram.com/nuclear_navneeth/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Image
                  src="/images/SocialMedia/instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/navneeth-ks/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Image
                  src="/images/SocialMedia/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </a>
              <a
                href="https://github.com/HyprerNova"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Image
                  src="/images/SocialMedia/github.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </a>
            </div>
          </div>
                     <div className="home_wrapper_text_above_pic flex-1 flex justify-center">
             <div className="relative w-80 h-80">
                               {/* Authentic Doctor Strange Portal Effect - Only visible in dark mode */}
                {darkMode && (
                  <>
                    {/* Main spinning wheel with flame jets */}
                    <div className="absolute inset-0 rounded-full border-8 border-transparent bg-gradient-to-r from-red-600 via-orange-500 to-red-800 animate-spin-fast opacity-90 shadow-red-500/50"></div>
                    
                    {/* Inner energy wheel - reverse spin */}
                    <div className="absolute inset-4 rounded-full border-6 border-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-700 animate-spin-reverse opacity-80 shadow-orange-500/50"></div>
                    
                    {/* Core energy wheel - fastest spin */}
                    <div className="absolute inset-8 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-orange-600 animate-spin-ultra-fast opacity-70 shadow-yellow-500/50"></div>
                    
                    {/* Removed cardinal flame jets for clean circular portal */}
                    
                    {/* Removed diagonal flame jets for round look */}
                    
                    {/* Energy particles floating around */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 animate-energy-particles"></div>
                    
                    {/* Portal core glow */}
                    <div className="absolute inset-12 rounded-full bg-gradient-to-r from-yellow-400/40 via-orange-500/40 to-red-500/40 animate-pulse-fast"></div>
                  </>
                )}
               
               <Image
                 src="/images/Me/me.jpeg"
                 alt="Navneeth"
                 fill
                 className={`rounded-full object-cover shadow-2xl border-4 ${
                   darkMode 
                     ? "border-red-500 shadow-red-600/70" 
                     : "border-blue-500"
                 } transition-all duration-500`}
                 priority
               />
             </div>
           </div>
        </div>
        {/* <div
          className={`home_wrapper_text_below mt-16 p-6 rounded-xl backdrop-blur-sm ${
            darkMode
              ? "dark:bg-black dark:text-white"
              : "bg-white/50 text-black"
          } shadow-xl animate-slideFromRight`}
        >
          <h3
            className={`text-2xl font-bold mb-4 text-center ${
              darkMode ? "dark:text-white" : "text-black"
            }`}
          >
            Tech Stack
          </h3>
          <div className="tech_icons flex flex-wrap justify-center gap-6">
            <div className="tech-icon transform transition-all duration-300 hover:scale-110">
              <Image
                src="/images/Tech/aws.svg"
                alt="HTML"
                width={40}
                height={40}
              />
            </div>
            <div className="tech-icon transform transition-all duration-300 hover:scale-110">
              <Image
                src="/images/Tech/java.svg"
                alt="CSS"
                width={40}
                height={40}
              />
            </div>
            <div className="tech-icon transform transition-all duration-300 hover:scale-110">
              <Image
                src="/images/Tech/postgresql.svg"
                alt="JavaScript"
                width={40}
                height={40}
              />
            </div>
            <div className="tech-icon transform transition-all duration-300 hover:scale-110">
              <Image
                src="/images/Tech/REACT.png"
                alt="React"
                width={40}
                height={40}
              />
            </div>
            <div className="tech-icon transform transition-all duration-300 hover:scale-110">
              <Image
                src="/images/Tech/NODE.png"
                alt="Node.js"
                width={40}
                height={40}
              />
            </div>
            <div className="tech-icon transform transition-all duration-300 hover:scale-110">
              <Image
                src="/images/Tech/PYTHON.png"
                alt="Python"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        /* Authentic Doctor Strange Portal Animations */
        @keyframes spin-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes spin-ultra-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-fast {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        /* Flame Jet Animations - Spewing Fire Outward */
        @keyframes flame-jet-1 {
          0%, 100% {
            opacity: 0.8;
            transform: translateX(-50%) scaleY(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scaleY(1.3);
          }
        }

        @keyframes flame-jet-2 {
          0%, 100% {
            opacity: 0.8;
            transform: translateY(-50%) scaleX(1);
          }
          50% {
            opacity: 1;
            transform: translateY(-50%) scaleX(1.3);
          }
        }

        @keyframes flame-jet-3 {
          0%, 100% {
            opacity: 0.8;
            transform: translateX(-50%) scaleY(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scaleY(1.3);
          }
        }

        @keyframes flame-jet-4 {
          0%, 100% {
            opacity: 0.8;
            transform: translateY(-50%) scaleX(1);
          }
          50% {
            opacity: 1;
            transform: translateY(-50%) scaleX(1.3);
          }
        }

        /* Removed diagonal flame jets keyframes */

        @keyframes energy-particles {
          0%, 100% {
            opacity: 0.2;
            transform: rotate(0deg) scale(1);
          }
          25% {
            opacity: 0.4;
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            opacity: 0.3;
            transform: rotate(180deg) scale(0.9);
          }
          75% {
            opacity: 0.5;
            transform: rotate(270deg) scale(1.05);
          }
        }

        .animate-spin-fast {
          animation: spin-fast 4s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        .animate-spin-ultra-fast {
          animation: spin-ultra-fast 2s linear infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }

        .animate-flame-jet-1 {
          animation: flame-jet-1 1.2s ease-in-out infinite;
        }

        .animate-flame-jet-2 {
          animation: flame-jet-2 1.4s ease-in-out infinite;
        }

        .animate-flame-jet-3 {
          animation: flame-jet-3 1.1s ease-in-out infinite;
        }

        .animate-flame-jet-4 {
          animation: flame-jet-4 1.3s ease-in-out infinite;
        }

        /* Removed diagonal flame jets classes */

        .animate-energy-particles {
          animation: energy-particles 4s ease-in-out infinite;
        }

        @keyframes slideFromRight {
          from {
            right: -200px; /* Increased from -300px to slide more to the left */
          }
          to {
            right: calc(50% - 202px); /* Kept the same ending position */
          }
        }

        @keyframes slideFromTop {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideFromTop {
          animation: slideFromTop 3s ease-out forwards;
        }

        .animate-slideFromRight {
          animation: slideFromRight 3s ease-out forwards;
        }

        @media screen and (max-width: 768px) {
          @keyframes slideFromRight {
            from {
              right: -600px; /* Increased from -300px for mobile */
            }
            to {
              right: 0px;
            }
          }

          .home_wrapper_text_above {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .home_wrapper_text_above_pic {
            margin-bottom: 20px;
          }

          .home_wrapper_text_above_text {
            margin: 0;
            right: 0;
            bottom: 0;
          }

          .social_links {
            justify-content: center;
            flex-wrap: wrap;
            gap: 16px;
          }

          .home_wrapper_text_above_text h1 {
            font-size: 2.5rem;
          }

          .home_wrapper_text_above_text p {
            font-size: 16px;
          }

          .home_wrapper_text_above_text img {
            margin: 20px 5px;
          }

          .home_wrapper_text_below {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: static; /* remove absolute/relative positioning */
            margin-top: 40px; /* some spacing if needed */
            gap: 15px;
          }

          .home_wrapper_text_below h3 {
            font-size: 20px;
          }

          .home_wrapper_text_below img {
            margin: 10px 5px;
            height: 25px;
            width: 25px;
          }
        }

        @media screen and (min-width: 769px) {
          .home_wrapper_text_below {
            justify-content: flex-start;
            align-items: center;
            position: relative;
            gap: 25px;
            right: 345px;
            top: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
