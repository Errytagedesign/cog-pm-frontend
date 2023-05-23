import React from "react";

function TwentethForm({ formData, setFormData }) {
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
        <h1 className="font-bold text-gray-700">
          Renewal amount and recurring fees
        </h1>
        <small className="text-xs text-gray-400">
          Input property service charges and rental renewal amount. Recurring
          fees includes services like maintenance, waste disposal, electricity
          bills.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
            <label className="text-gray-700 font-bold">Subsequent rental amount</label>{" "}
            <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter rental amount"
              type="number"
              id="amount"
              name="rentalAmount"
              onChange={handleChange}
            />{" "}
          </div>
          <div className="py-4">
            <label className="text-gray-700 font-bold">Recurring fees</label>{" "}
            <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter recurring fees"
              type="number"
              id="amount"
              name="recurringFees"
              onChange={handleChange}
            />{" "}
          </div>
        </form>
      </main>
    </section>
  );
}

export default TwentethForm;
