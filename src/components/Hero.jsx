import { motion } from "framer-motion";
// import { BsFillInfoCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { me } from "../assets";
// import { RiDownload2Fill } from "react-icons/ri";

const LINKEDIN_URL = "https://www.linkedin.com/in/stanley-ogada/";
const GITHUB_URL = "https://github.com/stanleyogada";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto hero`}>
      <div
        className={`absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="w-5 h-5 rounded-full bg-[#C56E33]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex">
          <div className="mt-5">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#C56E33]">Stanley Ogada</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <br className="sm:block hidden" />
              Thanks for stopping by.
              <br />
              I'm a <i className="text-secondary">frontend developer</i> with
              over 5 years of experience.
              <div className="flex justify-between sm:flex-row flex-col controls">
                <div>
                  <div
                    className="flex gap-3 cursor-pointer items-center text-blue-300"
                    onClick={() => window.open(LINKEDIN_URL, "_blank")}
                  >
                    {/* <BsLinkedin /> */}
                    <p
                      className={`underline underline-offset-1 mt-2 text-[20px]`}
                    >
                      linkedin.com/in/stanley-ogada
                    </p>
                  </div>
                  <div
                    className="flex gap-3 cursor-pointer items-center text-blue-300"
                    onClick={() => window.open(GITHUB_URL, "_blank")}
                  >
                    {/* <BsGithub /> */}
                    <p
                      className={`underline underline-offset-1 mt-2 text-[20px]`}
                    >
                      github.com/stanleyogada
                    </p>
                  </div>
                </div>

                <a
                  href="/resume.pdf"
                  className="cv sm:p-2 p-0 sm:px-0 py-2 orange-text-gradient flex items-center justify-center items-center cursor-pointer rounded-lg sm:self-end self-start"
                  download="Stanley-Ogada-Senior-Frontend-Developer"
                >
                  {/* <div className="pr-2">
                    <RiDownload2Fill />
                  </div> */}
                  <p>Download My Résumé</p>
                </a>
              </div>
              <br className="sm:block hidden" />
              <br />
              <div className="flex items-center gap-2">
                {/* <div className="sm:block hidden">
                  <BsFillInfoCircleFill fontSize={"18px"} />
                </div> */}
                <i className="sm:text-[20px] text-[17px]">
                  Please ensure to interact with the 3D models (swiping them to
                  the left or right).
                </i>
              </div>
            </p>
          </div>

          <div className="sm:block hidden border-4 border-white rounded-full absolute top-[-20px] right-[-150px] overflow-hidden">
            <img
              src={me}
              alt="Stanley Ogada"
              className="w-[450px] h-[450px] object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* <div className="mobile-computer-canvas"> */}
      <ComputersCanvas />
      {/* </div> */}

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
