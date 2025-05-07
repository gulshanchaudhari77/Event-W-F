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


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';

const Navbar = ({ isHome }) => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("eventData"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess("logged-out");
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <nav className="bg-black p-4 text-white">
      <div className="mx-auto flex justify-between items-center max-w-7xl">
        <a href="/home" className="text-xl font-semibold">
          EventWalllh
        </a>

        {/* Hamburger button */}
        <button
          className="sm:hidden text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-4 items-center">
          {!isHome && (
            <a href="/dashboard" className="hover:bg-gray-700 px-3 py-2 rounded">
              Dashboard
            </a>
          )}
          {!isHome && (
            <a href="/eventform" className="hover:bg-gray-700 px-3 py-2 rounded">
              Create Event
            </a>
          )}
          <button
            onClick={handleLogout}
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-2 flex flex-col space-y-2 px-4">
          {!isHome && (
            <a href="/dashboard" className="hover:bg-gray-700 px-3 py-2 rounded">
              Dashboard
            </a>
          )}
          {!isHome && (
            <a href="/eventform" className="hover:bg-gray-700 px-3 py-2 rounded">
              Create Event
            </a>
          )}
          <button
            onClick={handleLogout}
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
