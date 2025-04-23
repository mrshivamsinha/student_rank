import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [regNo, setRegNo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (regNo.trim()) {
      const cleanRegNo = regNo.trim();
      navigate(`/rank/${cleanRegNo}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">BEU Rank Finder</h2>
        <label htmlFor="regNo" className="block text-sm font-medium text-gray-700 mb-2">
          Registration Number
        </label>
        <input
          type="text"
          id="regNo"
          placeholder="Enter your registration number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Find Rank
        </button>
      </div>
    </div>
  );
};

export default Home;
