// import React, { useState } from "react";
// import { handleError } from "../utils";
// import { ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { handleSuccess } from "../utils";
// import axios from "axios";

// const Eventform = () => {
//   const [eventData, seteventData] = useState({
//     eventname: "",
//     textarea: "",
//     date: "",
//     link: " ",
//   });

//   console.log(eventData);
//   const token = localStorage.getItem("token");
//   console.log("token ", token);

//   const navigate = useNavigate();

//   function changeHandler(event) {
//     seteventData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [event.target.name]: event.target.value,
//       };
//     });
//   }

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     console.log("finally prinitting the data", eventData);

//     // server side validation
//     // const { eventname, date, link, textarea } = eventData;
//     // if (!eventname || !date || !link || !textarea) {
//     //   console.log("Test");
//     //   return handleError("all filed required");
//     // }

//     try {
//       console.log("data ", eventData);
//       // const url = "http://localhost:5000/api/v1/event";
//       const url = "https://event-wallah-backend.onrender.com/api/v1/event";

      

//       const response = await axios.post(url, eventData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
//       console.log("response ", response);

//       // const result = await response.json();
//       // // navigate("/dashboard")
//       // console.log("result : ", result);
//       const { success, message, error } = response.data;
//       if (success) {
//         handleSuccess(message);
//         setTimeout(() => {
//           // navigate('/dashboard')
//           navigate("/dashboard", {
//             state: { eventData: response?.data?.response || eventData },
//           }); // assuming result.data contains the event details from the API response
//         }, 1000);
//       }
//     } catch (error) {
//       console.log("Error ", error);
//       handleError(error);
//     }
//   };

//   return (
//     <>
//       <div className="container bg-transparent px-20 py-6 rounded-lg max-w-[500px] shadow-lg shadow-gray-900 m-auto">
//       <video autoPlay muted loop className="video-background">
//         <source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//         <form onSubmit={submitHandler}>
//           <h1>create evenet</h1>

//           <div>
//             <label htmlFor="">eventName</label>
//             <input
//               type="text"
//               placeholder="enter event name"
//               value={eventData.eventname}
//               name="eventname"
//               onChange={changeHandler}
//             />
//           </div>
 
//           <label htmlFor="">event description</label>

//           <div className="bg-transparent ">
//             <textarea className="bg-transparent w-[340px] desc text-white"
//               type="text"
//               placeholder="enter Description name"
//               value={eventData.textarea}
//               name="textarea"
//               onChange={changeHandler}
//             />
//           </div>

//           <div>
//             <label htmlFor="">Date</label>
//             <input 
//               type="date"
//               value={eventData.date}
//               name="date"
//               onChange={changeHandler}
//             />
//           </div>

//           <div>
//             <label htmlFor="">Event-Poster</label>
//             <input
//               type="url"
//               placeholder="enter your link"
//               value={eventData.link}
//               name="link"
//               onChange={changeHandler}
//             />
//           </div>

//           <button>Create-Event</button>
//         </form>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Eventform;



// import React, { useState } from "react";
// import { handleError } from "../utils";
// import { ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { handleSuccess } from "../utils";
// import axios from "axios";

// const Eventform = () => {
//   const [eventData, seteventData] = useState({
//     eventname: "",
//     textarea: "",
//     date: "",
//     link: "", // This will store the Cloudinary image URL
//   });

//   console.log(eventData);
//   const token = localStorage.getItem("token");
//   console.log("token ", token);

//   const navigate = useNavigate();

