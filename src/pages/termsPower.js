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


const TermsOfPower = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className="privacyGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          Terms of Power
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs font-light">
            <p>
              LuraVPN, owned by Melanie and Salsa Inc., provides VPN services to
              empower individuals with secure and private internet access. By
              using LuraVPN, you agree to the following terms of power:
            </p>
            <div className="mt-4 font-bold">1. User Responsibilities</div>
            <ul className="list-disc pl-4">
              <li>
                You are responsible for maintaining the confidentiality of your
                LuraVPN account credentials, including your username and
                password. Any activity conducted through your account will be
                your sole responsibility.
              </li>
              <li>
                You agree not to use LuraVPN for any illegal or unauthorized
                activities, including but not limited to hacking, spreading
                malware, or engaging in any form of cybercrime.
              </li>
              <li>
                You will comply with all applicable laws and regulations in your
                jurisdiction while using LuraVPN.
              </li>
            </ul>
            <div className="mt-4 font-bold">2. Service Availability</div>
            <ul className="list-disc pl-4">
              <li>
                LuraVPN strives to provide a reliable and uninterrupted service,
                but we do not guarantee that our service will be available at
                all times without interruptions or delays. Occasional
                maintenance or technical issues may impact the availability of
                our services.
              </li>
              <li>
                We reserve the right to suspend or terminate your access to
                LuraVPN for violation of our terms of power or any unlawful
                activities.
              </li>
            </ul>
            <div className="mt-4 font-bold">
              3. Intellectual Property Rights
            </div>
            <ul className="list-disc pl-4">
              <li>
                LuraVPN and its associated logos, trademarks, and content are
                protected by intellectual property laws. You agree not to
                reproduce, modify, distribute, or create derivative works based
                on our intellectual property without our explicit permission.
              </li>
            </ul>
            <div className="mt-4 font-bold">4. Limitation of Liability</div>
            <ul className="list-disc pl-4">
              <li>
                LuraVPN and its parent company, affiliates, employees, and
                partners shall not be held liable for any direct, indirect,
                incidental, consequential, or exemplary damages arising from
                your use of LuraVPN, including but not limited to damages for
                loss of profits, data, or other intangible losses.
              </li>
            </ul>
            <div className="mt-4 font-bold">
              5. Third-Party Websites and Services
            </div>
            <ul className="list-disc pl-4">
              <li>
                LuraVPN may provide links or access to third-party websites or
                services for your convenience. These websites or services are
                not under our control, and we are not responsible for their
                content, privacy practices, or terms of use. You access and use
                them at your own risk.
              </li>
            </ul>
            <div className="mt-4 font-bold">6. Amendments to the Terms</div>
            <ul className="list-disc pl-4">
              <li>
                LuraVPN reserves the right to modify or update these terms of
                power at any time. We will notify you of any material changes to
                the terms through our website or other communication channels.
                Your continued use of LuraVPN after such changes constitutes
                your acceptance of the updated terms.
              </li>
            </ul>
            <div className="mt-4 font-bold">
              7. Governing Law and Jurisdiction
            </div>
            <ul className="list-disc pl-4">
              <li>
                These terms of power shall be governed by and interpreted in
                accordance with the laws of the jurisdiction in which LuraVPN is
                incorporated, without regard to its conflict of law provisions.
                Any disputes arising from these terms shall be subject to the
                exclusive jurisdiction of the courts in that jurisdiction.
              </li>
            </ul>

            <div className="mt-4">
              By using LuraVPN, you agree to abide by these terms of power. If
              you do not agree with any part of these terms, please discontinue
              using our services.
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

export default TermsOfPower;
