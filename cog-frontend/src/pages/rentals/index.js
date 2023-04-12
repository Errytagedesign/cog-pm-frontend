import Link from "next/link";
import RentalId from "./[rentalId]";
import Image from "next/image";
import propertyList from '../../../Data/property'
const Rentals = () => {
  // console.log(propertyList);
  return (
    <>
      <section className="flex-col ">
      {
        propertyList.map((props) => {
          return(
            <Link href={`/rentals/${props.id}`}>
           <section className="flex m-auto justify-center ">
              <div><Image src={`/assets/images/${props.image}`} width={200} height={300}/></div>
              <article>
                <div>
                 <h2> {props.address}</h2>
                 <span> {props.city}</span>
                 <h2> {props.name}</h2>
                 <h2> {props.descriptionn}</h2>
                 <div className="flex justify-between">
                  <h2>{props.price}</h2>
                  <h2>{props.available}</h2>
                 </div>
                </div>
              </article>
            </section> 
            </Link>
          )
        })
      }
      </section>
    </>
  );
};

export default Rentals;
