import Layout from "@/layout/Layout";
import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Security = () => {
  return (
    <Layout>
      <div className="securityGradient py-16 px-8 md:px-20 text-white font-axiforma">
        <h1 className="text-5xl w-[90%] mx-auto leading-relaxed text-center py-16 font-anglecia text-[#C9F4EA]">
          Security
        </h1>
        <div className="grid md:grid-cols-[1.2fr,1fr] items-start">
          <div className="text-xs">
            <p className="mb-4">Effective: December 22, 2022</p>
            <p className="mb-4">
              This Privacy Policy describes how Loom collects, uses, and shares
              your personal information, as well as your choices and rights with
              respect to your personal information. Scope of this Privacy Policy
              This Privacy Policy applies to information that relates to you as
              an identifiable individual (often referred to as “personal
              information” or “personal data”) that Loom receives or collects
              when you interact with us or our services, website, and software
              (the “Services”). This Privacy Policy does not apply to any
              third-party services, websites, or software, such as third-party
              applications that may be integrated into our Services via API.
              Those services, websites, and software are subject to their own
              terms and privacy policies, and you should read those carefully.
            </p>
            <div className="my-2">
              <h4 className="mb-2">Information We Collect We collect</h4>
              <p>We collect and receive the following types of information:</p>
            </div>
            <div className="mt-4">Information You Provide to Us:</div>
            <ul className="list-disc pl-4">
              <li>
                Account Information: To create an account for the Services or to
                enable certain features, we require that you provide us with
                information for your account such as name, email, password, and
                authentication credentials. If you sign up for a paid
                subscription, we (or our payment processors) may need your
                billing details such as credit card information, banking
                information, and billing address.
              </li>
              <li>
                Video and Other Customer Data: In using our Services, our
                customers submit or upload video recordings, seek user support,
                or provide other Customer Data (defined in our Terms of Service)
                to us.Our use of and processing of Customer Data is governed by
                our Terms of Service.
              </li>
              <li>
                Other Information You Provide: We receive other information from
                you when you choose to interact with us in other ways, such as
                if you sign up for one of our webinars or e-books, participate
                in a research study, contest, sweepstake, or event, apply for a
                job, or otherwise communicate with us.
              </li>
            </ul>
            <div className="mt-4">Information We Collect Automatically:</div>
            <ul className="list-disc pl-4">
              <li>
                Usage Data: We automatically collect usage data about how you
                interact with our Services when you use them. For example, this
                could be actions you take on our platform, such as number of
                videos you’ve recorded or viewed, your sharing activity, or what
                third-party integrations you enabled.
              </li>
              <li>
                Log Data: Our servers automatically log certain types of data
                when you visit or use our Services, for example, when you
                navigate through our website. This data is stored in our log
                files and includes, Internet Protocol (IP) address, type of
                device, operating system or browser, unique device identifiers,
                browser settings, date and time you visited or used our
                Services, the referring website, URL parameters, and error and
                crash reporting data.
              </li>
              <li>
                Information from Cookies and Similar Technologies: A cookie is a
                small piece of information that is downloaded to your device by
                your browser when you visit a website. We use cookies or similar
                technologies (including third-party cookies) to remember your
                preferences, understand how you interact with our Services or
                emails that we send you, maintain the security of our Services,
                and administer, improve and promote our Services. You can
                configure your browser to prevent cookies, but please note that
                disabling cookies may make some features or functionality
                unavailable to you. For more information about the cookies we
                use, please see our Cookie Policy.
              </li>
            </ul>
            <div className="mt-4">
              Information We Receive from Third Parties:
            </div>
            <ul className="list-disc pl-4">
              <li>
                Information We Receive from Third Parties: Third-Party
                Integrations: Third parties may create integrations built on
                Loom technology so that their applications can interoperate with
                Loom. If you choose to enable an integration, the third-party
                may share some information about you with us to make your
                experience more seamless, such as your name, email, or other
                content or information needed to facilitate the integration.
                Additionally, if you sign up or login to our Services using one
                of our single-sign-on providers (e.g., Google, Apple, etc.), we
                collect authentication information provided to us by the
                provider to allow you to log in.
              </li>
              <li>
                Marketing Information: We may receive marketing or demographic
                information about you from third parties or partners, for
                example, data about your organization or industry or other
                public information from sources like social media or online
                professional profiles. We may combine this information with
                other data we already have to improve your experience with our
                Services or inform you of Services we think may be of interest
                to you.
              </li>
            </ul>
          </div>
          <div className=" grid justify-center">
            <div className="p-[1px] termsBorder rounded-2xl">
              <div className="min-h-40 hidden md:grid rounded-2xl bg-[#151414] p-6 text-xs px-10 justify-center gap-6 font-medium">
                <div className="flex items-center gap-2">
                  <BsCheckLg className="text-green-500" />
                  <p>Security</p>
                </div>
                <div>
                  <p className="text-[#3E3F3E]">Information documentation</p>
                </div>
                <div>
                  <p className="text-[#3E3F3E]">Privacy terms</p>
                </div>
                <div>
                  <p className="text-[#3E3F3E]">Information we collect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Security;
