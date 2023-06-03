import React, { useState, useEffect } from "react";
import Image from "next/image";
import luraLogo from "../../public/LURa.svg";
import Layout from "@/layout/Layout";
import surfaceWorld from "../../public/surfaceWorld.png";
import phoneVpn from "../../public/phoneVpn.png";
import worldMap from "../../public/worldMap.svg";
import manOnMoon from "../../public/manOnMoon.png";
import Faq from "@/components/Faq";
import ChoosePlan from "@/components/ChoosePlan";
import { useRouter } from "next/router";
import FeaturesExp from "@/components/FeaturesExp";

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
        <div className="plansGradient h-screen grid justify-center items-center animate-pulse">
          <Image src={luraLogo} alt="luraLogo" className="w-60" />
        </div>
      ) : (
        <Layout>
          <div className="text-white relative pageReveal">
            <div
              className={`min-h-screen ${
                router.pathname === "/home" ? "pt-44" : "md:pt-16 pt-24"
              }  flex flex-col items-center mx-auto justify-center gap-5 testing`}
            >
              <p className="text-md font-axiforma px-12">
                Over 60 million devices get hacked every year.
              </p>
              <h1 className="md:text-[64px] text-5xl text-center md:w-[75%] w-[90%] mx-auto leading-relaxed font-anglecia px-12 ">
                Keep Your{" "}
                <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
                  Online Activity
                </span>{" "}
                Out of Sight and Out of Reach LuraVPN.
              </h1>
              <button className="bg-white px-8 py-3 text-lg font-bold text-black dropWhite rounded-md font-axiforma">
                Get started
              </button>
              <div className="min-h-screen bg-backMoon w-full">
                <div className="flex justify-center">
                  <Image src={manOnMoon} alt="manOnMoon" />
                </div>
              </div>
            </div>

            <div className="bg-black h-40 w-[90%] overflow-hidden box-border relative mx-auto my-12">
              <div className="block w-[200%] absolute carousel text-4xl font-anglecia my-16">
                <span className=" float-left w-1/2">
                  <div className="bg-gradient-to-r from-[#C87351] via-white to-[#C87351] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out">
                    More Content
                  </div>
                  <div className="bg-gradient-to-r from-[#C87351] via-white to-[#C87351] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out">
                    Safer Browsing
                  </div>
                  <div className="bg-gradient-to-r from-[#C87351] via-white to-[#C87351] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out">
                    Faster Loading
                  </div>
                </span>
                <span className=" float-left w-1/2">
                  <div className="bg-gradient-to-r from-[#C87351] via-white to-[#C87351] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out">
                    More Content
                  </div>
                  <div className="bg-gradient-to-r from-[#C87351] via-white to-[#C87351] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out">
                    Safer Browsing
                  </div>
                  <div className="bg-gradient-to-r from-[#C87351] via-white to-[#C87351] text-transparent bg-clip-text inline-block w-[33%] float-left transition-all duration-75 ease-out">
                    Faster Loading
                  </div>
                </span>
              </div>
            </div>
            <FeaturesExp />
            <div className="block justify-center py-20">
              <h1 className="text-5xl w-[65%] mx-auto leading-relaxed text-center font-anglecia">
                An unmatched digital experience at your fingertips.
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-y-8 md:justify-between md:p-20 p-8 my-10 text-lg font-rubik  ">
                <div>
                  <p>🛡️ Military-Grade Protection</p>
                </div>
                <div>
                  <p>🚫 Unrestricted Access to Online Content</p>
                </div>
                <div>
                  <p>⚡ Supercharged VPN</p>
                </div>
                <div>
                  <p>🦠 Malware Protection</p>
                </div>
              </div>
              <div className="desktopBorder p-[1px] rounded-[32px] mx-6 md:mx-0 ">
                <div className="desktopRadial rounded-[32px]">
                  <div className="p-20 rounded-[32px] relative">
                    <Image
                      src={surfaceWorld}
                      alt="surfaceWorld"
                      className="relative w-[65%] hidden md:block"
                    />
                    <Image
                      src={phoneVpn}
                      alt="phoneVpn"
                      className="md:absolute -top-8 right-0 md:w-[70%] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="block justify-center py-20 px-12 sm:bg-backVpn sm:bg-no-repeat bg-contain sm:bg-bottom">
              <h1 className="md:text-5xl text-4xl w-[90%] mx-auto leading-relaxed text-center pb-16 font-anglecia">
                Choose Your VPN Plan
              </h1>
              <ChoosePlan />
            </div>
            <div className="block justify-center py-20">
              <div className="pb-16 text-center">
                <h1 className="text-5xl w-[80%] mx-auto leading-relaxed font-anglecia">
                  Stay secure and connected wherever whenever
                </h1>
                <p className="text-md font-axiforma ">
                  with thousands of servers across the globe.
                </p>
              </div>
              <div>
                <Image src={worldMap} alt="worldMap" />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-y-12 justify-evenly font-axiforma font-semibold">
                <div>
                  <h2 className="text-3xl">1000+ 📍</h2>
                  <p className="text-[#767676] text-lg">
                    Servers around the world
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl">20 🌏</h2>
                  <p className="text-[#767676] text-lg">Countries connected</p>
                </div>
                <div>
                  <h2 className="text-3xl">1000+ ♾️</h2>
                  <p className="text-[#767676] text-lg">
                    Unlimited Bandwith , no lag
                  </p>
                </div>
              </div>
            </div>
            <Faq />
            <div className="subscribeBorder p-[1px] rounded-2xl md:mx-20 mx-6 mb-20">
              <div className="subscribeBg rounded-2xl">
                <div className="min-h-20 rounded-2xl bg-backSubscribe bg-contain bg-no-repeat bg-right-bottom p-16">
                  <h2 className="text-3xl mb-8 font-anglecia text-center">
                    Subscribe to Our Newsletter
                  </h2>
                  <div className="md:w-[60%] mx-auto">
                    <div className="flex">
                      <input
                        className="w-[65%] py-3 pl-2 rounded-l-lg"
                        placeholder="Enter Email Address"
                      />
                      <div
                        className={`${
                          subscribe ? "bg-[#636363]" : "bg-[#5D18EB]"
                        } py-3 text-center font-medium w-[35%] rounded-r-lg cursor-pointer`}
                        onClick={() => setSubscribe(!subscribe)}
                      >
                        {subscribe ? "Subscribed" : "Subscribe"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default Index;
