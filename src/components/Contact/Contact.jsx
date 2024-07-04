import { React, useEffect } from 'react';
import "./contact.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const Contact = () => {
    gsap.registerPlugin(ScrollTrigger);

   useGSAP(() => {
      var tl = gsap.timeline({
         scrollTrigger: {
            trigger: "#contact",
            scroller: "body",
            start: "top 40%",
            end: "top 60%",
            scrub: 2
         }
      })

      tl.from("#contact h1", {
         y: 200,
         opacity: 0,
         duration: 0.7,
      });
      tl.from(".contact_container_form form", {
         opacity: 0,

      })
   }, [ScrollTrigger]);

   return (
      <section id='contact'>
         <div className='contact'>
            <h1>Contact</h1>
            <div className="contact_container">
               <div className="contact_container_form">
                  <form action="/submit-form" method='POST'>
                     <p>Get In Touch</p>

                     <label htmlFor="fname">First Name</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your Name"/>

                     <label htmlFor="lname">Email</label>
                     <input type="text" id="lname" name="lastname" placeholder="Your Email"/>


                     <label htmlFor="subject">Message</label>
                     <textarea id="subject" name="subject" placeholder="Write something"></textarea>

                     <button type='submit'>Send</button>

                  </form>
               </div>
            </div>
         </div>
      </section>

   )
}


export default Contact
