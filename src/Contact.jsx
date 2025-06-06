import connect from './assets/connect.jpg';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function ConnectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: '100px', backgroundColor: '#3b82f6' });
    } else {
      controls.start({ width: '0px', backgroundColor: '#00000000' });
    }
  }, [isInView, controls]);

  return (
    <section
      className="bg-[#E5F0FF] w-full py-10 px-6 md:px-16 flex flex-col md:flex-row items-center font-montserrat justify-between gap-8" id='contact'
      ref={ref}
    >
      {/* Left Content */}
      <div className="flex flex-col items-start flex-1 max-w-md">
        {/* Section Heading */}
        <div className="relative inline-block mb-4 w-full">
          <h1 className="text-xl font-bold text-black tracking-wide uppercase relative z-10">
            LET'S CONNECT
          </h1>
          <motion.div
            animate={controls}
            transition={{ duration: 1 }}
            className="h-[5px] absolute left-0 -bottom-1 rounded-full bg-blue-600"
          />
        </div>

        {/* Subheading with Typewriter */}
        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mt-3">
          Tell Us About Your Business,
          <br />
          We Are{' '}
          <span className="text-blue-600">
            <Typewriter
              words={['Ready to Solve']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="common hov text-white px-5 py-2 rounded-md font-medium shadow-md transition duration-300 ease-in-out mt-6"
        >
          Contact Us →
        </motion.button>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <img
          src={connect}
          alt="Team discussing business"
          className="rounded-lg w-full h-auto object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
}
