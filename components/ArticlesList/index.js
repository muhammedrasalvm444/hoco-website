import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ArticlesCard from "../ArticlesCard";

const ArticlesList = () => {
  const items = [
    {
      id: 1,
      imageSrc: "/images/articles-1.png",
      date: "January 4, 2023",
      title: "Instill Confidence in Your Child Through Public Speaking",
    },
    {
      id: 2,
      date: "January 4, 2023",
      imageSrc: "/images/articles-2.png",
      title: "How Online Learning Supports Students With Autism",
    },
    {
      id: 3,
      imageSrc: "/images/articles-3.png",
      date: "January 4, 2023",
      title: "How To Habituate A Kg-2 Student In",
    },
    // {
    //   id: 4,
    //   imageSrc: "/images/articles-4.png",
    //   date: "January 4, 2023",
    //   title: "A levels Courses",
    // },
  ];
  const classes = [
    {
      id: 1,
      title: "Teach What You Love",
      description:
        "Join us on Outschool, where teachers set their own hours and teach the subjects.",
    },
    {
      id: 2,
      title: "Join Our Team",
      description:
        "Join us on Outschool, where teachers set their own hours and teach the subjects.",
    },
    {
      id: 3,
      title: "IGCSE Preparation",
      description:
        "Join us on Outschool, where teachers set their own hours and teach the subjects.",
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between px-32 py-12 mx-12 ">
        <div>
          <h1 className="gap-2 my-2 text-5xl font-extrabold text-blueColor ">
            Our <span className="text-yellowColor"> Articles</span> Helps You To
          </h1>
          <h1 className="text-5xl font-extrabold text-blueColor">
            Understand Bettey
          </h1>
        </div>
        <div className="gap-3 ">
          <button
            className={` text-blueColor bg-lightBlueColor px-3 py-2   duration-500   rounded font-bold
hover:bg-blue-600`}
          >
            <div className="flex items-center gap-2">
              <FaLongArrowAltLeft className="text-sm text-blueColor" />
            </div>
          </button>
          <button
            className={` text-blueColor bg-lightBlueColor px-3 py-2   duration-500   rounded font-bold ml-3
hover:bg-blue-600`}
          >
            <div className="flex items-center gap-2">
              <FaLongArrowAltRight className="text-sm text-blueColor" />
            </div>
          </button>{" "}
        </div>
      </div>
      <div className="ml-40">
        <div className="grid grid-cols-1 gap-4 my-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {items.map((item) => (
            <ArticlesCard
              imageSrc={item?.imageSrc}
              title={item?.title}
              desc={item?.description}
              key={item?.id}
              date={item?.date}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-around max-w-full px-12 py-12 bg-blueColor">
        {classes.map((item) => (
          <div className="flex flex-col items-center justify-center ">
            <h3 className="mb-2 text-lg font-bold text-white ">
              {item?.title}
            </h3>
            <p className="my-4 text-base text-center text-bgLightColor max-w-60">
              {item?.description}
            </p>
            <button
              className={` text-blueColor bg-lightBlueColor px-4 py-3    duration-500 my-5  rounded font-bold
    hover:bg-blue-600`}
            >
              <div className="flex items-center justify-center gap-2 text">
                <p>View Courses</p>
                <FaLongArrowAltRight className="text-blueColor" />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
