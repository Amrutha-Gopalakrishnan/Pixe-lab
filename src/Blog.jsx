import long from './assets/bloglong.jpg'
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef , useEffect} from 'react';
import { Typewriter } from 'react-simple-typewriter';




const blogs = [
  {
    title: "The Rise of Cloud Computing : Benefits and Challenges",
    category: "Cloud Computing",
    author: "Jhon Methew",
    date: "May 10, 2025",
    description:
      "Cloud computing enables on-demand access to computing resources, enhancing scalability and flexibility.",
    image: long,
  },
  {
    title: "Cybersecurity Trends to watch",
    category: "Cybersecurity",
    author: "Dharshini",
    date: "May 10, 2025",
    description:
      "Cloud computing enables on-demand access to computing resources, enhancing scalability and flexibility.",
    image: long,
  },
  {
    title: "The Impact of AI on software Development",
    category: "AI Development",
    author: "Johnson",
    date: "May 10, 2025",
    description:
      "Cloud computing enables on-demand access to computing resources, enhancing scalability and flexibility.",
    image: long,
  },
];

export default function Blog() {
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
    <section className="bg-[#f9f9f9] px-6 py-12 md:px-24 text-gray-800 font-montserrat" id='blog' ref={ref}>
      <div className="text-center mb-12 relative w-fit mx-auto">
        <h1 className="text-xl font-bold mt-10 text-black tracking-wide uppercase">
          OUR BLOGS
        </h1>
        <motion.div
          animate={controls}
          transition={{ duration: 1 }}
          className="h-[5px] bg-blue-600 absolute left-0 -bottom-1"
          style={{ width: "100px" }}
        />
        
      </div>

       <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black  text-center mb-5" data-aos="fade-up">
                          {`Stay Informed `}
                          <br></br>
                          <span className="text-blue-600">
                            <Typewriter
                              words={['Stay Ahead']}
                              loop={0}
                              cursor
                              cursorStyle="|"
                              typeSpeed={50}
                              deleteSpeed={50}
                              delaySpeed={2000}
                            />
                          </span>
                        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm w-fit mb-2">
                {blog.category}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <h3 className="text-md font-semibold text-blue-600 hover:underline cursor-pointer">
                {`"${blog.title}"`}
              </h3>
              <p className="text-sm text-gray-700 mt-2 mb-4 leading-snug">
                {blog.description}
              </p>
              <div className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:underline cursor-pointer">
                Read More <FaArrowRight size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
