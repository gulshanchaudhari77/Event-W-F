import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils";
import axios from "axios";
import ExcelJs from "exceljs"; // Importing exceljs
import { saveAs } from "file-saver"; // Importing file-saver
import { QRCodeCanvas } from "qrcode.react";


export const EventDetails = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  const { eventData } = location?.state;
  console.log("Event Data ", eventData);

  const handleCopyLink = async (e) => {
    try {
      // const linkUrl = `http://localhost:3000/regform/${e}`;
      // const linkUrl = `https://event-wallah.vercel.app/regform/${e}`;
      const linkUrl = `https://event-w-f.vercel.app/regform/${e}`;


      console.log("Click handler", linkUrl);
      await navigator.clipboard.writeText(linkUrl);
      handleSuccess("Link Copied");
    } catch (err) {
      console.log("Error ", err);
      toast.error(err);
    }
  };

  const getRegUserData = async () => {
    try {
      // const url = "http://localhost:5000/api/v1/getAllRegisterUser";
      const url = "https://event-wallah-backend.onrender.com/api/v1/getAllRegisterUser";

      const data = await axios.post(
        url,
        { eventId: eventData?._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Data of reguser: ", data);
      setUsers(data.data.user.user);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  useEffect(() => {
    if (eventData) getRegUserData();
  }, []);

  const exportToExcel = async () => {
    const workbook = new ExcelJs.Workbook();
    const worksheet = workbook.addWorksheet("Registered Users");

    worksheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Branch", key: "branch", width: 20 },
      { header: "College", key: "college", width: 25 },
      { header: "Semester", key: "semester", width: 15 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone Number", key: "phoneno", width: 20 },
    ];

    users.forEach((user) => {
      worksheet.addRow({
        name: user.name,
        branch: user.branch,
        college: user.college,
        semester: user.semester,
        email: user.email,
        phoneno: user.phoneno,
      });
    });

    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, `Registered_Users_${eventData.eventname}.xlsx`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl w-full mx-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <img
            src={eventData.link}
            alt={`${eventData.eventname}-event`}
            className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-md"
          />

          <div className="text-center lg:text-left text-white space-y-4 w-full lg:w-1/2">
            <h1 className="text-3xl font-bold">{eventData.eventname}</h1>
            <p className="text-lg">
              <span className="font-semibold">Date:</span> {eventData.date}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Description:</span> {eventData.textarea}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Registered Users:</span> {users.length}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
  <button
    onClick={() => handleCopyLink(eventData?._id)}
    className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-white shadow-md w-full sm:w-auto"
  >
    Copy Link
  </button>
  <button
    onClick={exportToExcel}
    className="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-500 text-white shadow-md w-full sm:w-auto"
  >
    Export to Excel
  </button>
</div>

{/* QR Code Section */}
<div className="mt-6 text-center">
  <p className="text-white mb-2 font-semibold">Scan to Register</p>
  <div className="inline-block bg-white p-2 rounded-md shadow-lg">
    <QRCodeCanvas
      value={`https://event-w-f.vercel.app/regform/${eventData?._id}`}
      size={180}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"H"}
      includeMargin={true}
    />
  </div>
</div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
