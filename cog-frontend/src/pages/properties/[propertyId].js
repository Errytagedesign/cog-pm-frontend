import Link from "next/link";
import Image from "next/image";
import foward from "../../../public/assets/icons/foward.png";
import backward from "../../../public/assets/icons/backward.png";
import RentalNavBar from "../../../components/rentalNavbar";
const Property = ({ property }) => {
  return (
    <main>
      <RentalNavBar />
      <h1 className="w-3/4 m-auto font-bold">Rental Summary</h1>
      <section className="w-3/4 m-auto border border-managerColor my-12">
        <div className="flex justify-between  relative ">
          <div className="pl-8 mt-4">
            {property.location[0].city}
            <p className="text-lightGrey pt-2">
              {property.location[0].address}
            </p>
          </div>
          <div className="text-xs absolute bottom-0 left-1/3 ">
            {" "}
            Listed By :{" "}
            <Link href="#" className="text-primary underline font-bold">
              {property.owner}
            </Link>
          </div>
          <div className="absolute bottom-0 left-3/4 ml-28 ">
            <button className="bg-primary items-center py-2 px-6 rounded text-xs   text-white ">
              Apply Now
            </button>
          </div>
        </div>
        <hr className="mt-4" />
        <main className="flex justify-between mt-4 pl-8">
          <div>
            <Image
              src={`/assets/images/${property.image}`}
              width={200}
              height={800}
              alt="property-Image"
            />
            <div className="flex  justify-center mt-4">
              <div className="flex items-center bg-lightGrey p-2 cursor-pointer  rounded hover:bg-primary h-1/2 my-auto">
                <Image
                  src={backward}
                  alt="backward-icon"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="items-center flex p-4 border-rounded">
                <Image
                  src={`/assets/images/${property.image}`}
                  width={50}
                  height={60}
                  alt="Property Image"
                />
              </div>
              <div className="items-center flex p-4 border-rounded">
                <Image
                  src={`/assets/images/${property.image}`}
                  width={50}
                  height={60}
                  alt="Property Image"
                />
              </div>
              <div className="flex items-center bg-lightGrey p-2 cursor-pointer  rounded hover:bg-primary h-1/2 my-auto">
                <Image
                  src={foward}
                  alt="foward-icon"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <p>Listing Details</p>
            <section className="flex justify-between">
              <div className="border pl-8 pr-40 bg-cardColor">
                <div className="mb-8 mt-2">
                  <p className="mb-4">Rent</p>
                  <p>{property.rent}</p>
                </div>
                <div className="mb-12">
                  <p>Available Date</p>
                  <p>{property.availableDate}</p>
                </div>
              </div>
              <div className="border border-managerColor w-2/5 h-max mr-8 pl-4 bg-cardColor">
                <p className="pt-4">Application Fee</p>
                <p className="pt-2 pb-14 ">{property.applicationFee}</p>
              </div>
            </section>
          </div>
        </main>
        <section className="flex justify-between w-3/4 ml-12 mt-4">
          <div>
            <p>Unit Images</p>
          </div>
          <div>
            <p>Unit Details</p>
          </div>
        </section>
        <hr className="mb-4" />
        <section className="text-xs text-lightGrey flex justify-between w-3/6 ml-12">
          <div>
            BEDROOMS
            <p className="py-2">
              {property.bedroom} Bed{property.bedroom > 1 ? "s" : ""}
            </p>
            <p className="uppercase py-2">Unit Description</p>{" "}
            <p>{property.unitDescription}</p>
            <p className="uppercase  pt-4">Unit Features</p>{" "}
            <p>{property.unitFeatures}</p>
          </div>
          <div>
            RESTROOMS
            <p className="py-2">
              {property.restroom} Restroom{property.restroom > 1 ? "s" : ""}
            </p>
          </div>
          <div>
            SIZE
            <p className="py-2">{property.size}m2</p>
          </div>
        </section>
        {/* <section className="flex justify-between w-3/4 mt-24 m-auto">
      <div>
        <p>Property Details</p>

        <div className="text-xs text-lightGrey">
          <div>
            <p className="uppercase pb-2 pt-4">Year Built</p> <p>2022</p>
          </div>
          <div>
            <p className="uppercase pb-2 pt-4">Property Description</p> <p>2022</p>
          </div>
          <div>
            <p className="uppercase pb-2 pt-4">Property Featured</p> <p>2022</p>
          </div>
        </div>
      </div>
    </section> */}

        <section className="mb-24">
          <div className="flex justify-between w-3/4 ml-12 mt-14">
            <p>Property Details</p> <p>Property Details</p>{" "}
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between w-3/4 ml-12 mt-2">
            <div className="text-xs text-lightGrey">
              <div>
                <p className="uppercase pb-2 pt-4">Year Built</p> <p>2022</p>
              </div>
              <div>
                <p className="uppercase pb-2 pt-4">Property Description</p>{" "}
                <p>2022</p>
              </div>
              <div>
                <p className="uppercase pb-2 pt-4">Property Featured</p>{" "}
                <p>2022</p>
              </div>
            </div>
            <p>
              <Image
                src={`/assets/images/${property.image}`}
                width={100}
                height={100}
                alt="Property Image"
              />
            </p>{" "}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Property;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:4000/properties");
  const data = await response.json();

  const paths = data.map((property) => {
    return {
      params: {
        propertyId: `${property.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);

  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/properties/${params.propertyId}`
  );
  const data = await response.json();

  return {
    props: {
      property: data,
    },
  };
}
