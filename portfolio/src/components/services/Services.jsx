import React, { useRef } from 'react'
import "./services.scss"
import {motion ,useInView} from 'framer-motion'
export const Services = () => {
    
    const ref =useRef()

    const isInView = useInView(ref,{margin:"-100px"});

    const variants ={
        initial:{
          x:-500,
          y:100,
          opacity:0,
        },
        animate:{
            x: 0,
            opacity:1,
            y:0,
            transition:{
                duration:1,
                staggerChildren:0.1,
            },
        },
    }

    const workCard  = [

        {
         header : "Frontend Development",
         detail : " I build fast and responsive websites using modern technologies like React, HTML, CSS, and JavaScript. My focus is on creating reusable components and maintaining clean, scalable code for long-term success.",
         button:"View Projects"
        },
          {
         header : "API Integration",
         detail : " I connect frontend apps to real-time data using REST or GraphQL APIs. I handle authentication, error handling, and data management to ensure smooth user experiences.",
          button:"Learn More"
        },
          {
         header : "Performance Optimization",
         detail : "I improve web performance by implementing lazy loading, code splitting, and memoization techniques. These help deliver faster load times and a smoother experience for users.",
          button:"Improve Speed"
        },
          {
         header : "Deployment",
         detail : "I deploy production-ready applications using Vercel, Netlify, or custom servers. I also set up continuous integration and custom domains to ensure professional and reliable delivery.",
          button:"Deploy Now"
        },

    ]
  return (
    <motion.div className='services' variants={variants} 
    ref={ref} animate={isInView && "animate"}
    initial="initial"
    // whileInView="animate"
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping yoour brand grow <br/>
             and move forword</p>

             <hr/>

        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b>Skills</h1>
            </div>
            <div className="title">
                
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b>Business.</h1>
                <button>What I Do? </button>
            </div>
        </motion.div>
         {/* <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, quibusdam id molestias non natus temporibus eos officia quos quod aperiam laudantium laborum accusantium est, atque qui sunt unde perspiciatis facere.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, quibusdam id molestias non natus temporibus eos officia quos quod aperiam laudantium laborum accusantium est, atque qui sunt unde perspiciatis facere.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, quibusdam id molestias non natus temporibus eos officia quos quod aperiam laudantium laborum accusantium est, atque qui sunt unde perspiciatis facere.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, quibusdam id molestias non natus temporibus eos officia quos quod aperiam laudantium laborum accusantium est, atque qui sunt unde perspiciatis facere.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>    */}
          <motion.div className="listContainer" variants={variants}>
           {workCard.map((w ,i)=>{

         return ( <motion.div className="box" whileHover={{background:"lightgray",color:"black"}} key={i}>
                <h2>{w.header}</h2>
                <p>{w.detail}</p>
                <button>{w.button}</button>
            </motion.div>)
         })
        }

        </motion.div> 
    </motion.div>
  )
}
