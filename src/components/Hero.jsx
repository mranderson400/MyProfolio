import { motion } from "framer-motion";
import Sicily from "../assets/Sicily.jpg";
import Typed from "react-typed";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0
        top-[120px] max-w-7xl mx-auto 
        flex flex-row items-start gap-5 `}
      >
        <div
          className="flex flex-col
          justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-blue-800" />
          <div
            className="w-1 h-40 sm:h-80
            bg-gradient-to-b from-blue-900 to-transparent via-blue-400"
          />
        </div>

        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center text-center ml-35 mt-[-22rem]">
            <img src={Sicily} alt="sicily" className="w-28 h-28 rounded-full" />
            <p style={{ fontFamily: 'Consolas, monospace', letterSpacing: '5px' }}>SOFTWARE ENGINEER</p>
            <Typed
              strings={[
                "I'm Zak, Welcome to my Portfolio! I develop 3D visuals, Web Applications, UI &nbsp;Mobile Applications",
                "Import {Knowledge} from '../Everything';  <span>&#x1F60E;</span>",
              ]}
              typeSpeed={50}
              backSpeed={20}
              loop
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />

            {/* <h1 className="mt-2">Hi, I'm Robert</h1>
            <p className={`${styles.AboutMeSubText} mt-2 text-white-100`}>
              I develop 3D visuals user interfaces and web applications
            </p>  */}
          </div>
        </div>
      </div>
      {/* <br />
      <br /> */}
      <ComputersCanvas />
      <br/>
      <br/>


      {/* here we have a anchor tag with our motion scroll css */}
      <div
        className="absolute xs:bottom-10
        bottom-32 w-full flex justify-center
        items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 
          border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full
              bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
    // h-screen is what makes the background full screen
  );
};

export default Hero;
