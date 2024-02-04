import React from "react";
import { StyledMainH1Tag } from "../StyledMainH1Tag";
import Image from "next/image";
import CoursesCard from "../CoursesCard";

const CoursesSection = () => {
  const items = [
    {
      id: 1,
      imageSrc: "/images/primary.webp.png",
      title: "Primary schooling",
      description:
        "Hoco Primary homeschooling courses have been prepared for children aged 5 – 10. They are designed to cover Years 1 – 6.",
    },
    {
      id: 2,
      imageSrc: "/images/lower.webp.png",
      title: "Lower Secondary",
      description:
        "Hoco has designed its Lower Secondary homeschooling courses (Years 7, 8 and 9 in the UK – typically ages 11-13)",
    },
    {
      id: 3,
      imageSrc: "/images/igcse.webp.png",
      title: "IGCSE Preparation",
      description:
        "The IGCSE is the world’s most popular exam qualification for 14 to 16 year olds, and the Cam bridge IGCSE is recognised worldwide.",
    },
    {
      id: 4,
      imageSrc: "/images/cources.webp.png",
      title: "A levels Courses",
      description:
        "A levels are recognised by employers and universities alike as the “gold standard” of British Secondary education.",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <StyledMainH1Tag text={"Home Education Courses From"} />
        <h1 className="gap-2 mt-2 text-5xl font-extrabold text-yellowColor">
          Primary <span className=" text-blueColor"> To</span> A Levels
        </h1>
      </div>
      <div className="mx-3">
        <div className="grid grid-cols-1 gap-4 my-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {items.map((item) => (
            <CoursesCard
              imageSrc={item?.imageSrc}
              title={item?.title}
              desc={item?.description}
              key={item?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
