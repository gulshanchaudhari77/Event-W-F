// import React from 'react'

// const Card = ({ event }) => {

//     console.log("even tin carc component",event);
//     return (
//         <div>
            
//             <div className='h-100 w-56 p-2 rounded-3xl border background_color card_border hover:scale-110 transition-all text-white'>

//                 <img src={event.link} alt='banner' className='size-fit border-b rounded-t-3xl h-32 w-56 background_color card_border pb-2' />

//                 <h2 className='text-center uppercase p-2 background_color'>{event.eventName}</h2>

//                 <p className='text-xs px-1 background_color'>{event.textarea}</p>

//                 <h3 className='text-center uppercase p-2 background_color'>{new Date(event.date).toLocaleString()}</h3>
//                 <h2 className='text-center uppercase p-1 background_color'>Total Participant Registered: {event.registrationCount}</h2>
//                 <h2 className='text-center uppercase p-1 background_color'>Total Participant Attended: {event.attendedCount}</h2>


//             </div>
//         </div>
//     )
// }

// export default Card


import React from 'react'

const Card = ({ event }) => {
    
    console.log("Event in Card component:", event); // Debug: Check if event data is received

    // Ensure the event fields are not undefined
    const {
        link = 'https://via.placeholder.com/150', // Use a placeholder image if link is missing
        eventName = 'teacher day',
        textarea = 'No Description',
        date = new Date(),
        registrationCount = 0,
        attendedCount = 0
    } = event || {};

    return (
        <div className='h-100 w-56 p-2 rounded-3xl border background_color card_border hover:scale-110 transition-all text-white'>
            <img src={link} alt='banner' className='size-fit border-b rounded-t-3xl h-32 w-56 background_color card_border pb-2' />

            <h2 className='text-center uppercase p-2 background_color'>{eventName}</h2>

            <p className='text-xs px-1 background_color'>{textarea}</p>

            <h3 className='text-center uppercase p-2 background_color'>{new Date(date).toLocaleString()}</h3>
            <h2 className='text-center uppercase p-1 background_color'>Total Participants Registered: {registrationCount}</h2>
            <h2 className='text-center uppercase p-1 background_color'>Total Participants Attended: {attendedCount}</h2>
        </div>
    );
}

export default Card;
