const EightForm = ({ formData, setFormData }) => {
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
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
        <h1 className="font-bold text-gray-700">Property Type</h1>
        <small className="text-xs text-gray-400">
          This is where you enter the details of the type of property being
          prospected.
        </small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
            <input
              type="radio"
              id="Company/Organization"
              name="propertyType"
              value="flat"
              onChange={handleChange}
            />{" "}
            <label>Flat/apartment</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="individual"
              name="propertyType"
              value="warhouse"
              onChange={handleChange}
            />{" "}
            <label>Warehouse/storage facility</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="individual"
              name="propertyType"
              value="whole home"
              onChange={handleChange}
            />{" "}
            <label>Whole home</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="individual"
              name="propertyType"
              value="office space"
              onChange={handleChange}
            />{" "}
            <label>office space</label>
          </div>
          <div className="py-4">
            <input
              type="radio"
              id="individual"
              name="propertyType"
              value="retail shop space  "
              onChange={handleChange}
            />{" "}
            <label>Retail shop space  </label>
          </div>
        </form>
      </main>
    </section>
  );
};

export default EightForm;
