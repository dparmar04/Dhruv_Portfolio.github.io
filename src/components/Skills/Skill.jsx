import React from 'react';
import "./skill.css";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Skill = () => {

   useGSAP(() => {
   var tl = gsap.timeline({
      scrollTrigger: {
         trigger: ".skills",
         scroller: "body",
         start: "top 40%",
         end: "top 40%",
         scrub:2
      }
   })
      tl.from(".skills_container_title", {
         opacity: 0,
         y: 100,
         duration: 1,
         
      })
      tl.from(".skills_container_imgs img", {
         opacity: 0,
         delay:0.5,
         duration: 0.3,
         stagger:0.3,
      });
   
   })
   const skills = [
      "html.png",
      "css.png",
      "javascript.png",
      "reactjs.png",
      "redux.png",
      "tailwind.png",
      "nodejs.png",
      "git.png",
      "GSAP.svg",
      "mongoDB.png"
   ];

   return (
     <section id="skill">
     <div className='skills'>
        <h1 className='skills_container_title'>Skills</h1>
      <div className='skills_container'>
         <div className='skills_container_imgs'>
             {skills.map((skill, index) => (
            <img key={index} src={`../../../assets/${skill}`} alt={skill.split('.')[0]} />
          ))}
         </div>
      </div>
    </div>
     </section>
  )
}

export default Skill
