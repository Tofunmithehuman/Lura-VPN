import Image from "next/image";
import Link from "next/link";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import luraLogo from "../../public/LURa.svg";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", to: "/home" },
  { name: "Features", to: "#features" },
  { name: "Pricing", to: "#pricing" },
  { name: "Help", to: "/help/general" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const isPlanPage =
    router.pathname === "/plans" || router.pathname === "/signUpPay";
  return (
    <header
      className={`absolute inset-x-0 ${
        router.pathname === "/home" ? "top-[3.4em]" : "top-0"
      } z-50 font-axiforma bg-transparent text-white `}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-[3.5em]"
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full lg:w-auto gap-x-12">
          <div className="flex lg:flex-1">
            <span className="sr-only">Your Company</span>
            <Link href={'/home'}>
              <Image className=" w-28" src={luraLogo} alt="lura logo" />
            </Link>
          </div>
          <div className="flex lg:hidden ml-auto">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <RiMenuFill className="text-3xl" aria-hidden="true" />
            </button>
          </div>
          {!isPlanPage && (
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.to}
                  className={`text-sm leading-6  ${
                    router.pathname === item.to
                      ? "text-white font-bold underline"
                      : "text-[#B7B7B7] font-semibold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center font-semibold gap-6 text-md text-white">
          <Link
            href={"https://play.google.com/store/search?q=lura+vpn&c=apps"}
            target="_blank"
            className="border text-white bg-[#5D18EB] border-none px-8 py-3 text-lg rounded-lg dropWhite"
          >
            Download{" "}
          </Link>{" "}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 pt-12 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between pb-6">
            <span className="sr-only">Your Company</span>
            <Image className=" w-28" src={luraLogo} alt="lura logo" />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <RiCloseLine className="text-4xl" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-8 py-6 text-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.to}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-lg font-medium leading-7 ${
                      router.pathname === item.to
                        ? "text-white font-bold underline"
                        : "text-[#B7B7B7] font-semibold"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-10">
                <div className="flex lg:flex-1 items-center mt-auto flex-col lg:flex-row font-semibold gap-3 text-lg text-white">
                  <Link
                    href={"https://play.google.com/store/search?q=lura+vpn&c=apps"}
                    target="_blank"
                    className="border text-white bg-[#5D18EB] border-none text-lg mt-5 px-8 py-3 rounded-lg dropWhite"
                  >
                    Download{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavBar;
