import React from "react";
import Image from "next/image";
import luraLogo from "../../public/LURa.svg";
import Link from "next/link";
import spec from "../../public/spec.png";
import cube from "../../public/cube.png";

const RPassword = () => {
  return (
    <div className="bg-black text-white bg-backMoonFooter2 bg-bottom bg-no-repeat bg-contain relative">
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
            Reset Your Password
          </h2>
          <p className="text-xs mt-2 text-center">
            Enter the OTP sent to your email address.
          </p>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm z-20">
          <form className="space-y-6" action="#" method="POST">
            <div className="mb-12 ">
              <div className="mt-2 flex items-center justify-between text-white">
                <input
                  id="otp1"
                  name="otp"
                  type="number"
                  autoComplete="otp"
                  required
                  className="block w-[20%] bg-[#636363] border rounded-md py-4 sm:text-4xl text-center sm:leading-6"
                />
                <input
                  id="otp2"
                  name="otp"
                  type="number"
                  autoComplete="otp"
                  required
                  className="block w-[20%] bg-[#636363] border rounded-md py-4 sm:text-4xl text-center sm:leading-6"
                />
                <input
                  id="otp3"
                  name="otp"
                  type="number"
                  autoComplete="otp"
                  required
                  className="block w-[20%] bg-[#636363] border rounded-md py-4 sm:text-4xl text-center sm:leading-6"
                />
                <input
                  id="otp3"
                  name="otp"
                  type="number"
                  autoComplete="otp"
                  required
                  className="block w-[20%] bg-[#636363] border rounded-md py-4 sm:text-4xl text-center sm:leading-6"
                />
              </div>
            </div>

            <Link href={"/newPassword"}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#5D18EB] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5D18EB]"
              >
                Reset Password
              </button>
            </Link>
          </form>

          <p className="mt-4 text-center text-xs text-white font-semibold">
            Didn`t receive the email?{" "}
            <span className="font-semibold leading-6 text-[#5D18EB] underline">
              Resend OTP in 02:00
            </span>
          </p>
        </div>
        <p className="text-center text-xs mt-auto">
          ©2023, Lura Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default RPassword;
