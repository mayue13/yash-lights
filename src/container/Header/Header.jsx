import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants/index";

import "./Header.scss";

import { AppWrap } from "../../wrapper/index";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duaration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div className="app__header app__flex">
      <div className="video-header">
      <video  loop autoPlay muted src={images.bgVideo2}></video>
      </div>
      
    </div>
  );
}

export default AppWrap(Header, "home");
