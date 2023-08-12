/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Help from ".";
import { Disclosure } from "@headlessui/react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";

const UsingVPN = () => {
  return (
    <Help>
      <div className="text-white">
        <div className="w-full block justify-left">
          <div className=" rounded-2xl font-axiforma  p-2">
            <h2 className="text-2xl pl-4 py-4 font-axiforma">Using LURAVPN</h2>
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
                      How do I install LuraVPN?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      You can find step-by-step instructions on installing
                      LuraVPN{" "}
                      <span className="underline cursor-pointer font-bold">
                        here:
                      </span>
                    </div>
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
                      Can you recommend which VPN server location to use for
                      specific purposes, such as online gaming or securely
                      accessing banking services?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Choosing the right server location on your VPN can greatly
                      enhance your online experience, whether gaming, banking,
                      streaming or browsing.
                    </div>
                    <div className="mt-4">
                      With LuraVPN, we make selecting from a broad range of
                      server locations easy for optimal performance and
                      security. (
                      <span className="underline cursor-pointer font-bold">
                        Learn more
                      </span>
                      )
                    </div>
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
                      Can I use LuraVPN for torrenting or P2P file sharing?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN provides users with a quick and secure connection
                      with any server and allows use for P2P or torrents.
                    </div>
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
                      Can I use Lura to bypass censorship in my country?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Yes, LuraVPN can be used to bypass internet censorship in
                      your country. (
                      <span className="underline cursor-pointer font-bold">
                        Learn more
                      </span>
                      )
                    </div>
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
                      How can I troubleshoot connectivity issues on LuraVPN?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Find an in-depth breakdown of troubleshooting connectivity
                      issues{" "}
                      <span className="underline cursor-pointer font-bold">
                        here:
                      </span>
                    </div>
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
                      Can streaming services like Netflix or BBC iPlayer be used
                      with LuraVPN?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>Yes, this is possible.</div>
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
                      How do I activate LuraVPN?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      After downloading or installing LuraVPN on your device,
                      you can activate the Lura system by clicking the power
                      button on your app or dashboard.
                    </div>
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
                      Can I use LuraVPN when I’m not connected to wifi?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Indeed, you can utilise LuraVPN even when you're not
                      connected to a Wi-Fi network. As long as you have an
                      active internet connection, such as mobile data, LuraVPN
                      will continue to function and provide its security and
                      privacy benefits.
                    </div>
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
                      How do I fix slow speeds?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Switch the port/protocol in the software or connect to a
                      different server closer to your location.
                    </div>
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
                      Can I access geo-restricted content with LuraVPN?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      One of the primary benefits of using LuraVPN is the
                      ability to access geo-restricted content. LuraVPN allows
                      you to bypass geographic restrictions and access content
                      that may be limited or unavailable in your location. (
                      <span className="underline cursor-pointer font-bold">
                        Learn more
                      </span>
                      )
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

export default UsingVPN;
