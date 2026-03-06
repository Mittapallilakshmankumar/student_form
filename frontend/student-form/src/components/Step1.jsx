

import React, { useState } from "react";
import "./StudentForm.css";

function PersonalInfo({ nextStep }) {

const [fullName,setFullName] = useState("");
const [fatherName,setFatherName] = useState("");
const [email,setEmail] = useState("");
const [mobile,setMobile] = useState("");

const [fullNameError,setFullNameError] = useState("");
const [fatherNameError,setFatherNameError] = useState("");
const [emailError,setEmailError] = useState("");
const [mobileError,setMobileError] = useState("");

const handleNext = () => {

let valid = true;


if(fullName === ""){
setFullNameError("Full name is required");
valid = false;
}
else if(!/^[A-Za-z\s]+$/.test(fullName)){
setFullNameError("Only letters allowed");
valid = false;
}
else{
setFullNameError("");
}


if(fatherName === ""){
setFatherNameError("Father name is required");
valid = false;
}
else if(!/^[A-Za-z\s]+$/.test(fatherName)){
setFatherNameError("Only letters allowed");
valid = false;
}
else{
setFatherNameError("");
}

// Email validation (optional)
if(email !== "" && !email.includes("@gmail.com")){
setEmailError("Enter valid email");
valid = false;
}else{
setEmailError("");
}


if(mobile === ""){
setMobileError("Mobile number required");
valid = false;
}
else if(!/^[6-9][0-9]{9}$/.test(mobile)){
setMobileError("Mobile must start with 6-9 and be 10 digits");
valid = false;
}
else{
setMobileError("");
}

if(valid){
nextStep();
}

};

return (
<div className="page">

<div className="form-card">

<div className="form-header">
<div className="step-circle">1</div>
<h2>Personal Information</h2>
</div>

<div className="form-grid">

<div className="form-field">
<label>Full Name <span>*</span></label>

<input
type="text"
placeholder="Enter your full name"
value={fullName}
onChange={(e)=>{
const value = e.target.value.replace(/[^A-Za-z\s]/g,"");
setFullName(value);
}}
/>
{fullNameError && <p className="error">{fullNameError}</p>}
</div>

<div className="form-field">
<label>Father's Name <span>*</span></label>
<input
type="text"
placeholder="Enter father's name"
value={fatherName}
onChange={(e)=>{
const value = e.target.value.replace(/[^A-Za-z\s]/g,"");
setFatherName(value);
}}
/>
{fatherNameError && <p className="error">{fatherNameError}</p>}
</div>

<div className="form-field">
<label>Email ID</label>

<input
type="email"
placeholder="example@email.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

{emailError && <p className="error">{emailError}</p>}

</div>

<div className="form-field">
<label>Mobile Number <span>*</span></label>

<input
type="text"
placeholder="Enter 10-digit mobile number"
value={mobile}
maxLength="10"
onChange={(e)=>{
const value = e.target.value.replace(/[^0-9]/g,"");
setMobile(value);
}}
/>

{mobileError && <p className="error">{mobileError}</p>}

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

export default PersonalInfo;