import React from "react";
import { StyledMainH1Tag } from "../StyledMainH1Tag";
import Image from "next/image";

const TestiMony = () => {
  const imagesArray = [
    { image: "/images/partner-1.png", id: 1 },
    { image: "/images/partner-2.png", id: 2 },
    { image: "/images/partner-3.png", id: 3 },
    { image: "/images/partner-4.png", id: 4 },
    { image: "/images/partner-5.png", id: 5 },
    { image: "/images/partner-6.png", id: 6 },
  ];

  return (
    <div className="mx-4 my-8 md:mx-8 lg:mx-20 xl:mx-32">
      <div className="text-center">
        <h1 className="gap-2 my-2 text-2xl font-extrabold md:text-5xl text-blueColor">
          Our Student's<span className="text-yellowColor"> Testimony</span> Is
          Our
        </h1>
        <StyledMainH1Tag text={"Strength & Inspiration"} />
      </div>
      <div className="flex gap-20 ">
        <div className="right-0 flex items-center justify-center ml-2 top-32 md:right-0">
          <Image
            alt="Image"
            src="/images/box.png"
            width={30}
            height={30}
            quality={100}
            className="mx-auto md:mx-0" // Center on small screens, move to right on medium/large screens
          />
        </div>
        <div className="flex flex-col items-center justify-center my-4 md:flex-row md:my-12">
          <div className="mb-4 md:mb-0">
            <Image
              src={"/images/testimony-1.png"}
              alt={"image"}
              objectFit="contain"
              width={207}
              height={224}
              className="rounded-md"
              quality={100}
            />
          </div>
          <div className="text-base font-normal leading-6 md:mx-8 md:text-lg text-grayColor">
            <p className="mb-2">
              “I come from a poor family. At home it’s one room, just a room we
              live in.
            </p>
            <p className="mb-2">
              {" "}
              When I was a child, I used to fear mathematics. But now, I am in
              love with
            </p>
            <p className="mb-2"> mathematics because of Hoco Homeschool.”</p>
            <h1 className="my-3 font-bold">JONATHON RONAN</h1>

            <div className="flex justify-between">
              {" "}
              <p>
                <span className="font-bold">A Level</span> Student
              </p>
              <div className="flex ">
                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={`dot-${index}`}
                    className="p-1 m-2 bg-grayColor"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="right-0 flex items-center justify-center ml-2 top-32 md:right-0">
          <Image
            alt="Image"
            src="/images/box.png"
            width={30}
            height={30}
            quality={100}
            className="mx-auto md:mx-0" // Center on small screens, move to right on medium/large screens
          />
        </div>
      </div>
      <div className="px-4 py-8 mx-auto md:px-8 lg:px-16 md:py-12 bg-bgLightColor">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {imagesArray.map((item) => (
            <div
              key={`image-${item?.id}`}
              className="flex items-center justify-center"
            >
              <Image
                src={item?.image}
                alt={"image"}
                width={100}
                height={100}
                className="rounded-md"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 text-center">
        <h1 className="gap-2 my-2 text-2xl font-extrabold md:text-5xl text-blueColor">
          We Have More Than <span className="text-orangeColor"> 1500+</span>
        </h1>
        <h1 className="text-3xl font-extrabold md:text-5xl text-blueColor">
          Experienced Teachers
        </h1>
        \
        <div className="flex flex-col items-center mt-8 md:items-start">
          <div className="mb-4 md:mb-0 md:mr-8">
            <Image
              src={"/images/profile.png"}
              alt={"image"}
              width={301}
              height={301}
              className="rounded-md"
              quality={100}
            />
          </div>
          <h1 className="mt-4 text-xl font-bold md:text-2xl text-blueColor">
            Hocococs
          </h1>
          <div className=""> </div>
        </div>
      </div>
    </div>
  );
};

export default TestiMony;
