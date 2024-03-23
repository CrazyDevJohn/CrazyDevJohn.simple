import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 end-full">
        {/* content section  */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, It's me{" "}
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
              Crazy Dev John
            </span>
          </h2>

          {/* typer  */}
          <h2 className="text-2xl lg:text-3xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              speed={100}
              words={[
                "a Developer..",
                "a Designer..",
                "a Hacker..",
                "a YouTuber..",
                "a freelanzer..",
              ]}
            />
          </h2>

          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum
            aspernatur itaque assumenda, totam a aliquid alias architecto
            pariatur recusandae dolor inventore iusto dignissimos ipsam
            similique autem voluptates odio nobis!
          </p>
          {/* social media buttons */}
          <div className="flex items-center justify-center gap-16 mt-16 ">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => {
                  return (
                    <HomeSocialLinks index={index} data={item} key={index} />
                  );
                })}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href="#"
            style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,.5" }}
            className="mt-12 border border-[rgba(255,255,255,.05)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          >
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
              Hire Me
            </p>
          </a>
        </div>
        {/* image section */}
        <div className="w-full h-full flex items-start justify-start lg:justify-center lg:items-center">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            src={Hero}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
