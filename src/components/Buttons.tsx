import React from "react";
import Imagees from "./Imagees";

interface ButtonsProps {
  fontSize: string;
  bgcolor?: string;
  textColor?: string;
  text: string;
  fronticon?: string;
  textCenter?:boolean;
  onClick?: ()=>void;
}

const Buttons: React.FC<ButtonsProps> = ({
  fontSize,
  bgcolor,
  textColor,
  text,
  fronticon,
  textCenter,
  onClick,
}) => {
  return (
    <div
      className={`h-auto rounded-md ${
        fronticon ? "flex flex-row gap-3 space-x-5 border justify-center" : ""
      }`}
    >
      {fronticon && (
        <div className=" relative pt-2 flex flex-col cursor-pointer w-6 ">
          <Imagees alt="img" src={fronticon} />
        </div>
      )}
      <div
        className={`p-2 font-semibold rounded-md ${fontSize} ${
          bgcolor ? "" : "bg-orange-600"
        } ${textColor} ${fontSize} ${fronticon ? "flex flex-col" : ""}
        ${textCenter ? "text-center" : ""} ${onClick}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Buttons;
