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
const CustomTerms = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="securityGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          Custom Terms
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs font-light">
            <p className="">
              LuraVPN, owned by Melanie and Salsa Inc., provides VPN services to
              users worldwide. While we strive to ensure a seamless experience
              for our users, it is important to understand and comply with
              customs terms and regulations when using our services. Please
              review the following customs terms related to LuraVPN:
            </p>
            <div className="mt-4 font-bold">1. Import Regulations</div>
            <div>
              When using LuraVPN, it is your responsibility to comply with the
              import regulations of your country. Some countries have specific
              regulations regarding the use of VPN services or the importation
              of encryption technologies. It is important to familiarize
              yourself with these regulations to ensure compliance.
            </div>
            <div className="mt-4 font-bold">2. Export Compliance</div>
            <div>
              LuraVPN operates in accordance with applicable export laws and
              regulations. Our VPN services may be subject to export controls
              and restrictions imposed by the United States and other countries.
              You are responsible for ensuring compliance with all relevant
              export laws in your jurisdiction.
            </div>
            <div className="mt-4 font-bold">3. Prohibited Activities</div>
            <p>
              You are prohibited from using LuraVPN for any illegal activities,
              including but not limited to:
            </p>
            <ul className="list-disc pl-4">
              <li>
                Circumventing or bypassing any laws, regulations, or
                restrictions.
              </li>
              <li>
                Engaging in unauthorized access to computer systems or networks.
              </li>
              <li>
                Distributing, sharing, or accessing illegal or pirated content.
              </li>
            </ul>
            <div className="mt-4">
              LuraVPN does not condone or support any illegal activities. Users
              found to be engaged in prohibited activities may face account
              suspension or termination.
            </div>
            <div className="mt-4 font-bold">4. Liability</div>
            <p>
              LuraVPN is not liable for any violations of customs regulations,
              import/export laws, or any other legal requirements related to
              your use of our services. It is your responsibility to ensure
              compliance with all applicable laws and regulations in your
              jurisdiction.
            </p>
            <div className="mt-4 font-bold">
              5. Cooperation with Authorities
            </div>
            <p>
              LuraVPN cooperates with law enforcement agencies and government
              authorities as required by law. In the event of a valid legal
              request, we may be required to provide information or assist in
              investigations.
            </p>
            <div className="mt-4 font-bold">6. Indemnification</div>
            <p>
              By using LuraVPN, you agree to indemnify and hold LuraVPN, its
              parent company, affiliates, and employees harmless from any
              claims, damages, liabilities, or expenses arising from your
              violation of customs terms, import/export laws, or any other
              applicable regulations.
            </p>
            <div className="mt-4">
              It is essential to familiarize yourself with the customs terms and
              regulations specific to your jurisdiction. LuraVPN does not
              provide legal advice, and it is recommended to consult with
              appropriate legal counsel or relevant authorities regarding
              customs regulations in your country.
            </div>
            <div className="mt-4">
              By using LuraVPN, you acknowledge and agree to comply with these
              customs terms.
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

export default CustomTerms;
