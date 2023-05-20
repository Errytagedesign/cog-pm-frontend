const SecondForm = ({ formData, setFormData }) => {
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
        <h1 className="font-bold text-gray-700">Client Name</h1>
        <small className="text-xs text-gray-400">Enter client name</small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
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

export default SecondForm;
