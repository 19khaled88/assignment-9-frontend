import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { BsCheckCircleFill } from "react-icons/bs";
const pool_8 = "/pool-8.jpg";
const pool_9 = "/pool-9.jpg";
const pool_7 = "/pool-7.png";
const pool_6 = "/pool-6.png";

const Upcomming = () => {
  return (
    <div className="px-6">
      <h1 className="text-center text-2xl py-10 text-gray-500">Upcoming</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
        <span className="w-full flex flex-col gap-2 border border-blue-300 p-2">
          <Image src={pool_6} width={1000} height={500} alt="No Image" />
          <div style={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}} className="pt-5 divide-y bg-gray-200 pl-3 pb-5 ">
            <span >
              <p>$10/Month</p>
              <h1>Professional</h1>
            </span>
            <span className="flex flex-col gap-1 pt-3">
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Table Rental 4 Hours</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> 6 Players Included</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> 20% Discount on Bar</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Private Coach</div>
              <div className="flex flex-row gap-3 items-center"><RxCrossCircled /> Free Soft Drinks</div>
              <div className="flex flex-row gap-3 items-center"><RxCrossCircled /> Free Consultation</div>
            </span>
          </div>
        </span>
        <span className="w-full flex flex-col gap-2 border border-blue-300 p-2">
          <Image src={pool_7} width={1000} height={500} alt="No Image" />
          <div style={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}} className="pt-5 divide-y bg-gray-200 pl-3 pb-5 ">
            <span >
              <p>$12/Month</p>
              <h1>Professional</h1>
            </span>
            <span className="flex flex-col gap-1 pt-3">
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Table Rental 4 Hours</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> 7 Players Included</div>
              <div className="flex flex-row gap-3 items-center"><RxCrossCircled /> 20% Discount on Bar</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Private Coach</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Free Soft Drinks</div>
              <div className="flex flex-row gap-3 items-center"><RxCrossCircled /> Free Consultation</div>
            </span>
          </div>
        </span>
        <span className="w-full flex flex-col gap-2 border border-blue-300 p-2">
          <Image src={pool_8} width={1000} height={500} alt="No Image" /> <div style={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}} className="pt-5 divide-y bg-gray-200 pl-3 pb-5 ">
            <span >
              <p>$14/Month</p>
              <h1>Professional</h1>
            </span>
            <span className="flex flex-col gap-1 pt-3">
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Table Rental 4 Hours</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> 8 Players Included</div>
              <div className="flex flex-row gap-3 items-center"><RxCrossCircled /> 20% Discount on Bar</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Private Coach</div>
              <div className="flex flex-row gap-3 items-center"><RxCrossCircled /> Free Soft Drinks</div>
              <div className="flex flex-row gap-3 items-center"><RxCrossCircled /> Free Consultation</div>
            </span>
          </div>
        </span>
        <span className="w-full flex flex-col gap-2 border border-blue-300 p-2">
          <Image src={pool_9} width={1000} height={500} alt="No Image" />
          <div style={{boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}} className="pt-5 divide-y bg-gray-200 pl-3 pb-5 ">
            <span >
              <p>$16/Month</p>
              <h1>Professional</h1>
            </span>
            <span className="flex flex-col gap-1 pt-3">
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Table Rental 4 Hours</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> 9 Players Included</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> 20% Discount on Bar</div>
              <div className="flex flex-row gap-3 items-center"><RxCrossCircled /> Private Coach</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Free Soft Drinks</div>
              <div className="flex flex-row gap-3 items-center"><BsCheckCircleFill /> Free Consultation</div>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Upcomming;
