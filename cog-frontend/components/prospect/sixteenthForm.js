import React from "react";

function SixteenthForm({ formData, setFormData }) {
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  //   console.log(formData);
  console.log(formData);
  return (
    <section className="py-6 h-96 overflow-scroll">
      <div>
        <h1 className="font-bold text-gray-700">Demography</h1>
        <small className="text-xs text-gray-400">
          Select the age range of the prospect.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
            <input
              type="radio"
              id="18-23"
              name="age-range"
              value="18-23"
              onChange={handleChange}
            />{" "}
            <label>18-23</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="24-29"
              name="age-range"
              value="24-29"
              onChange={handleChange}
            />{" "}
            <label>24-29</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="30-35"
              name="age-range"
              value="30-35"
              onChange={handleChange}
            />{" "}
            <label>30-35</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="36-41"
              name="age-range"
              value="36-41"
              onChange={handleChange}
            />{" "}
            <label>36-41</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="42-47"
              name="age-range"
              value="42-47"
              onChange={handleChange}
            />{" "}
            <label>42-47</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="54-59"
              name="age-range"
              value="54-59"
              onChange={handleChange}
            />{" "}
            <label>54-59</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="60-64"
              name="age-range"
              value="60-64"
              onChange={handleChange}
            />{" "}
            <label>60-64</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="65-70"
              name="age-range"
              value="65-70"
              onChange={handleChange}
            />{" "}
            <label>65-70</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="71 and above"
              name="age-range"
              value="71 and above"
              onChange={handleChange}
            />{" "}
            <label>71 and above</label>
          </div>
          
        </form>
      </main>
    </section>
  );
}

export default SixteenthForm;
