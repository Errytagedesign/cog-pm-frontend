import React from "react";

function TwelvethForm({formData, setFormData}) {
  function handleChange(event) {
    const { name, value } = event.target;
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
      <h1 className="font-bold text-gray-700">Demography</h1>
      <small className="text-xs text-gray-400">Select the client’s gender.</small>
    </div>

    <main className="my-10">
      <form>
        <div className="pt-4">
          <input
            type="radio"
            id="Company/Organization"
            name="gender"
            value="male"
            onChange={handleChange}
          />{" "}
          <label>Male</label>
        </div>
        <div className="pt-4">
          <input
            type="radio"
            id="individual"
            name="gender"
            value="female"
            onChange={handleChange}
          />{" "}
          <label>Female</label>
        </div>
      </form>
    </main>
  </section>
  );
}

export default TwelvethForm;
