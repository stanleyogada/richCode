import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { RiEye2Line } from "react-icons/ri";

import { styles } from "../styles";
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
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 100,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover object-top rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="absolute p-2 black-gradient flex items-center justify-center items-center cursor-pointer rounded-lg"
            >
              <div className="pr-1">
                <RiEye2Line />
              </div>
              <p>View</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            {description.map((point, index) => (
              <li
                key={`desc-${index}`}
                className="text-secondary text-[16px] pl-1 pb-2 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>

          {/* <p className="mt-2 text-secondary text-[14px]">{description}</p> */}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div id="projects">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The projects I have worked on serve as tangible evidence of my skills
          and experience, demonstrating my ability to tackle real-world
          challenges. Each project has been summarized below, accompanied by
          live links, showcasing my proficiency in problem-solving, adeptness
          with diverse technologies, and effective project management.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
