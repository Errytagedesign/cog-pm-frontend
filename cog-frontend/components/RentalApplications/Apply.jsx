import { increament } from "@/features/rentalFormSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product/Product";

import styles from "./RentalForm.module.scss";
function Apply({ data, setData }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // console.log(data);

  const select = useSelector((state) => state);
  console.log(select);
  const dispatch = useDispatch();

  // const InistialState = {
  //   applicationType: "",
  //   applicantName: "",
  //   enterpriseSector: "",
  //   applicantNumber: "",
  //   applicantDate: "",
  //   contactPerson: "",
  //   purposeOfRent: "",
  //   jobTitle: "",
  //   numofPeopleWithAcess: "",
  //   vehicleNumber: "",
  //   vehicleClass: "",
  //   moveIndate: "",
  //   inspectDate: "",
  // };

  return (
    <div className={`${styles.apply}  `}>
      <Product />

      <form>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Application Type"> Application Type</label>

          <select
            name="applicationType"
            onChange={handleChange}
            // className={`${styles.inputContainer} form-select`}
            value={data.applicationType}
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

          <input
            type="text"
            onChange={handleChange}
            name="applicantName"
            value={data.applicantName}
            placeholder="your name"
          />
        </div>

        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Enterprise sector"> Enterprise sector</label>

          <select
            name="enterpriseSector"
            onChange={handleChange}
            value={data.enterpriseSector}
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
            onChange={handleChange}
            name="applicantNumber"
            value={data.applicantNumber}
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
            value={data.applicantDate}
            onChange={handleChange}
            placeholder="your incorporation date"
          />
        </div>

        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Contact person"> Contact person</label>

          <input
            type="text"
            name="contactPerson"
            value={data.contactPerson}
            onChange={handleChange}
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
            value={data.purposeOfRent}
            onChange={handleChange}
            placeholder="Purpose of rental to applicant"
          />
        </div>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Applicant job title"> Applicant job title</label>

          <input
            type="text"
            name="jobTitle"
            value={data.jobTitle}
            onChange={handleChange}
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
            onChange={handleChange}
            value={data.numofPeopleWithAcess}
            placeholder="Number of personnel with permanent access to property"
          />
        </div>
        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Vehicle number"> Vehicle number</label>

          <input
            type="text"
            name="vehicleNumber"
            value={data.vehicleNumber}
            onChange={handleChange}
            placeholder="Vehicle number"
          />
        </div>

        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Vehicle class"> Vehicle class</label>

          <input
            type="text"
            name="vehicleClass"
            value={data.vehicleClass}
            onChange={handleChange}
            placeholder="Vehicle class"
          />
        </div>

        <div className={`${styles.inputContainer} flex flex-col  `}>
          <label htmlFor="Desired move in date"> Desired move in date</label>

          <input
            type="date"
            name="moveIndate"
            value={data.moveIndate}
            onChange={handleChange}
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
            name="inspectDate"
            value={data.inspectDate}
            onChange={handleChange}
            placeholder="Potential inspection date"
          />
        </div>
      </form>

      {/* <button
        className="main-btn"
        onClick={() => {
          console.log("here");
          dispatch(increament());
        }}
      >
        {" "}
        try{" "}
      </button> */}
    </div>
  );
}

export default Apply;
