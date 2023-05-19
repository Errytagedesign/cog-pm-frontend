import { useState } from "react";
import FirstForm from "./firstform";
import SecondForm from "./secondForm";
import ThirdForm from "./thirdForm";
import FourthForm from "./fourthForm";
import EightForm from "./eightForm";
import NinethForm from "./ninethForm";
import TenthForm from "./tenthForm";
import EleventhForm from "./eleventhForm";
const ProspectForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    clientType: "",
    propertyType: "",
    unitId: "",
    restRooms: "",
    bedRooms: "",
    sittingRooms: "",
    cacIncorporationCertificate: true,
    taxCertificate: true,
    creditReport: true,
    nationalIdententity: true,
    employmentConfirmation: true,
    policeReport: true,
  });
  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FirstForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <SecondForm formData={formData} setFormData={setFormData} />;
      case 2:
        return <ThirdForm formData={formData} setFormData={setFormData} />;
      case 3:
        return <FourthForm formData={formData} setFormData={setFormData} />;
      case 4:
        return <EightForm formData={formData} setFormData={setFormData} />;
      case 5:
        return <NinethForm formData={formData} setFormData={setFormData} />;
      case 6:
        return <TenthForm formData={formData} setFormData={setFormData} />;
      case 7:
        return <EleventhForm formData={formData} setFormData={setFormData} />;
      default:
        return <FirstForm formData={formData} setFormData={setFormData} />;
    }
  };
  function handleSubmit() {
    setPage(page + 1);
  }

  return (
    <section>
      <div>{conditionalComponent()}</div>
      <main className="flex justify-end">
        <div>
          {" "}
          {
            <button
              onClick={() => setPage(page - 1)}
              className="mr-4 border py-1 px-8 border-primary rounded text-primary"
            >
              Back
            </button>
          }
        </div>
        <button onClick={handleSubmit}>
          <div className="bg-primary py-1 px-8 mr-2 rounded text-white">
            {page >= 0 && "continue"}
          </div>
        </button>
      </main>
    </section>
  );
};

export default ProspectForm;
