import React from "react";
import Product from "../Product/Product";
import styles from "./RentalForm.module.scss";

function Complete() {
  return (
    <div className={`${styles.complete} `}>
      {/* <aside className="bg-[#F5F5F5]  flex flex-col justify-between mb-8">
        <small className="p-5"> Appliation fee </small>
        <div className="p-5 py-8">
          <small>Due Today</small>
          <h3> $40:00 </h3>
        </div>
      </aside> */}

      <Product />

      <div className="">
        <p>
          Success! Your rental application for the above listed property has
          been sent to the property lister. Kindly await a response as soon as
          <br />
          possible Thank you!
        </p>
      </div>
    </div>
  );
}

export default Complete;
