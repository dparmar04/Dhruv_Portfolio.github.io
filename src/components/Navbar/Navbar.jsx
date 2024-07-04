import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import "./navbar.css"
import "/assets/logo_portfolio.png"
const Navbar = () => {
     const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuOpen = () => {
    setSidebarOpen(true);
  };

  const handleMenuClose = () => {
    setSidebarOpen(false);
   };
   
   var menu = document.querySelector(".navlink i");
   var cross = document.querySelector(".sidebar i");
      
   useGSAP(() => {      
      var tl = gsap.timeline();

      tl.from(".sidebar li ", {
         duration: 0.6,
         stagger: 0.2,
         opacity: 0,
      }, [sidebarOpen]);

      
      gsap.from("#nav .logo img , #nav .nav-links ul li", {
         y: -30,
         opacity: 0,
         delay:0.5,
         duration: 0.5,
         stagger:0.2
      });
   
   })
   

   return (
      <>
         <div id="nav">
            <div className='logo'>
               <img src="/assets/logo_portfolio.png" alt="Logo" />
            </div>
            <div className='nav-links'>
               <ul>
                  <li><a><ScrollLink to="about" smooth={true} duration={600}>About</ScrollLink></a></li>
                  <li><a><ScrollLink to="skills" smooth={true} duration={600}>Skills</ScrollLink></a></li>
                  <li><a><ScrollLink to="projects" smooth={true} duration={600}>Projects</ScrollLink></a></li>
                  <li><a><ScrollLink to="contact" smooth={true} duration={600}>Contact</ScrollLink></a></li>
                  <i className="ri-menu-5-line"  onClick={handleMenuOpen}></i>
               </ul>
               
            </div>
               <ul className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                  <li><a><ScrollLink to="about" smooth={true} duration={600} onClick={handleMenuClose}>About</ScrollLink></a></li>
                  <li><a><ScrollLink to="skills" smooth={true} duration={600} onClick={handleMenuClose}>Skills</ScrollLink></a></li>
                  <li><a><ScrollLink to="projects" smooth={true} duration={600} onClick={handleMenuClose}>Projects</ScrollLink></a></li>
                  <li><a><ScrollLink to="contact" smooth={true} duration={600} onClick={handleMenuClose}>Contact</ScrollLink></a></li>
                  <i className="ri-close-large-fill"  onClick={handleMenuClose}></i>
               </ul>
         </div>
         </>
      )
};

export default Navbar
