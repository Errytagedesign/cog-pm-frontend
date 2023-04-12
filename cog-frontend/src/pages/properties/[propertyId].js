const Property = ({ property }) => {
  return (
    <div>
      {property.id} {property.name} {property.descriptionn}
    </div>
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
    // paths: [
    //   {
    //     params: { propertyId: "1" },
    //   },
    //   {
    //     params: { propertyId: "2" },
    //   },
    //   {
    //     params: { propertyId: "3" },
    //   },
    //   {
    //     params: { propertyId: "4" },
    //   },
    //   {
    //     params: { propertyId: "5" },
    //   },
    //   {
    //     params: { propertyId: "6" },
    //   },
    // ],
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
