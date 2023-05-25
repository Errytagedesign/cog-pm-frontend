import React from "react";
import download from "../../public/assets/icons/download.png";
import Image from "next/image";
function UploadForm({ formData, setFormData }) {
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
   const  fileEmpty = () =>{
    return(
        <h1>DRAG FILE HERE OR <span className="text-primary">BROWSE</span></h1>
    )
   }

  return (
    <section className="py-6 h-96 overflow-scroll">
      <div>
        <h1 className="font-bold text-gray-700">Verification upload</h1>
        <small className="text-xs text-gray-400">Verification upload</small>
      </div>

      <main className="my-10">
        <form>
          <div className="py-4">
            <div className="relative">
              <span className="absolute top-2 left-2 border-2 border-dashed rounded flex items-center border-primary w-9/12  p-8">
               {formData.file === "" ?  <span className="border-2 border-gray-500 p-4 rounded-full ">
                  <Image src={download} alt=""/>
                </span> : ""}
                <span className="ml-4 flex flex-col items-center">
                  <div className="font-bold">{formData.file === "" ? fileEmpty()  : `${formData.file.substring(12)}`}</div>
                  <div className="text-xs text-gray-400">{formData.file === "" ? `Supported file types: JPG, PNG, PDF` : ""}</div>
                  <div className="text-xs text-gray-400">{formData.file === "" ? `The file size can be up to 20MB` : ""}</div>
                </span>
              </span>
              <input
                className=" border-primary border w-max text-sm outline-none mt-2 absolute left-0 lg:pb-12 lg:p-8 cursor-pointer opacity-0 "
                placeholder="Enter Date"
                type="file"
                accept=".pdf,.doc,.docx,.png,.jpg"
                id="file"
                name="file"
                onChange={handleChange}
              />{" "}
            </div>
          </div>
        </form>
      </main>
    </section>
  );
}

export default UploadForm;
