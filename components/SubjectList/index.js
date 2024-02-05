"use clie";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";

const SubjectList = () => {
  const arraylist = [
    { id: 1, name: "English language", color: "white" },
    { id: 2, name: "Life Skills", color: "white" },
    { id: 3, name: "Coding & Tech", color: "white" },
    { id: 4, name: "Science & Nature", color: "white" },
    { id: 5, name: "Social Studies", color: "white" },
    { id: 6, name: "Health", color: "white" },
    { id: 7, name: "Health", color: "white" },
    { id: 8, name: "Health", color: "white" },
  ];
  return (
    <div className="">
      <div className="flex justify-between px-32 py-12 mx-12 ">
        <div>
          <h1 className="gap-2 my-2 text-5xl font-extrabold text-blueColor ">
            Find Your Classes{" "}
          </h1>
          <h1 className="text-5xl font-extrabold text-blueColor">
            By<span className="text-yellowColor"> Subject</span>
          </h1>
        </div>
        <button
          className={` text-blueColor bg-lightBlueColor px-4 py-1   duration-500 my-5  rounded font-bold
    hover:bg-blue-600`}
        >
          <div className="flex items-center justify-center gap-2 text">
            <p>View Courses</p>
            <FaLongArrowAltRight className="text-blueColor" />
          </div>
        </button>{" "}
      </div>
      <div className="">
        <div className="grid grid-cols-8 gap-4 my-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {arraylist?.map((item, index) => (
            <div
              key={index}
              className={`flex rounded-md h-[150px] w-[150px] bg-blueColor m-1`}
            >
              <h3
                className={`ml-2 text-xl font-bold text-${item?.color} mt-20`}
              >
                {item?.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectList;
