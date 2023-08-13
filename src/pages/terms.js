import Layout from "@/layout/Layout";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import TermsOfPower from "@/components/Terms/TermsOfPower";
import Copyright from "@/components/Terms/Copyright";
import DcmaPolicy from "@/components/Terms/DcmaPolicy";
import CustomTerms from "@/components/Terms/CustomTerms";
import Compliance from "@/components/Terms/Compliance";
import Privacy from "@/components/Terms/Privacy";
import InformationWeCollect from "@/components/Terms/InformationWeCollect";
import HowWeUseInfo from "@/components/Terms/HowWeUseInfo";
import CookiePolicy from "@/components/Terms/CookiePolicy";
import LegalAndPrivacy from "@/components/Terms/LegalAndPrivacy";
import Security from "@/components/Terms/Security";

const infoLinks = [
  {
    name: "Terms of service",
    href: "/terms",
  },
  {
    name: "Terms of power",
    href: "#termsPower",
  },
  {
    name: "Copyright Terms",
    href: "#copyright",
  },
  {
    name: "DCMA Policy",
    href: "#dcmaPolicy",
  },
  {
    name: "Custom Terms",
    href: "#customTerms",
  },
  {
    name: "Compliance",
    href: "#compliance",
  },
  {
    name: "Privacy terms",
    href: "#privacy",
  },
  {
    name: "Information we collect",
    href: "#informationCol",
  },
  {
    name: "How we use",
    href: "#howInfoUsed",
  },
  {
    name: "Cookie Policy",
    href: "#cookie",
  },
  {
    name: "Legal and privacy fAQ",
    href: "#legal",
  },
  {
    name: "Security Measures",
    href: "#security",
  },
  {
    name: "Information documentation",
    href: "#informationReq",
  },
  {
    name: "Open source software",
    href: "#",
  },
];

