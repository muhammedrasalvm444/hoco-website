import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProspectiveSection = () => {
  return (
    <div>
      <div className=" relative flex items-center justify-center pr-[6rem] pl-[13rem] py-20 mx-32 ml-[28rem] bg-bgLightColor">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 text-4xl font-extrabold text-blueColor ">
            <h1>Prospective Parent</h1>
            <h1>
              <span className="text-yellowColor">Information</span> Event
            </h1>
          </div>
          <div className="flex gap-2 my-6">
            <div className="text-base font-normal text-grayColor">
              <p>
                Founded in 2004, Hoco is the world’s most experienced Online
                home study &
              </p>
              <p> homeschooling online provider.</p>
              <p className="mt-3">
                We’re proud to say that one of our students was XYZ, who studied
                for his London University law degree with
                <span className="font-bold text-black"> Hoco</span> – an
                inspiration to All home learners
              </p>

              <p>everywhere! Let’s join Hoco and start learning!</p>
              <button
                className={` text-black bg-lightBlueColor px-4 py-3  font-medium  duration-500 mt-6  rounded
    hover:bg-green-600`}
              >
                <div className="flex items-center justify-center gap-2 text">
                  <p>Know More About Us</p>
                  <FaLongArrowAltRight className="text-black" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-[-327px] top-[88px] ">
          <Image
            src={"/images/information.png"}
            alt={"image"}
            objectFit="contain"
            width={496}
            height={419}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProspectiveSection;
