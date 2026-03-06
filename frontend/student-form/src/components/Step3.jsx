// import React, { useState } from "react";
// import "./StudentForm.css";

// function Step3({ nextStep }) {

// const [reasons,setReasons] = useState([]);
// const [interests,setInterests] = useState([]);
// const [skills,setSkills] = useState([]);

// const handleCheckbox = (value, setState, state) => {

// if(state.includes(value)){
// setState(state.filter(item => item !== value));
// }else{
// setState([...state,value]);
// }

// };

// const handleNext = () => {
// nextStep();
// };

// return(

// <div className="page">

// <div className="form-card">

// <div className="form-header">
// <div className="step-circle-purple">3</div>
// <h2>Course Interest & Skills</h2>
// </div>


// {/* Reason Section */}

// <h4>Reason for Choosing This Course (Multiple Selection Allowed)</h4>

// <div className="checkbox-grid">

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Personal Interest",setReasons,reasons)} />
// Personal Interest
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Family Suggestion",setReasons,reasons)} />
// Family Suggestion
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Job Opportunities",setReasons,reasons)} />
// Job Opportunities
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Business Purpose",setReasons,reasons)} />
// Business Purpose
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Higher Studies",setReasons,reasons)} />
// Higher Studies Plan
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Other",setReasons,reasons)} />
// Other
// </label>

// </div>


// {/* Interest Section */}

// <h4>Area of Interest (Multiple Selection Allowed)</h4>

// <div className="checkbox-grid">

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Core Subjects",setInterests,interests)} />
// Core Subjects
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Research",setInterests,interests)} />
// Research
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Software",setInterests,interests)} />
// Software / Technical
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Management",setInterests,interests)} />
// Management
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Entrepreneurship",setInterests,interests)} />
// Entrepreneurship
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Government",setInterests,interests)} />
// Government Jobs
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Private",setInterests,interests)} />
// Private Sector Jobs
// </label>

// </div>


// {/* Skills Section */}

// <h4>Skills Want to Develop (Multiple Selection Allowed)</h4>

// <div className="checkbox-grid">

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Communication",setSkills,skills)} />
// Communication Skills
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Technical",setSkills,skills)} />
// Technical Skills
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Programming",setSkills,skills)} />
// Programming
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Leadership",setSkills,skills)} />
// Leadership
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Problem Solving",setSkills,skills)} />
// Problem Solving
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Public Speaking",setSkills,skills)} />
// Public Speaking
// </label>

// <label className="checkbox-card">
// <input type="checkbox" onChange={()=>handleCheckbox("Analytical",setSkills,skills)} />
// Analytical Skills
// </label>

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

// export default Step3;



import React, { useState } from "react";
import "./StudentForm.css";
import axios from "axios";

function Step3({ nextStep }) {

const [reasons,setReasons] = useState([]);
const [interests,setInterests] = useState([]);
const [skills,setSkills] = useState([]);

const handleCheckbox = (value, setState, state) => {

if(state.includes(value)){
setState(state.filter(item => item !== value));
}else{
setState([...state,value]);
}

};

// const handleNext = () => {
// nextStep();
// };
const handleNext = async () => {

const studentId = localStorage.getItem("student_id");

try{

await axios.post("http://127.0.0.1:8000/api/interest/",{

student: studentId,
reasons: reasons,
interests: interests,
skills: skills

});

alert("Interest Data Saved");

nextStep();

}catch(error){

console.error(error.response?.data);
alert("Error saving interest data");

}

};
return(

<div className="page">

<div className="form-card">

<div className="form-header">
<div className="step-circle-purple">3</div>
<h2>Course Interest & Skills</h2>
</div>


{/* Reason Section */}

<h4>Reason for Choosing This Course (Multiple Selection Allowed)</h4>

<div className="checkbox-grid">

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Personal Interest",setReasons,reasons)} />
Personal Interest
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Family Suggestion",setReasons,reasons)} />
Family Suggestion
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Job Opportunities",setReasons,reasons)} />
Job Opportunities
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Business Purpose",setReasons,reasons)} />
Business Purpose
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Higher Studies",setReasons,reasons)} />
Higher Studies Plan
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Other",setReasons,reasons)} />
Other
</label>

</div>


{/* Interest Section */}

<h4>Area of Interest (Multiple Selection Allowed)</h4>

<div className="checkbox-grid">

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Core Subjects",setInterests,interests)} />
Core Subjects
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Research",setInterests,interests)} />
Research
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Software",setInterests,interests)} />
Software / Technical
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Management",setInterests,interests)} />
Management
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Entrepreneurship",setInterests,interests)} />
Entrepreneurship
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Government",setInterests,interests)} />
Government Jobs
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Private",setInterests,interests)} />
Private Sector Jobs
</label>

</div>


{/* Skills Section */}

<h4>Skills Want to Develop (Multiple Selection Allowed)</h4>

<div className="checkbox-grid">

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Communication",setSkills,skills)} />
Communication Skills
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Technical",setSkills,skills)} />
Technical Skills
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Programming",setSkills,skills)} />
Programming
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Leadership",setSkills,skills)} />
Leadership
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Problem Solving",setSkills,skills)} />
Problem Solving
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Public Speaking",setSkills,skills)} />
Public Speaking
</label>

<label className="checkbox-card">
<input type="checkbox" onChange={()=>handleCheckbox("Analytical",setSkills,skills)} />
Analytical Skills
</label>

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

export default Step3;