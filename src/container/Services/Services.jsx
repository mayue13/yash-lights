import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Services.scss";
import { AppWrap, MotionWrap } from "../../wrapper/index";
import { urlFor, client } from "../../client";

function Services() {
  const [Services, setServices] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]';
    const ServicesQuery = '*[_type == "Services"]';

    client.fetch(ServicesQuery).then((data) => {
      setServices(data);
    });

    client.fetch(expQuery).then((data) => {
      setExperience(data);
    });
  }, []);
 

  return (
    <>
      <h2 className="head-text">
        Equipment <span>&</span> Services
      </h2>

      <div className="app__Services-container">
        <motion.div className="app__Services-list">
          {Services?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__Services-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgraoundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__Services-exp">
          {experience?.map((experience) => (
            <motion.div className="app__Services-exp-item" key={experience.year}>
              <div className="app__Services-exp-year">
                <p className="bold-text">{experience.company}</p>
              </div>

              <motion.div className="app__Services-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__Services-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                                           
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="Services-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

//export default AppWrap(Services, "Services");

export default AppWrap(
  MotionWrap(Services, "app__Services"),
  "Services",
  "app__whitebg"
);
