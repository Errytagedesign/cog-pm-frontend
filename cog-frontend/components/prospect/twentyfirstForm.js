import React from 'react'

function TwentyfirstForm({formData, setFormData}) {
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
            <h1 className="font-bold text-gray-700">Total agreement period</h1>
            <small className="text-xs text-gray-400">
            Input property agreement period.
            </small>
          </div>
    
          <main className="my-10">
            <form>
              <div className="py-4">
                <label className="text-gray-700 font-bold">Duration</label>{" "}
                <br />
                <input
                  className="border border-primary px-2 text-sm outline-none mt-2"
                  placeholder="Enter duration"
                  type="duration"
                  id="duration"
                  name="duration"
                  onChange={handleChange}
                />{" "}
              </div>
            </form>
          </main>
        </section>
      );
}

export default TwentyfirstForm