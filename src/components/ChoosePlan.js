import Link from "next/link";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const ChoosePlan = () => {
  return (
    <div className="bg-backCube bg-left-top bg-no-repeat border border-black">
      <div className="bg-backCone bg-center sm:bg-[right_7rem] bg-no-repeat">
        <div className="bg-backSpec bg-right-bottom bg-no-repeat">
          <div className="rounded-2xl bg-[#191919] bg-opacity-80 md:grid gap-8 p-16 font-axiforma sm:mx-24 mt-12 mb-44 hidden ">
            <div className=" grid grid-cols-4 justify-items-center">
              <div></div>
              <div className="text-[16px] font-medium text-[#4F5665]">
                3-Day Trial
              </div>
              <div className="text-[16px] font-medium text-[#4F5665]">
                Monthly Subscription
              </div>
              <div className="text-[16px] font-medium text-[#4F5665]">
                Yearly Subscription
              </div>
            </div>
            <div className=" grid grid-cols-4 justify-items-center">
              <div></div>
              <div className="text-4xl font-medium">Free</div>
              <div className="text-4xl font-medium">$7.99</div>
              <div className="text-4xl font-medium">$59.99</div>
            </div>
            <div className=" grid grid-cols-4 justify-items-center">
              <div className="sm:text-lg text-sm text-left">
                Unlimited Bandwidth
              </div>
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
            </div>
            <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
            <div className=" grid grid-cols-4 justify-items-center">
              <div className="sm:text-lg text-sm text-left">
                Encrypted Connection
              </div>
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
            </div>
            <div className="h-[0.3px] bg-[#4F5665] w-full"></div>

            <div className=" grid grid-cols-4 justify-items-center">
              <div className="sm:text-lg text-sm text-left">Traffic Logs</div>
              <IoMdClose className="p-2 text-3xl text-white rounded-full border-2 border-[#EB1818]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
            </div>
            <div className="h-[0.3px] bg-[#4F5665] w-full"></div>

            <div className=" grid grid-cols-4 justify-items-center">
              <div className="sm:text-lg text-sm text-left">
                Works on All Devices
              </div>
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
            </div>
            <div className="h-[0.3px] bg-[#4F5665] w-full"></div>

            <div className=" grid grid-cols-4 justify-items-center">
              <div className="sm:text-lg text-sm text-left">
                Connect Anywhere
              </div>
              <IoMdClose className="p-2 text-3xl text-white rounded-full border-2 border-[#EB1818]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
            </div>
            <div className="h-[0.3px] bg-[#4F5665] w-full"></div>

            <div className=" grid grid-cols-4 justify-items-center">
              <div className="sm:text-lg text-sm text-left">
                Access to All Features
              </div>
              <IoMdClose className="p-2 text-3xl text-white rounded-full border-2 border-[#EB1818]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
              <AiOutlineCheck className="p-2 text-3xl text-white rounded-full border-2 border-[#5D18EB]" />
            </div>
            <div className=" grid grid-cols-4 justify-items-center">
              <div></div>
              <Link
                href={"/signUpPay"}
                className="px-8 lg:px-16 py-4 text-sm rounded-md bg-[#5D18EB]"
              >
                Buy Now
              </Link>
              <Link
                href={"/signUpPay"}
                className="px-8 lg:px-16 py-4 text-sm rounded-md bg-[#5D18EB]"
              >
                Buy Now
              </Link>
              <Link
                href={"/signUpPay"}
                className="px-8 lg:px-16 py-4 text-sm rounded-md bg-[#5D18EB]"
              >
                Buy Now
              </Link>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="md:mx-12 rounded-[19px] bg-[#191919] bg-opacity-80 grid font-axiforma py-10 px-6 max-[290px]:px-3 text-center mt-16 mx-6 md:hidden">
              <div className="text-[16px] font-medium text-[#4F5665]">
                3-Day Trial
              </div>
              <div className="text-3xl font-medium mt-6 mb-10">Free</div>
              <div className="grid gap-6 w-full">
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Unlimited Bandwidth
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Encrypted Connection
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Traffic Logs
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#EB1818]">
                    <IoMdClose />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Works on All Devices
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Connect Anywhere
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#EB1818]">
                    <IoMdClose />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Access to All Features
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#EB1818]">
                    <IoMdClose />
                  </div>
                </div>
                <Link
                  href={"/signUpPay"}
                  className="px-12 py-3 mx-auto text-sm rounded-md bg-[#5D18EB]"
                >
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="md:mx-12 rounded-[19px] bg-[#191919] bg-opacity-80 grid font-axiforma py-10 px-6 max-[290px]:px-3 text-center mx-6 md:hidden">
              <div className="text-[16px] font-medium text-[#4F5665]">
                Monthly Subscription
              </div>
              <div className="text-3xl font-medium mt-6 mb-10">$7.99</div>
              <div className="grid gap-6 w-full">
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Unlimited Bandwidth
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Encrypted Connection
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Traffic Logs
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Works on All Devices
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Connect Anywhere
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Access to All Features
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <Link
                  href={"/signUpPay"}
                  className="px-12 py-3 mx-auto text-sm rounded-md bg-[#5D18EB]"
                >
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="md:mx-12 rounded-[19px] bg-[#191919] bg-opacity-80 grid font-axiforma py-10 px-6 max-[290px]:px-3 text-center mb-28 mx-6 md:hidden">
              <div className="text-[16px] font-medium text-[#4F5665]">
                Yearly Subscription
              </div>
              <div className="text-3xl font-medium mt-6 mb-10">$59.99</div>
              <div className="grid gap-6 w-full">
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Unlimited Bandwidth
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Encrypted Connection
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Traffic Logs
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Works on All Devices
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Connect Anywhere
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <div className="h-[0.3px] bg-[#4F5665] w-full"></div>
                <div className="flex items-center justify-between">
                  <div className="sm:text-lg text-sm text-left">
                    Access to All Features
                  </div>
                  <div className="p-2 text-3s text-white rounded-full border-2 border-[#5D18EB]">
                    <AiOutlineCheck />
                  </div>
                </div>
                <Link
                  href={"/signUpPay"}
                  className="px-12 py-3 mx-auto text-sm rounded-md bg-[#5D18EB]"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
