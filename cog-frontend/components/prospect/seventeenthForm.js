import React from "react";

function SeventeenthForm({ formData, setFormData }) {
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
          This is where you select the business category of your enterprise
          client.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
            <input
              type="radio"
              id="FinancialServices"
              name="business"
              value="Financial services"
              onChange={handleChange}
            />{" "}
            <label>Financial services</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="Health"
              name="business"
              value="Health, medical and pharmaceutical"
              onChange={handleChange}
            />{" "}
            <label>Health, medical and pharmaceutical</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="GovernmentalOrganization"
              name="business"
              value="Governmental organization"
              onChange={handleChange}
            />{" "}
            <label>Governmental organization</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="NGO"
              name="business"
              value="NGO and civic society organization"
              onChange={handleChange}
            />{" "}
            <label>NGO and civic society organization</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="Construction"
              name="business"
              value="Construction and mining services"
              onChange={handleChange}
            />{" "}
            <label>Construction and mining services</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="Technology"
              name="business"
              value="Technology, media and telecommunications"
              onChange={handleChange}
            />{" "}
            <label>Technology, media and telecommunications</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="Industrial"
              name="business"
              value="Industrial and manufacturing"
              onChange={handleChange}
            />{" "}
            <label>Industrial and manufacturing</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="Education"
              name="business"
              value="Education and training"
              onChange={handleChange}
            />{" "}
            <label>Education and training</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="Retail"
              name="business"
              value="Retail and physical stores"
              onChange={handleChange}
            />{" "}
            <label>Retail and physical stores</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="Logistics"
              name="business"
              value="Logistics, procurement and supply-chain"
              onChange={handleChange}
            />{" "}
            <label>Logistics, procurement and supply-chain</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="Agriculture"
              name="business"
              value="Agriculture"
              onChange={handleChange}
            />{" "}
            <label>Agriculture</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="Automotive"
              name="business"
              value="Automotive services"
              onChange={handleChange}
            />{" "}
            <label>Automotive services</label>
          </div>
        </form>
      </main>
    </section>
  );
}

export default SeventeenthForm;
