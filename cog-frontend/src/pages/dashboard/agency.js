import Dashboard from ".";
import Image from "next/image";
import Bell from "../../../public/assets/icons/bell.png";
import PPImage from "../../../public/assets/icons/ppimage.png";
import ProjectPopUP from "../../../components/projectPopup";
import card from "../../../public/assets/icons/card.png";
import bluecard from "../../../public/assets/icons/bluecard.png";
import circle from '../../../public/assets/icons/circle.png'
import { useState } from "react";
const Agency = () => {
  const [isClicked, setIsClicked] = useState(false);
  const togglePopup = () => {
    setIsClicked(!isClicked);
  };
  return (
    <section className="w-4/5 m-auto mt-6">
      <sction className="flex w-full">
        <section className="w-1/5 ">
          <Dashboard />
        </section>
        <main className="w-4/5">
          <div className="flex justify-between">
            <p className="flex items-center font-bold text-3xl text-gray-600">
              Prospects
            </p>
            <div className="flex items-center">
              <span>
                <Image src={Bell} width={20} />
              </span>
              <span className="ml-12">
                <Image src={PPImage} width={40} />
              </span>
            </div>
          </div>
          <span className="flex float-right text-xs text-gray-500">{`User ID: 12345678`}</span>
          <div className="flex flex-start justify-end mt-6">
            <button
              onClick={togglePopup}
              className=" rounded text-white bg-primary py-2 px-8"
            >
              Prospect manager
            </button>
          </div>
          <ProjectPopUP isClicked={isClicked} handleClose={togglePopup} />
          <section className="flex justify-between mt-4">
            <div className="w-2/6 text-white bg-primary pl-6 rounded-sm">
              <div className="flex justify-between  ">
                <span className="mt-4 mb-6">Total Prospects</span>
                <span className="pr-2 pt-2">
                  <Image src={card} />{" "}
                </span>
              </div>
              <p className="text-3xl mb-6">{`10`}</p>
              <p className="text-sm mb-4">
                +increases by {`30`}% since {`july 2022`}
              </p>
            </div>

            <div className="w-2/6 border border-blue-400 pl-6 rounded-sm ml-4">
              <div className="flex justify-between  ">
                <span className="mt-4 mb-6 text-sm text-blue-900 font-bold">
                  Converted propsects
                </span>
                <span className="pr-2 pt-2">
                  <Image src={bluecard} />{" "}
                </span>
              </div>
              <p className="text-3xl mb-6">{`5`}</p>
              <p className="text-sm mb-4 text-green-500 font-bold">
                +increases by {`30`}% since {`july 2022`}
              </p>
            </div>

            <div className="w-2/6 border border-blue-400 pl-6 rounded-sm ml-4">
              <div className="flex justify-between  ">
                <span className="mt-4 mb-6 text-sm text-blue-900 font-bold">
                  Pending prospects
                </span>
                <span className="pr-2 pt-2">
                  <Image src={bluecard} />{" "}
                </span>
              </div>
              <p className="text-3xl mb-6">{`5`}</p>
              <p className="text-sm mb-4 text-red-600 font-bold">
                +Decreased by {`30`}% since {`july 2022`}
              </p>
            </div>
          </section>
          <div className="flex flex-start justify-end  mb-4 mt-6">
            <button
             
              className=" rounded text-primary border border-primary py-2 px-8"
            >
              View custom report
            </button>
          </div>
          <section className="border-2 border-primary my-12 rounded-sm px-4 py-6">
            <div className="flex justify-between pb-6 ">
                <span className="font-bold text-xl text-gray-700">Recent Activities</span>
                <span className="cursor-pointer text-primary underline">View All</span>
                {/* We would be mapping some activities gotten from database here */}
                
            </div>
            <hr className="mb-2 border" />
            <section>
                <div className="flex items-center">
                    <div><Image src={circle}/></div>
                    <div className="ml-4">
                       <div className="font-bold">New rental lead for Ikorodu property</div>
                       <div className="text-gray-600 text-xs font-bold mt-2">Fri Jun 15,2022 GMT 13:00</div>
                    </div>
                </div>
                <hr className="mt-4 border"/>
            </section>
          </section>
        </main>
      </sction>
    </section>
  );
};

export default Agency;
