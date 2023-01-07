import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";

import { urlFor, client } from "../../client";
import { AppWrap,MotionWrap } from '../../wrapper/index';


function About() {
 
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Light up your life</span>       
        with <span>Yash Lights</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="bold-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

//export default AppWrap(About,'about');
export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',
  "app__whitebg"
  ); 