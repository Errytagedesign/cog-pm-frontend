import React from 'react'

function TwentysecondForm({formData, setFormData}) {
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
            <h1 className="font-bold text-gray-700">Signing details</h1>
            <small className="text-xs text-gray-400">
            Input the potential move in date.
            </small>
          </div>
    
          <main className="my-10">
            <form>
              <div className="py-4">
                <label className="text-gray-700 font-bold">Potential move in date</label>{" "}
                <br />
                <input
                  className="border border-primary px-2 text-sm outline-none mt-2"
                  placeholder="Enter date"
                  type="date"
                  id="potentialDate"
                  name="potentialDate"
                  onChange={handleChange}
                />{" "}
              </div>
            </form>
          </main>
        </section>
      );
}

export default TwentysecondForm