import React, { useState } from "react";
import { handleError, handleSuccess } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const RegForm = () => {
  const { eventID } = useParams();
  const navigate = useNavigate();

  const [regformData, setRegformData] = useState({
    eventID,
    name: "",
    branch: "",
    college: "",
    semester: "",
    phoneno: "",
    email: "",
  });

  const changeHandler = (event) => {
    setRegformData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const { name, branch, email, semester, college, phoneno } = regformData;
    if (!name || !branch || !semester || !college || !email || !phoneno) {
      return handleError("All fields are required.");
    }

    try {
      const savedData = await axios.post(
        // "http://localhost:5000/api/v1/regformCreate",
        "https://event-wallah-backend.onrender.com/api/v1/regformCreate",
        regformData
      );
      handleSuccess("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      handleError(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-white px-8 py-10 rounded-lg shadow-lg max-w-lg w-full mx-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Event Registration Form
        </h2>
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={regformData.name}
              onChange={changeHandler}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="branch"
              className="block text-gray-700 font-medium mb-1"
            >
              Branch
            </label>
            <input
              type="text"
              name="branch"
              id="branch"
              value={regformData.branch}
              onChange={changeHandler}
              placeholder="Enter your branch"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="college"
              className="block text-gray-700 font-medium mb-1"
            >
              College
            </label>
            <input
              type="text"
              name="college"
              id="college"
              value={regformData.college}
              onChange={changeHandler}
              placeholder="Enter your college"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="semester"
              className="block text-gray-700 font-medium mb-1"
            >
              Semester
            </label>
            <input
              type="text"
              name="semester"
              id="semester"
              value={regformData.semester}
              onChange={changeHandler}
              placeholder="Enter your semester"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="phoneno"
              className="block text-gray-700 font-medium mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneno"
              id="phoneno"
              value={regformData.phoneno}
              onChange={changeHandler}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={regformData.email}
              onChange={changeHandler}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegForm;
