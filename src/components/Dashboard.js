// import React, { useEffect, useState } from 'react'
// import Card from '../pages/Card'
// import ToggleButton from '../pages/ToggleButton'
// import { Link, useLocation } from 'react-router-dom'
// import Cookies from 'universal-cookie'
// // import dotenv from 'dotenv'

// // dotenv.config()

// const cookies = new Cookies()

// const Dashboard = () => {
//     const backendURL = 'https://eventoz-backend.onrender.com/'
//     const [events, setEvents] = useState([])
//     const [isCompleted, setIsCompleted] = useState(false)

//     const location = useLocation();
//     const { eventData } = location.state || {}; // Ensure destructuring is correct

//     const [evendata , seteventData]=useState(eventData)

//     console.log("Event Data in Dashboard: ", eventData); // Add this to see if eventData is received

//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const token = cookies.get("TOKEN");
//                 const response = await fetch(`${backendURL}myevents`, {
//                     method: 'GET',
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 });

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch events');
//                 }

//                 const data = await response.json();

//                 // Fetch registration and attendance counts for each event
//                 const eventsWithCounts = await Promise.all(data.events.map(async (event) => {
//                     // Fetch registration count
//                     const registrationResponse = await fetch(`${backendURL}event/${event.id}/registrations`, {
//                         method: 'GET',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         }
//                     });

//                     const registrationCount = registrationResponse.ok
//                         ? (await registrationResponse.json()).registrationCount
//                         : 0;

//                     // Fetch attendance count
//                     const attendedResponse = await fetch(`${backendURL}event/${event.id}/attended`, {
//                         method: 'GET',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         }
//                     });

//                     const attendedCount = attendedResponse.ok
//                         ? (await attendedResponse.json()).attendedCount
//                         : 0;

//                     // Combine the event data with the counts
//                     return { ...event, registrationCount, attendedCount };
//                 }));

//                 setEvents(eventsWithCounts);

//             } catch (error) {
//                 console.error('Error fetching events:', error);
//             }
//         };

//         fetchEvents();
//     }, []);

//     const filterEvents = () => {
//         const now = new Date()
//         if (isCompleted) {
//             return events.filter(event => new Date(event.date) < now)
//         } else {
//             return events.filter(event => new Date(event.date) >= now)
//         }
//     }

//     const handleToggle = (checked) => {
//         setIsCompleted(checked)
//     }

//     const filteredEvents = filterEvents()

//     return (

//         <>

//             <div className='bg-black min-h-screen'>

//                 <div className='flex flex-wrap justify-evenly py-14 gap-20 px-10'>
//                     <h1 className='text-white text-2xl'>Welcome Organizer!!</h1>
//                     <ToggleButton isChecked={isCompleted} onToggle={handleToggle} />
//                 </div>
//                 <div className='flex flex-wrap justify-center p-8 gap-10'>
//                     {filteredEvents.length === 0 && (
//                         <div className='text-white'>
//                             {isCompleted ? 'No Completed Events to show.' : 'No Upcoming Events to show.'}
//                         </div>
//                     )}

//                     {evendata.map(event => (
//                         <Link to={`/card/${event.id}`} key={event.id}>
//                          <Card event={event} />
//                         </Link>
//                     ))}

//              {/* {eventData ? (
//                 <div>
//                     <p><strong>Event Name:</strong> {eventData.eventname}</p>
//                     <p><strong>Description:</strong> {eventData.textarea}</p>
//                     <p><strong>Date:</strong> {eventData.date}</p>
//                     <p><strong>Link:</strong> <a href={eventData.link}>{eventData.link}</a></p>
//                 </div>
//             ) : (
//                 <p>No event data available</p>
//             )} */}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Dashboard

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Dashboard = () => {
//     const location = useLocation();
//     const { eventData } = location.state || {}; // Ensure destructuring is correct

//     console.log("Event Data in Dashboard: ", eventData); // Add this to see if eventData is received

//     return (
//         <div className='container'>
//             <h1 className='text-center text-4xl'>Event Dashboard</h1>
//             {eventData ? (
//                 <div className='h-[200px] w-[300px] bg-red-400'>
//                     <p><strong>Link:</strong> <a href={eventData.link}>{eventData.link}</a></p>

//                     <p><strong>Event Name:</strong> {eventData.eventname}</p>
//                     <p><strong>Description:</strong> {eventData.textarea}</p>
//                     <p><strong>Date:</strong> {eventData.date}</p>
//                 </div>
//             ) : (
//                 <p>No event data available</p>
//             )}
//         </div>
//     );
// }

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = ({ isHome }) => {
  const navigate = useNavigate();
  const [data, setEventData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const Token = localStorage.getItem("token");

  async function getData() {
    try {
      const response = await axios.get(
        "https://event-wallah-backend.onrender.com/api/v1/eventdata",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      setEventData(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const categorizeEvents = (events) => {
    const now = new Date();
    const upcoming = [];
    const ongoing = [];
    const completed = [];

    events.forEach((event) => {
      const eventDate = new Date(event.date);
      const diffInMs = eventDate - now;
      const diffInHours = diffInMs / (1000 * 60 * 60);

      if (diffInHours > 24) {
        upcoming.push(event);
      } else if (diffInHours > 0 && diffInHours <= 24) {
        ongoing.push(event);
      } else {
        completed.push(event);
      }
    });

    return { upcoming, ongoing, completed };
  };

  useEffect(() => {
    getData();
  }, []);

  const { upcoming, ongoing, completed } = categorizeEvents(data);
  let displayEvents = data;

  if (activeTab === "upcoming") displayEvents = upcoming;
  else if (activeTab === "ongoing") displayEvents = ongoing;
  else if (activeTab === "completed") displayEvents = completed;

  return (
    <>
      <video autoPlay muted loop className="video-background fixed -z-10 w-full h-full object-cover">
        <source
          src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <h1 className="text-center mb-6 text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-4">
        ALL-User-Data
      </h1>

      <div className="flex justify-center mb-4">
        <Link to="/eventform">
          <button className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
            Let's Create Event
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 px-4">
        {["all", "upcoming", "ongoing", "completed"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-3 sm:px-4 rounded-lg text-white font-semibold text-sm sm:text-base ${
              activeTab === tab ? "bg-blue-600" : "bg-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4 sm:gap-6 flex-wrap px-2 sm:px-6 mb-10">
        {displayEvents.length > 0 ? (
          displayEvents.map((ele) => (
            <div
              onClick={() =>
                navigate("/eventDetails", { state: { eventData: ele } })
              }
              key={ele._id}
              className="w-full sm:w-[250px] md:w-[280px] lg:w-[300px] bg-black bg-opacity-40 p-3 sm:p-4 rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg shadow-white"
            >
              <img
                src={ele.link}
                alt={`${ele.eventname}-event`}
                className="w-full h-[180px] sm:h-[200px] object-cover rounded-md mb-3"
              />
              <h1 className="text-white text-lg font-semibold">
                <span className="text-blue-400">Event: </span>
                {ele.eventname}
              </h1>
              <p className="text-blue-300 text-sm mt-1">Date: {ele.date}</p>
              <p className="text-blue-300 text-sm mt-1">Desc: {ele.textarea}</p>
              <p className="text-blue-300 text-sm mt-1">
                Registered Users: {ele?.user.length}
              </p>
            </div>
          ))
        ) : (
          <p className="text-white text-center text-lg">
            No events in this category
          </p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
