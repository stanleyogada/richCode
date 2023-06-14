import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { me } from "../assets";
import { useFormEmail } from "../hooks";

const LINKEDIN_URL = "https://www.linkedin.com/in/stanley-ogada/";
const GITHUB_URL = "https://github.com/stanleyogada";

const Hero = () => {
  const [hasRequestResume, setHasRequestResume] = useState(false);
  const handleRequestResume = (value = true) => setHasRequestResume(value);

  const formRef = useRef();

  const { handleChange, handleSubmit, state, form, renderAlert } = useFormEmail(
    {
      initialForm: {
        name: "",
        email: "",
      },
      onSend: (form) => ({
        from_name: form.name,
        to_name: `CV REQUEST!!!!! ${form.name}:: RICH_CODE OFFICIAL WEBSITE!!`,
        from_email: form.email,
        message: `Hi, Please can I have your CV? \n\n FROM: ${form.email}`,
      }),
      onSuccess: () => {
        console.log("onSuccess called");
        hasRequestResume(false);
      },
    }
  );

  return (
    <section className={`relative w-full h-screen mx-auto hero`}>
      {renderAlert}
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
            <div className={`${styles.heroSubText} mt-2 text-white-100`}>
              <p>
                <br className="sm:block hidden" />
                Thanks for stopping by.
                <br />
                I'm a <i className="text-secondary">frontend developer</i> with
                over 5 years of experience.
              </p>

              <div className="flex justify-between sm:flex-row flex-col controls">
                <div>
                  <button
                    className="flex gap-3 cursor-pointer items-center text-blue-300"
                    onClick={() => window.open(LINKEDIN_URL, "_blank")}
                  >
                    {/* <BsLinkedin /> */}
                    <p
                      className={`underline underline-offset-1 mt-2 text-[20px]`}
                    >
                      linkedin.com/in/stanley-ogada
                    </p>
                  </button>
                  <button
                    className="flex gap-3 cursor-pointer items-center text-blue-300"
                    onClick={() => window.open(GITHUB_URL, "_blank")}
                  >
                    {/* <BsGithub /> */}
                    <p
                      className={`underline underline-offset-1 mt-2 text-[20px]`}
                    >
                      github.com/stanleyogada
                    </p>
                  </button>
                </div>

                <div className="relative">
                  {!hasRequestResume ? (
                    <button
                      onClick={() => handleRequestResume()}
                      className="sm:p-2 p-0 sm:px-0 py-2 orange-text-gradient flex items-center justify-center items-center cursor-pointer rounded-lg sm:self-end self-start"
                    >
                      <p>Request My Résumé</p>
                    </button>
                  ) : (
                    <>
                      <div
                        className="bg-[#ffffff89] fixed top-[0px] left-[10px] w-[100vw] h-[100vh]"
                        onClick={() => handleRequestResume(false)}
                      ></div>
                      <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="text-[18px] mt-12 flex flex-col gap-8 fixed top-[30%] left-[50%] sm:w-[450px] w-[350px] sm:h-[470px] h-[370px] translate-x-[-50%] translate-y-[-50%] shadow-md shadow-primary bg-black-100 sm:p-8 p-5 rounded-2xl"
                      >
                        <label className="flex flex-col">
                          <span className="text-white font-medium mb-2">
                            Your Name
                          </span>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                          />
                        </label>

                        <label className="flex flex-col">
                          <span className="text-white font-medium mb-2">
                            Your email
                          </span>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email address?"
                            className="bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                          />
                        </label>

                        <button
                          type="submit"
                          className="orange-text-gradient flex items-center justify-center items-center cursor-pointer border border-red rounded-lg py-2"
                          disabled={!form.name || !form.email || state.loading}
                        >
                          {state.loading
                            ? "Sending Request..."
                            : "Request My Résumé"}
                        </button>
                        <button
                          type="button"
                          className="bg-tertiary py-2 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary absolute bottom-[10px] right-[10px]"
                          disabled={state.loading}
                          onClick={() => handleRequestResume(false)}
                        >
                          Cancel
                        </button>
                      </form>
                    </>
                  )}
                </div>
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
            </div>
          </div>

          <div className="me border-4 border-white rounded-full absolute top-[-20px] right-[-150px] overflow-hidden">
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
