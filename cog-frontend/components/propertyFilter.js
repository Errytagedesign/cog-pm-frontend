import { useState } from "react";

const options = ["Property Type", "Option 1", "Option 2", "Option 3"];
const baths = [3, 4, 5, 4];

function PropertyFilter() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown"></label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="dropdown"></label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {baths.map((bath) => (
          <option key={bath} value={bath}>
            {bath}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PropertyFilter;
