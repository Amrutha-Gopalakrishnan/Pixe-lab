import React, { useEffect, useRef } from "react";
import { FaPencilRuler, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';


const OurServices = () => {
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
    <section className="w-full bg-white py-20 px-6 md:px-20 font-montserrat" id="services" ref={ref}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="relative inline-block" data-aos="fade-up">
          <h1 className="text-xl font-bold mt-10 text-black tracking-wide uppercase">
            OUR SERVICES
          </h1>
          <motion.div
            animate={controls}
            transition={{ duration: 1 }}
            className="h-[5px] absolute left-0 -bottom-1 bg-blue-600"
          />
        </div>

        {/* <h2 className="text-2xl md:text-3xl font-semibold text-black mt-4" data-aos="fade-up">
          Evaluate Your Business with{" "}
          <span className="text-blue-600">Our Expert Services</span>
        </h2> */}

        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mt-3" data-aos="fade-up">
          {`Evaluate Your Business with `}
          <br></br>
          <span className="text-blue-600">
            <Typewriter
              words={['Our Expert Services']}
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

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div
          className="bg-white rounded-lg shadow-md p-6 space-y-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-md text-blue-600 text-xl">
            <FaPencilRuler />
          </div>
          <h4 className="text-lg font-semibold text-black" >UI/UX Design</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            At Pixe Lab, we combine creativity with strategy to craft intuitive,
            user-centered designs that enhance usability and drive engagement.
            Whether you’re building a new product or refreshing an old one, we
            help shape experiences your users will love — and remember.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-lg shadow-md p-6 space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-md text-blue-600 text-xl">
            <FaLaptopCode />
          </div>
          <h4 className="text-lg font-semibold text-black">Web Development</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            We create responsive web apps tailored to your unique workflows and
            goals. From internal dashboards to customer-facing portals, we build
            with clean architecture, scalable infrastructure, and a focus on
            performance and security.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-lg shadow-md p-6 space-y-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-md text-blue-600 text-xl">
            <FaMobileAlt />
          </div>
          <h4 className="text-lg font-semibold text-black">
            Mobile App Development
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            We develop high-quality, scalable mobile apps for iOS, Android, and
            cross-platform environments. Whether it’s an utility app, an
            on-demand service, or a social platform, we help bring your idea to
            life with clean code, intuitive interfaces, and seamless performance.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-right mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="400">
        <button className="common hov text-white text-sm font-medium px-6 py-2 max-w-[200px] rounded-md transition">
          View All Services →
        </button>
      </div>
    </section>
  );
};

export default OurServices;
