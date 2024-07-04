import{ React, useEffect }from 'react';
import "./about.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolio from '../../portfolio';
import about from "../../portfolio"


const About = () => {
   
   gsap.registerPlugin(ScrollTrigger);

   useGSAP(() => {
      var tl = gsap.timeline({
      scrollTrigger: {
         trigger: ".about__container",
         scroller: "body",
         start: "top 80%",
         end: "top 40%",
         scrub:2
      }
   })

      tl.from(".about h1", {
         y: 200,
         opacity: 0,
         duration: 0.7,
      });

      tl.from(".about__container_1_text p", {
         x: -200,
         opacity: 0,
         duration: 0.5,
      }, "about")
   
      tl.from(".about__conatainer_2_img img", {
         x: 200,
         opacity: 0,
         duration: 0.5,
      }, "about")
   },
[ScrollTrigger]);

   
   const { title, brief } = about;
  return (
   
     <section id='about'>
      <div className='about'>
         <h1 className='about__container_1__title'>{portfolio.about.title}</h1>
         <div className='about__container'>
            <div className='about__container_1'>
               <div className='about__container_1_text'>
                    <p>Hi there! I’m Dhruv Parmar,<span> a front-end developer</span> with a knack for creating sleek, responsive web applications. Armed with HTML, CSS, and JavaScript, and a sidekick called React, I turn coffee into code. Currently chasing a BE in Information Technology and diving into the backend world with Node.js and MongoDB, because who needs sleep, right? Always learning, always coding—animations and GSAP are my latest obsessions. Let’s build something awesome together!</p>
               </div>
            </div>
            <div className='about__container_2'>
               <div className='about__conatainer_2_img'>
                  <img src={portfolio.about.img} alt="about_img" />
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default About
