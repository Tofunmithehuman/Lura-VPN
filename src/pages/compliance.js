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
    name: "Custom Terms",
    href: "/",
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
    href: "/",
  },
  {
    name: "Cookie Policy",
    href: "/cookie",
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
    name: "Open source software",
    href: "/",
  },
];

const Compliance = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className="securityGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          Compliance
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs font-light">
            <div>
              At LuraVPN, we prioritize compliance with relevant laws and
              regulations to ensure the highest standards of security, privacy,
              and user protection. We are committed to maintaining transparency
              and meeting legal requirements in the jurisdictions in which we
              operate. Here is our compliance statement:
            </div>
            <div className="font-bold mt-4">1. Data Protection and Privacy</div>
            <div>
              We adhere to data protection and privacy laws, including the
              General Data Protection Regulation (GDPR) for users within the
              European Union (EU). We are committed to protecting your personal
              information and only collect and process data in accordance with
              applicable laws and our Privacy Policy.
            </div>
            <div className="mt-4 font-bold">
              2. Anti-Money Laundering (AML) and Know Your Customer (KYC)
            </div>
            <div>
              To prevent illicit activities and comply with AML and KYC
              regulations, we may require users to verify their identity before
              utilizing certain features or making payments. We conduct due
              diligence in accordance with legal requirements to ensure the
              integrity of our services.
            </div>
            <div className="mt-4 font-bold">
              3. Intellectual Property Rights
            </div>
            <p>
              LuraVPN respects intellectual property rights and expects our
              users to do the same. We encourage users to abide by copyright
              laws and refrain from engaging in any infringing activities,
              including the unauthorized sharing or distribution of copyrighted
              materials.
            </p>
            <div className="mt-4 font-bold">
              4. Jurisdiction and Legal Compliance
            </div>
            <p>
              LuraVPN operates in compliance with the laws and regulations of
              the jurisdictions in which we provide our services. We cooperate
              with legal authorities and government requests within the
              boundaries of the law, ensuring that our services are not misused
              for illegal activities.
            </p>
            <div className="mt-4 font-bold">
              5. Transparency Reports and Requests
            </div>
            <p>
              We are committed to transparency and may publish periodic reports
              outlining the number and nature of legal requests received,
              subject to applicable laws. We will assess each request and
              provide information as required by law, while striving to protect
              the privacy and security of our users to the extent possible.
            </p>
            <div className="mt-4">
              Please note that while we make every effort to comply with
              applicable laws and regulations, it is ultimately the
              responsibility of our users to understand and comply with the laws
              in their own jurisdictions when using our services.
            </div>
            <p>
              For any specific compliance-related inquiries or concerns, please
              contact our customer support team, who will be happy to assist
              you.
            </p>
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

export default Compliance;
