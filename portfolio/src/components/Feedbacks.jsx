import React from 'react'
import {motion} from 'framer-motion'
import {styles} from "../style"
import {SectionWrapper} from "../hoc"
import {fadeIn,textVariant} from "../utils/motion"
import {testimonials} from "../constants"

const FeedbackCard =()=>{
  
}
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p>What others say</p>
          <h2>Testomonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX}-mt-20 pb-15 flex flex-wrap pag-7`}>
        {testimonials.map((testimonial,index)=>(
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}


      </div>
    </div>
  )
}

export default Feedbacks