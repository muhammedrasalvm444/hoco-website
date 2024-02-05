// components/BannerSection.js

import React from "react";
import ContentSection from "./ContentSection";
import ContactForm from "./ContactForm";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="relative mt-7 md:mt-12 lg:mt-[7rem] bg-primaryColor flex flex-col items-center justify-between w-full">
      <div className="w-full md:h-[502px] lg:h-[702px] relative my-10 md:my-20 lg:my-20">
        <div className="relative flex flex-col items-center mx-4 md:flex-row md:justify-between lg:mx-12">
          <ContentSection />
          <ContactForm />
        </div>

        {/* Responsive Shape Image */}
        <div className="absolute right-0 flex items-center justify-center ml-2 top-32 md:right-0">
          <Image
            alt="Image"
            src="/images/tool-bar.png"
            width={30}
            height={30}
            quality={100}
            className="mx-auto md:mx-0" // Center on small screens, move to right on medium/large screens
          />
        </div>

        {/* Centered Image */}
        <div className="absolute inset-0 right-0 flex items-center justify-center hidden lg:block">
          <Image
            alt="Image"
            src="/images/banner-img-2.png"
            layout="fill"
            objectFit="contain"
            quality={100}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] z-2 mt-5 md:mt-7 lg:mt-7">
        <Image
          alt="11d logo"
          src="/images/banner-bottom-shape.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default BannerSection;
