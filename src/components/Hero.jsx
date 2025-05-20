import React from "react";
import PortfolioPic from "../assets/myPic.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerchildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center  lg:p-8">
            <motion.img
              src={PortfolioPic}
              alt="Mustapha Hamza"
              className=" border-stone-900 rounded-4xl h-90 sm:h-120"
              width={350}
              height={350}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-xl sm:text-4xl tracking-tighter lg:text-7xl"
            >
              Mustapha Abdulrasheed Hamza
            </motion.h2>
            <motion.div
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-lg sm:text-2xl tracking-tight text-transparent flex flex-wrap"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.5,
                  },
                },
              }}
            >
              {"FrontEnd Software Engineer".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.05 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-full py-6 text-base sm:text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1qlo_aBKoteYqkPTiS3gi0xfWX9SP05hV"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-full p-4 text-xs sm:text-sm text-stone-800 mb-10 shadow-lg hover:shadow-2xl"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
