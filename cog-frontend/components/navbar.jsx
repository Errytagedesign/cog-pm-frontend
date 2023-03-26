import Image from "next/image";
import logo1 from "../public/assets/icons/COG Logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between lg:px-24 items-center md:px-2">
        <div>
          <Image src={logo1} alt="Cog Logo" />
        </div>
        <div className="w-3/6">
          <ul className="flex justify-between ">
            <li className="px-4">Home</li>
            <li>For rentals</li>
            <li>For property managers/owners</li>
          </ul>
        </div>
        <div className="w-48">
          <ul  className="flex justify-between items-center">
            <li>About us</li>
            <li className="bg-primary text-white px-5 py-2 rounded">Sign in</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
