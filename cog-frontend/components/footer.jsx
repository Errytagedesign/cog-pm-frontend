import React from "react";
import Image from "next/image";
import Twitter from '../public/assets/icons/twitter.png'
import instagram from '../public/assets/icons/instagram.png'
import facebook from '../public/assets/icons/facebook.png'
import email from '../public/assets/icons/email.png'
const Footer = () => {
  return (
    <section className=" justify-between  m-auto bg-primary text-white">
      <div className="w-3/4 flex justify-between m-auto py-8">
        <div className="">
          <div className="cursor-pointer">About Us</div>
          <div className="pt-6 cursor-pointer"> FAQs</div>
          {/* <div className="pt-6 cursor-pointer">Terms & Condition</div> */}
        </div>
        <div className="cursor-pointer">
          <div>Privacy Policy</div>
          <div className="pt-6 cursor-pointer">Terms & Condition</div>
        </div>
        <div className="">
          <div>
            16, Moshalasi Street, off <br /> Oko-awo, Lagos Island, Lagos
          </div>
          <div className="pt-6 cursor-pointer">www.cog.ng</div>
          <div className="pt-6 cursor-pointer">+234 814 628 1622</div>
        </div>
      </div>
      <div className="w-3/4 m-auto  rounded">
        <hr />
      </div>
      <div className="w-3/4 m-auto">
        <div className="flex mt-2">
          <span className="bg-white p-2 m-2 rounded-full cursor-pointer"><Image src={Twitter} alt='Twitter Icon'/></span>
          <span className="bg-white p-2 m-2 rounded-full cursor-pointer"><Image src={instagram} alt='Twitter Icon'/></span>
          <span className="bg-white p-2 m-2 rounded-full cursor-pointer"><Image src={facebook} alt='facebook icon'/></span>
          <span className="bg-white p-2 m-2 rounded-full cursor-pointer"><Image src={email} alt='email icon'/></span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
