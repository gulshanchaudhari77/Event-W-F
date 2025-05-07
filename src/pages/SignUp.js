import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import { handleError, handleSuccess } from '../utils';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: " ",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  function changehandler(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    });
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const { name, email, password } = formData;
    if (!name || !email || !password) {
      return handleError('name, email and password are required')
    }

    try {
      const url = 'https://event-wallah-backend.onrender.com/api/v1/signup'
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <div className='relative flex justify-center items-center min-h-screen bg-black overflow-hidden'>

      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='relative z-10 w-full max-w-md bg-black/70 backdrop-blur-md p-4 sm:p-8 rounded-lg shadow-lg'>
        <form onSubmit={submitHandler}>
          <h1 className='text-4xl sm:text-6xl mb-8 font-bold text-white text-center'>Sign-Up</h1>

          <div className="mb-4">
            <label className='text-white block mb-1'>Name</label>
            <input
              type="text"
              placeholder='Enter name'
              name='name'
              onChange={changehandler}
              value={formData.name}
              className='w-full px-3 py-2 rounded bg-white/80 focus:outline-none'
            />
          </div>

          <div className="mb-4">
            <label className='text-white block mb-1'>Email</label>
            <input
              type="text"
              placeholder='Enter email'
              name='email'
              onChange={changehandler}
              value={formData.email}
              className='w-full px-3 py-2 rounded bg-white/80 focus:outline-none'
            />
          </div>

          <div className="mb-6">
            <label className='text-white block mb-1'>Password</label>
            <input
              type="password"
              placeholder='Enter your password'
              name='password'
              onChange={changehandler}
              value={formData.password}
              className='w-full px-3 py-2 rounded bg-white/80 focus:outline-none'
            />
          </div>

          <div className='text-center mb-4'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-all'>
              Sign-Up
            </button>
          </div>

          <p className='text-white text-center'>
            Already have an account? <Link to='/login' className='text-blue-400 font-bold'>Login</Link>
          </p>
        </form>

        <ToastContainer />
      </div>
    </div>
  )
}

export default SignUp
