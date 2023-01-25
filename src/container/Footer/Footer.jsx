import React, { useState } from "react";
import { send } from 'emailjs-com';

import {  client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper/index";


import "./Footer.scss";
import SocialMediaContact from "../../components/SocialMedia/SocialMediaContact";

const SERVICE_ID = "service_lvdt4k4";
const TEMPLATE_ID = "template_0m4aqzh";
const USER_ID = "vTNAwyLziDEgXE69h";



const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [toSend, setToSend] = useState({
    name: '',
    to_name: 'Yash Lights',
    message: '',
    email: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
   // const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value});
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));

      e.preventDefault();
      send(SERVICE_ID,TEMPLATE_ID,toSend,USER_ID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
  };

  return (
    <>
      <h2 className="head-text">Contact  <span>U</span>s</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
         <SocialMediaContact/>
        </div>        
      </div>

      {!isFormSubmitted?(
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleChangeInput}
           
          />
         
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
            
          />
          
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
           
          />
        </div>
        <button className="p-text" type="button" onClick={handleSubmit}>
          {loading ? "Sending" : "Send Message"}
        </button>
      </div>
      ):(
      <div>
        <h3 className="head-text">Thank you for get in touch</h3>
      </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
