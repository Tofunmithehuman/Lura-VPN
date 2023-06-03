import React from "react";
import luraLogo from "../../public/LURa.svg";
import Link from "next/link";
import { SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import Image from "next/image";
import playstore from "../../public/playstore.png";
import appstore from "../../public/appstore.png";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/home";

  return (
    <div className="font-axiforma bg-black text-white mt-24">
      {!isHomePage && (
        <div className="rounded-3xl p-[1px] multipleBorder md:mx-28 mx-12 mb-40">
          <section className="min-h-[11em] sm:px-[4.5em]  px-4 shadow-md grid justify-center sm:flex sm:justify-between items-center bg-black z-10 font-axiforma rounded-3xl">
            <div className="text-lg sm:text-4xl font-medium font-axiforma">
              <h2 className="mb-2">Have questions?</h2>
              <p className="text-[#C87351]">
                {" "}
                Reach out <span className="text-white">to us.</span>
              </p>
            </div>
            <Link
              href={"./register"}
              className="px-12 py-3 text-sm rounded-md bg-[#5D18EB]"
            >
              Contact Us
            </Link>
          </section>
        </div>
      )}
      <div className="grid justify-items-center">
        <Image src={luraLogo} alt="luraLogo" className="w-60" />
        <div className="flex gap-2 items-center mt-8">
          <Image src={appstore} alt="appstore" />
          <Image src={playstore} alt="playstore" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-[1.4fr,1fr,1fr,1fr] pt-[7.5em] gap-8 justify-items-center pb-8 mt-12 bg-backMoonFooter bg-no-repeat min-h-[70vh] md:px-20 px-8 font-axiforma">
        <div className="grid mb-4 md:mb-0 col-span-2 md:col-span-1">
          <p className="text-xs leading-relaxed font-axiforma text-[rgba(183,183,183,1)]">
            LuraVPN is not just any virtual private network. We take pride in
            providing our users with unique features that are unmatched in the
            industry.
          </p>
        </div>
        <ul className="flex flex-col gap-8 text-sm text-[rgba(183,183,183,1)] ">
          <h3 className="font-bold text-md text-white">Company</h3>
          <Link href={"/home"}>Home</Link>
          <Link href={"/features"}>Features</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/help"}>Help</Link>
        </ul>
        <ul className="flex flex-col gap-8 text-sm text-[rgba(183,183,183,1)]">
          <h3 className="font-bold text-md text-white">Legal</h3>
          <Link href={"/terms"}>Terms</Link>
          <Link href={"/privacy"}>Privacy</Link>
          <Link href={"/security"}>Security</Link>
        </ul>
        <ul className="flex md:flex-col gap-8 text-sm col-span-2 w-full md:col-span-1 text-[rgba(183,183,183,1)]">
          <div className="flex flex-col gap-8">
            <h3 className="font-bold text-md text-white">Contact</h3>
            <li>Support@LuraVPN.com</li>
            <li>01988778998</li>
          </div>
          <div className="flex justify-between w-full md:w-auto">
            <SiTwitter />
            <FaFacebookF />
            <ImInstagram />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
