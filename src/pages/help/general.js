/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Help from ".";
import { Disclosure } from "@headlessui/react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";

const General = () => {
  return (
    <Help>
      <div className="text-white">
        <div className="w-full block justify-left">
          <div className=" rounded-2xl font-axiforma  p-2">
            <h2 className="text-2xl pl-4 py-4 font-axiforma">General</h2>
            <Disclosure>
              {({ open }) => (
                <div className="relative">
                  <Disclosure.Button className="flex gap-4 w-full rounded-lg px-4 py-8 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    {open ? (
                      <FiMinus className="h-6 w-6 text-[#71E1EB]" />
                    ) : (
                      <FiPlus className="h-6 w-6 text-[#71E1EB]" />
                    )}
                    <span className="capitalize">What is LuraVPN?</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN is designed to create cyber security and data
                      privacy for VPN users worldwide.
                    </div>
                    <div className="mt-4">
                      Using Lura DNS Proxy, you can browse all your favourite
                      sites safely, quickly and anonymously from social
                      networking platforms, online news sources, and music
                      websites without barriers.
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
                    <span className="capitalize">Why should I use a VPN?</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Find out the benefits of using a VPN: (
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
                    <span className="capitalize">How safe is LuraVPN?</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN prioritises its users' security and privacy,
                      employing robust encryption protocols and security
                      measures to ensure a secure VPN experience. (
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
                      What are the benefits and features of LuraVPN?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      We offer a broad range of extra benefits designed to
                      optimise your internet experience, including an advanced
                      Anti-Malware system combined with progressive
                      machine-learning technology. (
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
                      What encryption protocols does LuraVPN use?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN utilises industry-standard encryption protocols to
                      secure internet traffic. (
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
                      What are the Remote ID and Local ID for IKEv2?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      The Remote ID is the server address, and the Local ID is
                      the VPN username.
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
                      Does LuraVPN keep any logs of my online activity?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN follows a strict no-logs policy, meaning it does
                      not keep any logs of your online activity. (
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
                      What kind of servers does LuraVPN use?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN employs a network of high-performance servers
                      spread across various global locations.
                    </div>
                    <div className="mt-4">
                      These servers are optimised for speed, reliability, and
                      security to ensure the best possible user experience. (
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
                      What platforms and operating systems are supported by
                      LuraVPN?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      For a list of operating systems,{" "}
                      <span className="underline cursor-pointer font-bold">
                        click here
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
                      How many IPs does LuraVPN have?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      As a VPN service, LuraVPN maintains a robust network of
                      servers worldwide, each having a range of IP addresses.
                    </div>
                    <div className="mt-4">
                      The exact number of IPs can vary based on factors like the
                      number of servers and the regions they cover. For an
                      accurate count, we suggest reaching out to our customer
                      support.
                    </div>
                    <div className="mt-4">
                      Please note that our aim is to provide a sufficient number
                      of IPs to ensure seamless service for our users, enabling
                      them to maintain anonymity and bypass geo-restrictions
                      efficiently.
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
                      Will LuraVPN slow down my internet connection?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN does not affect your internet service. (
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
                      Is there a data limit or bandwidth cap?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>This is dependent on your subscription plan.</div>
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
                      Can I simultaneously use LuraVPN on multiple devices?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Yes, you can. Your payment plan determines how many
                      devices you can use LuraVPN. (
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
                      What are LuraVPNs Terms of Services?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Yes, you can read more about our Terms and Services{" "}
                      <Link href={"/terms"} className="underline font-bold">
                        here
                      </Link>
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
                      What is the customer support availability?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Our Customer Support team is available 24 hours a day,
                      seven days a week. We strive to respond to all inquiries
                      as quickly as possible. (
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
                      Are there any restrictions or limitations?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      While LuraVPN is committed to providing you with a secure,
                      private and unrestricted internet browsing experience,
                      there are a few important limitations and restrictions to
                      note. (
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

export default General;
