



import React, { useState } from "react";
import "./StudentForm.css";

function Step4({ nextStep }) {

const [plan,setPlan] = useState("");
const [abroad,setAbroad] = useState("");
const [country,setCountry] = useState("");
const [career,setCareer] = useState("");

const handleNext = () => {

if(plan === "" || abroad === "" || career === ""){
alert("Please fill required fields");
return;
}

nextStep();

};

return(

<div className="page">

<div className="form-card">

<div className="form-header">
<div className="step-circle-orange">4</div>
<h2>Future Plans</h2>
</div>


<div className="form-grid">

{/* Plan After Graduation */}

<div className="form-field">

<label>Plan After Graduation <span>*</span></label>

<select
value={plan}
onChange={(e)=>setPlan(e.target.value)}
>
<option value="">Select Plan After Graduation</option>
<option>Higher Studies in India</option>
<option>Job in India</option>
<option>Job Abroad</option>
<option>Start a Business</option>
<option>Competitive Exams</option>
<option>Not Decided</option>
</select>

</div>


{/* Interested Abroad */}

<div className="form-field">

<label>Interested in Going Abroad? <span>*</span></label>

<div className="radio-group">

<label>
<input
type="radio"
name="abroad"
value="Yes"
checked={abroad === "Yes"}
onChange={(e)=>setAbroad(e.target.value)}
/>
Yes
</label>

<label>
<input
type="radio"
name="abroad"
value="No"
checked={abroad === "No"}
onChange={(e)=>{
setAbroad(e.target.value);
setCountry("");
}}
/>
No
</label>

<label>
<input
type="radio"
name="abroad"
value="Maybe"
checked={abroad === "Maybe"}
onChange={(e)=>setAbroad(e.target.value)}
/>
Maybe
</label>

</div>

</div>


{/* Preferred Country */}

<div className="form-field">

<label>Preferred Country (If Abroad)</label>

<select
value={country}
disabled={abroad === "No"}
onChange={(e)=>setCountry(e.target.value)}
>
<option value="">Select Preferred Country</option>
<option>USA</option>
<option>Canada</option>
<option>UK</option>
<option>Australia</option>
<option>Germany</option>
<option>Other</option>
</select>

</div>


{/* Career Goal */}

<div className="form-field">

<label>Career Goal Type <span>*</span></label>

<select
value={career}
onChange={(e)=>setCareer(e.target.value)}
>
<option value="">Select Career Goal Type</option>
<option>Technical Career </option>
<option>Management Career</option>
<option>Research Career</option>
<option>Government Sector</option>
<option>Business/Startup</option>
<option>Undecided</option>
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

export default Step4;