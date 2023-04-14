import Link from "next/link";
import Image from "next/image";
const PropertyList = ({ properties }) => {
  return (
    <div>
      <h1 className="w-4/5 m-auto">List of Properties</h1>
      <div className="">
        {properties.map((asset) => {
          return (
            <div
              key={asset.key}
              className="border border-gray-300 m-auto flex items-center w-4/5"
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
                    <h2 className="text-xs text-lightGrey py-4">{asset.city}</h2>
                    <h2 className="pb-4">{asset.name}</h2>
                    <small className="text-lightGrey "> {asset.descriptionn}</small>
                    <div className="flex justify-between relative top-10">
                        <h2 className="absolute font-bold text-primary">{asset.price}</h2>
                        <h2 className="absolute left-3/4 font-bold">{asset.available}</h2>
                    </div>
                  </div>
                </div>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PropertyList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/properties");
  const data = await response.json();

  return {
    props: {
      properties: data,
    },
  };
}