const Terms = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="termsGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] leading-relaxed text-left py-8 sm:pt-16 font-axiforma text-[#DFD1FB]">
          Terms of Service
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs">
            <div className="mt-4 font-bold">Acceptance of terms</div>
            <div className="font-light grid gap-4 mt-1">
              <p>
                All use of the services and goods provided by Melanie and Salsa
                Ltd. is subject to the terms and conditions listed below. The
                provision of any Services to you is dependent on your acceptance
                without change of all operating rules, policies, and procedures
                that Melanie and Salsa Ltd. may post from time to time on this
                Site.
              </p>
              <p>
                Before using any services provided by Melanie and Salsa Ltd.,
                please carefully read this Agreement. You consent to be bound by
                the terms and conditions of this agreement by placing an order
                for any services. You are not permitted to use any services or
                access the Lura website if you do not agree these terms of use
              </p>
            </div>
            <div className="mt-4 font-bold">Registered users and accounts</div>
            <div className="font-light grid gap-4">
              <p>
                You must provide all the information requested by us at the time
                of registration if you want to be a Registered User. We will
                give you a Website Account that you can access with a User ID
                and Password if you register as a user. You are responsible for
                keeping your User ID and Password private. If you discover any
                unauthorized use of your account or password, you must
                immediately notify us. You could be held liable for any losses
                resulting from any failure to keep your password confidential,
                as well as for any activity on our website that results from
                that failure. Unless you have that person`s specific permission,
                you may not access our website using anybody else`s User ID or
                Password. In our sole discretion, we may disable your User ID
                and password without prior warning or justification. The
                Services connected to the Account may only be used by the
                Account holder. Access to the Services that may be granted to
                you as a result of being a Registered User may not be shared,
                distributed, published, or sold again under any circumstances.
              </p>
            </div>
            <div className="mt-4 font-bold">Copyright and Trademark</div>
            <div className="font-light grid gap-4">
              <p>
                The Lura Website and all of its contents are the sole property
                of Melanie and Salsa Ltd. and are covered by international
                copyright and trademark laws. We own the trademarks Lura and our
                logo. We grant no permission for the use of these trademarks,
                and such use may constitute an infringement of our rights. The
                other registered and unregistered trademarks or service marks on
                our Website are the property of their respective owners. Unless
                stated otherwise, we do not endorse and are not affiliated with
                any of the holders of any such rights and as such we cannot
                grant any license to exercise such rights. You agree to abide by
                all local, national, and international copyright and trademark
                laws by using the website.
              </p>
            </div>
            <div className="mt-4 font-bold">
              Protection of the Lura Website and Service
            </div>
            <div className="font-light grid gap-4">
              <p>
                You are not allowed to use the website or the services in any
                way that could harm, disable, overload, or impair them in any
                way. You must not upload, post, or otherwise send any items
                through the Services that could affect the Website or the
                Services, such as computer viruses, Trojan horses, worms, or
                other potentially dangerous, disruptive, or destructive files or
                software. You are not permitted to monitor, copy, summarize, or
                otherwise extract information from the Website using any
                procedure or application. System and network security violations
                could lead to legal or criminal responsibility. We reserve the
                right to suspend your access to your Account if we believe you
                are in violation of this clause. We cannot guarantee that the
                Website is always free of malware or other potentially harmful
                programs.
              </p>
            </div>
            <div className="mt-4">You guarantee us that:</div>
            <ul className="list-disc pl-4 font-light">
              <li>
                you won`t use the website or the services for any improper or
                forbidden purposes, such as but not limited to those that are
                defamatory, illegal, threatening, dangerous, obscene, malicious,
                fraudulent, unlawful, and/or immoral.
              </li>
              <li>
                use the Website or the Services for false representations,
                deceptive statements, the display or distribution of immoral or
                unlawful works, or any combination thereof.
              </li>
            </ul>
            <p className="mt-4">
              You represent that you will only use the Website and the Service
              in accordance with any applicable federal, state, provincial,
              territorial, national, or international laws as well as any other
              terms and conditions that we and you may have agreed upon for the
              Services.
            </p>
            <div className="mt-4">Limitations and Exclusion of Liability</div>
            <ul className="list-disc pl-4 font-light">
              <li>
                Nothing in the Terms of Service shall be construed to: (a) limit
                or exclude our or your liability for death or personal injury
                caused by negligence; (b) limit or exclude our or your liability
                for fraud or fraudulent misrepresentation; (c) limit our or your
                liability in any manner not permitted by applicable law; or (d)
                exclude our or your liability in any manner not permitted to be
                excluded by applicable law. If you are a consumer, these Terms
                of Service will not affect any statutory rights you may have
                that are not subject to exclusion or limitation under relevant
                law.
              </li>
              <li>
                The preceding sentence (a) applies to the liability restrictions
                and exclusions set forth in this Section and elsewhere in these
                Terms of Service.
              </li>
              <li>
                Regarding any losses brought on by an occurrence or events
                beyond our reasonable control, we shall not be accountable to
                you.
              </li>
              <li>
                Any business losses, including (without limitation) loss of or
                damage to profits, income, revenue, use, production, projected
                savings, business, contracts, commercial opportunities, or
                goodwill, are not covered by our liability to you.
              </li>
              <li>
                Regarding any particular, indirect, or consequential loss or
                harm, we won`t be responsible to you.
              </li>
              <li>
                We do not promise or guarantee any specific outcomes from using
                the Services, their dependability, integrity, quality, or that
                doing so won`t have any unfavourable effects. To the fullest
                extent permitted by law, we hereby disclaim all implied
                warranties, conditions, and other terms of any kind, including
                any implied warranties of merchantability and fitness for a
                particular purpose.
              </li>
              <li>
                We are unable to and do not guarantee that the Website, its
                content, or the Services will be free of viruses or other
                potentially harmful code.
              </li>
              <li>
                You are responsible for implementing the required information
                technology security measures (such as antivirus software and
                other security checks) to satisfy your specific needs for the
                security and dependability of the Service.
              </li>
            </ul>
            <div className="mt-4 font-bold">Indemnity</div>
            <div className="font-light grid gap-4">
              <p>
                By signing this agreement, you agree to hold us harmless from
                any losses, damages, costs, liabilities, and expenses
                (including, without limitation, legal fees and any sums paid by
                us to a third party in settlement of a claim or dispute on the
                advice of our legal advisers) incurred or suffered by us as a
                result of any violation by you of any term of the terms of
                service or as a result of any allegation that you have violated
                any term of the terms of service.
              </p>
            </div>
            <div className="mt-4 font-bold">Breaches of Terms of Service</div>
            <div>
              Without limiting our other rights under these Terms of Service, if
              you violate these Terms of Service in any way, or if we have
              reasonable grounds to believe you have violated these Terms of
              Service in any way, we may:
            </div>
            <ul className="list-disc pl-4 font-light">
              <li>send you one or more formal warnings;</li>
              <li>
                prevent devices with your IP address from utilizing the Website
                or Services;
              </li>
              <li>
                contact your internet service provider and request that they ban
                your access to the Website and/or the Services.
              </li>
              <li>
                suspend and/or terminate your Account with the Website; file
                legal action against you for breach of contract or other
                offense.
              </li>
            </ul>
            <p className="mt-4">
              You shall not take any action to get around any suspension, ban,
              or blockage we may impose on your access to all or a portion of
              our website or services (including, without limitation, by
              creating and/or using a new Account).
            </p>
            <div className="mt-4 font-bold">Changes to terms of service</div>
            <div className="font-light grid gap-4">
              <p>
                The Terms of Service may be updated periodically. The usage of
                our website as well as the services is subject to the most
                recent Terms of Service, which are effective as of the day they
                are published on our website. To help ensure you are
                familiarized with the most recent version, please visit this
                page frequently.
              </p>
            </div>
            <div id="termsPower">
              <TermsOfPower />
            </div>
            <div id="copyright">
              <Copyright />
            </div>
            <div id="dcmaPolicy">
              <DcmaPolicy />
            </div>
            <div id="customTerms">
              <CustomTerms />
            </div>
            <div id="compliance">
              <Compliance />
            </div>
            <div id="privacy">
              <Privacy />
            </div>
            <div id="informationCol">
              <InformationWeCollect />
            </div>
            <div id="howInfoUsed">
              <HowWeUseInfo />
            </div>
            <div id="cookie">
              <CookiePolicy />
            </div>
            <div id="legal">
              <LegalAndPrivacy />
            </div>
            <div id="security">
              <Security />
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

export default Terms;
