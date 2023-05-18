import Image from "next/image";
import Bell from "../../public/assets/icons/bell.png";
import PPImage from "../../public/assets/icons/ppimage.png";
const ProspectHeader = () =>{
    return(
       <div>
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
       </div>
    )
}

export default ProspectHeader;