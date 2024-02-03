import { StyledButton } from "@/components/StyledButton";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ContentSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-5xl font-extrabold text-blueColor">
        <h1>Empowering</h1>
        <h1>Student’s</h1>
        <h1>Knowledge With</h1>
        <h1>Hoco School</h1>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold text-blueColor">
          12k+{" "}
          <span className="text-xl font-normal">
            Students enrolled al reaady
          </span>
        </h1>
      </div>
      <button
        className={` text-blueColor bg-yellowColor px-7 py-3 my-2 font-medium  duration-500  rounded
    hover:bg-green-600`}
      >
        <div className="flex items-center justify-center gap-2 font-semibold text">
          <p>Explore Classes</p>
          <FaLongArrowAltRight className="text-blueColor" />{" "}
        </div>
      </button>
    </div>
  );
};

export default ContentSection;
