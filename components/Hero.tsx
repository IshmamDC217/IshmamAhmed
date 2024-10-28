import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import Framer Motion
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SparklesCore } from "./ui/Sparkles"; // Import the sparkle effect

const Hero = () => {
  return (
    <section className="relative">
      {/* Spotlight effects */}
      <div className="relative z-10">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="rgba(0, 68, 255, 0.3)" // Blue theme
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="rgba(0, 112, 255, 0.3)" // Light blue
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="rgba(30, 30, 60, 0.3)" // Darker blue
          />
        </div>

        {/* Main hero content */}
        <div
          className="h-1/2 w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* Sparkles Background Wrapper with faster fade-in effect */}
            <motion.div
              className="absolute items-center justify-center align-items w-[2400px] h-[1200px] z-0 pointer-events-none rounded-full"
              initial={{ opacity: 0 }} // Start with no visibility
              animate={{ opacity: 1 }} // Gradually fade in
              transition={{ duration: 1, delay: 0.5 }} // Speeding up the fade-in
            >
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={40}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </motion.div>

            <img
              src="/ish.png"
              alt="Ishmam Ahmed"
              className="z-10 max-w-[250px] md:max-w-[300px] lg:max-w-[400px] mb-8 rounded-full border border-[#ffffff69]"
            />

            <TextGenerateEffect
              words="Crafting Innovative Solutions, One Line of Code at a Time."
              className="text-center text-3xl md:text-5xl lg:text-6xl text-blue-500"
            />

            {/* Add motion.p for the paragraph */}
            <motion.p
              className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl pb-2 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }} // Reduced delay and duration for faster appearance
            >
              Hi! I&apos;m Ishmam Ahmed, a dedicated Software Engineer with a passion for building efficient, scalable, and reliable software solutions.
            </motion.p>

            {/* Add motion.div for the button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }} // Reduced delay for faster button appearance
            >
              <a href="#about">
                <MagicButton
                  title="Explore my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
