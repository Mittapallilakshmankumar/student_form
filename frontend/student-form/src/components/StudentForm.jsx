// import React, { useState } from "react";
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";
// import Step5 from "./Step5";
// import "./StudentForm.css";

// function StudentForm() {

// const [step,setStep] = useState(1);

// const nextStep = () =>{
// setStep(step + 1);
// }

// const prevStep = () =>{
// setStep(step - 1);
// }

// switch(step){

// case 1:
// return <Step1 nextStep={nextStep} />

// case 2:
// return <Step2 nextStep={nextStep} prevStep={prevStep} />

// case 3:
// return <Step3 nextStep={nextStep} prevStep={prevStep} />

// case 4:
// return <Step4 nextStep={nextStep} prevStep={prevStep} />

// case 5:
// return <Step5 prevStep={prevStep} />

// default:
// return null

// }

// }

// export default StudentForm;

import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import "./StudentForm.css";

function StudentForm() {

const [step,setStep] = useState(1);

const nextStep = () =>{
setStep(step + 1);
}

const prevStep = () =>{
setStep(step - 1);
}

let stepComponent;

switch(step){

case 1:
stepComponent = <Step1 nextStep={nextStep} />;
break;

case 2:
stepComponent = <Step2 nextStep={nextStep} prevStep={prevStep} />;
break;

case 3:
stepComponent = <Step3 nextStep={nextStep} prevStep={prevStep} />;
break;

case 4:
stepComponent = <Step4 nextStep={nextStep} prevStep={prevStep} />;
break;

case 5:
stepComponent = <Step5 prevStep={prevStep} />;
break;

default:
stepComponent = null;

}

return (

<div>

{/* Top Heading */}
<div className="form-title">
<h1>Student Details Form</h1>
<p>Please fill in all the required information accurately</p>
</div>

{/* Current Step */}
{stepComponent}

</div>

);

}

export default StudentForm;