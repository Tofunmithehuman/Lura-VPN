import { Disclosure } from "@headlessui/react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/router";
const faqs1 = [
  {
    question: "Why should I use a VPN?",
    response:
      "Using a VPN allows you to benefit from a number of services including:Hiding the location of your IP address so you can browse the internet privately. Safeguard your personal and sensitive information like your banking details and passwordsGet access to location blocked websites.Stream and download anything anonymously, securely and without restrictions. Access discounts when you shop online. ",
  },
  {
    question: "What is LuraVPN?",
    response:
      "LuraVPN is designed to create cyber security and data privacy for VPN users worldwide. Users can anonymously access hundreds of websites while being protected. Users can quickly and safely access social networking platforms, online news sources, and music websites without barriers using Lura DNS Proxy.",
  },
  {
    question: "How secure is LuraVPN?",
    response:
      "Lura uses a 3DES (Triple data encryption standard) to provide security with 256-bit keys. (learn more) Lura VPN prioritises its users' security and privacy, employing robust encryption protocols and security measures to ensure a secure VPN experience. Here are the key security aspects of Lura VPN: Encryption Protocols: Lura VPN utilises industry-standard encryption protocols to secure internet traffic. These protocols include: OpenVPN: A widely trusted and highly secure VPN protocol that uses OpenSSL and robust encryption algorithms. IKEv2/IPsec: A combination of the Internet Key Exchange version 2 (IKEv2) protocol and the IPsec suite, providing strong encryption and secure key exchange. Secure Tunneling: Lura VPN establishes a secure tunnel between your device and the VPN server, encrypting your data to protect it from unauthorised access and surveillance. No-Logs Policy: Lura VPN follows a strict no-logs policy, meaning it does not store or track any logs related to your online activities. This further enhances your privacy and security by ensuring that your browsing history, IP address, and other sensitive information are not recorded. Trusted Infrastructure: Lura VPN utilises a reliable and trusted infrastructure to ensure the security of its service. This includes secure server configurations and regular security audits to mitigate potential vulnerabilities. Kill Switch: Lura VPN incorporates a kill switch feature that prevents accidental exposure of your internet traffic in case of a VPN connection drop. The kill switch automatically disconnects your internet connection if the VPN connection becomes unstable, ensuring that your data remains protected at all times. DNS Leak Protection: Lura VPN employs DNS leak protection to prevent your DNS queries from leaking outside the VPN tunnel. This ensures that your online activities and browsing history remain confidential. Lura VPN prioritises the security of your data and employs these measures to provide a secure and private VPN experience. However, it's important to note that no VPN can guarantee absolute security, and it's recommended to follow best practices for online security and privacy in conjunction with using a VPN.)",
  },
];
const faqs2 = [
  { question: "Is Lura available for individuals?" },
  { question: "How much does it cost to use Lura?" },
  { question: "How secure is Lura?" },
  { question: "Will LuraVPN slow down my internet connection?" },
];
const faqs3 = [
  { question: "Is Lura available for individuals?" },
  { question: "How much does it cost to use Lura?" },
  { question: "How does Lura work?" },
];
const faqs4 = [
  { question: "Is Lura available for individuals?" },
  { question: "How much does it cost to use Lura?" },
  { question: "What does unlimited bandwidth mean?" },
];

