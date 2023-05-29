import React from 'react'

function ProgressButtonPrev({progress, setProgress}) {
    const handlePrevious = () => {
        setProgress(progress - 1);
      };
  return (
    <button onClick={handlePrevious} disabled={progress === 0}>
        Previous
      </button>
  )
}

export default ProgressButtonPrev