// // import React from "react";
// // import aboutImage from "./assets/about.jpg";
// // import './App.css'

// // const AboutUs = () => {
// //   return (
// //     <section className="w-full bg-white py-16 px-6 md:px-20 font-montserrat">
// //       <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
// //         {/* Left Image */}
// //         <div className="w-full md:w-1/2">
// //           <img
// //             src={aboutImage}
// //             alt="About Us"
// //             className="w-200 h-200 object-cover rounded-md shadow-md"
// //           />
// //         </div>

// //         {/* Right Content */}
// //         <div className="w-full md:w-1/2 space-y-4 text-left">
// //           <h1 className="text-700 font-montserrat  text-black font-bold tracking-wide uppercase relative after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-black mb-2">
// //             ABOUT US
// //           </h1>
// //           <h4 className="text-blue-600 font-semibold text-sm">Who We Are</h4>
// //           <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black font-montserrat ">
// //             Transforming Ideas Into <br />
// //             <span className="text-blue-600">Digital Reality</span>
// //           </h2>
// //           <p className="text-sm text-gray-700 leading-relaxed font-montserrat ">
// //             At <strong>Pixe Lab</strong>, we’re a team of designers, developers, and
// //             digital thinkers who believe that great ideas deserve great execution.
// //             As a startup ourselves, we understand the hustle — and we’re here to
// //             bring your vision to life with a perfect blend of creativity, code, and
// //             customer care.
// //           </p>
// //           <button className="mt-4 font-montserrat  bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition flex items-center gap-2">
// //             Learn More →
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutUs;


// // import React, { useEffect, useRef, useState } from "react";
// // import aboutImage from "./assets/about.jpg";
// // import { motion, useAnimation } from "framer-motion";
// // import { useInView } from "framer-motion";
// // import './App.css';

// // const About = () => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { threshold: 0.5 });
// //   const controls = useAnimation();

// //   useEffect(() => {
// //     if (isInView) {
// //       controls.start({ width: "80px", backgroundColor: "#3b82f6" }); // Tailwind blue
// //     } else {
// //       controls.start({ width: "0px", backgroundColor: "#00000000" }); // Transparent
// //     }
// //   }, [isInView, controls]);

// //   return (
// //     <section
// //       ref={ref}
// //       className="w-full bg-white py-16 px-6 md:px-20 font-montserrat"
// //     >
// //       <div className="flex flex-col md:flex-row items-center justify-between gap-10">
// //         {/* Left Image */}
// //         <div className="w-full md:w-1/2">
// //           <img
// //             src={aboutImage}
// //             alt="About Us"
// //             className="w-200 h-200 object-cover rounded-md shadow-md"
// //           />
// //         </div>

// //         {/* Right Content */}
// //         <div className="w-100 md:w-1/2 space-y-4 text-left">
// //           {/* Section Title with Animated Underline */}
// //           <div className="relative  ">
// //             <h1 className="text-xl font-bold mb-100 text-black tracking-wide uppercase">
// //               ABOUT US
// //             </h1>
// //             <motion.div
// //               animate={controls}
// //               transition={{ duration: 0.5 }}
// //               className="h-[2px] absolute left-0 -bottom-1"
// //             />
// //           </div>

        
// //           <h4 className="text-blue-600 font-semibold text-2xl">Who We Are</h4>
// //           <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black">
// //             Transforming Ideas Into <br />
// //             <span className="text-blue-600">Digital Reality</span>
// //           </h2>
// //           <p className="text-sm text-gray-700 leading-relaxed">
// //             At <strong>Pixe Lab</strong>, we’re a team of designers, developers, and
// //             digital thinkers who believe that great ideas deserve great execution.
// //             As a startup ourselves, we understand the hustle — and we’re here to
// //             bring your vision to life with a perfect blend of creativity, code, and
// //             customer care.
// //           </p>
// //           <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition flex items-center gap-2">
// //             Learn More →
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;


// import React, { useEffect, useRef } from "react";
// import aboutImage from "./assets/about.jpg";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "framer-motion";
// import './App.css';

// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { threshold: 0.5 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start({ width: "80px", backgroundColor: "#3b82f6" }); // blue underline
//     } else {
//       controls.start({ width: "0px", backgroundColor: "#00000000" });
//     }
//   }, [isInView, controls]);

//   return (
//     <section
//       ref={ref}
//       className="w-full bg-white py-16 px-6 md:px-20 font-montserrat"
//     >
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Left Image */}
//         <div className="w-full md:w-1/2">
//           <img
//             src={aboutImage}
//             alt="About Us"
//             className="w-200 h-200 object-cover rounded-md shadow-md"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="w-full md:w-1/2 space-y-4 text-left">
//           {/* Section Title + All Content Grouped */}
//           <div className="relative space-y-4">
//             <h1 className="text-xl font-bold text-black tracking-wide uppercase">
//               ABOUT US
//             </h1>
//             <motion.div
//               animate={controls}
//               transition={{ duration: 0.5 }}
//               className="h-[2px] absolute left-0 -bottom-1"
//             />

//             <h4 className="text-blue-600 font-semibold text-2xl">Who We Are</h4>
//             <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black">
//               Transforming Ideas Into <br />
//               <span className="text-blue-600">Digital Reality</span>
//             </h2>
//             <p className="text-sm text-gray-700 leading-relaxed">
//               At <strong>Pixe Lab</strong>, we’re a team of designers, developers, and
//               digital thinkers who believe that great ideas deserve great execution.
//               As a startup ourselves, we understand the hustle — and we’re here to
//               bring your vision to life with a perfect blend of creativity, code, and
//               customer care.
//             </p>
//             <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition flex items-center gap-2">
//               Learn More →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React, { useEffect, useRef } from "react";
import aboutImage from "./assets/about.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import './App.css';
import { Typewriter } from 'react-simple-typewriter';


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: "100px", backgroundColor: "#3b82f6" }); // blue
    } else {
      controls.start({ width: "0px", backgroundColor: "#00000000" });
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 px-6 md:px-20 font-montserrat"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 relative">
        
        {/* Left Image */}
            <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 3, y: 10 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
            >
            <img
                src={aboutImage}
                alt="About Us"
                className="w-180 h-180 object-cover rounded-md shadow-md"
            />
            </motion.div>

        {/* Right Content Block */}
        <div className="w-full md:w-1/2">
          
          {/* ABOUT US Heading */}
          <div className="relative ">
            <h1 className="text-xl font-bold mt-10 text-black tracking-wide uppercase">
              ABOUT US
            </h1>
            <motion.div
              animate={controls}
              transition={{ duration: 1 }}
              className="h-[5px] absolute left-0 -bottom-1"
            />
          </div>

          {/* Rest of the Content Under Heading */}
          <div className="space-y-8 text-left ms-30 mt-45 ">

          <h4 className="text-blue-600 font-semibold text-lg">Who We Are</h4>

<h2 className="text-3xl md:text-4xl font-bold leading-snug text-black">
  {`Transforming Ideas Into `}
  <br></br>
  <span className="text-blue-600">
    <Typewriter
      words={['Digital Reality']}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </span>
</h2>

            
            <p className="text-sm text-black-700 leading-relaxed">
              At <strong>Pixe Lab</strong>, we’re a team of designers, developers, and
              digital thinkers who believe that great ideas deserve great execution.
              As a startup ourselves, we understand the hustle — and we’re here to
              bring your vision to life with a perfect blend of creativity, code, and
              customer care.
            </p>
            <button className="mt-2 common hov text-white text-sm font-medium px-6 py-2 rounded-md max-w-[200px] transition flex items-center gap-2">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

