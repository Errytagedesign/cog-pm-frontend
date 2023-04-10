import { useRouter } from "next/router";
const RentalId = () => {
  const router = useRouter()
  const rentalId = router.query.rentalId
  return (
    <div>
      <h1>Details about rents {rentalId}</h1>
    </div>
  );
};

export default RentalId;
