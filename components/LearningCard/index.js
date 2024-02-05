import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const LearningCard = ({
  imageSrc,
  title,
  desc,
  width,
  height,
  buttonNotShow,
}) => {
  return (
    <div className="flex flex-col items-center justify-centerrounded-md">
      <div className="flex items-center justify-center ">
        <Image
          src={imageSrc}
          alt={"image"}
          objectFit="contain"
          width={width}
          height={height}
          className="rounded-md"
          quality={100}
        />
      </div>
      <div className="mt-8 text-center max-w-64">
        <h3 className="mb-2 text-xl font-bold text-blueColor">{title}</h3>
        <p className="my-4 text-sm text-grayColor">{desc}</p>
      </div>
    </div>
  );
};

export default LearningCard;
