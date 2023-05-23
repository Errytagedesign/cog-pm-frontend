import React from "react";

function ProspectSummary({ formData, setFormData }) {
  return (
    <section className="py-6 h-96 overflow-scroll">
      <div>
        <h1 className="font-bold text-gray-700">Prospect summary</h1>
      </div>
      <div className="mt-6">
        <small className="text-xs text-gray-700">
          Client Name: {formData.name}
        </small>{" "}
        <br />
        <small className="text-xs text-gray-700">
          Client Type: {formData.clientType}
        </small>
        <br />
        <small className="text-xs text-gray-700">
          Inbound Date: {formData.date}
        </small>
      </div>
      <div>
        <ul className="my-4 list-disc">
          <li className="list-disc">Verification checklist</li>
          <div className="flex justify-between w-4/5 text-xs text-gray-700 mt-2">
            <div>Tax report</div>
            <div>{`formData.file`}</div>
          </div>
        </ul>
      </div>
      <div>
        <ul className="my-4 list-disc">
          <li className="list-disc">Property details</li>
          <div className="flex justify-between  text-xs text-gray-700 mt-2">
            <div className=" w-full">
              <div className="flex justify-between  w-4/5">
                <span>Application type</span>
                <span>{`formData.applicationType`}</span>
              </div>
              <div className="flex justify-between  w-4/5">
                <span>Property Type</span>
                <span>{formData.propertyType}</span>
              </div>
              <div className="flex justify-between  w-4/5">
                <span>Location</span>
                <span>{formData.location}</span>
              </div>
              <div className="flex justify-between  w-4/5">
                <span>Unit ID</span>
                <span>{formData.unitId}</span>
              </div>
              <div className="flex justify-between  w-4/5 mt-2">
                <span>Unit Features</span>
                <span>
                  {" "}
                  {`${formData.bedRooms} bedrooms`}{" "}
                  <div>{`${formData.restRooms} rest rooms`}</div>{" "}
                  {/* {formData.restRooms != null ? formData.restRooms.value `rest rooms` : ""} */}
                  <div>{`${formData.sittingRooms} sitting rooms`}</div>
                </span>
              </div>
            </div>
            <div></div>
          </div>
        </ul>
        <ul className="my-4 list-disc">
          <li className="list-disc">Demography</li>
          <div className="flex justify-between  text-xs text-gray-700 mt-2">
            <div className=" w-full">
              <div className="flex justify-between  w-4/5">
                <span>Gender</span>
                <span>{formData.gender}</span>
              </div>
              <div className="flex justify-between  w-4/5">
                <span>Religion</span>
                <span>{formData.religion}</span>
              </div>
              <div className="flex justify-between  w-4/5">
                <span>Tribe</span>
                <span>{formData.ehtnic}</span>
              </div>
              <div className="flex justify-between  w-4/5">
                <span>Occupation</span>
                <span>{formData.profession}</span>
              </div>
              <div className="flex justify-between  w-4/5 ">
                <span>Age Range</span>
                <span>{formData.ageRange}</span>
              </div>
            </div>
            <div></div>
          </div>
        </ul>
        <div className="flex justify-between  w-4/5 ">
          <span>Potential move-in date</span>
          <span>{formData.potentialDate}</span>
        </div>
      </div>
    </section>
  );
}

export default ProspectSummary;

{
  /* <div>Application type</div>
              <div>Property Type</div>
              <div>Location </div>
              <div>Unit ID</div>
              <div className="my-2">Unit features</div> */
}

{
  /* <div>{`formData.file`}</div> */
}
{
  /* <div>{`formData.applicationType`}</div>
              <div>{`formData.propertyType`}</div>
              <div>{`formData.location`}</div>
              <div>{`formData.unitId`}</div>
              <div className="my-2">
                {`formData.restRooms`} <div>{`formData. bedRooms`}</div>{" "}
                <div>{`formData.sittingRooms`}</div>
              </div> */
}
