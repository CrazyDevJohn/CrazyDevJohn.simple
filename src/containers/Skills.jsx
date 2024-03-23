import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="w-52 flex justify-center items-center"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-2xl text-texlight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize font-sans tracking-wider">
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 end-full">
        {/* content section */}

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-2xl text-texlight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize font-sans tracking-wider">
            My Skills & Work Experience
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            accusamus non quae velit? Quidem architecto minus debitis porro
            corrupti velit, voluptates quo, iusto quis, odio nam adipisci sunt
            blanditiis non!
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            accusamus non quae velit? Quidem architecto minus debitis porro
            corrupti velit, voluptates quo, iusto quis, odio nam adipisci sunt
            blanditiis non!
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            accusamus non quae velit? Quidem architecto minus debitis porro
            corrupti velit, voluptates quo, iusto quis, odio nam adipisci sunt
            blanditiis non!
          </p>
        </div>

        {/* image sction */}
        <div className="w-full flex items-center justify-center px-8 flex-col gap-4">
          <SkillCard
            skill={"HTML 5"}
            percentage={"95%"}
            color={"#ff3f3f"}
            move={true}
          />
          <SkillCard skill={"CSS 3"} percentage={"75%"} color={"#017ef3"} />
          <SkillCard
            skill={"Javascript"}
            percentage={"85%"}
            color={"#ffbb00"}
            move={true}
          />
          <SkillCard skill={"NodeJs"} percentage={"85%"} color={"#14b800"} />
          <SkillCard
            skill={"React & NextJs"}
            percentage={"90%"}
            color={"#00fff3"}
            move={true}
          />
          <SkillCard
            skill={"Mango DB & Firebase"}
            percentage={"75%"}
            color={"#ffe400"}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
