import Image from "next/image";
import React from "react";

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
          <div className="flex gap-2">
            <div className=" relative h-[500px] w-[200px]">
              <Image
                alt="image"
                src="/images/about-1.webp.png"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            {/* <div className="inset-0 flex items-center justify-center ">
              <Image
                alt="11d logo"
                src="/images/information-img.webp.png"
                objectFit="contain"
                quality={100}
                width={200}
                height={900}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeShootingSection;