//   // Change handler to update form fields
//   function changeHandler(event) {
//     seteventData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [event.target.name]: event.target.value,
//       };
//     });
//   }

  // Handle image upload and send the file to the backend
  // const handlePosterUpload = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append("image", file); // "image" must match the backend field name

  //   try {
  //     const res = await axios.post("https://event-wallah-backend.onrender.com/api/v1/upload-image", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     // Assuming the backend returns this key with the Cloudinary URL
  //     const imageUrl = res.data.imageUrl; 
  //     console.log("Uploaded Image URL:", imageUrl); // Log to check if the URL is received

  //     seteventData((prev) => ({ ...prev, link: imageUrl }));
  //     handleSuccess("Image uploaded successfully");
  //   } catch (error) {
  //     console.error("Image Upload Failed", error);
  //     handleError("Image upload failed");
  //   }
  // };

  

  // Submit handler for the event form
  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   console.log("finally printing the data", eventData);
  //   console.log("finally printing the data", eventData);

  //   // Debugging: Check if each field has a value
  //   console.log("Event Name:", eventData.eventname);
  //   console.log("Description:", eventData.textarea);
  //   console.log("Date:", eventData.date);
  //   console.log("Link (Image URL):", eventData.link);


  //   // Validation (server-side validation can be applied as well)
  //   if (!eventData.eventname || !eventData.date || !eventData.link || !eventData.textarea) {
  //     return handleError("All fields are required!");
  //   }

  //   try {
  //     const url = "https://event-wallah-backend.onrender.com/api/v1/event";

  //     const response = await axios.post(url, eventData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log("response ", response);

  //     const { success, message, error } = response.data;
  //     if (success) {
  //       handleSuccess(message);
  //       setTimeout(() => {
  //         navigate("/dashboard", {
  //           state: { eventData: response?.data?.response || eventData },
  //         });
  //       }, 1000);
  //     }
  //   } catch (error) {
  //     console.log("Error ", error);
  //     handleError(error);
  //   }
  // };


 
  

  import React, { useState } from "react";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Eventform = () => {
  const [image, setImage] = useState(null);

  const [eventData, seteventData] = useState({
    eventname: "",
    textarea: "",
    date: "",
    link: "", // image URL will go here
  });

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const changeHandler = (event) => {
    seteventData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("🔄 Form submitted");

    const file = event.target.poster?.files?.[0]; // name="poster" in input
    const { eventname, textarea, date } = eventData;

    if (!eventname || !date || !textarea) {
      handleError("All fields are required!");
      return;
    }

    let imageUrl = eventData.link;
    console.log("📷 Initial imageUrl from state:", imageUrl);

    // 🔼 Upload image if not already uploaded
    if (!imageUrl && file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axios.post(
          "https://event-wallah-backend.onrender.com/api/v1/upload-image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("🛠️ Full image upload response:", res.data);

        // ✅ Try to extract image URL
        imageUrl = res.data.imageUrl || res.data.url || res.data.data?.url;

        if (!imageUrl) {
          handleError("Image upload failed — invalid response from server.");
          return;
        }

        handleSuccess("Image uploaded successfully");
        console.log("✅ Image uploaded:", imageUrl);
      } catch (error) {
        console.error("❌ Image upload failed", error);
        handleError("Image upload failed");
        return;
      }
    }

    if (!imageUrl) {
      handleError("Please upload an image before submitting!");
      return;
    }

    const updatedEventData = {
      eventname,
      textarea,
      date,
      link: imageUrl,
    };

    try {
      const response = await axios.post(
        "https://event-wallah-backend.onrender.com/api/v1/event",
        updatedEventData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { success, message } = response.data;
      console.log("📨 Backend response:", response.data);

      if (success) {
        handleSuccess(message);
        console.log("✅ Event added. Redirecting...");
        setTimeout(() => {
          navigate("/dashboard", {
            state: { eventData: response?.data?.response || updatedEventData },
          });
        }, 1000);
      } else {
        handleError("Failed to create event");
      }
    } catch (error) {
      console.log("❌ Submit error", error);
      handleError("Event submission failed");
    }
  };
  
    return (
      <>
        <div className="container bg-transparent px-20 py-6 rounded-lg max-w-[500px] shadow-lg shadow-gray-900 m-auto">
          <video autoPlay muted loop className="video-background">
            <source
              src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <form onSubmit={submitHandler}>
            <h1 className="text-white text-xl font-semibold mb-4">Create Event</h1>
  
            <div>
              <label className="text-white">Event Name</label>
              <input
                type="text"
                placeholder="Enter event name"
                value={eventData.eventname}
                name="eventname"
                onChange={changeHandler}
                className="w-full p-2 rounded bg-white mb-4"
              />
            </div>
  
            <div>
              <label className="text-white">Event Description</label>
              <textarea
                className="bg-white w-full p-2 rounded mb-4"
                placeholder="Enter Description"
                value={eventData.textarea}
                name="textarea"
                onChange={changeHandler}
              />
            </div>
  
            <div>
              <label className="text-white">Date</label>
              <input
                type="date"
                value={eventData.date}
                name="date"
                onChange={changeHandler}
                className="w-full p-2 rounded bg-white mb-4"
              />
            </div>
  
            <div>
              <label className="text-white">Event Poster (Image)</label>
              <input
                type="file"
                accept="image/*"
                name="poster"
                onChange={imageHandler}
                className="w-full p-2 rounded bg-white mb-4"
              />
            </div>
  
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Create Event
            </button>
          </form>
          <ToastContainer />
        </div>
      </>
    );
  };
  
  export default Eventform;
  