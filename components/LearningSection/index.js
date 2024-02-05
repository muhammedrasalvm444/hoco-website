import React from "react";
import { StyledMainH1Tag } from "../StyledMainH1Tag";
import CoursesCard from "../CoursesCard";
import LearningCard from "../LearningCard";
import Image from "next/image";

const LearningSection = () => {
  const items = [
    {
      id: 1,
      imageSrc: "/images/tailored-1.png",
      title: "Any Kid, Any Interest",
      width: 255,
      height: 255,
      description:
        "Hoco engages and inspires learning a wide variety of classes and subjects so the learners can dive deeper into it.",
    },
    {
      id: 2,
      imageSrc: "/images/single-tailored.png",
      buttonNotShow: true,
      width: 416,
      height: 459,
    },
    {
      id: 3,
      imageSrc: "/images/tailored-3.png",
      title: "Top Educators",
      width: 255,
      height: 255,
      description:
        "Hoco engages and inspires learning a wide variety of classes and subjects so the learners can dive deeper into it.",
    },
  ];
  return (
    <div className="py-10 mt-12 text-center bg-bgLightColor">
      <h1 className="relative gap-2 my-2 text-5xl font-extrabold text-blueColor m">
        Learning That’s <span className="text-orangeColor"> Tailored</span>{" "}
      </h1>
      <StyledMainH1Tag text={"To Them"} />
      <div className="absolute flex items-center justify-center md:right-[21rem] translate-y-[-8rem]">
        <Image
          alt="Image"
          src="/images/heading.png"
          width={50}
          height={50}
          quality={100}
          className="mx-auto md:mx-0" // Center on small screens, move to right on medium/large screens
        />
      </div>
      <div className="absolute flex items-center justify-center md:right-[8rem]">
        <Image
          alt="Image"
          src="/images/sun.png"
          width={50}
          height={50}
          quality={100}
          className="mx-auto md:mx-0" // Center on small screens, move to right on medium/large screens
        />
      </div>

      <div className="mx-40">
        <div className="grid grid-cols-1 gap-4 my-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {items.map((item) => (
            <LearningCard
              height={item?.height}
              width={item?.width}
              imageSrc={item?.imageSrc}
              title={item?.title}
              desc={item?.description}
              key={item?.id}
              buttonNotShow={item?.buttonNotShow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningSection;
