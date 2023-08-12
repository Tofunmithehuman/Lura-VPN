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

const Cookie = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="termsGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          Cookie Policy
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs">
            <p className="mb-4 font-medium">Last Updated: June 8, 2023</p>
            <p className="mb-4 font-light">
              This Cookie Policy explains how LuraVPN, owned by Melanie and
              Salsa Inc ("we", "our", "us"), uses cookies and similar
              technologies when you visit our website at www.luravpn.com or any
              other website, pages, features, or content owned and operated by
              us (collectively, the "Site").
            </p>
            <div className="mt-4 font-bold">What are Cookies?</div>
            <div className="font-light grid gap-4 mt-1">
              <p>
                Cookies are small text files that are stored in your web browser
                that allows LuraVPN or a third party to recognize you. Cookies
                can be used to collect, store, and share bits of information
                about your activities across websites, including on LuraVPN
                site.
              </p>
            </div>
            <div className="mt-4 font-bold">How We Use Cookies</div>
            <div className="font-light grid gap-4">
              <p>
                We use cookies for several reasons. Some cookies are required
                for technical reasons in order for our Site to operate, and we
                refer to these as "essential" or "strictly necessary" cookies.
                Other cookies enable us and the third parties we work with to
                track and target the interests of visitors to our Site, and we
                refer to these as "performance" or "functionality" cookies. For
                example, we use cookies to tailor content and information that
                we may send or display to you and otherwise personalize your
                experience while interacting with our Site and to otherwise
                improve the functionality of the Services we provide.
              </p>
            </div>
            <div className="mt-4 font-bold">Your Choices</div>
            <div className="font-light grid gap-4">
              <p>
                Most browsers are initially set up to accept cookies. If you
                prefer, you can set your browser to reject cookies or to alert
                you when a cookie is placed on your computer. Please note,
                however, that if you decide not to accept cookies from our Site,
                the Site may not function properly.
              </p>
            </div>
            <div className="mt-4 font-bold">Changes to the Policy</div>
            <div className="font-light grid gap-4">
              <p>
                We may update this Cookie Policy from time to time in order to
                reflect, for example, changes to the cookies we use or for other
                operational, legal, or regulatory reasons. Please re-visit this
                Cookie Policy regularly to stay informed about our use of
                cookies and related technologies.
              </p>
            </div>
            <div className="mt-4">Contact</div>
            <p>
              For any queries in relation to this Cookie Policy, please contact
              us at support@luravpn.com or write to us at: Melanie and Salsa
              Inc, 8 The Green, Suite #15180, Dover, DE 19901, USA.
            </p>
            <div className="mt-4">
              Please note that this Cookie Policy should be read in conjunction
              with our Privacy Policy, which sets out how and why we collect,
              store, use and share personal data generally, as well as your
              rights in relation to your personal data and details of how to
              contact us and supervisory authorities if you have a complaint.
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

export default Cookie;
