// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Navbar from "../../components/navbar";
import Image from "next/image";
import seacrh from "../../public/assets/icons/Search.png";
import stroke from "../../public/assets/icons/Stroke 1.png";
import Location from "../../public/assets/icons/Location.png";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <hr className="my-2 border-1 border-hr" />
      <Header />
      <Seacrh />
    </>
  );
}

const Header = () => {
  return (
    <header className="flex-col justify-center text-center">
      <h1 className="flex justify-center text-center text-primary mt-36 mb-2 text-4xl">
        The property rental process and <br /> experience just got better
      </h1>
      <small className="text-xs leading-snug text-lightGrey">
        Either you are a real estate renter, owner or manager, we make <br />{" "}
        your operations seamless.
      </small>
    </header>
  );
};

const Seacrh = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <>
      <main className="flex mt-10 bg-lighterGrey lg:w-1/2 md:w-3/4 m-auto justify-between h-10 pl-2">
        <div className="w-full flex items-center">
          <Image src={seacrh} />
          <input
            type="text"
            className="bg-lighterGrey h-full w-3/6 ml-2 pl-2 outline-none "
            placeholder="What property are you looking to rent?"
          />
          <Image src={stroke} className="items-center ml-2" />
          <Image src={Location} className="items-center ml-6 mr-4" />
          <input
            type="text"
            className="h-full bg-lighterGrey w-28 pl-2 outline-none"
            placeholder="Local Area"
          />
        </div>
        <div
          className="bg-primary text-white px-5 py-2 rounded-r"
          onClick={handleClick}
        >
          Submit
        </div>
      </main>
      <div>
        <ul className="flex justify-center mt-4 text-lightGrey">
          <li className="py-1 px-2">Higlights</li>
          <li className="py-1 px-2 mx-1 items-center  border-2 border-Grey rounded-full">Warehouse/storage facility</li>
          <li className="py-1 px-2 mx-1 items-center  border-2 border-Grey rounded-full">Flat/apartment</li>
          <li className="py-1 px-2 mx-1 items-center  border-2 border-Grey rounded-full">Whole home</li>
        </ul>
      </div>
    </>
  );
};
