// import { useEffect, useState, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";

// const RankDetails = () => {
//   const { regNo } = useParams();
//   const navigate = useNavigate();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const printRef = useRef();

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const docRef = doc(db, "students", regNo);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setStudent(docSnap.data());
//         } else {
//           setStudent(null);
//         }
//       } catch (err) {
//         console.error("Error fetching student:", err);
//         setError("Failed to fetch student data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudent();
//   }, [regNo]);

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   if (loading) {
//     return (
//       <div className="p-8 text-center">
//         <h2 className="text-2xl font-bold">Loading...</h2>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-8 text-center">
//         <h2 className="text-2xl font-bold text-red-600">Error</h2>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   if (!student) {
//     return (
//       <div className="p-8 text-center">
//         <h2 className="text-2xl font-bold">Student not found</h2>
//         <p>No record found for registration number: {regNo}</p>
//         <button
//           onClick={handleGoBack}
//           className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 flex flex-col items-center">
//       <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6" ref={printRef}>
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Rank Details</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
//           <div>
//             <p className="font-semibold">Name:</p>
//             <p>{student.Name}</p>
//           </div>
//           <div>
//             <p className="font-semibold">Registration Number:</p>
//             <p>{regNo}</p>
//           </div>
//           <div>
//             <p className="font-semibold">Father's Name:</p>
//             <p>{student["Father's Name"]}</p>
//           </div>
//           <div>
//             <p className="font-semibold">Mother's Name:</p>
//             <p>{student["Mother's Name"]}</p>
//           </div>
//           <div>
//             <p className="font-semibold">SGPA:</p>
//             <p>{student.SGPA}</p>
//           </div>
//           <div>
//             <p className="font-semibold">Current CGPA:</p>
//             <p>{student["Cur. CGPA"]}</p>
//           </div>
//           <div>
//             <p className="font-semibold">University Rank:</p>
//             <p>{student["University rank"]}</p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-6 flex gap-4">
//         <button
//           onClick={handleGoBack}
//           className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//         >
//           Go Back
//         </button>
//         <button
//           onClick={handlePrint}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Print
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RankDetails;






//new version 
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const RankDetails = () => {
  const { regNo } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const printRef = useRef();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        // Simulate loading for demo purposes
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const docRef = doc(db, "students", regNo);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStudent(docSnap.data());
        } else {
          setStudent(null);
        }
      } catch (err) {
        console.error("Error fetching student:", err);
        setError("Failed to fetch student data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [regNo]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
          <h2 className="text-2xl font-bold text-blue-800">Loading Student Data...</h2>
          <p className="text-gray-600 mt-2">Please wait while we fetch the details</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md"
        >
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Data</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <button
            onClick={handleGoBack}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md"
        >
          <div className="text-yellow-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Student Not Found</h2>
          <p className="text-gray-600 mb-6">No record found for registration number: <span className="font-semibold">{regNo}</span></p>
          <button
            onClick={handleGoBack}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  // Calculate star rating based on CGPA (for visual effect)
  const cgpa = parseFloat(student["Cur. CGPA"]) || 0;
  const stars = Math.min(5, Math.max(1, Math.floor(cgpa)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Academic Performance
          </h1>
          <p className="text-lg text-gray-600">Detailed academic record and achievements</p>
        </div>

        <div 
          ref={printRef}
          className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          {/* Header with student photo placeholder */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{student.Name}</h2>
                <p className="opacity-90">{regNo}</p>
                <div className="mt-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < stars ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm">CGPA: {student["Cur. CGPA"]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Personal Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Father's Name</p>
                    <p className="font-semibold">{student["Father's Name"]}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Mother's Name</p>
                    <p className="font-semibold">{student["Mother's Name"]}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Academic Performance</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">SGPA</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${Math.min(100, (parseFloat(student.SGPA) || 0) * 10)}%` }}
                        ></div>
                      </div>
                      <span className="font-semibold">{student.SGPA}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Current CGPA</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-green-600 h-2.5 rounded-full" 
                          style={{ width: `${Math.min(100, (parseFloat(student["Cur. CGPA"]) || 0) * 10)}%` }}
                        ></div>
                      </div>
                      <span className="font-semibold">{student["Cur. CGPA"]}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">University Rank</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                      <span className="font-bold">#{student["University rank"]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional visual elements */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Summary</h3>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="text-center px-4 py-2">
                    <p className="text-sm text-gray-600">Semester GPA</p>
                    <p className="text-2xl font-bold text-blue-600">{student.SGPA}</p>
                  </div>
                  <div className="text-center px-4 py-2">
                    <p className="text-sm text-gray-600">Cumulative GPA</p>
                    <p className="text-2xl font-bold text-green-600">{student["Cur. CGPA"]}</p>
                  </div>
                  <div className="text-center px-4 py-2">
                    <p className="text-sm text-gray-600">University Rank</p>
                    <p className="text-2xl font-bold text-purple-600">#{student["University rank"]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoBack}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Go Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
            </svg>
            Print Record
          </motion.button>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} University Academic Records System</p>
      </div>
    </div>
  );
};

export default RankDetails;
