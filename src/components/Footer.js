import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className=' mt-28 h-[40px] text-center fixed w-full'>

        <div>
           <Link to="https://www.linkedin.com/in/gulshan-chaudhari-5750b6239/"><h1 className='text-4xl text-white mb-2'>Developed by  <span >Gulshan</span>  </h1></Link> 
        </div>
        
    </div>
  )
}

export default Footer