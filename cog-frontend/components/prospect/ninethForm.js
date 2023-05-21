const NinethForm = ({ formData, setFormData }) => {
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
      <section className="py-4 h-96 overflow-scroll">
        <div>
          <h1 className="font-bold text-gray-700">Location</h1>
          <small className="text-xs text-gray-400">This is where you enter the location of the property being prospected.
</small>
        </div>
  
        <main className="my-10">
          <form>
            <div className="py-4">
              <label>State</label> <br />
              <input
                className="border rounded border-primary px-2 text-sm outline-none mt-2"
                placeholder="Enter state"
                type="text"
                id="state"
                name="state"
                onChange={handleChange}
              />{" "}
            </div>
            <div className="py-4">
              <label>Local Government Area</label> <br />
              <input
                className="border rounded border-primary px-2 text-sm outline-none mt-2"
                placeholder="Enter L.G.A"
                type="text"
                id="LocalGovernment"
                name="Local Government"
                onChange={handleChange}
              />{" "}
            </div>
            <div className="py-4">
              <label>Landmark/ward</label> <br />
              <input
                className="border rounded border-primary px-2 text-sm outline-none mt-2"
                placeholder="Enter Landmark/ward"
                type="text"
                id="Landmark/ward"
                name="Landmark/ward"
                onChange={handleChange}
              />{" "}
            </div>
          </form>
        </main>
      </section>
    );
  };
  
  export default NinethForm;
  