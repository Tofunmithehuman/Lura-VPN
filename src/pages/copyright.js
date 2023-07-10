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

const Copyright = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className="securityGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          Copyright Terms
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs font-light">
            <p className="">
              LuraVPN, owned by Melanie and Salsa Inc., respects the
              intellectual property rights of others and expects our users to do
              the same. Please read the following copyright terms regarding the
              use of our services:
            </p>
            <div className="mt-4 font-bold">
              1. Intellectual Property Rights
            </div>
            <div>
              All content, including but not limited to text, graphics, logos,
              images, audio clips, and software, available through LuraVPN is
              protected by copyright laws and other intellectual property
              rights. These rights are owned or licensed by LuraVPN and its
              affiliated partners.
            </div>
            <div className="mt-4 font-bold">2. Prohibited Activities</div>
            <p>
              Users of LuraVPN are strictly prohibited from engaging in any
              activities that infringe upon the intellectual property rights of
              others. This includes, but is not limited to, unauthorized
              distribution, sharing, or downloading of copyrighted materials.
            </p>
            <div className="mt-4 font-bold">
              3. Compliance with Copyright Laws
            </div>
            <p>
              LuraVPN expects all users to comply with applicable copyright laws
              and regulations. It is your responsibility to ensure that your use
              of LuraVPN does not violate the intellectual property rights of
              others.
            </p>
            <div className="mt-4 font-bold">4. DMCA Notices</div>
            <p>
              LuraVPN operates in compliance with the Digital Millennium
              Copyright Act (DMCA). If you believe that your copyrighted work
              has been infringed upon while using our services, please provide
              us with a proper DMCA notice. Include the following information in
              your notice:
            </p>
            <ul className="list-disc pl-4">
              <li>
                Identification of the copyrighted work that has been infringed.
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
                A statement declaring that you have a good faith belief that the
                use of the material is not authorized by the copyright owner.
              </li>
              <li>
                A statement, made under penalty of perjury, that the information
                in the notice is accurate and that you are the copyright owner
                or authorized to act on behalf of the copyright owner.
              </li>
            </ul>
            <p className="mt-4">
              Please send the DMCA notice to the designated copyright agent,
              whose contact information can be found in our DMCA Policy.
            </p>
            <div className="mt-4 font-bold">5. Repeat Infringers</div>
            <p>
              LuraVPN reserves the right to terminate the accounts of users who
              repeatedly infringe upon the intellectual property rights of
              others.
            </p>
            <div className="mt-4">
              If you have any questions or concerns regarding copyright issues
              or would like to report a copyright infringement, please contact
              our customer support team or refer to our DMCA Policy available on
              our website.
            </div>
            <div className="mt-4">
              By using LuraVPN, you acknowledge and agree to abide by these
              copyright terms and respect the intellectual property rights of
              others.
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

export default Copyright;
