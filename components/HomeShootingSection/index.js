import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const HomeShootingSection = () => {
  return (
    <div>
      <div className="flex mx-40 my-16">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 text-4xl font-extrabold text-blueColor ">
            <h1>Start Your Child’s</h1>
            <h1>
              <span className="text-yellowColor">Homeschooling </span>Online
            </h1>
            <h1>With Hoco</h1>
          </div>
          <div className="flex gap-2 my-6">
            <div className="mb-4 ">
              <Image
                src={"/images/about-1.webp.png"}
                alt={"image"}
                // layout="fill"
                objectFit="cover"
                width={306}
                height={419}
                className="rounded-md"
              />
            </div>
            <div className="mx-8 text-base font-normal text-grayColor">
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
                className={` text-black bg-lightBlueColor px-4 py-3  font-medium  duration-500 my-5  rounded
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
        <div className="flex flex-col gap-3">
          <div className="mb-4">
            <Image
              src={"/images/about-1.webp.png"}
              alt={"image"}
              width={306}
              height={419}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <button
            className={`text-white bg-blueColor px-2 py-3 font-small duration-500 my-1 rounded hover:bg-blue-600`}
          >
            <div className="flex items-center justify-center">
              <FiPhoneCall className="text-4xl text-yellowColor" />{" "}
              <div className="text-small">
                {/* Move the icon here */}
                <p className="text-sm text-formBgColor">
                  <span className="font-bold text-white">Call Us </span>For
                  Enquiry
                </p>
                <p className="text-sm text-formBgColor">+990 321 5369</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeShootingSection;
