import Image from "next/image";
import React from "react";

const CompanySection = () => {
  const icons = [
    "/images/facebook.svg",
    "/images/twitter.svg",
    "/images/linkedin.svg",
    "/images/instagram.svg",
  ];
  return (
    <div>
      <div className="flex items-center relative w-24 md:w-[136px] lg:w-[136px] h-12 lg:h-[36px] md:h-[36px]  cursor-pointer hover:transition-transform duration-700 ease-out transform hover:scale-110">
        <Image
          alt="11d logo"
          src="/images/footer-logo.png"
          layout="fill"
          objectFit="contain"
          quality={100}
          className=""
        />
      </div>
      <div className="text-grayColor">
        <p className="mt-4">We help you to hape your child’s</p>
        <p className="">education. Join us for a live presentation</p>
        <p>and question and answer.</p>
      </div>
      <div>
        <div className="flex gap-2 my-5">
          {icons.map((icon, index) => (
            <div
              className="flex items-center justify-center px-2 py-1 bg-white"
              key={`icons-${index}`}
            >
              <Image
                key={index}
                src={icon}
                width={9}
                height={14}
                alt={`Social Icon ${index + 1}`}
                className="" // Adjust the margin as needed
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
