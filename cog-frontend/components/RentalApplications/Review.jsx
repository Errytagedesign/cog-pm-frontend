import React from "react";
import Product from "../Product/Product";
import styles from "./RentalForm.module.scss";

function Review({ data, setData }) {
  console.log(data);
  return (
    <div className={`${styles.review} `}>
      <Product />

      <section>
        <div className={styles.prevData}>
          <h3> Application Type </h3>
          <small> {data.applicationType}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Application Name </h3>
          <small> {data.applicantName}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Enterprise Sector </h3>
          <small> {data.enterpriseSector}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Applicant incorporation number </h3>
          <small> {data.applicantNumber}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Applicant incorporation date </h3>
          <small> {data.applicantDate}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Contact person </h3>
          <small> {data.contactPerson}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Purpose of rental to applicant </h3>
          <small> {data.purposeOfRent}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Applicant job title </h3>
          <small> {data.jobTitle}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Number of personnel with permanent access to property </h3>
          <small> {data.numofPeopleWithAcess}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Vehicle number </h3>
          <small> {data.vehicleNumber}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Vehicle class </h3>
          <small> {data.vehicleClass}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Desired move in date </h3>
          <small> {data.moveIndate}</small>
        </div>
        <div className={styles.prevData}>
          <h3> Potential inspection date </h3>
          <small> {data.inspectDate}</small>
        </div>
      </section>
    </div>
  );
}

export default Review;
