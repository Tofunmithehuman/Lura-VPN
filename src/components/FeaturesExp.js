import React, { useState } from "react";
import Image from "next/image";
import wings from "../../public/wings.png";
import wings2 from "../../public/wings2.gif";
import desktop from "../../public/desktop.png";
import desktop2 from "../../public/desktop2.gif";
import accelerate from "../../public/accelerate.png";
import accelerate2 from "../../public/accelerate2.gif";

const FeaturesExp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };
  const handleHover2 = () => {
    setIsHovered2(true);
  };
  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const imageSource = isHovered ? accelerate2 : accelerate;
  const imageSource1 = isHovered2 ? wings2 : wings;
  const imageSource2 = isHovered3 ? desktop2 : desktop;

  return (
    <div className="block justify-center sm:px-12 px-6 experienceGradient py-20">
      <h1 className="text-[28px] sm:text-[40px] sm:w-[65%] mb-8 sm:mx-auto leading-relaxed text-center font-anglecia">
        Launch Your Browsing Experience to New Heights.
      </h1>
      <div className="grid sm:grid-cols-[0.7fr,2fr] gap-8 gap-y-8 font-axiforma text-lg">
        <div className="highBorder p-[1px] rounded-xl">
          <div className="rounded-xl px-6 flex flex-col items-center pb-24 bg-black pt-4 h-full">
            <p className=" my-4 px-8 py-4 rounded-lg bg-black text-center w-full font-bold highShadow">
              High Speed
            </p>
            <Image
              src={imageSource}
              alt="accelerate"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            />
            <p className="pt-4 text-[#AFB7C5] text-sm sm:text-lg">
              Roam the internet undelayed and uninterrupted with our
              lightning-fast servers.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-12 bg-black rounded-xl">
          <div className="ultraBorder p-[1px] rounded-xl">
            <div className=" px-6 grid sm:grid-cols-[1.2fr,2fr] h-full gap-y-8 gap-4 pt-4 pb-24 sm:pb-4 rounded-xl bg-black">
              <div className="flex flex-col gap-8">
                <p className=" my-4 px-8 py-4 rounded-lg w-full bg-black mr-auto text-center font-bold ultraShadow">
                  Ultra Secure
                </p>
                <Image
                  src={imageSource1}
                  alt="wings"
                  className="w-[50%] mx-auto"
                  onMouseEnter={handleHover2}
                  onMouseLeave={handleMouseLeave2}
                />
              </div>
              <div className="flex items-center">
                <p className="leading-relaxed sm:w-[82%] text-sm sm:text-lg mt-4 text-[#AFB7C5] py-16">
                  Our cutting-edge and robust encryption system keeps your
                  sensitive data private and secure.
                </p>
              </div>
            </div>
          </div>
          <div className="multipleBorder p-[1px] rounded-xl">
            <div className=" px-6 grid sm:grid-cols-[1.2fr,2fr] h-full gap-y-8 gap-4 pt-4 pb-24 sm:pb-4 rounded-xl bg-black">
              <div className="flex flex-col gap-8">
                <p className=" my-4 px-8 py-4 rounded-lg w-full bg-black mr-auto text-center font-bold multipleShadow ">
                  Multiple Devices
                </p>
                <Image
                  src={imageSource2}
                  alt="desktop"
                  className="w-[60%] mx-auto"
                  onMouseEnter={handleHover3}
                  onMouseLeave={handleMouseLeave3}
                />
              </div>
              <div className="flex items-center">
                <p className="leading-relaxed sm:w-[82%] text-sm sm:text-lg mt-4 text-[#AFB7C5]">
                  Stay secure and connected on all your devices effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesExp;
