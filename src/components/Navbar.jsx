// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav className="flex justify-between items-center bg-blue-800 text-white px-6 py-4 shadow-md">
//     <h1 className="text-xl font-bold">BEU Rank Finder</h1>
//     <ul className="flex gap-6">
//       <li>
//         <a href="https://results.beup.ac.in/" target="_blank" rel="noopener noreferrer">BEU Website</a>
//       </li>
//       <li><Link to="/about">About Developer</Link></li>
//       <li><Link to="/contact">Contact Us</Link></li>
//       <li><Link to="/details">Other Details</Link></li>
//     </ul>
//   </nav>
// );

// export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">BEU Rank Finder</h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            <li>
              <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            </li>
            <li>
              <a href="https://results.beup.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                BEU Website
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-200 transition">About Developer</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200 transition">Contact Us</Link>
            </li>
            <li>
              <Link to="/details" className="hover:text-blue-200 transition">Other Details</Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <ul className="flex flex-col gap-4">
            <li>
              <Link 
                to="/" 
                className="block hover:text-blue-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a 
                href="https://results.beup.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-blue-200 transition"
                onClick={() => setIsOpen(false)}
              >
                BEU Website
              </a>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block hover:text-blue-200 transition"
                onClick={() => setIsOpen(false)}
              >
                About Developer
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block hover:text-blue-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                to="/details" 
                className="block hover:text-blue-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Other Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
