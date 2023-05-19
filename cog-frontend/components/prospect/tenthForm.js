const TenthForm = ({ formData, setFormData }) => {
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
    <section className="py-6 ">
      <div>
        <h1 className="font-bold text-gray-700">Unit ID</h1>
        <small className="text-xs text-gray-400">
          This is where you enter the identity of the property unit being
          prospected. A property can have sub-units within it. This is to
          identify the specific unit the prospect is interested in.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div>
            <label>Company/Organization</label> <br />
            <input
              className="border border-primary px-2 text-sm outline-none mt-2"
              placeholder="Enter name"
              type="text"
              id="Company/Organization"
              name="name"
              onChange={handleChange}
            />{" "}
          </div>
        </form>
      </main>
    </section>
  );
};

export default TenthForm;
