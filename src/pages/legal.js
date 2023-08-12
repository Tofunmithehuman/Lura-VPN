import Layout from "@/layout/Layout";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const infoLinks = [
  {
    name: "Terms of service",
    href: "/terms",
  },
  {
    name: "Information documentation",
    href: "/informationReq",
  },
  {
    name: "Terms of power",
    href: "/termsPower",
  },
  {
    name: "Copyright Terms",
    href: "/copyright",
  },
  {
    name: "Privacy terms",
    href: "/privacy",
  },
  {
    name: "Information we collect",
    href: "/informationCol",
  },
  {
    name: "How we use",
    href: "/howInfoUsed",
  },
  {
    name: "Cookie Policy",
    href: "/cookie",
  },
  {
    name: "Custom Terms",
    href: "/customTerms",
  },
  {
    name: "Legal and privacy fAQ",
    href: "/legal",
  },
  {
    name: "Compliance",
    href: "/compliance",
  },
  {
    name: "Security Measures",
    href: "/security",
  },
  {
    name: "DCMA Policy",
    href: "/dcmaPolicy",
  },
  {
    name: "Open source software",
    href: "/",
  },
];

const LegalFramework = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="securityGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          Legal and Privacy FAQ
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs font-light">
            <div className="font-bold">1. Is LuraVPN a legal service?</div>
            <div>
              Yes, LuraVPN is a legal service that allows users to secure their
              internet connection and protect their privacy. However, it is
              important to use LuraVPN in compliance with the laws and
              regulations of your country and to respect the terms of service of
              the websites and services you access.
            </div>
            <div className="mt-4 font-bold">
              2. Does LuraVPN keep logs of user activities?
            </div>
            <div>
              No, LuraVPN operates under a strict no-logs policy. We do not
              collect or store logs of your internet activities, ensuring your
              online privacy is protected.
            </div>
            <div className="mt-4 font-bold">
              3. Can LuraVPN bypass geo-restrictions?
            </div>
            <p>
              Yes, LuraVPN can bypass geo-restrictions imposed by websites or
              streaming services. By connecting to our VPN servers located in
              different regions, you can access content that may be restricted
              or unavailable in your current location.
            </p>
            <div className="mt-4 font-bold">
              4. Can LuraVPN be used for torrenting or P2P file sharing?
            </div>
            <p>
              Yes, LuraVPN supports torrenting and P2P file sharing activities.
              However, we strongly encourage our users to respect copyright laws
              and use these services responsibly.
            </p>
            <div className="mt-4 font-bold">
              5. Does LuraVPN share user information with third parties?
            </div>
            <p>
              LuraVPN does not sell or rent user information to third parties.
              We may share your information with trusted third-party service
              providers only as necessary to deliver our services, process
              payments, or comply with legal obligations.
            </p>
            <div className="mt-4 font-bold">
              6. What security measures does LuraVPN employ?
            </div>
            <p>
              LuraVPN utilizes robust encryption, secure protocols, a strict
              no-logs policy, DNS leak protection, kill switch functionality,
              and advanced AI and machine learning for malware protection. These
              measures are designed to ensure the security and privacy of our
              users` online activities.
            </p>
            <div className="mt-4 font-bold">
              7. Is my payment information secure with LuraVPN?
            </div>
            <p>
              We take the security of your payment information seriously.
              LuraVPN utilizes trusted and secure payment processors to handle
              payment transactions. We do not store your full credit card
              information on our servers.
            </p>
            <div className="mt-4 font-bold">
              8. Can I request the deletion of my personal information?
            </div>
            <p>
              Yes, you have the right to request the deletion of your personal
              information held by LuraVPN. Please contact our customer support
              team to initiate the deletion process.
            </p>
            <div className="mt-4">
              For further information about our legal and privacy practices,
              please refer to our Privacy Policy and Terms of Service available
              on our website. If you have any specific legal or privacy
              concerns, feel free to reach out to our customer support team for
              assistance.
            </div>
          </div>
          <div className=" grid justify-center">
            <div className="p-[1px] termsBorder rounded-2xl">
              <div className="min-h-40 hidden md:grid rounded-2xl bg-[#151414] p-6 text-sm capitalize px-10 justify-center gap-6 font-medium">
                {infoLinks.map((item, index) => {
                  return (
                    <Link
                      href={item.href}
                      key={index}
                      className="flex items-center gap-2"
                    >
                      {router.pathname === item.href && (
                        <BsCheckLg className="text-green-500" />
                      )}
                      <p
                        className={`${
                          router.pathname === item.href
                            ? "text-white"
                            : "text-[#3e3f3e]"
                        }`}
                      >
                        {item.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LegalFramework;
