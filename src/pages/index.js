import React, { useState, useEffect,useRef } from "react";
import Image from "next/image";
import luraLogo from "../../public/LURa.svg";
import { SiTwitter } from "react-icons/si";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import emailjs from "@emailjs/browser";


const ComingSoon = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tpzmvkf",
        "template_nam4zt6",
        form.current,
        "uvq3fuFRXafvsKCGC"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
    <div className="bg-black sm:bg-backGalaxyComing bg-backGalaxyComingMobile grid bg-no-repeat bg-cover min-h-screen font-axiforma">
      <div className="flex justify-left px-10 py-6">
        <Image src={luraLogo} alt="luraLogo" />
      </div>
      <div className=" grid justify-center min-h-[170vh] sm:min-h-[130vh] px-6 sm:px-0">
        <div className="w-full max-w-3xl text-white">
          <div className="text-center">
            <h1 className="md:text-[54px] text-[32px] leading-snug font-axiforma font-normal ">
              Discover the Future of{" "}
              <span className="bg-gradient-to-r from-[#7F31FF] to-[#E34607] text-transparent bg-clip-text">
                Online Privacy
              </span>{" "}
              with LuraVPN.
            </h1>
            <div className="md:text-[16px] font-axiforma font-light mt-6">
              <p>
                Our advanced VPN service harnesses the power of AI and machine
                learning algorithms to safeguard your data.
              </p>
            </div>
            <div className="my-8 sm:my-4 font-axiforma flex gap-x-1 justify-center">
              <div className="grid">
                <h3 className="font-semibold md:text-[50px] text-[43px]">
                  {countdown.days}
                </h3>
                <p className="md:text-xs text-sm flex justify-center">days</p>
              </div>
              <div className="font-semibold md:text-[50px] text-[43px]">:</div>
              <div className="grid">
                <h3 className="font-semibold md:text-[50px] text-[43px]">
                  {String(countdown.hours).padStart(2, "0")}
                </h3>
                <p className="md:text-xs text-sm flex justify-center">hours</p>
              </div>
              <div className="font-semibold md:text-[50px] text-[43px]">:</div>
              <div className="grid">
                <h3 className="font-semibold md:text-[50px] text-[43px]">
                  {String(countdown.minutes).padStart(2, "0")}
                </h3>
                <p className="md:text-xs text-sm flex justify-center">mins</p>
              </div>
            </div>
            <div className="font-semibold text-[16px]">
              Get ready to embark on a cosmic digital adventure with LuraVPN.
            </div>
            <div className="mt-6 w-[90%] sm:w-2/3 mx-auto">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="grid md:grid-cols-2 font-axiforma gap-2"
              >
                <input
                  name="user_email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="text-sm pl-2 w-full py-4 font-normal md:rounded-sm rounded-lg text-black"
                />
                <button
                  type="submit"
                  className="font-medium py-4 md:text-md text-sm rounded-lg sm:rounded-r-lg sm:rounded-none  bg-[#5D18EB]"
                >
                  Notify Me when Lura is Live
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-y-4 justify-between font-semibold px-8 bg-black py-3 text-sm text-[#B7B7B7]">
        <p>© Melanie and salsa inc</p>
        <p className="order-last sm:order-2">support@luravpn.com</p>
        <div className="flex justify-between gap-6 text-white sm:order-3">
          <SiTwitter />
          <FaFacebookF />
          <LuInstagram />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
