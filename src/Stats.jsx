// StatsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { end: 13, suffix: "+", label: "Years Experience" },
  { end: 100, suffix: "+", label: "Team Members" },
  { end: 99, suffix: "%", label: "Customer Satisfaction" },
  { end: 500, suffix: "+", label: "Happy Clients" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-blue-100 py-10 font-montserrat" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {inView && (
                <CountUp end={stat.end} duration={3} suffix={stat.suffix} />
              )}
            </h2>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
