import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center bg-blue-800 text-white px-6 py-4 shadow-md">
    <h1 className="text-xl font-bold">BEU Rank Finder</h1>
    <ul className="flex gap-6">
      <li>
        <a href="https://results.beup.ac.in/" target="_blank" rel="noopener noreferrer">BEU Website</a>
      </li>
      <li><Link to="/about">About Developer</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/details">Other Details</Link></li>
    </ul>
  </nav>
);

export default Navbar;
