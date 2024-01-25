import React, { useRef } from 'react'
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"Blog-App",
        img:"https://images.pexels.com/photos/8127035/pexels-photo-8127035.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia id, quae dolorem eaque maxime, explicabo eius odio veniam doloremque et. Necessitatibus cupiditate enim ullam voluptatem officia praesentium maiores consequuntur?"
    },
    {
        id:2,
        title:"book managment",
        img:"",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia id, quae dolorem eaque maxime, explicabo eius odio veniam doloremque et. Necessitatibus cupiditate enim ullam voluptatem officia praesentium maiores consequuntur?"
    },
    {
        id:3,
        title:"commerce",
        img:"https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia id, quae dolorem eaque maxime, explicabo eius odio veniam doloremque et. Necessitatibus cupiditate enim ullam voluptatem officia praesentium maiores consequuntur?"
    },
    {
        id:4,
        title:"quick-find",
        img:"",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia id, quae dolorem eaque maxime, explicabo eius odio veniam doloremque et. Necessitatibus cupiditate enim ullam voluptatem officia praesentium maiores consequuntur?"
    },
];
const Single= ({item} )=>{
    const ref = useRef();
    const {scrollYProgress}= useScroll( {
        target:ref,
       // offset :["start start","end start"]
    });

    const y = useTransform(scrollYProgress,[0,1],[-300,300]);
    return ( <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer"ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2 >{item.title}</h2>
                <p>{item.des}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
         
        </section>
)};


export const Portfolio = () => {
    const ref = useRef()
   
    const {scrollYProgress}= useScroll( {
        target:ref,
        offset:["end end","start start"]});
    
 
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className='portfolio'ref={ref}>
        <div className="progress">
            <h1>Feature Work</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}
