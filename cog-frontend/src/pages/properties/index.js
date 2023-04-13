import Link from "next/link";
const PropertyList = ({ properties }) => {
  return (
    <div>
      <h1>List of Properties</h1>
      {properties.map((asset) => {
        return (
          <div key={asset.key}>
            <Link href={`properties/${asset.id}`}>
              <h2>
                {asset.id} {asset.name}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
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
