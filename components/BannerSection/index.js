// components/BannerSection.js

import React from "react";

const BannerSection = () => {
  return (
    <div className="z-0 mt-28 bg-primaryColor">
      <div className=" w-full h-[502px] md:h-[502px] lg:h-[702px] mt-30">
        <div className="flex">
          <ContentSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
