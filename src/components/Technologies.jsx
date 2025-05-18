import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReacthookform } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        TECHNOLOGIES
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mx-5"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
        >
          <FaSass className="text-7xl text-pink-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaJs className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiTypescript className="text-7xl text-blue-500" />
        </motion.div>

        {/*  */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiReactrouter className="text-7xl text-red-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiRedux className="text-7xl text-purple-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiReactquery className="text-7xl text-red-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiReacthookform className="text-7xl text-rose-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4"
        >
          <TbBrandFramerMotion className="text-7xl text-fuchsia-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <RiTailwindCssFill className="text-7xl text-teal-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <FaGitAlt className="text-7xl text-orange-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
