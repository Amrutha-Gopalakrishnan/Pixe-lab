
// import React from "react";
// import logo from "./assets/logo1.png"; // adjust path based on your project
// import "./App.css"; // to load font-montserrat class

// const Navbar = () => {
//   return (
//     <nav className=" px-10 py-4 shadow-sm font-montserrat z-100">
       
//       <div className="flex justify-between items-center">
        
//         {/* Logo & Title */}
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Pixe Lab Logo" className="h-15 w-15" />
//           <span className="text-[22px] font-bold text-black-600">
//             PIXE LAB
//           </span>
//         </div>

//         {/* Menu */}
//       <div className="flex gap-6">
//   {[
//     { label: "Home", href: "#home" },
//     { label: "About Us", href: "#about" },
//     { label: "Services", href: "#services" },
//     { label: "Projects", href: "#projects" },
//     { label: "Blogs", href: "#blog" },
//     { label: "Contact", href: "#contact" }, // add this if you include the connect section
//   ].map((item) => (
//     <a
//       key={item.label}
//       href={item.href}
//       className="text-[15px] font-semibold text-black transition hover:text-blue-600"
//     >
//       {item.label}
//     </a>
//   ))}
// </div>


//         {/* CTA Button */}
//         <button className="common hov text-white text-[16px] font-montserrat font-medium px-4 py-2 rounded" style={{width: "182px", height: "40px" }}>
//           Get a Quote
//         </button>
//       </div>

     
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import logo from "./assets/logo1.png";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="w-full px-10 py-4 font-montserrat z-50 mt-8">
      <div className="flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Pixe Lab Logo" className="h-10 w-10" />
          <span className="text-[22px] font-bold text-white">PIXE LAB</span>
        </div>

        {/* Menu */}
        <div className="flex gap-6">
          {[
            { label: "Home", href: "#home" },
            { label: "About Us", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Projects", href: "#projects" },
            { label: "Blogs", href: "#blog" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-semibold text-white transition hover:text-blue-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="common hov text-white text-[16px] font-montserrat font-medium px-4 py-2 rounded"
          style={{ width: "182px", height: "40px" }}
        >
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
