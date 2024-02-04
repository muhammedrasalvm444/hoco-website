import React from "react";
import { StyledMainH1Tag } from "../StyledMainH1Tag";

const LearningSection = () => {
  return (
    <div className="py-10 my-12 text-center bg-bgLightColor">
      <h1 className="gap-2 my-2 text-5xl font-extrabold text-blueColor m">
        Learning That’s <span className="text-orangeColor"> Tailored</span>{" "}
      </h1>
      <StyledMainH1Tag text={"To Them"} />
    </div>
  );
};

export default LearningSection;
