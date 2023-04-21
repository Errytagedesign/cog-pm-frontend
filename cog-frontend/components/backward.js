import backward from "../public/assets/icons/backward.png";
import Image from "next/image";
const Backward = () => {
  return (
    <div className="flex items-center bg-lightGrey p-2 cursor-pointer  rounded hover:bg-primary h-1/2 my-auto">
      <Image src={backward} alt="backward-icon" width="auto" height="auto" />
    </div>
  );
};

export default Backward;
