import { Disclosure } from "@headlessui/react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/router";
const faqs1 = [
  { question: "What does Lura do?" },
  { question: "How do i use Lura?" },
  { question: "Is Lura available for companies and teams?" },
];
const faqs2 = [
  { question: "Is Lura available for individuals?" },
  { question: "How much does it cost to use Lura?" },
  { question: "How does Lura work?" },
  { question: "What does unlimited bandwidth mean?" },
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
        className={`text-[32px] sm:text-[40px] w-[90%] mx-auto leading-relaxed text-center pb-8 sm:pb-16 font-anglecia ${
          router.pathname === "/home" ? "text-white" : "text-[#C9F4EA]"
        }`}
      >
        Frequently Asked Questions
      </h1>
      <div className="mx-auto md:w-[80%] rounded-2xl font-axiforma  p-2">
        {router.pathname === "/home" ? (
          ""
        ) : (
          <h2 className="text-2xl pl-4 py-4 font-anglecia">General</h2>
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
                    The accordion component delivers large amounts of content in
                    a small space through progressive disclosure. The user gets
                    key details about the underlying content and can choose to
                    expand that content within the constraints of the accordion.
                    Accordions work especially well on mobile interfaces or
                    whenever vertical space is at a premium.
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
          <h2 className="text-2xl pl-4 py-4 font-anglecia">Using the VPN</h2>
        )}

        {faqs2.map((check, index) => {
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
                    The accordion component delivers large amounts of content in
                    a small space through progressive disclosure. The user gets
                    key details about the underlying content and can choose to
                    expand that content within the constraints of the accordion.
                    Accordions work especially well on mobile interfaces or
                    whenever vertical space is at a premium.
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
          <h2 className="text-2xl pl-4 py-4 font-anglecia">
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
          <h2 className="text-2xl pl-4 py-4 font-anglecia">Billing</h2>
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
