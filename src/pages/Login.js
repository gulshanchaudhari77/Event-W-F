import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import { handleError, handleSuccess } from '../utils';

const Login = ({user}) => {


    const[formData,setFormData]=useState(
        {
          password:"",
        email:"",
        
      });
      console.log(formData)

      const navigate=useNavigate();
    
      function changehandler(event){
        setFormData(prevFormData=>{
          return{
            ...prevFormData,
            [event.target.name]:event.target.value
          }
        });
        
      }

      const submitHandler = async(event) => {
        event.preventDefault();
        console.log("Finally printing the data");
        console.log(formData);
    
        // Server-side validation
        const { email, password } = formData;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
    
        try {
            // const url = 'http://localhost:5000/api/v1/login'
            const url = 'https://event-wallah-backend.onrender.com/api/v1/login'
    
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            const result = await response.json();
            const { success, message, jwtToken, name, error, userId } = result;
    
            if (success) {
                handleSuccess(message);
                localStorage.setItem("token", jwtToken);
                localStorage.setItem("loggedInUser", name);
                localStorage.setItem("id", userId);  // Store user ID correctly
    
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
    
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    
      


    
  return (
    <div className='min-h-screen flex flex-col items-center justify-center relative px-4'>
    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
      <source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  
    <div className='bg-black bg-opacity-70 backdrop-blur-md w-full max-w-sm rounded-lg px-6 py-8 shadow-lg'>
      <form onSubmit={submitHandler}>
        <h1 className='text-4xl md:text-6xl mb-8 font-bold text-white text-center'>Log-iN</h1>
  
        <div className='mb-4'>
          <label className='block text-white mb-1'>Email</label>
          <input
            type="text"
            placeholder='Enter email'
            name='email'
            onChange={changehandler}
            value={formData.email}
            className='w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label className='block text-white mb-1'>Password</label>
          <input
            type="password"
            placeholder='Enter your password'
            name='password'
            onChange={changehandler}
            value={formData.password}
            className='w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
  
        <div className='text-center mt-6'>
          <button className='bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition'>LOGIN</button>
        </div>
  
        <p className='text-white text-center mt-4'>
          Don’t have an account? <Link to='/signup' className='text-blue-400 font-bold'>Signup</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  </div>
  
  )
}

export default Login


