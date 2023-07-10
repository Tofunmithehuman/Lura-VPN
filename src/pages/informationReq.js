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

const InformationReq = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className="securityGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          Information Documentation
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs font-light">
            <p className="">
              At LuraVPN, owned by Melanie and Salsa Inc., we value our users`
              privacy and are committed to being transparent about the data we
              collect and how we use it. This document provides detailed
              information about the types of data we collect in order to provide
              our services.
            </p>
            <div className="mt-4 font-bold">1. Account Information</div>
            <div>
              When you sign up for LuraVPN, we collect basic information
              necessary to set up and manage your account. This includes your
              email address, which we use for communication, account management,
              and troubleshooting purposes.
            </div>
            <div className="mt-4 font-bold">2. Payment Information</div>
            <div>
              If you choose to use our premium services, our payment processors
              will collect payment-related information, including your name,
              credit card number, and expiration date. Note that LuraVPN does
              not store full credit card information on our servers.
            </div>
            <div className="mt-4 font-bold">3. Usage Data</div>
            <p>
              To improve our services and for analytical purposes, we collect
              anonymized, aggregated data about the use of our services. This
              may include the frequency and duration of your use of LuraVPN, the
              VPN server locations you choose, and the amount of data
              transferred. However, we ensure that this data is never associated
              with your personal identity, and we do not monitor or log your
              network traffic.
            </p>
            <div className="mt-4 font-bold">4. Technical Information</div>
            <p>
              We may collect certain technical information about your device and
              connection, including your IP address, device type, operating
              system, and browser type. This data helps us understand our users`
              needs better and allows us to optimize our service.
            </p>
            <div className="mt-4 font-bold">
              5. Cookies and Other Tracking Technologies
            </div>
            <p>
              We use cookies and similar tracking technologies on our website to
              analyze trends, administer the site, track users` movements around
              the site, and gather demographic information about our user base
              as a whole.
            </p>
            <div className="mt-4 font-bold">6. Customer Support</div>
            <p>
              When you contact our customer support team, we may collect
              additional information to help resolve your issues or answer your
              questions. This can include things like your contact details and a
              summary of the problem you`re experiencing.
            </p>
            <div className="mt-4">
              It is our commitment to respect your privacy and we take steps to
              ensure the security of all the information we collect. If you have
              any questions about our data collection practices, feel free to
              contact us.
            </div>
            <div className="mt-4">
              By using LuraVPN, you consent to our data collection practices as
              outlined in this document. If you disagree with any part of these
              practices, please discontinue use of our services.
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

export default InformationReq;
