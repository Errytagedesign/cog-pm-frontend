import { useState } from "react";

const FirstForm = ({ formData, setFormData }) => {
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  console.log(formData);
  return (
    <section className="py-6 h-96 overflow-scroll">
      <div>
        <h1 className="font-bold text-gray-700">Client Type</h1>
        <small className="text-xs text-gray-400">Select client type</small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
            <input
              type="radio"
              id="Company/Organization"
              name="clientType"
              value="company"
              onChange={handleChange}
            />{" "}
            <label>Company/Organization</label>
          </div>
          <div>
            <input
              type="radio"
              id="individual"
              name="clientType"
              value="individual"
              onChange={handleChange}
            />{" "}
            <label>Individual</label>
          </div>
        </form>
      </main>
    </section>
  );
};

export default FirstForm;
