import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [regNo, setRegNo] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAnimating(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = () => {
    if (regNo.trim()) {
      const cleanRegNo = regNo.trim();
      navigate(`/rank/${cleanRegNo}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-200 px-4">
      <div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 ${isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
        <div className="text-center mb-6 sm:mb-8">
          <div className={`${isMobile ? "w-16 h-16" : "w-20 h-20"} bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${isMobile ? "h-8 w-8" : "h-10 w-10"} text-blue-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1 sm:mb-2`}>
            BEU Rank Finder
          </h2>
          <p className={`${isMobile ? "text-xs" : "text-sm"} text-gray-600`}>Enter your registration number to check your rank</p>
        </div>
        
        <div className="mb-4 sm:mb-6">
          <label htmlFor="regNo" className={`block ${isMobile ? "text-xs" : "text-sm"} font-medium text-gray-700 mb-1 sm:mb-2`}>
            Registration Number
          </label>
          <div className="relative">
            <input
              type="text"
              id="regNo"
              placeholder="e.g. 21101101001"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              className={`w-full border border-gray-300 ${isMobile ? "px-3 py-2 text-sm" : "px-4 py-3"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
              autoComplete="off"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className={`${isMobile ? "h-4 w-4" : "h-5 w-5"} text-gray-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={!regNo.trim()}
          className={`w-full ${isMobile ? "py-2 text-sm" : "py-3"} px-4 rounded-lg font-medium text-white transition-all duration-300 ${regNo.trim() ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg" : "bg-gray-400 cursor-not-allowed"}`}
        >
          Find Rank
          <svg xmlns="http://www.w3.org/2000/svg" className={`${isMobile ? "h-4 w-4" : "h-5 w-5"} inline-block ml-1 sm:ml-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        
        <div className={`mt-4 sm:mt-6 text-center ${isMobile ? "text-xs" : "text-sm"} text-gray-500`}>
          <p>Don't know your registration number? <a href="https://beu.intelliexams.com/beuexams/LoginScreens/frmStudentLoginPage.aspx" className="text-blue-600 hover:underline">Contact support</a></p>
        </div>
      </div>
      
      {/* Optimized floating elements for mobile */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 5 : 10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-20"
            style={{
              width: `${Math.random() * (isMobile ? 50 : 100) + (isMobile ? 30 : 50)}px`,
              height: `${Math.random() * (isMobile ? 50 : 100) + (isMobile ? 30 : 50)}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Copyright footer */}
      <div className="fixed bottom-0 left-0 w-full py-2 text-center text-xs text-gray-500 bg-white bg-opacity-50">
        &copy; {new Date().getFullYear()} Shivam Sinha. All rights reserved.
      </div>
    </div>
  );
};

export default Home;