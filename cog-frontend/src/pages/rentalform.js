import React, { Children } from "react";
import MultiStep from "react-multistep";
import Apply from "../../components/RentalApplications/Apply";
import Complete from "../../components/RentalApplications/Complete";
import Payment from "../../components/RentalApplications/Payment";
import Review from "../../components/RentalApplications/Review";

import styles from "../styles/RentalStyle.module.scss";

export default function rentalForm() {
  const formSteps = [
    { title: "Apply", component: <Apply /> },
    { title: "Review", component: <Review /> },
    { title: "Payment", component: <Payment /> },
    { title: "Complete", component: <Complete /> },
  ];
  return (
    <main className={`${styles.container}`}>
      <h2> Rental application</h2>
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
