import React, { useRef, useEffect} from "react";
import { FaArrowRight } from "react-icons/fa";
import mobile from './assets/mobileui.png'
import showcase from './assets/showcase.jpg'
import sportui from './assets/sportui.png'
import webui from './assets/webui.png'
import { motion, useAnimation, useInView } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import  Testimonial from './Testimonial'



 


const projects = [
  {
    title: "UI-Mobile App data Management and Insights",
    image: mobile,
  },
  {
    title: "UI- A web app for foodies to order their favorite dishes",
    image: webui,
  },
  {
    title: "UI-Showcasing my work and creative Expertise",
    image: showcase,
  },
  {
    title: "UI- Sports news and updates at your fingertips",
    image: sportui,
  },
];

export default function Projects() {

const ref = useRef(null);
const isInView = useInView(ref, { threshold: 0.5 });
const controls = useAnimation();

useEffect(() => {
  if (isInView) {
    controls.start({ width: "100px", backgroundColor: "#3b82f6" });
  } else {
    controls.start({ width: "0px", backgroundColor: "#00000000" });
  }
}, [isInView, controls]);


  return (
    <section className="bg-[#f4f4f4] px-4 py-10 md:px-20 font-montserrat" id="projects" ref={ref} data-aos="fade-up">
      <div className="text-center mb-10">
       
       <div className="text-center mb-10 relative w-fit mx-auto" ref={ref}>
  <h1 className="text-xl font-bold mt-10 text-black tracking-wide uppercase relative z-10">
    OUR PROJECTS
  </h1>
  <motion.div
    animate={controls}
    transition={{ duration: 1 }}
    className="h-[5px] bg-blue-600 absolute left-0 -bottom-1"
    style={{ width: "100px" }}
  />
</div>



        

        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mt-3" data-aos="fade-up">
                  {`Delivering Excellence `}
                  <br></br>
                  <span className="text-blue-600">
                    <Typewriter
                      words={['Every Time']}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </span>
                </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <h3 className="text-white text-sm font-semibold leading-snug">
                {project.title}
              </h3>
              <div className="ml-auto bg-white w-6 h-6 flex items-center justify-center rounded-full text-blue-500 group-hover:rotate-45 transition-transform duration-300">
                <FaArrowRight size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="common hov text-white text-sm font-semibold px-6 py-2 rounded max-w-[200px]  transition-colors duration-300">
          View all Works ↗
        </button>
      </div>
      <Testimonial />
    </section>
  );
}
