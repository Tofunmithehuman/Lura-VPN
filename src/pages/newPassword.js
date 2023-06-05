import React from "react";
import Image from "next/image";
import luraLogo from "../../public/LURa.svg";
import Link from "next/link";
import spec from "../../public/spec.png";
import cube from "../../public/cube.png";

const NPassword = () => {
  return (
    <div className="bg-black text-white bg-backMoonFooter bg-bottom bg-no-repeat bg-contain relative">
      <div className="backSpec absolute right-[10%] top-[25%]">
        <Image src={spec} alt="spec" />
      </div>
      <div className="backCube bg-contain absolute left-[7%] top-[25%]">
        <Image src={cube} alt="cube" />
      </div>
      <div className="flex min-h-screen flex-1 flex-col justify-between px-6 py-12 lg:px-8 font-axiforma">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={luraLogo} alt="lura" className="mx-auto" />

          <h2 className="mt-20 text-center text-lg sm:text-[32px] font-medium leading-9 tracking-tight">
            Create New Password
          </h2>
          <p className="text-xs mt-2 text-center">
            Create a new password for your LURA account below.
          </p>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm z-20">
          <form className="space-y-6" action="#" method="POST">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-xs font-medium leading-6"
              >
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium leading-6 text-white"
                >
                  Verify Password
                </label>
              </div>
              <div className="mt-2 mb-16">
                <input
                  id="vpassword"
                  name="vpassword"
                  type="password"
                  autoComplete="verify-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <Link href={"/signIn"} className="">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#5D18EB] px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5D18EB]"
              >
                Continue
              </button>
            </Link>
          </form>
        </div>
        <p className="text-center text-xs mt-auto">
          ©2023, Lura Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default NPassword;
