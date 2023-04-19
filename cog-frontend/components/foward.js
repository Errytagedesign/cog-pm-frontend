import foward from '../public/assets/icons/foward.png'
import Image from 'next/image';
const Foward = () => {
  return (
    <div className="flex items-center bg-lightGrey p-2 cursor-pointer  rounded hover:bg-primary h-1/2 my-auto">
      <Image src={foward} alt="foward-icon" width="auto" height="auto" />
    </div>
  );
};

export default Foward;