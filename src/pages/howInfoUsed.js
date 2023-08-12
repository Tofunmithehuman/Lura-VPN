/* eslint-disable react/no-unescaped-entities */
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

const HowInfoUsed = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="privacyGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          How We Use Your Information
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs font-light">
            <p>
              LuraVPN, owned by Melanie and Salsa Inc., values your privacy and
              is committed to using your information responsibly and
              transparently. This document outlines how we collect, use, and
              protect your information when you use our services. By using
              LuraVPN, you consent to the practices described below:
            </p>
            <div className="mt-4 font-bold">1. Information Collection</div>
            <ul className="list-disc pl-4">
              <li>
                Account Information: When you sign up for LuraVPN, we collect
                basic information such as your email address. This information
                is used to create and manage your account, provide customer
                support, and send important service-related communications.
              </li>
              <li>
                Payment Information: If you subscribe to our premium services,
                we may collect payment-related information to process your
                transactions. We work with trusted third-party payment
                processors to handle your payment information securely.
              </li>
              <li>
                Usage Data: We collect anonymous, aggregated data about your use
                of LuraVPN, including connection timestamps, bandwidth usage,
                and VPN server locations. This information helps us improve our
                services, troubleshoot technical issues, and analyze user
                trends.
              </li>
            </ul>
            <div className="mt-4 font-bold">2. Use of Information</div>
            <ul className="list-disc pl-4">
              <li>
                We use your information to provide, maintain, and enhance
                LuraVPN services, including troubleshooting, customer support,
                and account management.
              </li>
              <li>
                We may use aggregated and anonymized data for statistical
                analysis, research, and to improve our services. This data does
                not contain personally identifiable information.
              </li>
            </ul>
            <div className="mt-4 font-bold">3. Data Retention</div>
            <ul className="list-disc pl-4">
              <li>
                We retain your information only for as long as necessary to
                fulfill the purposes outlined in this document, comply with
                legal obligations, and resolve disputes. Once your information
                is no longer needed, we securely delete or anonymize it.
              </li>
            </ul>
            <div className="mt-4 font-bold">4. Information Security</div>
            <ul className="list-disc pl-4">
              <li>
                LuraVPN employs industry-standard security measures to protect
                your information from unauthorized access, disclosure,
                alteration, or destruction. We utilize encryption, secure data
                storage practices, and regular security audits to ensure the
                confidentiality and integrity of your data.
              </li>
            </ul>
            <div className="mt-4 font-bold">
              5. Third-Party Service Providers
            </div>
            <ul className="list-disc pl-4">
              <li>
                We may engage trusted third-party service providers to assist us
                in delivering our services. These providers are contractually
                obligated to handle your information securely and only for the
                purposes specified by LuraVPN.
              </li>
            </ul>
            <div className="mt-4 font-bold">
              6. Compliance with Laws and Legal Requests
            </div>
            <ul className="list-disc pl-4">
              <li>
                LuraVPN operates in compliance with applicable laws and
                regulations. We may disclose your information if required by
                law, regulation, or valid legal process, such as a court order
                or government request.
              </li>
            </ul>
            <div className="mt-4 font-bold">7. Updates to this Policy</div>
            <ul className="list-disc pl-4">
              <li>
                We may update this "How We Use Your Information" document from
                time to time to reflect changes in our information practices. We
                encourage you to review this document periodically for any
                updates.
              </li>
            </ul>
            <div className="mt-4">
              If you have any questions or concerns about how we use your
              information, please contact our customer support team. For more
              detailed information, please refer to our Privacy Policy, which is
              available on our website.
            </div>
            <div className="mt-4">
              By using LuraVPN, you acknowledge and agree to the practices
              described in this document and our Privacy Policy.
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

export default HowInfoUsed;
