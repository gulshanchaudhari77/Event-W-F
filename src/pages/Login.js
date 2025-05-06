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
    <div className='containerlogin'>
      <video autoPlay muted loop className="video-background">
        <source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className= 'container bg-transparent px-20 py-6 rounded-lg max-w-[500px] shadow-lg shadow-gray-900  flex justify-center'>
        
       <form onSubmit={submitHandler}  >

       <h1 className='text-6xl mb-10 font-bold text-white'>Log-iN</h1>
        
        <div>
            <label htmlFor="" className='text-white'>Email</label>
            <input type="text"
             placeholder='enter name'
              name='email' 
              onChange={changehandler}
              value={formData.email}
 />
        </div>
        <div>
            <label htmlFor="" className='text-white'>Password</label>
            <input type="password" 
            placeholder='enter your password'
             name='password'              
             onChange={changehandler}
             value={formData.password}
 />
        </div>
        <div className='text-center bg-black mt-4 outline-white'>
        <button className='text-center'>LOGIN</button> <br />

        </div>
        <span className='text-white'>already have an account ? <Link to='/signup' className='text-white font-bold text-blue-500'>signup</Link> </span>
       </form>
       <ToastContainer/>
        
    </div>
    </div>
  )
}

export default Login


