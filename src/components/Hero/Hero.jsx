import React from 'react';
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import "./hero.css"; 
import portfolio from '../../portfolio';
import intro from '../../portfolio';


const Hero = () => {

   const Animate = useGSAP(() => {
      var tl = gsap.timeline();


      tl.from(".hero__container__text h1", {
         // x: -300,
         scale:2,
         delay: 1,
         opacity: 0,
         duration:0.7
      })
   
      tl.from(".hero__container__text p", {
         x: 300,
         opacity: 0,
         duration:0.6
      })
   
      tl.from(".hero__container_social", {
         opacity: 0,
         duration: 0.4
      })


   });
  
   const { greet, name, title, resume } = intro;

   return (
      <>
         
         <div className='hero'>
            <div className='hero__container'>
               <div className='hero__container__text'>
                  <h1 className='hero__container__text__title'>{portfolio.intro.greet}<span
                     className='hero__container__text__title__name'>{portfolio.intro.name}</span></h1>
                  <p className='hero__container__text__description'>{portfolio.intro.title} </p>
                  <div className='hero__container_social'>
                     <a href={portfolio.intro.resume} target="_blank" className='hero__container__text__button'>Resume</a>
                     <a href="https://github.com/dparmar04" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.png" alt="Github" />
                     </a>
                     <a href="https://www.linkedin.com/in/dhruv-parmar-459289255/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedIn.png" alt="LinkdIn" />   
                     </a>
                     
                 </div>
               </div>
            </div>
         </div>
      </>
   )

}
export default Hero
