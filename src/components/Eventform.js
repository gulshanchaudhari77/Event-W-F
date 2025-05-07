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


 
  

  import React, { useState, useEffect } from "react";
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
    image: "", // Image URL
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // For input field change
  const changeHandler = (event) => {
    seteventData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

 // ✅ Submit form and handle image upload within the same function
const submitHandler = async (event) => {
  event.preventDefault();

  const { eventname, textarea, date, link } = eventData;

  // Check if an image is uploaded first
  if (!eventData.link) {
    // Image upload part
    const file = event.target.image.files[0];
    if (!file) {
      handleError("Please upload an image before submitting!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      // Upload the image
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

      // Check if the image upload is successful
      if (res.data.success) {
        const imageUrl = res.data.imageUrl;
        seteventData((prev) => ({ ...prev, link: imageUrl }));
        handleSuccess("Image uploaded successfully");

        // Now submit the form with the uploaded image link
        if (!eventname || !date || !textarea || !imageUrl) {
          handleError("All fields are required!");
          return;
        }

        // Submit event data
        const url = "https://event-wallah-backend.onrender.com/api/v1/event";
        const response = await axios.post(url, eventData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const { success, message } = response.data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/dashboard", {
              state: { eventData: response?.data?.response || eventData },
            });
          }, 1000);
        }
      } else {
        handleError("Image upload failed");
      }
    } catch (error) {
      console.error("Error during image upload", error);
      handleError("Image upload failed");
    }
  } else {
    // If image already uploaded, submit directly
    if (!eventname || !date || !textarea || !link) {
      return handleError("All fields are required!");
    }

    try {
      const url = "https://event-wallah-backend.onrender.com/api/v1/event";
      const response = await axios.post(url, eventData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const { success, message } = response.data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/dashboard", {
            state: { eventData: response?.data?.response || eventData },
          });
        }, 1000);
      }
    } catch (error) {
      console.log("Submit Error", error);
      handleError("An error occurred while submitting the event");
    }
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
          <h1>Create Event</h1>

          <div>
            <label htmlFor="">Event Name</label>
            <input
              type="text"
              placeholder="Enter event name"
              value={eventData.eventname}
              name="eventname"
              onChange={changeHandler}
            />
          </div>

          <label htmlFor="">Event Description</label>

          <div className="bg-transparent ">
            <textarea
              className="bg-transparent w-[340px] desc text-white"
              placeholder="Enter Description"
              value={eventData.textarea}
              name="textarea"
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="">Date</label>
            <input
              type="date"
              value={eventData.date}
              name="date"
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="">Event Poster (Image)</label>
            <input
              type="file"
              accept="image/*"
              name="poster"
              onChange={imageHandler}
            />
          </div>

          <button type="submit" onClick={submitHandler} >Create Event</button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Eventform;
