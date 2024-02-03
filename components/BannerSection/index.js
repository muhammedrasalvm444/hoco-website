// components/BannerSection.js

import React from "react";
import ContentSection from "./ContentSection";
import ContactForm from "./ContactForm";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="z-0  relative mt-[7rem] bg-primaryColor flex flex-col items-center justify-between h-screen ">
      <div className="w-full md:h-[502px] lg:h-[702px] relative my-20">
        <div className="relative flex items-center justify-between mx-12">
          <ContentSection />
          <ContactForm />
        </div>

        {/* Centered Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            alt="11d logo"
            src="/images/banner-img-2.webp.png"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>

      {/* Bottom Image */}
      <div className="h-[200px] z-2 absolute bottom-0 left-0 w-full">
        <Image
          alt="11d logo"
          src="/images/banner-bottom-shape.webp.png"
          layout="fill"
          objectFit="contain"
          quality={100}
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default BannerSection;
