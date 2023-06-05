import React from "react";
import Link from "next/link";
import Man404 from "../../public/404Man.png";
import Image from "next/image";
const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-back404 flex flex-col items-center justify-center font-axiforma text-white">
      <h3 className="sm:text-[36px] text-lg font-medium mb-2 text-center">
        Looks like you’re lost in space
      </h3>
      <div className="text-[172px] md:text-[383px] leading-none font-semibold relative">
        <p className="leading-none">404</p>
        <Image
          src={Man404}
          alt="man404"
          className="absolute -top-[25%] md:-top-[20%]  md:left-[8%]"
        />
      </div>
      <Link
        href={"/home"}
        className="px-12 py-3 text-sm mt-10 font-medium rounded-md bg-[#5D18EB] z-10"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
