import Link from "next/link";

const Property = ({ property }) => {
  return (
    // <div>
    //   {property.id} {property.name} {property.descriptionn}
    // </div>
    <section>
      <div className="flex justify-between w-3/4 m-auto border-2 border-red-500">
        <div>{property.location[0].city}<p>{property.location[0].address}</p></div>
        <div className="text-"> Listed By : <Link href="#">{property.owner}</Link></div>
        <div ><button className="bg-primary items-center py-2 px-6 rounded text-white">Apply Now</button></div>
      </div>
      <main></main>
    </section>
  );
};

export default Property;

export async function getStaticPaths() {
    const response = await fetch("http://localhost:4000/properties");
    const data = await response.json();

    const paths = data.map(property => {
        return{
            params: {
                propertyId : `${property.id}`
            }
        }
    })
  return {
   
    paths,
    fallback: false
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
