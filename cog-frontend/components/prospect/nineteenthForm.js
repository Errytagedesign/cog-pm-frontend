import React from "react";

function NineteenthForm({ formData, setFormData }) {
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
        <h1 className="font-bold text-gray-700">Total amount for new tenant or buyer</h1>
        <small className="text-xs text-gray-400">
          Input property purchase or rental amount for initial rent period
          (inclusive of onboarding, commission and agreement fees).
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
            <label className="text-gray-700 font-bold">Enter Amount</label>{" "}
            <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter Amount"
              type="number"
              id="amount"
              name="amount"
              onChange={handleChange}
            />{" "}
          </div>
        </form>
      </main>
    </section>
  );
}

export default NineteenthForm;
