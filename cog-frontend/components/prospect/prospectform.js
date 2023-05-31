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
import check from "../../public/assets/icons/check.png"
const ProspectForm = () => {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
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
  //Function Handling Nextpage and nextStep
  function handleSubmit() {
    setPage(page + 1);
    handleNext();
  }
  //Function Handling PreviousPage And PreviousStep
  function handleBack() {
    setPage(page - 1);
    handlePrevious();
  }
  // Next Step
  const handleNext = () => {
    setProgress(progress + 1);
  };
  // Previous step
  const handlePrevious = () => {
    setProgress(progress - 1);
  };

  // Steps
  const ProspectDash = () => {
    return (
      <div className="">
        {/* Client Details */}
        <ul className=" list-inside text-xs w-2/3 pl-1">
          <li >
            <span
              className={`${
                progress >= 0
                  ? "border rounded-full px-2 py-1 mr-4  w-3 h-3 bg-green-500 text-white border-green-500"
                  : "border rounded-full px-2 py-1 mr-4 w-3 h-3  text-gray-500 border-gray-500"
              }`}
            >
              1
            </span>
            <span className="text-gray-600">Client Details</span>
          </li>
          {page <= 4 && (
            <div className="">
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 1
                        ? "border-2  w-3 h-3 border-green-500 mr-6"
                        : "border-2 w-3 h-3   border-gray-500 mr-6"
                    }`}
                  ></div>
                  Client Type
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 2
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Client Name
                </span>
              </li>
              <li className="mt-4 w-9/12  pl-1 ">
                <span className="text-gray-600 flex    items-center">
                  {" "}
                  <div
                    className={`${
                      progress >= 3
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  <p className="">Verification Checklist</p>
                </span>
              </li>

              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 4
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Verification Upload
                </span>
              </li>
            </div>
          )}
        </ul>
        {/* Property Details */}
        <ul className=" list-inside text-xs mt-4 w-2/3 pl-1">
          <li className={`${progress >= 0 ? "" : ""} list-none`}>
            <span
              className={`${
                progress >= 5
                  ? "border rounded-full px-2 py-1  w-3 h-3 bg-green-500 text-white border-green-500"
                  : "border rounded-full px-2 py-1 w-3 h-3  text-gray-500 border-gray-500"
              } border rounded-full px-2 py-1`}
            >
              2
            </span>
            <span className="text-gray-600">Property Details</span>
          </li>
          {page >= 5 && page <= 9 && (
            <div className="">
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 5
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Application Type
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 6
                        ? "border-2  w-3 h-3 border-green-500 mr-4 "
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Property Type
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 7
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Location
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 8
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Unit ID
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 9
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Unit Features
                </span>
              </li>
            </div>
          )}
        </ul>
        {/* Demography */}
        <ul className=" list-inside text-xs mt-4 w-2/3 pl-1">
          <li className={`${progress >= 10 ? "text-green-500" : ""} list-none`}>
            <span
              className={`${
                progress >= 10
                  ? "border rounded-full px-2 py-1  w-3 h-3 bg-green-500 text-white border-green-500"
                  : "border rounded-full px-2 py-1 w-3 h-3  text-gray-500 border-gray-500"
              } border rounded-full px-2 py-1`}
            >
              3
            </span>
            <span className="text-gray-600">Demography</span>
          </li>
          {page >= 10 && page <= 16 && (
            <div className="">
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 10
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Gender
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 11
                        ? "border-2  w-3 h-3 border-green-500 mr-4 "
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Religion
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 12
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Tribe
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 13
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Occupation
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 14
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Age Range
                </span>
              </li>
              <li className="mt-4 w-2/3 pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 15
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Industry Type
                </span>
              </li>
              <li className="mt-4 w-max-content pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 16
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Years Of Establishment
                </span>
              </li>
            </div>
          )}
        </ul>
        {/* Amount */}
        <ul className=" list-inside text-xs mt-4 w-2/3 pl-1">
          <li className={`${progress >= 0 ? "text-green-500" : ""} list-none`}>
            <span
              className={`${
                progress >= 17
                  ? "border rounded-full px-2 py-1  w-3 h-3 bg-green-500 text-white border-green-500"
                  : "border rounded-full px-2 py-1 w-3 h-3  text-gray-500 border-gray-500"
              } border rounded-full px-2 py-1`}
            >
              4
            </span>
            <span className="text-gray-600">Amount</span>
          </li>
          {page >= 17 && page <= 19 && (
            <div className="">
              <li className="mt-4 w-max-content pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 17
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Total amount for new tenant or buyer
                </span>
              </li>
              <li className="mt-4 w-max pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 18
                        ? "border-2  w-3 h-3 border-green-500 mr-4 "
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Renewal amount and recurring fees
                </span>
              </li>
              <li className="mt-4 w-max pl-1">
                <span className="text-gray-600 flex">
                  {" "}
                  <div
                    className={`${
                      progress >= 19
                        ? "border-2  w-3 h-3 border-green-500 mr-4"
                        : "border-2 w-3 h-3   border-gray-500 mr-4 "
                    }`}
                  ></div>
                  Total agreement period
                </span>
              </li>
            </div>
          )}
        </ul>
        {/* Signining Date */}
        <ul className=" list-inside text-xs mt-4 w-2/3 pl-1">
          <li className={`${progress >= 0 ? "text-green-500" : ""} list-none`}>
            <span
              className={`${
                progress >= 20
                  ? "border rounded-full px-2 py-1  w-3 h-3 bg-green-500 text-white border-green-500"
                  : "border rounded-full px-2 py-1 w-3 h-3  text-gray-500 border-gray-500"
              } border rounded-full px-2 py-1`}
            >
              5
            </span>
            <span className="text-gray-600">Signing date</span>
          </li>
        </ul>
        <ul className=" list-inside text-xs mt-4 w-2/3 pl-1">
          <li className={`${progress >= 0 ? "text-green-500" : ""} list-none`}>
            <span
              className={`${
                progress >= 21
                  ? "border rounded-full px-2 py-1  w-3 h-3 bg-green-500 text-white border-green-500"
                  : "border rounded-full px-2 py-1 w-3 h-3  text-gray-500 border-gray-500 "
              }`}
            >
              6
            </span>
            <span className="text-gray-600">Summary</span>
          </li>
        </ul>
      </div>
    );
  };
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

      default:
        // return <FirstForm formData={formData} setFormData={setFormData} />;
        return <h1>Your request has been submitted </h1>;
    }
  };

  return (
    <section className="flex justify-between w-full ">
      <span className=" w-1/2 ml-2 mt-8 w-2/3 pl-1 ">
        {" "}
        <ProspectDash />
      </span>
      <div className="flex flex-col justify-between w-full  border  border-primary py-8 px-4 mt-8 w-2/3 pl-1">
        <div>{conditionalComponent()}</div>
        <main className="flex justify-end border-green-500">
          <div>
            {" "}
            {page >= 1 && (
              <button
                onClick={handleBack}
                className="mr-4 border py-1 px-8 border-primary rounded text-primary"
              >
                Back
              </button>
            )}
          </div>

          <button onClick={handleSubmit}>
            <div className="bg-primary py-1 px-8 mr-2 rounded text-white">
              {page >= 0 && "Continue"}
            </div>
          </button>
        </main>
      </div>
    </section>
  );
};

export default ProspectForm;
