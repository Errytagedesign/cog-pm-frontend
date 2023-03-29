import Image from "next/image";
import React from "react";
import styles from "./Product.module.scss";
import property from "../../public/assets/images/property.png";
import Link from "next/link";
function Product() {
  return (
    <main className={`${styles.product} flex flex-col`}>
      <h4> Property information</h4>

      <article className="flex flex-row justify-between">
        <section
          className={`${styles.property} flex flex-row justify-between items-center `}
        >
          <section className="flex flex-row justify-between items-center">
            <div className={`${styles.ImageContainer} mr-4 `}>
              <Image src={property} alt="cog-property" />
            </div>
            <div className="flex flex-col ">
              <div>
                <h3>22, Awolo road, ikeja</h3>
                <small> Lagos. 100001</small>
                <h3>2 Bed l 1 Bath l 2000 sqft</h3>
              </div>

              <Link href="#" className="mainColor mt-2">
                {" "}
                View listing{" "}
              </Link>
            </div>
          </section>

          <div>
            <h3 className="mainColor"> $2000/month</h3>
            <small>Available Dec 1</small>
          </div>
        </section>

        <aside className="bg-[#F5F5F5]  flex flex-col justify-between">
          <small className="p-5"> Appliation fee </small>
          <div className="p-5 py-8">
            <small>Due Today</small>
            <h3> $40:00 </h3>
          </div>
        </aside>
      </article>
    </main>
  );
}

export default Product;
