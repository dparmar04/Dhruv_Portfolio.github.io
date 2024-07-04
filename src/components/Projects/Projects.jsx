import React from 'react';
import "./project.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Projects = () => {

   gsap.registerPlugin(ScrollTrigger);

   useGSAP(() => {
      var tl = gsap.timeline({
      scrollTrigger: {
         trigger: ".project",
         scroller: "body",
         start: "top 60%",
         end: "top 40%",
         scrub:2
      }
   })

      tl.from(".project h1", {
         y: 200,
         opacity: 0,
         duration: 0.7,
      });

      tl.from(".project__content__item", {
         y: 200,
         opacity: 0,
         duration: 1,
         stagger: 1,
      })


   }, []);
   
   return (
      
      <section id='projects'>
         <div className='project'>
               <h1 className='project__title'>Projects</h1>
               <div className='project__content'>
                  <div className='project__content__item'>
                  <h2>Helverse</h2>
                  <img src="../../../assets/Helverse.png" alt="" />
                  <p>The site showcases dynamic and interactive motion graphics that enhance user engagement.It features a modern, clean design with smooth transitions and animations, creating an appealing user experience.</p>
                  <a href='https://helverse.netlify.app/' target='_blank'>Demo<i className="ri-arrow-right-up-line"></i></a>
                  </div>
                  <div className='project__content__item'>
                  <h2>Gerich restaurant</h2>
                  <img src="../../../assets/Gerich.png" alt="" />
                  <p>Explore our tempting menu, captivating visuals, and inviting ambiance for a fulfilling online dining experience.</p>
                  <a href='https://gerich-restuarant-bydhruv.netlify.app/' target='_blank'>Demo<i className="ri-arrow-right-up-line"></i></a>
                  </div>
                  <div className='project__content__item'>
                  <h2>GPT 3</h2>
                  <img src="../../../assets/GPT3.png" alt="" />
                  <p>Our user-friendly interface, accessible across all devices, invites visitors to explore and learn about the revolutionary potential of AI-driven conversation</p>
                  <a href='https://gpt3bydhruv.netlify.app/' target='_blank'>Demo<i className="ri-arrow-right-up-line"></i></a>
                  </div>

               </div>
         </div>
     </section>
  )
}

export default Projects
