import React from "react";

import styles from "./RentalForm.module.scss";
function Apply() {
  return (
    <div className={`${styles.apply} flex flex-col  `}>
      <form>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Application Type"> Application Type</label>

          <select
            name="applicationType"
            // className={`${styles.inputContainer} form-select`}
            // value={uploadData.category}
            // onChange={handleChange}
          >
            <option> Select application type </option>
            <option value="Individual"> Individual </option>
            <option value="Company"> Company </option>
          </select>
        </div>

        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Applicant incorporation number">
            {" "}
            Applicant Name
          </label>

          <input type="text" name="applicantName" placeholder="your name" />
        </div>

        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Enterprise sector"> Enterprise sector</label>

          <select
            name="EnterpriseSector"
            // className={`${styles.inputContainer} form-select`}
            // value={uploadData.category}
            // onChange={handleChange}
          >
            <option> Select Enterprise sector </option>
            <option value="Individual"> Individual </option>
            <option value="Company"> Company </option>
          </select>
        </div>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Applicant incorporation number">
            {" "}
            Applicant incorporation number
          </label>

          <input
            type="text"
            name="applicantNumber"
            placeholder="your incorporation number"
          />
        </div>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Applicant incorporation date">
            {" "}
            Applicant incorporation date
          </label>

          <input
            type="date"
            name="applicantDate"
            placeholder="your incorporation date"
          />
        </div>

        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Contact person"> Contact person</label>

          <input
            type="text"
            name="contactPerson"
            placeholder="Contact person"
          />
        </div>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Purpose of rental to applicant">
            {" "}
            Purpose of rental to applicant
          </label>

          <input
            type="text"
            name="purposeOfRent"
            placeholder="Purpose of rental to applicant"
          />
        </div>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Applicant job title"> Applicant job title</label>

          <input
            type="text"
            name="jobTitle"
            placeholder="Applicant job title"
          />
        </div>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Number of personnel with permanent access to property">
            {" "}
            Number of personnel with permanent access to property
          </label>

          <input
            type="text"
            name="numofPeopleWithAcess"
            placeholder="Number of personnel with permanent access to property"
          />
        </div>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Vehicle number"> Vehicle number</label>

          <input
            type="text"
            name="VehicleNumber"
            placeholder="Vehicle number"
          />
        </div>

        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Vehicle class"> Vehicle class</label>

          <input type="text" name="VehicleClass" placeholder="Vehicle class" />
        </div>

        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Desired move in date"> Desired move in date</label>

          <input
            type="date"
            name="moveIndate"
            placeholder="Desired move in date"
          />
        </div>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Potential inspection date">
            {" "}
            Potential inspection date
          </label>

          <input
            type="date"
            name="moveIndate"
            placeholder="Potential inspection date"
          />
        </div>
      </form>
    </div>
  );
}

export default Apply;
