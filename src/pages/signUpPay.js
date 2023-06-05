import React from "react";
import Image from "next/image";
import paypal from "../../public/paypal.png";
import stripe from "../../public/stripe.png";
import creditCard from "../../public/creditCard.png";
import googlePay from "../../public/googlePay.png";
import cone from "../../public/cone.png";
import { BsCheckCircleFill } from "react-icons/bs";
import Layout from "@/layout/Layout";
const SignUpPay = () => {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 text-white font-axiforma plansGradient pt-10">
        <div>
          <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="grid grid-cols-4 justify-between mb-4">
                <Image
                  src={creditCard}
                  alt="creditCard"
                  className="w-4/5 mr-auto"
                />
                <Image
                  src={googlePay}
                  alt="googlePay"
                  className="w-4/5 mx-auto"
                />
                <Image src={paypal} alt="paypal" className="w-4/5 mx-auto" />
                <Image src={stripe} alt="stripe" className="w-4/5 ml-auto" />
              </div>
              <form className="space-y-6" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium leading-6"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="firstName"
                        required
                        className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium leading-6"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="lastName"
                        required
                        className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium leading-6"
                  >
                    Card Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="card"
                      name="card"
                      type="number"
                      autoComplete="card"
                      required
                      className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium leading-6"
                    >
                      Expiration Date
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="firstName"
                        required
                        className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium leading-6"
                    >
                      CVV
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="lastName"
                        required
                        className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-[#151414] rounded-2xl p-8 text-xs font-semibold grid gap-2">
                  <div className="flex items-center justify-between">
                    <p>Selected Plan</p>
                    <span className="text-xs">$167.76</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Discount</p>
                    <span className="text-xs">$0.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg">Total</p>
                    <span className="text-sm">$167.76</span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#5D18EB] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5D18EB]"
                  >
                    Purchase and Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center sm:w-full sm:max-w-xl">
          <div className="bg-[#151414] rounded-2xl p-8 pb-40 w-5/6 sm:w-4/6 relative">
            <div className="flex items-center justify-between">
              <p>Selected Plan</p>
              <p className="text-[#A38CEE] text-xs">Change Plan</p>
            </div>
            <div className="flex gap-4 items-center my-10">
              <h2 className="text-2xl">Free</h2>
              <p className="text-[#4F5665] text-xs font-semibold">
                3-day trial
              </p>
            </div>
            <div className="flex items-center text-sm gap-2 mb-8">
              <BsCheckCircleFill className="text-[#00FF79]" />
              <p>Unlimited Bandwidth</p>
            </div>
            <div className="flex items-center text-sm gap-2 mb-8">
              <BsCheckCircleFill className="text-[#00FF79]" />
              <p>Encrypted Connection</p>
            </div>
            <div className="flex items-center text-sm gap-2 mb-8">
              <BsCheckCircleFill className="text-[#00FF79]" />
              <p>Works on all Devices</p>
            </div>
            <Image
              src={cone}
              alt="cone"
              className="absolute right-0 top-[6em]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPay;
