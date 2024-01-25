import React, { useRef, useState } from 'react'
import './contact.scss'
import { motion ,useInView} from 'framer-motion'
import emailjs from "@emailjs/browser"

const variants={
   initial:{
    y:500,
    opacity:0
   },
   animate:{
    y:0,
    opacity:1,
     transition:{
      duration:0.5,
      staggerChildren:0.1, 
     }
   }
}




 
  
export const Contact = () => {

  const ref = useRef();

  const formRef = useRef();
  const [error,SetError] = useState(false);
  const [success,setSuccess] = useState(false)


  const isInView = useInView (ref,{margin:"-100px"});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7jqlqul', 'template_fxxziln', formRef.current, 'P8aySk1lpJgom7HMJ')
      .then((result) => {
          setSuccess(true)
      }, (error) => {
          SetError(true);
      });
    }
 

  return (
    <motion.div ref={ref}className='contact' variants={variants} initial="initial" whileInView="animate"> 

        <motion.div className="textContainer"variants={variants}>
         <motion.h1 variants={variants}>Let's Work Together</motion.h1>
           <motion.div className="item"variants={variants}>
            <h2>Mail</h2>
            <span>atharvingale408@gmail.com</span>
           </motion.div>
           <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>A/P Kaneri ,Karvir,Kolhapur - 416234</span>
           </motion.div>
           <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span><b>+91</b> 7709081409</span>
           </motion.div>
        </motion.div>


        <div className="formContainer" >
          <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duratio:1}}>
          


          <svg width={"400px"} height={"400px"} viewBox="0 0 215.3 214.7" ><g id="Layer_4"><motion.path strokeWidth={0.5} fill="none" initial={{pathLength:0}} animate={isInView &&{pathLength:1}} transition={{duration:3}} d="m188 112.2-17.1 13.6v-13.6h-10.3V84.8h54.7v27.4z"/><motion.path strokeWidth={0.5} fill="none" initial={{pathLength:0}} animate={isInView &&{pathLength:1}} transition={{duration:3}} d="M106 67.6h109.3V19.7h-78.6L119.4 6.3v13.4H106z"/><motion.path strokeWidth={0.5} fill="none" initial={{pathLength:0}} animate={isInView &&{pathLength:1}} transition={{duration:3}} class="st11" d="M164.4 154.3c20.1 30.2-12.1 46.9-16.8 48.9-12.4 5.2-26 8.1-40.2 8.1C50 211.3 3.5 164.8 3.5 107.4c-.1-57.5 46.4-104 103.8-104"/><motion.path strokeWidth={0.5} fill="none" initial={{pathLength:0}} animate={isInView &&{pathLength:1}} transition={{duration:3}} class="st11" d="M143 124.7c-.2.1-.3.3-.4.4-2.2 3.2-8.2 10.4-10.4 13.6-2 3-6.9 3.6-10.7.9-4.2-2.9-16.8-14.2-24.7-21.6-7.4-7.8-18.8-20.6-21.7-24.8-2.6-3.8-2.1-8.7.9-10.7 3.2-2.2 10.4-8.2 13.6-10.4.1-.1.3-.2.4-.4-8-9.8-15.3-19.7-21.8-29.6C63.9 44.9 56 52 52.3 55.7c-1.8 1.8-3.5 3.7-5 5.6-2 20.2 6.9 46.8 32.1 71.9 25.5 26.7 53.2 36.2 74 34.2 1.9-1.6 3.8-3.3 5.6-5.1 3.7-3.8 10.8-11.7 13.6-15.9-9.9-6.4-19.8-13.7-29.6-21.7zM126.6 50.6h68.2M126.6 36.9h68.2M171 98.5h6.8M184.7 98.5h6.8M198.4 98.5h6.8"/></g></svg>



          </motion.div>
          <motion.form ref={formRef} onSubmit={sendEmail}  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4,duratio:1}}>

            <input type="text" required placeholder='Name' name='name' />
            <input type="email" required placeholder='Email'name='email' />
            <textarea  rows={8} placeholder='Messsage' name='message'/>
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
          </motion.form>
        </div>
    </motion.div>
  );
}




{/* strokeWidth={0.2} fill="none" initial={{pathLength:0}} animate={isInView &&{pathLength:1}} transition={{duration:3}}*/}