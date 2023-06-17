import React, { useState } from "react";
import Image from "next/image";
import luraLogo from "../../public/LURa.svg";
import Link from "next/link";
import spec from "../../public/spec.png";
import cube from "../../public/cube.png";
import { AiFillCheckSquare, AiOutlineEye } from "react-icons/ai";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const showPassword = () => {
    setShow(!show);
  };
  return (
    <div className="bg-black text-white bg-backMoonFooter2 bg-bottom bg-no-repeat bg-contain relative">
      <div className="backSpec absolute right-[10%] top-[25%]">
        <Image src={spec} alt="spec" />
      </div>
      <div className="backCube bg-contain absolute left-[7%] top-[25%]">
        <Image src={cube} alt="cube" />
      </div>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-axiforma">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={luraLogo} alt="lura" className="mx-auto" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm z-20">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 relative"
                />
                <AiOutlineEye
                  className="absolute right-2 top-3 text-[#757575] cursor-pointer"
                  onClick={showPassword}
                />
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <div className="flex gap-1 items-center rounded-md relative">
                {/* <AiFillCheckSquare className="text-[#10C971] text-lg" /> */}
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-[#10C971] outline-none"
                />
                <div>Remember Me</div>
              </div>
              <Link
                href={"/forgetPassword"}
                className="font-semibold text-white underline"
              >
                Forgot password?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#5D18EB] px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5D18EB]"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-xs text-white font-semibold">
            Don`t have an Account?{" "}
            <Link
              href={"/signUp"}
              className="font-semibold leading-6 text-[#5D18EB] underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <p className="text-center text-xs mt-auto">
          ©2023, Lura Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default SignIn;
