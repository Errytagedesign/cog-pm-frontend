import React from "react";

function EighteenthForm({ formData, setFormData }) {
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
          This is where you enter the establishment date of your enterprise
          client.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
            <label className="text-gray-700 font-bold">Enter year of establishment</label> <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter Date"
              type="date"
              id="date"
              name="date"
              onChange={handleChange}
            />{" "}
          </div>
        </form>
      </main>
    </section>
  );
}

export default EighteenthForm;
