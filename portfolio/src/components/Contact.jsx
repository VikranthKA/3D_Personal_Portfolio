import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

import { styles } from "../style";
import EarthCanvas from "./canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleEmailClick = () => {
    setShowEmail(!showEmail);
  };

  const handlePhoneClick = () => {
    setShowPhone(!showPhone);
  };

  const handleWhatsAppClick = () => {
    setShowWhatsApp(!showWhatsApp);
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        
        <div className="contact-details w-50 h-40 flex flex-column flex-wrap justify-between">
          <button onClick={handleEmailClick} className="contact-button flex items-center p-5 my-2  bg-gray-800 text-white rounded-md  " style={{height:"20%"}}>
            <FaEnvelope className="mr-2" />
            {showEmail ? " vikranthka@gmail.com" : "  Email"}
          </button><br/>
          <button onClick={handlePhoneClick} className="contact-button flex items-center p-5 my-2  bg-gray-800 text-white rounded-md" style={{height:"20%"}}>
            <FaPhone className="mr-2" />
            {showPhone ? " +91 7899193268" : "  Phone"}
          </button><br/>
          <button onClick={handleWhatsAppClick} className="contact-button flex items-center p-5 my-2 bg-gray-800 text-white rounded-md" style={{height:"20%"}}>
            <FaWhatsapp className="mr-2" />
            {showWhatsApp ? " +91 7899193268" : "  WhatsApp"}
          </button><br/>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />  
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
