// import React, { useState } from "react";
// import "./StudentForm.css";

// function Step5() {

// const [internship,setInternship] = useState("");
// const [internshipInterest,setInternshipInterest] = useState("");
// const [certification,setCertification] = useState("");

// const handleSubmit = () => {

// if(internship === "" || internshipInterest === "" || certification === ""){
// alert("Please fill all fields");
// return;
// }

// alert("Form Submitted Successfully");

// };

// return(

// <div className="page">

// <div className="form-card">

// <div className="form-header">
// <div className="step-circle-teal">5</div>
// <h2>Additional Information</h2>
// </div>


// {/* Internship Completed */}

// <div className="radio-section">

// <label>Internship Completed? <span>*</span></label>

// <div className="radio-group">

// <label>
// <input
// type="radio"
// name="internship"
// value="Yes"
// checked={internship === "Yes"}
// onChange={(e)=>setInternship(e.target.value)}
// />
// Yes
// </label>

// <label>
// <input
// type="radio"
// name="internship"
// value="No"
// checked={internship === "No"}
// onChange={(e)=>setInternship(e.target.value)}
// />
// No
// </label>

// </div>

// </div>


// {/* Interested Internship */}

// <div className="radio-section">

// <label>Interested in Internship Opportunities? <span>*</span></label>

// <div className="radio-group">

// <label>
// <input
// type="radio"
// name="internshipInterest"
// value="Yes"
// checked={internshipInterest === "Yes"}
// onChange={(e)=>setInternshipInterest(e.target.value)}
// />
// Yes
// </label>

// <label>
// <input
// type="radio"
// name="internshipInterest"
// value="No"
// checked={internshipInterest === "No"}
// onChange={(e)=>setInternshipInterest(e.target.value)}
// />
// No
// </label>

// </div>

// </div>


// {/* Certification */}

// <div className="radio-section">

// <label>Have Certifications? <span>*</span></label>

// <div className="radio-group">

// <label>
// <input
// type="radio"
// name="certification"
// value="Yes"
// checked={certification === "Yes"}
// onChange={(e)=>setCertification(e.target.value)}
// />
// Yes
// </label>

// <label>
// <input
// type="radio"
// name="certification"
// value="No"
// checked={certification === "No"}
// onChange={(e)=>setCertification(e.target.value)}
// />
// No
// </label>

// </div>

// </div>


// <div className="button-area">

// <button className="next-btn" onClick={handleSubmit}>
// Submit
// </button>

// </div>

// </div>

// </div>

// )

// }

// export default Step5;



import React, { useState } from "react";
import "./StudentForm.css";
import axios from "axios";

function Step5() {

const [internship,setInternship] = useState("");
const [internshipInterest,setInternshipInterest] = useState("");
const [certification,setCertification] = useState("");

// const handleSubmit = () => {

// if(internship === "" || internshipInterest === "" || certification === ""){
// alert("Please fill all fields");
// return;
// }

// alert("Form Submitted Successfully");

// };
const handleSubmit = async () => {

const studentId = localStorage.getItem("student_id");

if(internship === "" || internshipInterest === "" || certification === ""){
alert("Please fill all fields");
return;
}

try{

await axios.post("http://127.0.0.1:8000/api/additional-info/", {

student: studentId,
internship_completed: internship,
internship_interest: internshipInterest,
certification: certification

});

alert("Form Submitted Successfully");

}catch(error){

console.error(error.response?.data);
alert("Error submitting form");

}

};

return(

<div className="page">

<div className="form-card">

<div className="form-header">
<div className="step-circle-teal">5</div>
<h2>Additional Information</h2>
</div>


{/* Internship Completed */}

<div className="radio-section">

<label>Internship Completed? <span>*</span></label>

<div className="radio-group">

<label>
<input
type="radio"
name="internship"
value="Yes"
checked={internship === "Yes"}
onChange={(e)=>setInternship(e.target.value)}
/>
Yes
</label>

<label>
<input
type="radio"
name="internship"
value="No"
checked={internship === "No"}
onChange={(e)=>setInternship(e.target.value)}
/>
No
</label>

</div>

</div>


{/* Interested Internship */}

<div className="radio-section">

<label>Interested in Internship Opportunities? <span>*</span></label>

<div className="radio-group">

<label>
<input
type="radio"
name="internshipInterest"
value="Yes"
checked={internshipInterest === "Yes"}
onChange={(e)=>setInternshipInterest(e.target.value)}
/>
Yes
</label>

<label>
<input
type="radio"
name="internshipInterest"
value="No"
checked={internshipInterest === "No"}
onChange={(e)=>setInternshipInterest(e.target.value)}
/>
No
</label>

</div>

</div>


{/* Certification */}

<div className="radio-section">

<label>Have Certifications? <span>*</span></label>

<div className="radio-group">

<label>
<input
type="radio"
name="certification"
value="Yes"
checked={certification === "Yes"}
onChange={(e)=>setCertification(e.target.value)}
/>
Yes
</label>

<label>
<input
type="radio"
name="certification"
value="No"
checked={certification === "No"}
onChange={(e)=>setCertification(e.target.value)}
/>
No
</label>

</div>

</div>


<div className="button-area">

<button className="next-btn" onClick={handleSubmit}>
Submit
</button>

</div>

</div>

</div>

)

}

export default Step5;


