import React from "react";

function EleventhForm({ formData, setFormData }) {
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
        <h1 className="font-bold text-gray-700">Unit Features</h1>
        <small className="text-xs text-gray-400">
          This is where you enter the details of the property unit being
          prospected.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="pt-4">
            <label>Number of sitting rooms</label> <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter number of sitting rooms"
              type="text"
              id="sittingRooms"
              name="sittingRooms"
              onChange={handleChange}
            />{" "}
          </div>
          <div className="pt-4">
            <label>Number of bedrooms</label> <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter number of bedrooms"
              type="text"
              id="bedRooms"
              name="bedRooms"
              onChange={handleChange}
            />{" "}
          </div>
          <div className="pt-4">
            <label>Number of rest rooms</label> <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter number of rest rooms"
              type="text"
              id="restRooms"
              name="restRooms"
              onChange={handleChange}
            />{" "}
          </div>
        </form>
      </main>
    </section>
  );
}

export default EleventhForm;
