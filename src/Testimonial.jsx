import { FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import test from './assets/test.jpg'
import image from './assets/testimonial.jpg'
import React, { useRef, useEffect} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';


export default function TestimonialSection() {

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
    <section className="bg-white py-8 px-6 md:px-16 mt-10 lg:px-24  text-gray-800" id="testimonials" ref={ref} data-aos="fade-up">
      <div className="text-center ">
        


<div className="text-center mb-12 relative w-fit mx-auto" ref={ref}>
  <h1 className="text-xl font-bold mt-10 text-black tracking-wide uppercase">
    OUR TESTIMONIALS
  </h1>
  <motion.div
    animate={controls}
    transition={{ duration: 1 }}
    className="h-[5px] bg-blue-600 absolute left-0 -bottom-1"
    style={{ width: "100px" }}
  />
</div>
        

        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mt-3" data-aos="fade-up">
                  {`Real Stories `}
                  <br></br>
                  <span className="text-blue-600">
                    <Typewriter
                      words={['Real Results']}
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

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full relative transition-transform duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={image}
              alt="David Mathew"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                David Mathew
              </h4>
              <p className="text-sm text-gray-500">Business CEO</p>
            </div>
            <FaQuoteRight className="ml-auto text-blue-600 text-xl absolute top-6 right-6" />
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            "Pixel Lab exceeded our expectations! Their innovative solutions and
            expertise delivered outstanding results."
          </p>
          <div className="flex gap-1 text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <AiFillStar key={i} className="text-xl" />
              ))}
          </div>
        </div>

        {/* Testimonial Image */}
        <div className="relative rounded-xl overflow-hidden w-full max-w-md shadow-xl" >
          <img
            src={test}
            alt="Testimonial"
            className="w-150 h-50 object-cover rounded-xl"
          />
          
        </div>
      </div>
    </section>
  );
}
