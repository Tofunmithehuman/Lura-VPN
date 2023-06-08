import React, { useState, useEffect } from "react";
import Image from "next/image";
import luraLogo from "../../public/LURa.svg";
import { SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const ComingSoon = () => {
  const targetDate = new Date("2023-08-30"); // Replace with your target date
  const [countdown, setCountdown] = useState(calculateCountdown());

  function calculateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    return { days, hours, minutes };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-black sm:bg-backComingSoon bg-backComingSoonBgMobile min-h-screen bg-no-repeat bg-cover">
      <div className="grid lg:grid-cols-2 sm:pb-0 pt-8 text-white min-h-screen">
        <div className="px-8 col-span-2 md:col-span-1">
          <Image src={luraLogo} alt="luraLogo" />
          <h1 className="md:text-[54px] text-4xl leading-snug mt-6 sm:w-[90%] font-anglecia font-medium ">
            Discover the future of{" "}
            <span className="bg-gradient-to-r from-[#7F31FF] to-[#E34607] text-transparent bg-clip-text">
              Online privacy
            </span>{" "}
            with LuraVPN.
          </h1>
          <div className="w-[75%] md:w-[65%] md:text-sm font-axiforma font-light mt-6">
            <p>
              Our advanced VPN service harnesses the power of AI and machine
              learning algorithms to safeguard your data.
            </p>
            <p className="mt-4">
              Get ready to embark on a cosmic digital adventure with LuraVPN.
            </p>
          </div>
          <div className="mt-6">
            <form className="grid md:grid-cols-2 font-axiforma gap-4">
              <input
                name="waitList"
                placeholder="Enter your email address"
                className="text-sm pl-2 w-full py-4 font-normal md:rounded-sm rounded-lg text-black"
              />
              <button className="font-medium py-4 md:text-md text-sm rounded-lg sm:rounded-r-lg sm:rounded-none  bg-[#5D18EB]">
                Notify Me when Lura is Live
              </button>
            </form>
          </div>
          <div className="my-4 font-axiforma">
            <p className="font-light md:text-3xl text-[43px]">
              {`
              ${countdown.days} : ${String(countdown.hours).padStart(2, "0")} :
              ${String(countdown.minutes).padStart(2, "0")}`}
            </p>
            <div className="md:text-xs md:gap-7 gap-12 text-sm flex">
              <p>days</p>
              <p>hours</p>
              <p>mins</p>
            </div>
          </div>
        </div>
        <div className="mt-auto col-span-2 h-full">
          <div className="mt-auto flex flex-wrap gap-y-4 justify-between font-semibold px-8 bg-black py-2 text-xs text-[#B7B7B7]">
            <p>© Melanie and salsa inc</p>
            <p>support@luravpn.com</p>
            <div className="flex justify-between gap-6">
              <SiTwitter />
              <FaFacebookF />
              <ImInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