export default function Faq() {
  const router = useRouter();

  return (
    <div className="w-full block justify-center py-8 sm:py-20">
      <h1
        className={`text-[32px] sm:text-[40px] w-[90%] mx-auto leading-relaxed text-center pb-8 sm:pb-16 font-axiforma ${
          router.pathname === "/home" ? "text-white" : "text-[#C9F4EA]"
        }`}
      >
        Frequently Asked Questions
      </h1>
      <div className="mx-auto md:w-[80%] rounded-2xl font-axiforma  p-2">
        {router.pathname === "/home" ? (
          ""
        ) : (
          <h2 className="text-2xl pl-4 py-4 font-axiforma">General</h2>
        )}
        {faqs1.map((check, index) => {
          return (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="relative">
                  <Disclosure.Button className="flex gap-4 w-full rounded-lg px-4 py-8 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    {open ? (
                      <FiMinus className="h-6 w-6 text-[#71E1EB]" />
                    ) : (
                      <FiPlus className="h-6 w-6 text-[#71E1EB]" />
                    )}
                    <span className="capitalize">{check.question}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                    {check.response}
                  </Disclosure.Panel>
                  <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>
      <div className="mx-auto md:w-[80%] rounded-2xl font-axiforma  px-2">
        {router.pathname === "/home" ? (
          ""
        ) : (
          <h2 className="text-2xl pl-4 py-4 font-axiforma">Using the VPN</h2>
        )}

        {router.pathname === "/home"
          ? null
          : faqs2.map((check, index) => {
              return (
                <Disclosure key={index}>
                  {({ open }) => (
                    <div className="relative">
                      <Disclosure.Button className="flex gap-4 w-full rounded-lg  px-4 py-8 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        {open ? (
                          <FiMinus className="h-6 w-6 text-[#71E1EB]" />
                        ) : (
                          <FiPlus className="h-6 w-6 text-[#71E1EB]" />
                        )}
                        <span className="capitalize">{check.question}</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                        The accordion component delivers large amounts of
                        content in a small space through progressive disclosure.
                        The user gets key details about the underlying content
                        and can choose to expand that content within the
                        constraints of the accordion. Accordions work especially
                        well on mobile interfaces or whenever vertical space is
                        at a premium.
                      </Disclosure.Panel>
                      <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
                    </div>
                  )}
                </Disclosure>
              );
            })}
      </div>
      <div className="mx-auto md:w-[80%] rounded-2xl font-axiforma p-2">
        {router.pathname === "/home" ? (
          ""
        ) : (
          <h2 className="text-2xl pl-4 py-4 font-axiforma">
            Advanced Settings
          </h2>
        )}

        {router.pathname === "/home"
          ? null
          : faqs3.map((check, index) => {
              return (
                <Disclosure key={index}>
                  {({ open }) => (
                    <div className="relative">
                      <Disclosure.Button className="flex gap-4 w-full rounded-lg  px-4 py-8 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        {open ? (
                          <FiMinus className="h-6 w-6 text-[#71E1EB]" />
                        ) : (
                          <FiPlus className="h-6 w-6 text-[#71E1EB]" />
                        )}
                        <span className="capitalize">{check.question}</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                        The accordion component delivers large amounts of
                        content in a small space through progressive disclosure.
                        The user gets key details about the underlying content
                        and can choose to expand that content within the
                        constraints of the accordion. Accordions work especially
                        well on mobile interfaces or whenever vertical space is
                        at a premium.
                      </Disclosure.Panel>
                      <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
                    </div>
                  )}
                </Disclosure>
              );
            })}
      </div>
      <div className="mx-auto md:w-[80%] rounded-2xl font-axiforma p-2">
        {router.pathname === "/home" ? (
          ""
        ) : (
          <h2 className="text-2xl pl-4 py-4 font-axiforma">Billing</h2>
        )}

        {router.pathname === "/home"
          ? null
          : faqs4.map((check, index) => {
              return (
                <Disclosure key={index}>
                  {({ open }) => (
                    <div className="relative">
                      <Disclosure.Button className="flex gap-4 w-full rounded-lg  px-4 py-8 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        {open ? (
                          <FiMinus className="h-6 w-6 text-[#71E1EB]" />
                        ) : (
                          <FiPlus className="h-6 w-6 text-[#71E1EB]" />
                        )}
                        <span className="capitalize">{check.question}</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
                        The accordion component delivers large amounts of
                        content in a small space through progressive disclosure.
                        The user gets key details about the underlying content
                        and can choose to expand that content within the
                        constraints of the accordion. Accordions work especially
                        well on mobile interfaces or whenever vertical space is
                        at a premium.
                      </Disclosure.Panel>
                      <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
                    </div>
                  )}
                </Disclosure>
              );
            })}
      </div>
    </div>
  );
}
