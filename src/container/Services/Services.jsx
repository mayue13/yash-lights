import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Services.scss";
import { AppWrap, MotionWrap } from "../../wrapper/index";
import { urlFor, client } from "../../client";

function Services() {
  const [Services, setServices] = useState([]);
  const [Equipment, setEquipment] = useState([]);

  useEffect(() => {
    const equQuery = '*[_type == "equipment"]';
    const servicesQuery = '*[_type == "services"]';

    client.fetch(servicesQuery).then((data) => {
      setServices(data);
    });

    client.fetch(equQuery).then((data) => {
      setEquipment(data);
    });
  }, []);
 

  return (
    <>
      <h2 className="head-text">
        Equipment <span>&</span> Services
      </h2>

      <div className="app__Services-container">
        <motion.div className="app__Services-list">
          {Equipment?.map((equipment) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__Services-item app__flex"
              key={equipment.name}
            >
              <div
                className="app__flex"
                style={{ backgraoundColor: equipment.bgColor }}
              >
                <img src={urlFor(equipment.icon)} alt={equipment.name} />
              </div>
              <p className="p-text">{equipment.name}</p>
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
  "services",
  "app__whitebg"
);
