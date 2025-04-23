import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

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
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Student not found</h2>
        <p>No record found for registration number: {regNo}</p>
        <button
          onClick={handleGoBack}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6" ref={printRef}>
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Rank Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div>
            <p className="font-semibold">Name:</p>
            <p>{student.Name}</p>
          </div>
          <div>
            <p className="font-semibold">Registration Number:</p>
            <p>{regNo}</p>
          </div>
          <div>
            <p className="font-semibold">Father's Name:</p>
            <p>{student["Father's Name"]}</p>
          </div>
          <div>
            <p className="font-semibold">Mother's Name:</p>
            <p>{student["Mother's Name"]}</p>
          </div>
          <div>
            <p className="font-semibold">SGPA:</p>
            <p>{student.SGPA}</p>
          </div>
          <div>
            <p className="font-semibold">Current CGPA:</p>
            <p>{student["Cur. CGPA"]}</p>
          </div>
          <div>
            <p className="font-semibold">University Rank:</p>
            <p>{student["University rank"]}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleGoBack}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Go Back
        </button>
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default RankDetails;
