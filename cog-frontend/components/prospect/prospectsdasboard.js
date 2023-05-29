import { useState } from "react";
import ProgressButtonPrev from "./progressButtonNext";
const ProspectDash = () => {
  // const [progress, setProgress] = useState(0);
  // const handleNext = () => {
  //   setProgress(progress + 1);
  // };

  // const handlePrevious = () => {
  //   setProgress(progress - 1);
  // };
  return (
    <div>
      <ul className="">
        <li className={`${progress >= 0 ? "text-red-500" : ""} list-none`}>
          <span
            className={`${progress >= 0 ? "border-red-500" : ""}  px-2 py-1`}
          >
            1
          </span>
          <span className="text-gray-600">Step 1</span>
        </li>
        <li className={`${progress >= 1 ? "text-red-500" : ""}`}>
          <span className="text-gray-600">Step 1</span>
        </li>
        <li className={`${progress >= 2 ? "text-red-500" : ""}`}>
          <span className="text-gray-600">Step 2</span>
        </li>
        <li className={`${progress >= 3 ? "text-red-500" : ""} text-blue-600`}>
          <span className="text-gray-600">Step 3</span>
        </li>
        {/* Add more steps as needed */}
      </ul>
      {/* <ProgressButtonPrev progress={progress} setProgress={setProgress}/>
      <button onClick={handleNext} disabled={progress === 3}>
        Next
      </button> */}
    </div>
  );
};

export default ProspectDash;
