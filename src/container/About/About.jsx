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
        <span>Light up your life</span> with <span>Yash Lights</span>
      </h2>

      <div className="app__profiles">
         <p>Welcome to Yash Lights and Power Solutions, your premier Sharpy lights, LED lights, Blender lights, Laser lights and all type of party lights service provider. We specialize in the rental of these powerful lights, providing our customers with the best service and equipment in the industry.</p>
         <p>Our rental services are perfect for live events, concerts, and theater productions. We have a wide range of Sharpy lights available for rent, from small units to large-scale setups. Our team of experts will work with you to create the perfect lighting solution for your event. We can also provide custom programming and control services to create unique and dynamic lighting effects</p>
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