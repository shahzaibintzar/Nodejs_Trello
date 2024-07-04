// // pages/profile.js
// import React, { useRef } from "react";
// import html2canvas from "html2canvas";

// const About = () => {
//   const profileRef = useRef();

//   const handleTakeScreenshot = () => {
//     if (profileRef.current) {
//       html2canvas(profileRef.current).then((canvas) => {
//         const imgData = canvas.toDataURL("image/png");
//         const link = document.createElement("a");
//         link.href = imgData;
//         link.download = "profile-screenshot.png";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       });
//     }
//   };

//   return (
//     <div>
//       <div
//         ref={profileRef}
//         style={{ padding: "20px", border: "1px solid #ccc" }}
//       >
//         <h1>John Doe</h1>
//         <p>Email: john.doe@example.com</p>
//         <p>Phone: (123) 456-7890</p>
//         <p>Bio: Software Developer at XYZ Company</p>
//       </div>
//       <button onClick={handleTakeScreenshot} style={{ marginTop: "20px" }}>
//         Take Screenshot
//       </button>
//     </div>
//   );
// };

// export default About;

import React from "react";
import DynamicInputFields from "../DynamicInputFields";
import InputArrow from "../InputField";

export default function About() {
  return (
    <div>
      <h1>Dynamic Input Fields</h1>
      <DynamicInputFields />
      <div className="mt-10">
        <InputArrow />
      </div>
    </div>
  );
}
