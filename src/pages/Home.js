// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { handleSuccess } from '../utils';

// const Home = () => {
//   const [loggedInUser,setloggedInUser]=useState("");
//   const navigate=useNavigate();

//   useEffect(()=>
//   {
//     setloggedInUser(localStorage.getItem("loggedInUser"))
//   },[]);

//   const handlelogout=(e)=>
//   {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     handleSuccess("logged-out");
//     setTimeout(() => {
//       navigate('/login')
//     }, 1000);
//   }

//   return (
//     <div>

//       <div className='flex columns-1'>
//        <h1 className='text-5xl text-red-600'> Hey{loggedInUser} You Succesfully Login! </h1> 


//       </div>
    
//       <button onClick={handlelogout}>Log-Out</button>
//       <ToastContainer/>

//     </div>
//   )
// }

// export default Home


// // import React, { useEffect, useState } from 'react'
// // import { v4 as uuidv4 } from 'uuid'
// // import { toast, ToastContainer } from 'react-toastify'
// // import 'react-toastify/dist/ReactToastify.css';
// // import { useNavigate } from 'react-router-dom';
// // import Cookies from "universal-cookie";
// // // import dotenv from 'dotenv'

// // // dotenv.config()

// // const cookies = new Cookies();


// // const CreateEvent = () => {
// //     const backendURL = 'https://eventoz-backend.onrender.com/'
// //     const navigate = useNavigate()
// //     const [form, setform] = useState({ eventName: '', eventDesc: '', date: '', banner: '' })


// //     const handleChange = (e) => {
// //         setform({ ...form, [e.target.name]: e.target.value })
// //      }

// //      const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         if (form.eventName && form.banner && form.date && form.eventDesc) {
// //             const token = cookies.get("TOKEN");
// //             const eventDetails = { ...form, id: uuidv4() };

// //             const response = await fetch(`${backendURL}createevent`, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${token}`,
// //                 },
// //                 body: JSON.stringify(eventDetails), // Send the correct event data
// //             });

// //             setform({ eventName: '', eventDesc: '', date: '', banner: '' });

// //             if (response.ok) {
// //                 toast('Event Created Successfully!!', {
// //                     position: "bottom-right",
// //                     autoClose: 2000,
// //                     hideProgressBar: false,
// //                     closeOnClick: true,
// //                     pauseOnHover: true,
// //                     draggable: true,
// //                     progress: undefined,
// //                     theme: "dark",
// //                 });

// //                 setTimeout(() => {
// //                     navigate('/dashboard');
// //                 }, 3000);
// //             } else {
// //                 toast('Error Occurred!!', {
// //                     position: "bottom-right",
// //                     autoClose: 2000,
// //                     hideProgressBar: false,
// //                     closeOnClick: true,
// //                     pauseOnHover: true,
// //                     draggable: true,
// //                     progress: undefined,
// //                     theme: "dark",
// //                 });
// //             }
// //         } else {
// //             toast('Fill all the details!!', {
// //                 position: "bottom-right",
// //                 autoClose: 2000,
// //                 hideProgressBar: false,
// //                 closeOnClick: true,
// //                 pauseOnHover: true,
// //                 draggable: true,
// //                 progress: undefined,
// //                 theme: "dark",
// //             });
// //         }
// //      };




// //     return (
// //         <>
// //             <ToastContainer
// //                 position="top-right"
// //                 autoClose={2000}
// //                 hideProgressBar={false}
// //                 newestOnTop={false}
// //                 closeOnClick
// //                 rtl={false}
// //                 pauseOnFocusLoss
// //                 draggable
// //                 pauseOnHover
// //                 theme="light"
// //             />
// //             <div className='flex flex-col pt-14 items-center min-h-screen  bg-black'>
// //                 <div className='flex justify-center font-bold'>
// //                     <h1 className='text-3xl uppercase text-white'>Create Event</h1>
// //                 </div>
// //                 <form className='flex flex-col justify-center items-center gap-4 pt-10 w-full sm:px-36 px-14'>
// //                     <label htmlFor="eventName" className='w-full text-white font-bold'>Event Name:</label>
// //                     <input onChange={handleChange} value={form.eventName} type="text" name="eventName" id="eventName" className='bg-slate-600 hover:bg-slate-500 w-full ps-5 rounded-lg p-2 text-white' />
// //                     <label htmlFor="eventDesc" className='w-full text-white font-bold'>Event Description:</label>
// //                     <textarea onChange={handleChange} value={form.eventDesc} type="text" name="eventDesc" id="eventDesc" className='bg-slate-600 hover:bg-slate-500 w-full ps-5 rounded-lg p-2 text-white' />

// //                     <label htmlFor="dateTime" className='w-full text-white font-bold'>Enter Date:</label>
// //                     <input onChange={handleChange} value={form.date} type="datetime-local" name="date" id="dateTime" className='bg-slate-600 hover:bg-slate-500 w-full ps-5 rounded-lg p-2 text-white' />
// //                     <label htmlFor="banner" className='w-full text-white font-bold'>Upload Event Banner:</label>
// //                     <input onChange={handleChange} value={form.banner} type="url" name="banner" id="banner" className='bg-slate-600 hover:bg-slate-500 w-full ps-5 rounded-lg p-2 text-white' />
// //                     <button onClick={handleSubmit} className="text-white w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create Event</button>
// //                 </form>
// //             </div>
// //         </>
// //     )
// // }

// // export default CreateEvent


import React from 'react';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Home = () => {
  useGSAP(() => {
    gsap.to("h1", {
      x: 250,
      duration: 2,
      delay: 1
    });
  });

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='relative z-10 flex flex-col items-center justify-center h-full p-4 text-center text-white bg-black/50'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif p-4'>
          Hey Lets Create Event with <br />
          <span className='text-orange-900'>EventWalllh !</span>
        </h1>

        <div className='mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center'>
          <a href="/signup" className='text-2xl sm:text-3xl px-6 py-2 bg-orange-700 rounded-md hover:bg-orange-800 transition'>
            Register
          </a>
          <a href="/login" className='text-2xl sm:text-3xl px-6 py-2 bg-gray-700 rounded-md hover:bg-gray-800 transition'>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
