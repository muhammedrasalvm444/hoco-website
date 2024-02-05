import React from "react";
import CompanySection from "../CompanySection";
import LearnSection from "../LearnSection";
import SupportSection from "../SupportSection";
import AboutSection from "../AboutSection";

const Footer = () => {
  return (
    <footer>
      <div className="w-full px-40 py-10 text-white bg-lightBlueColor">
        <div className="">
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4">
              <CompanySection />
            </div>
            <div className="p-4">
              <LearnSection />
            </div>
            <div className="p-4">
              <AboutSection />
            </div>
            <div className="p-4">
              <SupportSection />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
