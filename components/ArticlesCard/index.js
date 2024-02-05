import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ArticlesCard = ({ imageSrc, title, desc, date }) => {
  return (
    <div className="rounded-md ">
      <div className="">
        <Image
          src={imageSrc}
          alt={"image"}
          objectFit="contain"
          width={406}
          height={419}
          className="rounded-md"
        />
      </div>
      <div className="">
        <h3 className="my-2 text-sm font-medium text-grayColor">{date}</h3>

        <h3 className="mb-2 text-lg font-bold text-blueColor">{title}</h3>
        <button
          className={` text-blueColor bg-lightBlueColor px-4 py-3    duration-500 my-5  rounded font-bold
    hover:bg-blue-600`}
        >
          <div className="flex items-center justify-center gap-2 text">
            <p>Read More</p>
            <FaLongArrowAltRight className="text-blueColor" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ArticlesCard;
