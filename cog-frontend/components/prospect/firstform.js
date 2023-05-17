import { useState } from "react";

const FirstForm = () => {
  const [formData, setFormData] = useState({
    clientType : ""
  });

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return{
            ...prevFormData,
            [name] : value
        }
    })
  }
  console.log(formData);
  return (
    <section>
      <div>
        <h1 className="font-bold text-gray-700">Client Type</h1>
        <small className="text-xs text-gray-400">Select client type</small>
      </div>

      <main>
        <form>
          <div>
            <input type="radio" id="Company/Organization" 
             name="clientType"
             value="company"
             onChange={handleChange}
             />{" "}
            <label>Company/Organization</label>
          </div>
          <div>
            <input type="radio" id="individual"
             name="clientType"
             value = "individual"
             onChange={handleChange}
             />{" "}
            <label>Individual</label>
          </div>
        </form>
      </main>
    </section>
  );
};

export default FirstForm;
