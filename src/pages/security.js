import Layout from "@/layout/Layout";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const infoLinks = [
  {
    name: "Security Measures",
    href: "/security",
  },
  {
    name: "DCMA Policy",
    href: "/dcmaPolicy",
  },
  {
    name: "Information documentation",
    href: "/informationReq",
  },
  {
    name: "Privacy terms",
    href: "/privacy",
  },
  {
    name: "Information we collect",
    href: "/informationCol",
  },
];

const Security = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="securityGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-3xl sm:text-5xl w-[90%] mx-auto leading-relaxed text-center py-8 sm:py-16 font-axiforma text-[#C9F4EA]">
          Security
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs font-light">
            <p className="">
              At LuraVPN, we are committed to ensuring the highest level of
              security for our users. We employ a range of comprehensive
              security measures to protect your data and provide a secure VPN
              experience. Here is an overview of the security measures
              implemented by LuraVPN:
            </p>
            <div className="mt-4 font-bold">1. Encryption Standards</div>
            <div>
              We utilize AES-256 encryption, which is widely recognized as one
              of the most secure encryption standards available. This strong
              encryption ensures that your data remains private and protected as
              it travels between your device and our VPN servers.
            </div>
            <div className="mt-4 font-bold">2. Secure VPN Protocols</div>
            <p>
              LuraVPN supports industry-standard VPN protocols, such as OpenVPN
              and IKEv2/IPSec. These protocols establish secure and encrypted
              connections between your device and our servers, ensuring the
              confidentiality and integrity of your data.
            </p>
            <div className="mt-4 font-bold">3. No-Logs Policy</div>
            <p>
              We strictly adhere to a no-logs policy, meaning we do not monitor,
              record, or store any user activity logs. We respect your privacy
              and believe in preserving the anonymity and confidentiality of
              your online activities.
            </p>
            <div className="mt-4 font-bold">4. Kill Switch</div>
            <p>
              LuraVPN incorporates a kill switch feature in its applications. In
              the event of an unexpected VPN connection drop, the kill switch
              immediately terminates your internet connection, preventing any
              unsecured data transmission or exposure.
            </p>
            <div className="mt-4 font-bold">5. DNS Leak Protection</div>
            <p>
              Our VPN service includes built-in DNS leak protection. This
              feature ensures that DNS requests originating from your device are
              encrypted and routed through our VPN servers, preventing any
              potential DNS leaks that could reveal your browsing activity.
            </p>
            <div className="mt-4 font-bold">
              6. Multi-Factor Authentication (MFA)
            </div>
            <p>
              To enhance the security of your LuraVPN account, we offer optional
              multi-factor authentication. By enabling MFA, you add an extra
              layer of protection to your account, requiring a verification code
              in addition to your login credentials.
            </p>
            <div className="mt-4 font-bold">7. Advanced Malware Protection</div>
            <p>
              LuraVPN incorporates advanced malware protection using artificial
              intelligence and machine learning algorithms. This helps identify
              and block potential threats, providing an additional layer of
              security to keep you safe from malicious activities.
            </p>
            <div className="mt-4 font-bold">8. Regular Security Audits</div>
            <p>
              We conduct regular security audits of our systems, infrastructure,
              and applications to identify and address any vulnerabilities. This
              proactive approach allows us to ensure that our security measures
              are up to date and capable of protecting our users` data.
            </p>
            <div className="mt-4 font-bold">9. Server Security</div>
            <p>
              We employ robust security measures to protect our servers,
              including secure data centres, firewalls, and regular security
              updates. Our servers are continuously monitored to mitigate
              potential risks and maintain the highest level of security.
            </p>
            <div className="mt-4">
              At LuraVPN, we are committed to maintaining the security and
              privacy of our users. By implementing these security measures, we
              strive to create a safe and secure VPN environment for all our
              users.
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

export default Security;
