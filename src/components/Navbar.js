import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';

const Navbar = ({isHome}) => {
  const [loggedInUser,setloggedInUser]=useState("");
  const navigate=useNavigate();

  useEffect(()=>
  {
    setloggedInUser(localStorage.getItem("eventData"))
  },[]);

  const handlelogout=(e)=>
  {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    
    handleSuccess("logged-out");
    setTimeout(() => {
      navigate('/login')
    }, 1000);
  }
  return (
    <nav className=" p-2">
      <div className=" mx-auto flex justify-between  items-center">
        {/* Left side: Event Name */}
         <a href='/home' className="text-white text-xl font-semibold p-5 ml-6 font-">
          Event Name
        </a>
        <Link/>

        {/* Right side: Dashboard, Event Name, Logout */}
        <div className=" flex space-x-4 p-5">
            {!isHome &&(
          <a href="/dashboard" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Dashboard
          </a>)}
         {!isHome &&(
          <a href="/eventform" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Event Name
          </a>
         )}
            
           
          <a href="#logo" onClick={handlelogout} className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Logout
          </a>

        </div>
            
      </div>
    </nav>
  );
};

export default Navbar;
