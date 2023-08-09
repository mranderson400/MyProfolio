import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/";
import germany from "../assets/germany.jpg";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <ParallaxTilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.1 * index, 0.5)}
        className="w-full green-pink-gradient p-[8px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex justify-evenly flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain ml-8" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </ParallaxTilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex flex-wrap gap-6">
        <div className="w-2/5">
        <motion.img
            src={germany}
            alt="germany"
            className="w-5/5 h-auto object-cover"
            variants={fadeIn("right", "spring", 0, 8.5)}
          />
        </div>
        <div className="flex-1">
          <motion.p
            variants={fadeIn("", "", 0.1, 9.5)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Hey guys! I'm a graduate of Coding Dojo's Fullstack Developer Bootcamp. I have a proud background of serving
            in the U.S. Army and wanted to show other vets it's possible to find a new purpose for life after leaving
            the service. I enjoy learning new technologies and working on unique projects. I mainly use React, JSX,
            typescript, and tailwind CSS for the majority of my projects. I have a strong foundation in Python and C#
            as well. If you have any questions or ideas, please, feel free to contact me!
          </motion.p>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

