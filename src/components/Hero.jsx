import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { me } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="w-5 h-5 rounded-full bg-[#C56E33]" />
          <div className="w-1 sm:h-80 h-40 bg-[#C56E33]" />
        </div>

        <div className="flex">
          <div className="mt-5">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#C56E33]">Stanley Ogada</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <br className="sm:block hidden" />
              <br className="sm:block hidden" />
              Thanks for stopping by.
              <br className="sm:block hidden" />
              I'm a <i className="text-secondary">frontend developer</i> with
              over 5 years of experience.
              <br className="sm:block hidden" />
              <br className="sm:block hidden" />
              <i className="text-[20px]">
                Please ensure to interact with the 3D models (swiping them to
                the left or right).
              </i>
            </p>
          </div>

          <div className="border-4 border-white rounded-full absolute top-[-20px] right-[-150px] overflow-hidden">
            <img
              src={me}
              alt="Stanley Ogada"
              className="w-[450px] h-[450px] object-cover object-top"
            />
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
