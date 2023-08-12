/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Help from ".";
import { Disclosure } from "@headlessui/react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";

const Billing = () => {
  return (
    <Help>
      <div className="text-white">
        <div className="w-full block justify-left">
          <div className=" rounded-2xl font-axiforma  p-2">
            <h2 className="text-2xl pl-4 py-4 font-axiforma">Billing</h2>
            <Disclosure>
              {({ open }) => (
                <div className="relative">
                  <Disclosure.Button className="flex gap-4 w-full rounded-lg px-4 py-8 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    {open ? (
                      <FiMinus className="h-6 w-6 text-[#71E1EB]" />
                    ) : (
                      <FiPlus className="h-6 w-6 text-[#71E1EB]" />
                    )}
                    <span className="capitalize">
                      How can I cancel my subscription or request a refund?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      You have three days of free trial; if your subscription
                      isn't cancelled within those three days, you will be
                      billed.
                    </div>
                    <div className="mt-4">We do not process refunds.</div>
                  </Disclosure.Panel>
                  <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
                </div>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <div className="relative">
                  <Disclosure.Button className="flex gap-4 w-full rounded-lg px-4 py-8 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    {open ? (
                      <FiMinus className="h-6 w-6 text-[#71E1EB]" />
                    ) : (
                      <FiPlus className="h-6 w-6 text-[#71E1EB]" />
                    )}
                    <span className="capitalize">
                      Do you offer a free trial period?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>There is a trial period of 3 days.</div>
                  </Disclosure.Panel>
                  <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
                </div>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <div className="relative">
                  <Disclosure.Button className="flex gap-4 w-full rounded-lg px-4 py-8 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    {open ? (
                      <FiMinus className="h-6 w-6 text-[#71E1EB]" />
                    ) : (
                      <FiPlus className="h-6 w-6 text-[#71E1EB]" />
                    )}
                    <span className="capitalize">
                      What payment methods do you accept?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN accepts various payment methods to cater to our
                      diverse customer base and ensure a seamless purchasing
                      experience.
                    </div>
                    <div className="mt-4">
                      Our accepted payment methods include credit and debit
                      cards via Stripe and digital wallets like Google Pay and
                      Apple Pay.
                    </div>
                    <div className="mt-4">
                      In response to popular demand, we have integrated PayPal
                      into our platform, providing a globally recognised and
                      trusted method for secure online transactions.
                    </div>
                    <div className="mt-4">
                      Please note that the availability of these payment options
                      may depend on your location. All our payment methods use
                      encrypted transactions to ensure the highest level of
                      security for your personal information.
                    </div>
                  </Disclosure.Panel>
                  <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
                </div>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </Help>
  );
};

export default Billing;
