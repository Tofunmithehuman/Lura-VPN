import React,{useState} from "react";
import luraLogo from "../../public/LURa.svg";
import Link from "next/link";
import { SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import {LuInstagram} from 'react-icons/lu'
import Image from "next/image";
import playstore from "../../public/playstore.png";
import appstore from "../../public/appstore.png";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);

  const isHomePage = router.pathname === "/home" || router.pathname === "/contact";

  return (
    <div className="font-axiforma bg-black text-white mt-24 ">
      {!isHomePage && (
        <div className="rounded-3xl p-[1px] multipleBorder2 md:mx-28 mx-4 mb-28">
          <section className="min-h-[11em] sm:px-[4.5em] px-6 py-10 shadow-md grid justify-center sm:flex sm:justify-between items-center bg-black z-10 font-inter rounded-3xl">
            <div className="text-[32px] text-center font-medium font-axiforma mb-6">
              <p className="text-white">Contact Our Support Team</p>
            </div>
            <Link
              href={"/contact"}
              className="px-12 py-3 text-sm rounded-md text-center bg-[#5D18EB] mb-12 sm:mb-0"
            >
              Contact Us
            </Link>
          </section>
        </div>
      )}
      <div className=" bg-backMoonFooterMobile sm:bg-backMoonFooter bg-no-repeat bg-cover md:bg-contain xl:bg-cover border border-black">
        {isHomePage && (
          <div className="min-h-20 rounded-2xl bg-right-bottom mt-24 sm:mt-16 px-6 mb-20 sm:p-16">
            <h2 className="text-3xl sm:mb-8 font-axiforma text-center w-[75%] mx-auto sm:w-full">
              Subscribe to Our Newsletter
            </h2>
            <div className="w-5/6 md:w-[60%] mx-auto">
              <div className="grid sm:grid-cols-[1.5fr,1fr]">
                <input
                  className="my-5 sm:my-0 py-4 pl-2 rounded-lg sm:rounded-l-lg sm:rounded-none placeholder:font-medium placeholder:text-black text-black"
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
        )}
        <div className={`grid justify-items-center ${isHomePage ? 'sm:p-20' : 'pt-80'}`}>
          <Image src={luraLogo} alt="luraLogo" className={`w-40 sm:w-60 ${!isHomePage ? 'mt-32': 'mt-12'}`} />
          <div className="flex gap-1 items-center mt-8">
            <Image src={appstore} alt="appstore" className="w-32 sm:w-44" />
            <Image src={playstore} alt="playstore" className="w-32 sm:w-44" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr,1fr,1fr,1fr] pt-28 sm:pt-[7.5em] gap-8 justify-between footerGradient sm:justify-items-center pb-8 sm:mt-12 min-h-[70vh] md:px-20 px-6 font-axiforma">
          <div className="grid mb-4 md:mb-0 col-span-2 md:col-span-1">
            <p className="text-sm text-center sm:text-left leading-relaxed font-axiforma text-[rgba(183,183,183,1)]">
              LuraVPN is not just any virtual private network. We take pride in
              providing our users with unique features that are unmatched in the
              industry.
            </p>
          </div>
          <ul className="flex flex-col gap-8 text-sm sm:text-[16px] text-[rgba(183,183,183,1)] ">
            <h3 className="font-bold text-md text-white">Company</h3>
            <Link href={"/home"}>Home</Link>
            <Link href={"#features"}>Features</Link>
            <Link href={"#pricing"}>Pricing</Link>
            <Link href={"/help"}>Help</Link>
          </ul>
          <ul className="flex flex-col gap-8 text-sm sm:text-[16px] text-[rgba(183,183,183,1)]">
            <h3 className="font-bold text-md text-white">Legal</h3>
            <Link href={"/terms"}>Terms</Link>
            <Link href={"/privacy"}>Privacy</Link>
            <Link href={"/security"}>Security</Link>
          </ul>
          <ul className="flex md:flex-col gap-8 text-sm sm:text-[16px] col-span-2 w-full md:col-span-1 text-[rgba(183,183,183,1)]">
            <div className="flex flex-col gap-8">
              <h3 className="font-bold text-md text-white">Contact</h3>
              <li>support@luravpn.com</li>
            </div>
            <div className="flex justify-normal gap-6 w-full md:w-auto">
              <SiTwitter />
              <FaFacebookF />
              <LuInstagram />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
