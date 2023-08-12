import React from "react";
import Help from ".";
import { Disclosure } from "@headlessui/react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/router";

const General2 = () => {
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
                    <span className="capitalize">Why should I use a VPN?</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Using a VPN allows you to benefit from a number of
                      services including:
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>
                        Hiding the location of your IP address so you can browse
                        the internet privately.
                      </li>
                      <li>
                        Safeguard your personal and sensitive information like
                        your banking details and passwords
                      </li>
                      <li>Get access to location blocked websites.</li>
                      <li>
                        Stream and download anything anonymously, securely and
                        without restrictions.
                      </li>
                      <li>Access discounts when you shop online.</li>
                    </ul>
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
                    <span className="capitalize">What is LuraVPN?</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN is designed to create cyber security and data
                      privacy for VPN users worldwide. Users can anonymously
                      access hundreds of websites while being protected. Users
                      can quickly and safely access social networking platforms,
                      online news sources, and music websites without barriers
                      using Lura DNS Proxy.
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
                      How many IPs do you have?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      As a VPN service, LuraVPN maintains a robust network of
                      servers worldwide, each having a range of IP addresses.
                      The exact number of IPs can vary based on factors like the
                      number of servers and the regions they cover. For an
                      accurate count, we suggest reaching out to our customer
                      support. Please note that our aim is to provide a
                      sufficient number of IPs to ensure seamless service for
                      our users, enabling them to maintain anonymity and bypass
                      geo-restrictions efficiently.
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
                      You can read more about our Terms and Services{" "}
                      <p className="underline inline-block">here</p>.
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
                      Can I use LuraVPN on multiple devices at the same time?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      Yes, you can. Your payment plan determines how many
                      devices you can use Lura VPN. (learn more)
                    </div>
                    <div className="mt-2">
                      Lura VPN offers different subscription plans to cater to
                      your specific needs. Here are the available plans:
                    </div>
                    <ol type="1" className="pl-6 space-y-2 mt-2 list-decimal">
                      <li>
                        Pro Plan: This plan is priced at $7.99 per month and
                        provides you with access to Lura VPN on up to 5 devices
                        simultaneously. With the Pro Plan, you can enjoy all the
                        features and benefits of Lura VPN on your chosen
                        devices.
                      </li>
                      <li>
                        LuraMax Plan: The LuraMax Plan is a cost-effective
                        option for users who require VPN access on multiple
                        devices. Priced at $59.99 per year, this plan offers
                        access to Lura VPN on up to 10 devices simultaneously.
                        With the LuraMax Plan, you can secure your internet
                        connection across a broader range of devices.
                      </li>
                    </ol>
                    <div className="mt-4">
                      By subscribing to the Pro Plan, you can utilize Lura VPN
                      on up to 5 devices, while the LuraMax Plan grants you
                      access on up to 10 devices. These plans ensure that you
                      have flexibility in choosing the number of devices you
                      want to protect and secure with Lura VPN.
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
                      Lura VPN does not affect your internet service. (learn
                      more)
                    </div>
                    <div className="mt-2">
                      ​​Lura VPN is designed to prioritise maintaining fast and
                      stable internet connections. While it is possible that
                      using a VPN can lead to a slight reduction in internet
                      speed, the impact is typically minimal and depends on
                      various factors. Here are a few things to consider:
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>
                        Server Location: The distance between your device and
                        the VPN server can affect latency and speed. Connecting
                        to a server closer to your location generally results in
                        faster speeds.
                      </li>
                      <li>
                        Internet Service Provider (ISP): Some ISPs may throttle
                        or limit the bandwidth for VPN connections. However,
                        Lura VPN aims to bypass such restrictions to provide
                        optimal speeds.
                      </li>
                      <li>
                        Encryption and Protocols: Strong encryption and robust
                        VPN protocols can have a small impact on speed. However,
                        Lura VPN utilises efficient encryption algorithms and
                        supports multiple VPN protocols to minimise potential
                        slowdowns.
                      </li>
                      <li>
                        Device Performance: The performance capabilities of your
                        device, including its processing power and network
                        adapter, can influence the overall speed when using a
                        VPN.
                      </li>
                    </ul>
                    <div className="mt-4">
                      It`s important to note that individual experiences may
                      vary based on specific circumstances. However, Lura VPN
                      strives to optimise its infrastructure and technologies to
                      ensure minimal impact on your internet speed while
                      maintaining a secure and reliable connection.
                    </div>
                    <div className="mt-4">
                      If you experience significant speed reductions while using
                      Lura VPN, try connecting to different servers or
                      contacting Lura VPN`s customer support for assistance in
                      troubleshooting and optimising your connection.
                    </div>
                    <div className="mt-4">
                      Please note that these plans provide the same level of
                      security, privacy, and access to Lura VPN`s features. It`s
                      important to select the plan that suits your requirements
                      and the number of devices you intend to use
                      simultaneously.
                    </div>
                    <div className="mt-4">
                      When signing up for Lura VPN, you will have the option to
                      choose between the Pro Plan or the LuraMax Plan based on
                      your preferences and device needs.
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
                      Does LuraVPN keep any logs on my online activity?
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    <div>
                      LuraVPN follows a strict no-logs policy, meaning it does
                      not keep any logs of your online activity. Lura VPN
                      respects your privacy and does not store information about
                      your browsing history, connection timestamps, IP
                      addresses, or any other data that could be used to
                      identify or track your online activities.
                    </div>
                    <div className="mt-2">
                      By adhering to a no-logs policy, Lura VPN ensures that
                      your online privacy is protected and your internet usage
                      remains confidential. This policy is in place to provide
                      you with a secure and anonymous VPN experience, giving you
                      peace of mind while using the service.
                    </div>
                    <div className="mt-2">
                      It`s always recommended to review the privacy policy, and
                      terms of service Lura VPN provides to understand their
                      data handling practices completely.
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
                      Lura VPN does not affect your internet service. (learn
                      more)
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>
                        Windows: LuraVPN offers a dedicated application for
                        Windows users. The application is compatible with
                        Windows 7, 8, and 10.
                      </li>
                      <li>
                        MacOS: LuraVPN provides a MacOS application that
                        supports versions from MacOS 10.12 (Sierra) onwards.
                      </li>
                      <li>
                        iOS: LuraVPN has an iOS app available in the App Store.
                        It supports iOS 11.0 and later, compatible with iPhone,
                        iPad, and iPod touch.
                      </li>
                      <li>
                        Android: LuraVPN`s Android app can be downloaded from
                        the Google Play Store and supports Android 5.0
                        (Lollipop) and above.
                      </li>
                      <li>
                        Linux: LuraVPN supports various Linux distributions.
                        While it may not offer a dedicated app, it provides
                        detailed guides on how to set up the VPN manually.
                      </li>
                      <li>
                        Routers: LuraVPN provides support for certain routers,
                        enabling you to secure all devices in your home network
                        with a single setup.
                      </li>
                      <li>
                        Browser Extensions: LuraVPN offers browser extensions
                        for Google Chrome and Mozilla Firefox.
                      </li>
                    </ul>
                    <div className="mt-4">
                      For the most accurate information, it`s recommended to
                      visit the LuraVPN website or directly contact their
                      support team. They can provide the most current details
                      about platform and operating system compatibility.
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

export default General2;
