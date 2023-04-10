import { useRouter } from "next/router";
const RentalId = (property) => {
  const router = useRouter()
  const {rentalId} = router.query
  
  return (
    <div>
      <h1>Details about rents {rentalId}</h1>
       {rentalId} 
    </div>
  );
};

export default RentalId;
