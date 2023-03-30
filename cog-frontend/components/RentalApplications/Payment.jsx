import React from "react";
import styles from "./RentalForm.module.scss";

function Payment() {
  return (
    <div className={`${styles.payment} flex flex-col mt-8  `}>
      <aside className="bg-[#F5F5F5]  flex flex-col justify-between mb-8">
        <small className="p-5"> Appliation fee </small>
        <div className="p-5 py-8">
          <small>Due Today</small>
          <h3> $40:00 </h3>
        </div>
      </aside>
      <button className="main-btn"> Proceed to submit application</button>
    </div>
  );
}

export default Payment;
