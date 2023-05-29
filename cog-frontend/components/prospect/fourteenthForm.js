import React from "react";

function FourteenthForm({ formData, setFormData }) {
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
          Kindly select the ethnic background of the individual prospect. This
          field is optional.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="pt-4">
            <input
              type="radio"
              id="Islam"
              name="ethnic"
              value="Yoruba"
              onChange={handleChange}
            />{" "}
            <label>Yoruba</label>
          </div>
          <div className="pt-4">
            <input
              type="radio"
              id="individual"
              name="ethnic"
              value="Hausa"
              onChange={handleChange}
            />{" "}
            <label>Hausa</label>
          </div>
          <div className="pt-4">
            <input
              type="radio"
              id="individual"
              name="ethnic"
              value="Igbo"
              onChange={handleChange}
            />{" "}
            <label>Igbo</label>
          </div>
          <div className="pt-4">
            <input
              type="radio"
              id="individual"
              name="ethnic"
              value="Tiv"
              onChange={handleChange}
            />{" "}
            <label>Tiv</label>
          </div>
          <div className="pt-4">
            <input
              type="radio"
              id="individual"
              name="ethnic"
              value="Fulani"
              onChange={handleChange}
            />{" "}
            <label>Fulani</label>
          </div>
          <div className="pt-4">
            <input
              type="radio"
              id="individual"
              name="ethnic"
              value="Urhobo/Itsekiri"
              onChange={handleChange}
            />{" "}
            <label>Urhobo/Itsekiri</label>
          </div>
          <div className="ml-12 pt-4">
            <label className="text-gray-500 font-bold">Other</label> <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter name"
              type="text"
              id="other"
              name="otherEthnicity"
              onChange={handleChange}
            />{" "}
          </div>
        </form>
      </main>
    </section>
  );
}

export default FourteenthForm;
