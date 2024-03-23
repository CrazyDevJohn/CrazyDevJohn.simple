import React from "react";
import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  ServiceCount,
  Skills,
} from "./";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 px-1 lg:pr-32">
      {/* partical */}
      <ParticlesContainer />

      {/* header */}
      <Header />
      {/* home container */}
      <Home />

      {/* services count crds */}
      <ServiceCount />

      {/* about container */}
      <About />

      {/* skills container */}
      <Skills />

      {/* projects container] */}
      <Projects />

      {/* contact container */}
      <Contact />

      {/* footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wider text-texlight">Crazy Dev John</p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => {
                return (
                  <HomeSocialLinks index={index} data={item} key={index} />
                );
              })}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
          <p className="text-texlight text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum
            blanditiis, impedit hic quisquam beatae voluptatibus eius eos maxime
            molestiae dolorem ipsam?
          </p>
          <p className="text-texlight text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum
            blanditiis, impedit hic quisquam beatae voluptatibus eius eos maxime
            molestiae dolorem ipsam?
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-texlight text-center">crazydevjohn@gmail.com</p>
            <p className="text-texlight text-center">+94 7154-30976</p>
            <a href="#">
              <p className="text-primary text-center">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
