import React from "react";

function FifteenForm({ formData, setFormData }) {
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
        <small className="text-xs text-gray-400">
          Kindly select the professional background of the individual prospect.
          This field is optional.
        </small>
      </div>

      <main className="pt-10">
        <form>
          <div>
            <label>Occupation</label> <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter name"
              type="text"
              id="Occupation"
              name="profession"
              onChange={handleChange}
            />{" "}
          </div>
          <div className="pt-10">
            <label>Industry type</label> <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter name"
              type="text"
              id="Industry"
              name="industryType"
              onChange={handleChange}
            />{" "}
          </div>
        </form>
      </main>
    </section>
  );
}

export default FifteenForm;
