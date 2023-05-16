import { useState } from "react";
const ProspectDash = () =>{
    const [progress, setProgress] = useState(0);
    const handleNext = () => {
        setProgress(progress + 1);
      };
    
      const handlePrevious = () => {
        setProgress(progress - 1);
      };
    return(
        <div>
        <ul className="list-disc list-inside">
          <li className={progress >= 0 ? 'active' : ''}>Step 1</li>
          <li className={progress >= 1 ? 'active' : ''}>Step 2</li>
          <li className={progress >= 2 ? 'active' : ''}>Step 3</li>
          {/* Add more steps as needed */}
        </ul>
        <button onClick={handlePrevious} disabled={progress === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={progress === 2}>
        Next
      </button>
      </div>
    )
}

export default ProspectDash;