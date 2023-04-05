import React, { useState } from "react";
import MultiStep from "react-multistep";
// import Product from "../../components/Product/Product";
import Apply from "../../components/RentalApplications/Apply";
import Complete from "../../components/RentalApplications/Complete";
import Payment from "../../components/RentalApplications/Payment";
import Review from "../../components/RentalApplications/Review";

import styles from "../styles/RentalStyle.module.scss";

export default function RentalForm() {
  const InistialState = {
    applicationType: "",
    applicantName: "",
    enterpriseSector: "",
    applicantNumber: "",
    applicantDate: "",
    contactPerson: "",
    purposeOfRent: "",
    jobTitle: "",
    numofPeopleWithAcess: "",
    vehicleNumber: "",
    vehicleClass: "",
    moveIndate: "",
    inspectDate: "",
  };

  const [data, setData] = useState(InistialState);

  const formSteps = [
    { title: "Apply", component: <Apply data={data} setData={setData} /> },
    { title: "Review", component: <Review data={data} setData={setData} /> },
    { title: "Payment", component: <Payment data={data} setData={setData} /> },
    {
      title: "Complete",
      component: <Complete data={data} setData={setData} />,
    },
  ];
  return (
    <main className={`${styles.container}`}>
      <h2> Rental application</h2>
      {/* <Product /> */}
      <section className={`${styles.formContainer}`}>
        <MultiStep
          //   className={`${styles.formsteps}`}
          activeStep={0}
          //   showNavigation={true}
          steps={formSteps}
          nextButton={{
            style: {
              background: "var(--mainColor)",
              borderRadius: "4px",
              padding: ".7em 2em",
              color: "white",
            },
            title: "Continue",
          }}
          prevButton={{
            style: {
              background: "transparent",
              border: " solid 1px var(--mainColor)",
              borderRadius: "4px",
              padding: ".7em 2em",
              color: "var(--mainColor)",
              marginRight: ".5em",
            },
            title: "Edit",
          }}
          nextStyle={styles.formButton}
        />
      </section>
    </main>
  );
}
