// // // // import React from "react";
// // // // import heroImage from "./assets/hero.png";
// // // // import "./App.css";
// // // // import Navbar from "./Navbar";

// // // // const Hero = () => {
// // // //   return (
// // // //     <div>
        
// // // //     <section className="relative w-full h-[100vh] bg-white font-montserrat overflow-hidden">
// // // //       <Navbar />    

// // // //       {/* 🔹 Background Image */}
// // // //       <div
// // // //         className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 "
// // // //         style={{
// // // //           backgroundImage: `url(${heroImage})`,
// // // //         }}
// // // //       ></div>

// // // //       {/* 🧱 Main Content (Text Left Aligned) */}
// // // //       <div className="relative z-10 h-full flex items-center px-6 md:px-20">
// // // //         <div className="max-w-xl text-left space-y-6">
// // // //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
// // // //             Design It. Build It. <br />
// // // //             Support It. All in One Lab
// // // //           </h1>
// // // //           <p className="text-sm text-gray-700 leading-relaxed">
// // // //             Bringing Ideas to Life with Design, Code,<br />
// // // //             and &nbsp; Customer Care — All in One Lab!
// // // //           </p>
// // // //           <p className="text-sm text-gray-600">
// // // //             At <span className="font-semibold text-blue-700">Pixe Lab</span>, we empower
// // // //             businesses with innovative solutions. Our team of experts designs,
// // // //             develops, and supports cutting-edge technology. From concept to launch,
// // // //             we’re with you every step of the way.
// // // //           </p>
// // // //           <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-md transition">
// // // //             Let’s Innovate →
// // // //           </button>
// // // //         </div>
// // // //       </div>
      
// // // //     </section>
// // // //         </div>

// // // //   );
// // // // };

// // // // export default Hero;


// // import React from "react";
// // import "./App.css";
// // import heroImage from "./assets/hero.png"

// // const Hero = () => {
// //   return (
// //     <section className="relative w-full h-[100vh] font-montserrat overflow-hidden">

// //       {/* 🔹 Background Image (faded) */}
// //         <div
// //               className="absolute inset-0 w-full h-full opacity-40 bg-cover bg-center z-0"
// //               style={{
// //                 backgroundImage: `url(${heroImage})`,
// //               }}
// //             >
      
// //             </div>

// //       {/* 🔹 Semi-transparent Blue Overlay */}
// //       {/* <div className="absolute inset-0 bg-blue-300 opacity-20 z-0"></div> */}

// //       {/* 🧱 Main Content (Text on Top) */}
// //       <div className="relative z-10 h-full flex items-center px-6 md:px-20">
// //         <div className="max-w-xl text-left space-y-6">
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
// //             Design It. Build It. <br />
// //             Support It. All in One Lab
// //           </h1>
// //           <p className="text-sm text-gray-800 leading-relaxed">
// //             Bringing Ideas to Life with Design, Code,<br />
// //             and &nbsp; Customer Care — All in One Lab!
// //           </p>
// //           <p className="text-sm text-gray-700">
// //             At <span className="font-semibold text-blue-700">Pixe Lab</span>, we empower
// //             businesses with innovative solutions. Our team of experts designs,
// //             develops, and supports cutting-edge technology. From concept to launch,
// //             we’re with you every step of the way.
// //           </p>
// //           <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-md transition">
// //             Let’s Innovate →
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React from "react";
// import heroImage from "./assets/hero.png";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-[100vh] font-montserrat overflow-hidden">

//       {/* 🔹 Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
//         style={{
//           backgroundImage: `url(${heroImage})`,
//           opacity: 1,
//         }}
//       ></div>

//       {/* 🔹 Blue Overlay */}
//       <div className="absolute inset-0 bg-[#000000] opacity-80 z-0"></div> {/* Tailwind blue-900 equivalent */}

//       {/* 🧱 Main Content */}
//       <div className="relative z-10 h-full flex items-center px-6 md:px-20">
//         <div className="max-w-xl text-left space-y-6 text-white">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Design It. Build It. <br />
//             Support It. All in One Lab
//           </h1>
//           <p className="text-sm leading-relaxed">
//             Bringing Ideas to Life with Design, Code,<br />
//             and &nbsp; Customer Care — All in One Lab!
//           </p>
//           <p className="text-sm">
//             At <span className="font-semibold text-blue-300">Pixe Lab</span>, we empower
//             businesses with innovative solutions. Our team of experts designs,
//             develops, and supports cutting-edge technology. From concept to launch,
//             we’re with you every step of the way.
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-md transition">
//             Let’s Innovate →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect }from "react";
import "./App.css";
import heroImage from "./assets/hero.png";
import "aos/dist/aos.css";
import AOS from 'aos';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out", once: true });
  }, []);

  return (
    <section className="relative w-full h-[100vh] font-montserrat overflow-hidden" id="home">

      {/* 🔹 Background Image (faded) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
         backgroundImage: `url(${heroImage})`,
          opacity: 1, // keep image subtly visible
        }}
      ></div>

      {/* 🔹 Precise Blue Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#0C1A3A",
          opacity: "40%" // 🎯 Matched Blue: #2A4FA0 @ 40% opacity
        }}
      ></div>

      {/* 🧱 Main Content (Text on Top) */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-20" data-aos="fade-up">
        <div className="max-w-xl text-left space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Design It. Build It. <br />
            Support It. All in One Lab
          </h1>
          <p className="text-sm leading-relaxed">
            Bringing Ideas to Life with Design, Code,<br />
            and &nbsp; Customer Care — All in One Lab!
          </p>
          <p className="text-sm">
            At <span className="font-semibold text-blue-300">Pixe Lab</span>, we empower
            businesses with innovative solutions. Our team of experts designs,
            develops, and supports cutting-edge technology. From concept to launch,
            we’re with you every step of the way.
          </p>
          <button className="common hov text-white text-sm px-6 py-2 rounded-md transition">
            Let’s Innovate →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;