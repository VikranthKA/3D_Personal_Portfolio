import { useState,useRef } from "react";
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../style";
import {EarthCanvas} from "./canvas"
import { slideIn } from "../utils/motion";
const Contact = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
      <p className="text-gray-600">Feel free to reach out to us at any time.</p>
    </div>
  );
};

export default Contact;
