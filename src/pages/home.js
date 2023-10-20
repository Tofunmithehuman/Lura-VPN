import React, { useState, useEffect } from "react";
import Image from "next/image";
import luraLogo from "../../public/LURa.svg";
import Layout from "@/layout/Layout";
import surfaceWorld from "../../public/surfaceWorld.png";
import phoneVpn from "../../public/phoneVpn.png";
import worldMap from "../../public/worldMap.svg";
import worldMap2 from "../../public/WorldMap2.svg";
import manOnMoon from "../../public/manOnMoon.png";
import Faq from "@/components/Faq";
import ChoosePlan from "@/components/ChoosePlan";
import { useRouter } from "next/router";
import FeaturesExp from "@/components/FeaturesExp";
import stars from "../../public/stars.gif";
import playstore from "../../public/playstore.png";
import appstore from "../../public/appstore.png";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [subscribe, setSubscribe] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black">
      {isLoading ? (
        <div className="plansGradient min-h-screen grid justify-center items-center animate-pulse">
          <Image src={luraLogo} alt="luraLogo" className="w-60" />
        </div>
      ) : (
        <Layout>
          <div className="text-white relative pageReveal">
            <div
              className={`min-h-screen ${
                router.pathname === "/home"
                  ? "pt-36 sm:pt-44"
                  : "md:pt-16 pt-20"
              }  flex flex-col items-center mx-auto justify-center gap-5 testing relative`}
            >
              <Image
                src={stars}
                alt="stars"
                className="absolute top-10 w-[3.5em]"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] top-10 right-0"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] top-10 left-10"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] top-10 left-3"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] top-[15%] right-3"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] top-[25%]"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] left-12 top-[25%]"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] right-12 top-[35%]"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] right-[30%] bottom-[35%]"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] left-[10%] bottom-[35%]"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] right-1 bottom-[45%]"
              />
              <Image
                src={stars}
                alt="stars"
                className="absolute w-[3.5em] left-[20%] bottom-[50%]"
              />
              <p className="font-axiforma text-lg px-6 text-center">
                Over 60 million devices get hacked every year.
              </p>
              <h1 className="md:text-[54px] text-[28px] text-center md:w-[60%]  my-6 sm:my-0 font-normal mx-auto leading-snug font-axiforma px-4 sm:px-6 ">
                Secure Your{" "}
                <span className="bg-gradient-to-r from-[#E34607] to-[#7F31FF] text-transparent bg-clip-text">
                  Online Privacy
                </span>{" "}
                with the Power of AI Machine Learning.
              </h1>
              <a href = "https://play.google.com/store/search?q=lura+vpn&c=apps" target="_blank" className="bg-[#5D18EB] px-8 py-3 text-lg font-bold text-white dropWhite rounded-md font-axiforma">
                Get Started
              </a>
              <div className="min-h-screen bg-backMoon bg-no-repeat bg-cover bg-bottom w-full mt-12">
                <div className="flex justify-center">
                  <Image src={manOnMoon} alt="manOnMoon" />
                </div>
              </div>
            </div>

            <div className="bg-black h-28 sm:h-40 w-[90%] overflow-hidden box-border relative mx-auto my-12">
              <div className="block w-[200%] absolute carousel max-[290px]:text-xl text-2xl md:text-[30px] lg:text-[40px] font-axiforma my-16">
                <span className=" float-left w-full sm:w-1/2">
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(163,140,238,1)] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out py-2">
                    More Content
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(163,140,238,1)] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out py-2">
                    Safer Browsing
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(163,140,238,1)] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out py-2">
                    Faster Loading
                  </div>
                </span>
                <span className=" float-left w-1/2 hidden md:block">
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(163,140,238,1)] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out py-2">
                    More Content
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(163,140,238,1)] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out py-2">
                    Safer Browsing
                  </div>
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(163,140,238,1)] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out py-2">
                    Faster Loading
                  </div>
                </span>
              </div>
            </div>
            <div id="features">
              <FeaturesExp />
            </div>
            <div className="block justify-center py-20">
              <h1 className="text-[25px] sm:text-[40px] px-6 sm:w-[65%] sm:mx-auto leading-relaxed text-center font-axiforma">
                Advanced Data Encryption for a Cosmic Digital Experience.
              </h1>
              <div className="desktopRadial ">
                <div className="flex flex-col md:flex-row items-center text-center gap-y-12 md:justify-between md:py-12 md:px-8 py-6 my-5 md:text-lg text-sm font-rubik">
                  <div>
                    <p>🛡️ Military-Grade Protection</p>
                  </div>
                  <div>
                    <p>🚫 Unrestricted Access to Online Content</p>
                  </div>
                  <div>
                    <p>⚡ Super-Charged VPN</p>
                  </div>
                  <div>
                    <p>🦠 Malware Protection</p>
                  </div>
                </div>
                <div className="md:p-16 pb-4 relative">
                  <Image
                    src={surfaceWorld}
                    alt="surfaceWorld"
                    className="relative w-[55%] hidden md:block"
                  />
                  <Image
                    src={phoneVpn}
                    alt="phoneVpn"
                    className="md:absolute md:-bottom-12 md:right-12 relative right-6 sm:w-[70%] md:w-[50%] w-[120%] overflow-hidden mx-auto"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-1 items-center justify-center">
                  <Image src={appstore} alt="appstore" className="w-44" />
                  <Image src={playstore} alt="playstore" className="w-44" />
                </div>
              </div>
            </div>
            <div className="block justify-center mt-20" id="pricing">
              <h1 className="md:text-4xl text-[32px] sm:w-[90%] sm:mx-auto mx-6 leading-relaxed text-center font-axiforma">
                Choose Your VPN Plan
              </h1>
              <ChoosePlan />
            </div>
            <div className="faqGradient py-20">
              <div className="block justify-center bg-backGridLine bg-cover w-full ">
                <div className="pb-16 text-center px-6">
                  <h1 className="md:text-[40px] text-[26px] sm:w-[90%] mx-auto leading-relaxed text-center mb-8 font-axiforma">
                    A New Age VPN and Anti-Virus Software
                  </h1>
                  <p className="text-lg font-axiforma ">
                    with thousands of servers across the globe.
                  </p>
                </div>
                <div className="my-8 hidden sm:block">
                  <Image src={worldMap} alt="worldMap" className="w-full" />
                </div>
                <div className="my-8 block sm:hidden">
                  <Image src={worldMap2} alt="worldMap" className="w-full" />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-y-16 justify-evenly font-axiforma font-semibold">
                  <div className="ml-4 md:ml-0 relative">
                    <div className="h-5 sm:h-6 w-[1.5px] bg-[#71E1EB] absolute -left-4 top-1"></div>
                    <h2 className="text-2xl sm:text-3xl">1000+ 📍</h2>
                    <p className="text-[#767676] text-sm sm:text-lg">
                      Servers Across the Globe
                    </p>
                  </div>
                  <div className="relative">
                    <div className="h-5 sm:h-6 w-[1.5px] bg-[#71E1EB] absolute -left-4 top-1"></div>
                    <h2 className="text-2xl sm:text-3xl">20 🌏</h2>
                    <p className="text-[#767676] text-sm sm:text-lg">
                      Connected Countries
                    </p>
                  </div>
                  <div className="relative">
                    <div className="h-5 sm:h-6 w-[1.5px] bg-[#71E1EB] absolute -left-4 top-1"></div>
                    <h2 className="text-2xl sm:text-3xl">1000+ ♾️</h2>
                    <p className="text-[#767676] text-sm sm:text-lg">
                      Unlimited Bandwidth
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Faq />
            {/* <div className="subscribeBorder p-[1px] rounded-2xl md:mx-20 mx-6 mb-20 font-axiforma">
              <div className="subscribeBg rounded-2xl">
                <div className="min-h-20 rounded-2xl bg-backSubscribe bg-auto bg-no-repeat bg-right-bottom pt-10 px-6 pb-20 sm:p-16">
                  <h2 className="text-3xl mb-8 font-axiforma text-center">
                    Subscribe to Our Newsletter
                  </h2>
                  <div className="md:w-[60%] mx-auto">
                    <div className="grid sm:grid-cols-[1.5fr,1fr] gap-y-12">
                      <input
                        className="my-10 sm:my-0 py-4 pl-2 rounded-lg sm:rounded-l-lg sm:rounded-none placeholder:font-medium placeholder:text-black"
                        placeholder="Enter Email Address"
                      />
                      <div
                        className={`${
                          subscribe ? "bg-[#636363]" : "bg-[#5D18EB]"
                        } py-4 text-center font-medium text-lg rounded-lg sm:rounded-r-lg sm:rounded-none cursor-pointer`}
                        onClick={() => setSubscribe(!subscribe)}
                      >
                        {subscribe ? "Subscribed" : "Subscribe"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </Layout>
      )}
    </div>
  );
};

export default Index;
