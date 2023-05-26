import { useState } from "react";
import FirstForm from "./firstform";
import SecondForm from "./secondForm";
import ThirdForm from "./thirdForm";
import FourthForm from "./fourthForm";
import EightForm from "./eightForm";
import NinethForm from "./ninethForm";
import TenthForm from "./tenthForm";
import EleventhForm from "./eleventhForm";
import TwelvethForm from "./twelvethForm";
import ThirteenthForm from "./thirteenthForm";
import FourteenthForm from "./fourteenthForm";
import FifteenForm from "./fifteenForm";
import SixteenthForm from "./sixteenthForm";
import SeventeenthForm from "./seventeenthForm";
import EighteenthForm from "./eighteenthForm";
import NineteenthForm from "./nineteenthForm";
import TwentethForm from "./twentethForm";
import TwentyfirstForm from "./twentyfirstForm";
import TwentysecondForm from "./twentysecondForm";
import ProspectSummary from "./projectSummary";
import UploadForm from "./uploadForm";
import ApplicationType from "./applicationType";
const ProspectForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    applicationType: "Select application type",
    name: "",
    clientType: "",
    propertyType: "",
    unitId: "",
    restRooms: "",
    bedRooms: "",
    sittingRooms: "",
    gender: "",
    religion: "",
    ethnic: "",
    profession: "",
    type: "",
    ageRange: "",
    business: "",
    otherEthnicity: "",
    date: "",
    amount: "",
    rentalAmount: "",
    recurringFees: "",
    potentialDate: "",
    file: "",
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
        return <UploadForm formData={formData} setFormData={setFormData} />;
      case 5:
        return (
          <ApplicationType formData={formData} setFormData={setFormData} />
        );
      case 6:
        return <EightForm formData={formData} setFormData={setFormData} />;
      case 7:
        return <NinethForm formData={formData} setFormData={setFormData} />;
      case 8:
        return <TenthForm formData={formData} setFormData={setFormData} />;
      case 9:
        return <EleventhForm formData={formData} setFormData={setFormData} />;
      case 10:
        return <TwelvethForm formData={formData} setFormData={setFormData} />;
      case 11:
        return <ThirteenthForm formData={formData} setFormData={setFormData} />;
      case 12:
        return <FourteenthForm formData={formData} setFormData={setFormData} />;
      case 13:
        return <FifteenForm formData={formData} setFormData={setFormData} />;
      case 14:
        return <SixteenthForm formData={formData} setFormData={setFormData} />;
      case 15:
        return (
          <SeventeenthForm formData={formData} setFormData={setFormData} />
        );
      case 16:
        return <EighteenthForm formData={formData} setFormData={setFormData} />;
      case 17:
        return <NineteenthForm formData={formData} setFormData={setFormData} />;
      case 18:
        return <TwentethForm formData={formData} setFormData={setFormData} />;
      case 19:
        return (
          <TwentyfirstForm formData={formData} setFormData={setFormData} />
        );
      case 20:
        return (
          <TwentysecondForm formData={formData} setFormData={setFormData} />
        );
      case 21:
        return (
          <ProspectSummary formData={formData} setFormData={setFormData} />
        );
      case 22:
        return <UploadForm formData={formData} setFormData={setFormData} />;
      default:
        // return <FirstForm formData={formData} setFormData={setFormData} />;
        return <h1>Your request has been submitted </h1>;
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
            {page >= 0 && "Continue"}
          </div>
        </button>
      </main>
    </section>
  );
};

export default ProspectForm;
