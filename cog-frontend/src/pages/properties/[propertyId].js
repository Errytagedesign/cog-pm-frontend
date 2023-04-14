import Link from "next/link";
import Image from "next/image";
import foward from "../../../public/assets/icons/foward.png";
import backward from "../../../public/assets/icons/backward.png";
const Property = ({ property }) => {
  return (
    <section className="w-3/4 m-auto ">
      <div className="flex justify-between  relative ">
        <div>
          {property.location[0].city}
          <p>{property.location[0].address}</p>
        </div>
        <div className="text-xs absolute bottom-0 left-1/3">
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
      <main className="flex justify-between mt-4">
        <div>
          <Image
            src={`/assets/images/${property.image}`}
            width={200}
            height={800}
            alt="property-Image"
          />
          <div className="flex  justify-between mt-4">
            <div className="flex items-center bg-black">
              <Image src={backward} alt="backward-icon" />
            </div>
            <div className="items-center flex p-4 border-rounded">
            <Image
              src={`/assets/images/${property.image}`}
              width={50}
              height={60}
            />
            </div>
            <Image
              src={`/assets/images/${property.image}`}
              width={50}
              height={60}
            />
            <div className="flex items-center justify-center border-2 border-red-500   bg-black">
              <Image src={foward} alt="foward-icon" />
            </div>
          </div>
        </div>
        <div>lwflwf</div>
      </main>
    </section>
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
