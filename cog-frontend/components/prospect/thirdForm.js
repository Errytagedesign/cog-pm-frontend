const ThirdForm = ({ formData, setFormData }) => {
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checked" ? checked : value,
      };
    });
  }
  console.log(formData);
  return (
    <section className="py-6 h-96 overflow-scroll">
      <div>
        <h1 className="font-bold text-gray-700">Verification checklist</h1>
        <small className="text-xs text-gray-400">
          Select identity verification type.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="pt-4">
            <input
              className="border border-primary px-2 text-sm outline-none"
              placeholder="Enter name"
              type="checkbox"
              id="cacIncorporationCertificate"
              name="cacIncorporationCertificate"
            //   checked={formData.cac_incorporation_certificate}
              // checked= {form.cac}
              onChange={handleChange}
            />{" "}
            <label htmlFor="cac incorporation certificate">
              CAC Incorporation Certificate
            </label>{" "}
            <br />
          </div>
          <div className="pt-4">
            <input
              className="border border-primary px-2 text-sm outline-none"
              placeholder="Enter name"
              type="checkbox"
              id="taxCertificate"
              name="taxCertificate"
            //   checked={formData.tax_certificate}
              onChange={handleChange}
            />{" "}
            <label htmlFor="tax certificate">Tax certificate</label> <br />
          </div>
          <div className="pt-4">
            <input
              className="border border-primary px-2 text-sm outline-none"
              placeholder="Enter name"
              type="checkbox"
              id="creditReport"
              name="creditReport"
            //   checked={formData.credit_report}
              onChange={handleChange}
            />{" "}
            <label htmlFor="credit report">Credit report</label> <br />
          </div>
        </form>
      </main>
    </section>
  );
};

export default ThirdForm;
