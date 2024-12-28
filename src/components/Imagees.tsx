import Image from "next/image";
import React from "react";

interface TitleProps {
  src: string;
  alt: string;
}
const Imagees: React.FC<TitleProps> = ({ src, alt }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={150}
        height={150}
        objectFit="cover"
      ></Image>
    </div>
  );
};

export default Imagees;
