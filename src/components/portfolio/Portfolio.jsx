import React, { useRef } from 'react'
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
import { Links } from '../sidebar/links/Links';

const items = [
    {
        id:1,
        title:"Blog-App",
        img:"./blog-app.png",
        des: "A Blog App using the MERN stack is a full-stack web application where users can register, log in, and create blog posts. It uses MongoDB to store user and post data, Express.js and Node.js to build the backend server and APIs, and React.js to create a dynamic and responsive frontend. Users can write, edit, delete, and read blogs, with secure authentication handled via JSON Web Tokens (JWT). This app provides a simple and efficient platform for blogging with real-time updates and modern UI.",
        link:"https://github.com/atharvInagle0408/Athexshu_blog/"
    },
    {
        id:2,
        title:"book managment",
        img:"./book.png",
        des: "A Book Management App using the MERN stack is a full-stack web application that allows users to add, view, update, and delete books. It uses MongoDB to store book records, Express.js and Node.js for backend APIs and server logic, and React.js for building an interactive user interface. The app supports features like searching for books, categorizing them by genre or author, and managing book inventory. It offers a seamless and efficient way to organize and maintain a digital book collection.",
        link:"https://github.com/atharvInagle0408/BOOK"
    },
    {
        id:3,
        title:"E-commerce",
        img:"./E-commerce.png",
        des: "An E-commerce App using the MERN stack is a full-stack web application designed to buy and sell products online. It leverages MongoDB for storing product, user, and order data, Express.js and Node.js for creating robust backend APIs, and React.js for building a responsive and user-friendly frontend. Key features include user authentication, product browsing, cart and checkout functionality, order management, and payment integration. This app provides a complete platform for managing an online store with real-time interactions and secure transactions.",
        link:"https://github.com/atharvInagle0408/athexshu-ecommerce"
    },
    {
        id:4,
        title:"quick-find",
        img:"./quick-find.png",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia id, quae dolorem eaque maxime, explicabo eius odio veniam doloremque et. Necessitatibus cupiditate enim ullam voluptatem officia praesentium maiores consequuntur?",
        link:""
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
                 <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button >See Demo</button>
                 </a>
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
