import React, { useState,useEffect } from 'react'
import './Nav.css'
import logo from './netflix-logo.png'
import smileylogo from './smiley-logo.png'
function Nav() {

    const [show,handleShow] = useState(false);
    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100)
            {
                handleShow(true);
            }
            else handleShow(false);
        });
        return()=>{
            window.removeEventListener("scroll");
        }
    },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img  className="nav_logo" 
        src={logo}
        alt='Netflix Logo'>  
        </img>


        <img className="nav_avatar"
        src={smileylogo}
        alt='Netflix Logo'>
        </img>
    </div>
  )
}

export default Nav