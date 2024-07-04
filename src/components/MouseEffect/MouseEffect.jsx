import React, { useEffect } from 'react';
import "./mouseeffect.css";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import App from '../../App';

const MouseEffect = () => {

   useEffect(() => {
         const moveCursor = (event) => {
            gsap.to("#cursor", {
            x: event.clientX,
            y: event.clientY,
            duration: 0.1,
         });
      };
      
      document.addEventListener("mousemove", moveCursor);
         
      return () => {
         document.removeEventListener("mousemove", moveCursor);
      };
   }, []);
   
   return (
     <>
     
     <div id="cursor"> </div>
     </>
  )
}

export default MouseEffect
