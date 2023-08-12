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

const DcmaPolicy = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="privacyGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          DMCA Policy
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs font-light">
            <p>
              LuraVPN, owned by Melanie and Salsa Inc., respects the
              intellectual property rights of others and complies with the
              provisions of the Digital Millennium Copyright Act (DMCA). This
              policy outlines the procedures we follow when dealing with
              copyright infringement claims.
            </p>
            <div className="mt-4 font-bold">
              1. Reporting Copyright Infringement
            </div>
            <p>
              If you believe that your copyrighted work has been infringed upon
              while using LuraVPN, please follow these steps to report the
              alleged infringement:
            </p>
            <ul className="list-disc pl-4">
              <li>
                Provide a written communication that includes the following
                information:
              </li>
              <ul className="list-disc pl-4">
                <li>
                  A physical or electronic signature of the copyright owner or a
                  person authorized to act on their behalf.
                </li>
                <li>
                  Identification of the copyrighted work that has been
                  infringed.
                </li>
                <li>
                  Sufficient information to locate the material within our
                  service.
                </li>
                <li>
                  Your contact information, including your name, address,
                  telephone number, and email address.
                </li>
                <li>
                  A statement declaring that you have a good faith belief that
                  the use of the material is not authorized by the copyright
                  owner.
                </li>
                <li>
                  A statement, made under penalty of perjury, that the
                  information in the notice is accurate and that you are the
                  copyright owner or authorized to act on behalf of the
                  copyright owner.
                </li>
              </ul>
            </ul>
            <div className="mt-4 font-bold">2. DMCA Notice Submission</div>
            <p>
              Please send the DMCA notice to the designated copyright agent of
              LuraVPN. You can contact our copyright agent by email or postal
              mail using the following information:
            </p>
            <ul className="list-disc pl-4">
              <li>Copyright Agent: [Designated Copyright Agent's Name]</li>
              <li>Email: [Copyright Agent's Email Address]</li>
              <li>Postal Address: [Copyright Agent's Postal Address]</li>
            </ul>
            <div className="mt-4 font-bold">3. Counter-Notification</div>
            <p>
              If you believe that the content you posted was wrongly removed or
              disabled due to a mistake or misidentification, you may submit a
              counter-notification to our copyright agent. Your
              counter-notification must include:
            </p>
            <ul className="list-disc pl-4">
              <li>Your physical or electronic signature.</li>
              <li>
                Identification of the material that was removed or disabled and
                its location within our service.
              </li>
              <li>
                A statement, made under penalty of perjury, that you have a good
                faith belief that the material was removed or disabled as a
                result of mistake or misidentification.
              </li>
              <li>Your name, address, telephone number, and email address.</li>
              <li>
                A statement consenting to the jurisdiction of the federal court
                in the district where you reside (if in the United States), or
                that you will accept service of process from the person who
                submitted the original DMCA notice.
              </li>
            </ul>
            <div className="mt-4 font-bold">4. Repeat Infringers</div>
            <p>
              LuraVPN reserves the right to terminate the accounts of users who
              are deemed to be repeat infringers of copyrighted material.
            </p>
            <p className="mt-4">
              Please note that submitting false claims or misrepresenting
              information in your DMCA notice or counter-notification may result
              in legal consequences. LuraVPN will handle notices and
              counter-notifications in accordance with the DMCA and other
              applicable laws.
            </p>
            <p className="mt-4">
              For any inquiries regarding copyright infringement or to submit a
              DMCA notice or counter-notification, please contact our designated
              copyright agent.
            </p>
            <div className="mt-4 font-bold">
              5. Modifications to the DMCA Policy
            </div>
            <p>
              LuraVPN reserves the right to modify or update this DMCA Policy as
              needed. Any changes will be posted on our website, and it is your
              responsibility to review the policy periodically to stay informed
              of any updates.
            </p>
            <p className="mt-4">
              For further information about our DMCA Policy, please refer to the
              DMCA Policy section available on our website.
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

export default DcmaPolicy;
