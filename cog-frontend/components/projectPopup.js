import Image from "next/image";
import eyeimage from "../public/assets/icons/eye.png";
import addimage from "../public/assets/icons/fi_plus-circle.png";
import Link from "next/link";
const ProjectPopUP = ({ isClicked, handleClose }) => {
  return (
    <div
      className={`popup${
        isClicked ? "open" : ""
      } border-red flex justify-end mt-1 absolute right-36 bg-white`}
    >
      <div className="border border-blue-200  px-4 text-sm">
        <div className="flex">
          <Link href="/dashboard/agency/newprospect">
            <button className="flex items-center">
              <span>
                <Image src={addimage} className="mr-2" />
              </span>
              Add new prospect
            </button>
          </Link>
        </div>
        <div className="flex">
          <button className="flex items-center">
            <span>
              <Image src={eyeimage} className="mr-2" />
            </span>
            View all prospects
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectPopUP;
