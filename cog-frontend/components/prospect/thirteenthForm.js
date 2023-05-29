import React from "react";

function ThirteenthForm({ formData, setFormData }) {
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
          Kindly select the religious background of the individual prospect.
          This field is optional.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div  className="pt-4">
            <input
              type="radio"
              id="Islam"
              name="religion"
              value="islam"
              onChange={handleChange}
            />{" "}
            <label>Islam</label>
          </div >
          <div className="pt-4">
            <input
              type="radio"
              id="individual"
              name="religion"
              value="christianity"
              onChange={handleChange}
            />{" "}
            <label>Christianity</label>
          </div>
          <div  className="pt-4">
            <input
              type="radio"
              id="individual"
              name="religion"
              value="african traditonalist"
              onChange={handleChange}
            />{" "}
            <label>African Traditionalist</label>
          </div>
          <div  className="pt-4">
            <input
              type="radio"
              id="individual"
              name="religion"
              value="prefer not to say"
              onChange={handleChange}
            />{" "}
            <label>Prefer not to say</label>
          </div>
        </form>
      </main>
    </section>
  );
}

export default ThirteenthForm;
