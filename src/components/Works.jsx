import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import boogieAudio from "../assets/boogie.mp3";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const audio = new Audio(boogieAudio);
  const playAudio = () => {
    audio.play();
  };

  const shakeAnimation = {
    initial: { x: -30 }, // increased from -10
    animate: { x: 30 }, // increased from 10
    transition: {
      yoyo: Infinity,
      duration: 0.3, // reduced duration for a quicker shake
      ease: "easeInOut",
    },
  };

  return (
    //spring up is the type of anamtion we want
    //the index * 0.5 etc will make the projects come in one by one.. i believe
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 2)}>
      <ParallaxTilt
        options={{
          max: 45,
          speed: 450,
          scale: 1,
        }}
        className="bg-tertiary p-5 rounded-2xl
          sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          {" "}
          {/* // this for box creation to hold video */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover
            rounded-2xl"
          />
          <div
            className="absolute inset-0 flex
            justify-end m-3 card-img_hover"
          >
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-blue-500 w-10
              h-10 rounded-full flex justify-center
              items-center cursor-pointer mr-15"
            >
              <img
    src={github}
    alt="github"
    className={`w-50 h-50 object-contain ml-15 
                ${name === "Search and Rescue" ? "bg-blue-red-gradient" : ""}
                ${name === "WhatsApp" ? "text-green-500" : ""}
                ${name === "Noire" ? "w-25 h-50" : ""}`}
  />
            </div> */}
            {/* <div>this will be link showing off project</div> */}

            {name === "Classic Noire" && (
              <>
                <div></div>

                <motion.div
                  onClick={playAudio}
                  style={{
                    marginTop: "48px",
                    marginRight: "50px",
                    width: "4px",
                    height: "4px",
                    padding: "15px", // Increase this as needed
                    marginLeft: "-15px", // Offset the added padding to keep visual position
                    marginTop: "18px", // Adjusted because of the padding
                  }}
                  initial={shakeAnimation.initial}
                  animate={shakeAnimation.animate}
                  transition={shakeAnimation.transition}
                >
                  <div className="flex flex-col items-center text-sm text-black cursor-pointer">
                    <span className="px-4 py-3 -mx-5 -my-3">Click</span>
                    <span className="mt-1">←</span>
                  </div>
                </motion.div>
              </>
            )}
            {/* In the above example, the arrow will shake horizontally because we
 are adjusting the x property back and forth.
 Adjusting the duration in the transition object will make the
  shake faster or slower. Adjust the fontSize to make the arrow
   bigger or smaller. */}
          </div>
        </div>
        <div className="mt-5">
          <h3
            className="text-white font-bold
          text-[24px]"
          >
            {name}
          </h3>
          <p
            className="mt-2 text-secondary
          text-[14px]"
          >
            {description}
          </p>
          {/* // for lines 61 62 ,remember that we took in our parameters in ProjectCard because we imported projects from constants */}
          {/* you did this by taking those objects and passing them as props */}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px]
     ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full ">
        <motion.p
          variants={fadeIn("", "", 0.2, 4)}
          className="mt-3 text-secondary 
          text-[17px]  
          max-w-3xl
          leading-[30px]"
        >
          Here I developed React Native mobile app enhancing search and rescue
          operations, replicated WhatsApp focusing on its core functionalities,
          and built a C# platform for purchasing classic movies. These projects
          highlight my commitment to combining innovative technology with
          user-centric design, emphasizing my technical proficiency and
          understanding of user needs.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              {...project}
              index={index}
              // The key gives each element in the array of projects a unique ID during the map operation by the parameters(project,index),
              // allowing React to efficiently re-render the list when changes occur.
              //key is need to help render
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
