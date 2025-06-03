import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import { Sidebar } from '../sidebar/Sidebar'

export default function Navbar() {
  return (
    <div className='navbar'>
        {/* Sidebar */}

        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} >Atharv Ingale</motion.span>
             <div className="social">
                <a href="#"><img src="./facebook.png" alt="" /></a>
                <a href="#"><img src="./instagram.png" alt="" /></a>
                <a href="https://linkedin.com/in/atharv-ingale1714"  target="_blank"><img src="./link3.png" alt="" /></a>
                <a href="https://github.com/atharvInagle0408"  target="_blank"><img src="./github.png" alt="" /></a>
             </div>
        </div>
    </div>
  )
}
