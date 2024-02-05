import React from "react";

const LearnSection = () => {
  const listItems1 = ["Courses", "Contact Us", "About Us", "My account"];
  return (
    <div className="mb-5">
      <h4 className="text-base font-bold uppercase cursor-pointer text-blueColor ">
        Learn
      </h4>
      <hr className="w-10 h-1 mt-2 bg-grayColor"></hr>
      <div className="flex gap-12 ">
        <ul className="flex flex-col gap-2 mt-6 mb-12">
          {listItems1.map((item, index) => (
            <li className="cursor-pointer" key={index}>
              <div className="flex items-center gap-2 text-grayColor">
                <div className="w-2 h-2 bg-grayColor"></div>
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LearnSection;
