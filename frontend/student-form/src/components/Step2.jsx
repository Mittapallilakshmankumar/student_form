// import React, { useState } from "react";
// import "./StudentForm.css";

// function Step2({ nextStep, prevStep }) {

// const [collegeCode,setCollegeCode] = useState("");
// const [course,setCourse] = useState("");
// const [year,setYear] = useState("");
// const [studyYear,setStudyYear] = useState("");
// const [cgpa,setCgpa] = useState("");

// const handleNext = () => {

// if(
// collegeCode === "" ||
// course === "" ||
// year === "" ||
// studyYear === "" ||
// cgpa === ""
// ){
// alert("Please fill all fields");
// return;
// }

// nextStep();

// };

// return (

// <div className="page">

// <div className="form-card">

// <div className="form-header">
// <div className="step-circle-green">2</div>
// <h2>Academic Information</h2>
// </div>

// <div className="form-grid">

// <div className="form-field">
// <label>College Code <span>*</span></label>
// <input
// placeholder="Enter college code"
// value={collegeCode}
// onChange={(e)=>setCollegeCode(e.target.value)}
// />
// </div>

// <div className="form-field">
// <label>Department / Course <span>*</span></label>

// <select
// value={course}
// onChange={(e)=>setCourse(e.target.value)}
// >
// <option value="">Select Course</option>
// <option>B.Tech</option>
// <option>B.Sc</option>
// <option>B.Com</option>
// <option>BBA</option>
// <option>BA</option>
// <option>M.Tech</option>
// <option>M.Sc</option>
// <option>MCA</option>
// <option>MBA</option>
// <option>Other</option>
// </select>

// </div>

// <div className="form-field">
// <label>Academic Year <span>*</span></label>

// <select
// value={year}
// onChange={(e)=>setYear(e.target.value)}
// >
// <option value="">Select Academic Year</option>
// <option>2023-2024</option>
// <option>2024-2025</option>
// <option>2025-2026</option>
// </select>

// </div>

// <div className="form-field">
// <label>Year of Study <span>*</span></label>

// <select
// value={studyYear}
// onChange={(e)=>setStudyYear(e.target.value)}
// >
// <option value="">Select Year of Study</option>
// <option>1st Year</option>
// <option>2nd Year</option>
// <option>3rd Year</option>
// <option>4th Year</option>
// <option>5th Year</option>
// </select>

// </div>

// <div className="form-field full-width">
// <label>Current CGPA / Percentage <span>*</span></label>

// <select
// value={cgpa}
// onChange={(e)=>setCgpa(e.target.value)}
// >
// <option value="">Select CGPA / Percentage Range</option>
// <option>Below 60%</option>
// <option>60% - 70%</option>
// <option>70% - 80%</option>
// <option>80% - 90%</option>
// <option>Above 90%</option>
// </select>

// </div>

// </div>

// <div className="button-area">



// <button className="next-btn" onClick={handleNext}>
// Next
// </button>

// </div>

// </div>

// </div>

// );

// }

// export default Step2;



import React, { useState } from "react";
import "./StudentForm.css";
import axios from "axios";

function Step2({ nextStep, prevStep }) {

const [collegeCode,setCollegeCode] = useState("");
const [course,setCourse] = useState("");
const [year,setYear] = useState("");
const [studyYear,setStudyYear] = useState("");
const [cgpa,setCgpa] = useState("");

const handleNext = async () => {
const studentId = localStorage.getItem("student_id"); // get student id

if(
collegeCode === "" ||
course === "" ||
year === "" ||
studyYear === "" ||
cgpa === ""
){
alert("Please fill all fields");
return;
}

try{

const response = await axios.post(
"http://127.0.0.1:8000/api/academic/",
{
student: studentId,
college_code: collegeCode,
course: course,
academic_year: year,
study_year: studyYear,
cgpa: cgpa
}
);

console.log(response.data);

alert("Student Data Saved Successfully");

nextStep();

}catch(error){

console.error(error.response?.data);

alert("Error saving data");

}

};

return (

<div className="page">

<div className="form-card">

<div className="form-header">
<div className="step-circle-green">2</div>
<h2>Academic Information</h2>
</div>

<div className="form-grid">

<div className="form-field">
<label>College Code <span>*</span></label>
<input
placeholder="Enter college code"
value={collegeCode}
onChange={(e)=>setCollegeCode(e.target.value)}
/>
</div>

<div className="form-field">
<label>Department / Course <span>*</span></label>

<select
value={course}
onChange={(e)=>setCourse(e.target.value)}
>
<option value="">Select Course</option>
<option>B.Tech</option>
<option>B.Sc</option>
<option>B.Com</option>
<option>BBA</option>
<option>BA</option>
<option>M.Tech</option>
<option>M.Sc</option>
<option>MCA</option>
<option>MBA</option>
<option>Other</option>
</select>

</div>

<div className="form-field">
<label>Academic Year <span>*</span></label>

<select
value={year}
onChange={(e)=>setYear(e.target.value)}
>
<option value="">Select Academic Year</option>
<option>2023-2024</option>
<option>2024-2025</option>
<option>2025-2026</option>
</select>

</div>

<div className="form-field">
<label>Year of Study <span>*</span></label>

<select
value={studyYear}
onChange={(e)=>setStudyYear(e.target.value)}
>
<option value="">Select Year of Study</option>
<option>1st Year</option>
<option>2nd Year</option>
<option>3rd Year</option>
<option>4th Year</option>
<option>5th Year</option>
</select>

</div>

<div className="form-field full-width">
<label>Current CGPA / Percentage <span>*</span></label>

<select
value={cgpa}
onChange={(e)=>setCgpa(e.target.value)}
>
<option value="">Select CGPA / Percentage Range</option>
<option>Below 60%</option>
<option>60% - 70%</option>
<option>70% - 80%</option>
<option>80% - 90%</option>
<option>Above 90%</option>
</select>

</div>

</div>

<div className="button-area">

<button className="next-btn" onClick={handleNext}>
Next
</button>

</div>

</div>

</div>

);

}

export default Step2;