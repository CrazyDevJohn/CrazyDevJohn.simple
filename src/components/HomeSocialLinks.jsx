import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const HomeSocialLinks = ({ index, data }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.a
      key={index}
      href={data?.uri}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{
        delay: index * 0.1,
      }}
      className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary relative p-[2px] cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute inset-0 blur-md bg-gradient-to-br from-primary to-secondary -z-10`}
          ></motion.div>
        )}
        <div className="w-full h-full rounded-full bg-bgPrimary flex items-center justify-center ">
          <data.Icon className={`text-white`} />
        </div>
      </AnimatePresence>
    </motion.a>
  );
};

export default HomeSocialLinks;
