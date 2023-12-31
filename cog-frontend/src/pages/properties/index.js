import Link from "next/link";
import Image from "next/image";
import RentalNavBar from "../../../components/rentalNavbar";
import { useState } from "react";
import Pagination from "../../../components/pagination";
import { paginate } from "../../../helpers/paginate";

const PropertyList = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(properties, currentPage, pageSize);
  console.log(paginatedPosts);
  return (
    <div>
      <RentalNavBar />
      <h1 className="w-4/5 m-auto font-bold my-4">Rentals</h1>
      {/* <PropertyFilter /> */}
      <div className="">
        
        {paginatedPosts.map((asset) => {
          return (
            <div
              key={asset.key}
              className="border border-gray-300 rounded-l-xl m-auto flex items-center w-4/5"
            >
              <Link href={`properties/${asset.id}`}>
                <div className="flex ">
                  <div className="pr-8">
                    <Image
                      src={`/assets/images/${asset.image}`}
                      width={400}
                      height={800}
                    />{" "}
                  </div>
                  <div className=" w-full flex-col items-center pt-8">
                    <h2 className="block">{asset.address}</h2>{" "}
                    <h2 className="text-xs text-lightGrey py-4">
                      {asset.city}
                    </h2>
                    <h2 className="pb-4">{asset.name}</h2>
                    <small className="text-lightGrey ">
                      {" "}
                      {asset.descriptionn}
                    </small>
                    <div className="flex justify-between mt-8  w-full">
                      <h2 className="font-bold text-primary">{asset.price}</h2>
                      <h2 className=" left-full font-bold ">
                        {asset.available}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
              <hr />
            </div>
          );
        })}

        <Pagination
          items={properties.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

// const options = [
//   "Property Type",
//   "Office space",
//   "Whole home",
//   "Warehouse/storage facility",
//   "Hall",
//   "Land",
//   "Flat/apartment",
//   "Retail shop space",
// ];
// const baths = [3, 4, 5, 4];

// function PropertyFilter({properties}) {
//   console.log(properties);
//   // const [selectedOption, setSelectedOption] = useState([0]);
//   const [selectedSpace, setSelectedSpace] = useState([1]);
//   const handleOptionChange = (e) => {
//     setSelectedSpace(e.target.value);
//   };
//   function handleSubmit(event) {
//     event.preventDefault();
//   }
// console.log(selectedSpace);
//   return (
//    <div>
//      <form onSubmit={handleSubmit}>
//       <label htmlFor="dropdown"></label>
//       <select id="dropdown" value={selectedSpace} onChange={handleOptionChange}>
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>

//       <button>Submit</button>
//     </form>
//     {
      
//     }
//    </div>
//   );
// }
export default PropertyList;

export async function getStaticProps(context) {
  const response = await fetch("http://localhost:4000/properties");
  const data = await response.json();

  return {
    props: {
      properties: data,
    },
  };
}
