import React from "react";

function ApplicationType({ formData, setFormData }) {
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
        <h1 className="font-bold text-gray-700">Application Type</h1>
        <small className="text-xs text-gray-400">
          This is where you enter the details of the type of application from
          the prospect.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
            <label className="text-gray-700 font-bold">Application type</label>{" "}
            <br />
            <select
              value={formData.applicationType.value}
              onChange={handleChange}
              className="outline-none text-xs text-gray-400 pr-4"
              placeholder="select"
              name="applicationType"
            >
              <option>Selected property type</option>
              <option
                value="Property rental"
                name="applicationType"
                id="applicationType"
                className="text-black"
              >
                Property rental
              </option>
              <option
                className="text-black"
                value="Property purchase"
                name="applicationType"
                id="applicationType"
              >
                Property purchase
              </option>
            </select>
          </div>
        </form>
      </main>
    </section>
  );
}

export default ApplicationType;
