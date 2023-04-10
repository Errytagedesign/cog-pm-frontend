import Link from "next/link";
import RentalId from "./[rentalId]";
import propertyList from '../../../Data/property'
const Rentals = () => {
  console.log(propertyList);
  return (
    <>
      {/* <Link href='/rentals/rentalId'>
      <h1>Hello World</h1>
      </Link>
      <h1>Hello World</h1>
      <h1>Hello World</h1> */}
      {
        propertyList.map((props) => {
          return(
            <div>
              {props.name}
            </div>
          )
        })
      }
    </>
  );
};

export default Rentals;
