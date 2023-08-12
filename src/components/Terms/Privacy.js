import React from "react";

const Privacy = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl w-[90%] leading-relaxed text-left pt-8 pb-2 font-axiforma text-[#DFD1FB]">
        Privacy
      </h1>
      <div className="text-xs font-light">
        <p className="mb-4 font-medium">Effective: June 8, 2023</p>
        <p className="mb-4">
          Melanie and Salsa Inc., the parent company of LuraVPN, located at 8
          The Green, Suite #15180, Dover, DE 19901, is committed to protecting
          the privacy of our users. This Privacy Policy explains our practices
          regarding the collection, use, and disclosure of information that we
          receive through our LuraVPN services.
        </p>
        <div className="mt-4 font-bold">1. Information Collection</div>
        <div>
          We collect the minimal user data necessary to provide our VPN service.
          This includes:
        </div>
        <ul className="list-disc pl-4">
          <li>
            Account Information: When you sign up for LuraVPN, we may require
            certain basic information such as an email address to create and
            manage your account.
          </li>
          <li>
            Payment Information: When you make a payment, our payment processors
            may collect certain financial information from you. However, we do
            not store your full credit card information on our servers.
          </li>
          <li>
            Usage Data: We collect aggregated, anonymized data about how and
            when our VPN service is used. However, we never log or monitor your
            network traffic.
          </li>
        </ul>
        <div className="mt-4 font-bold">2. Use of Information</div>
        <p>We use the information we collect:</p>
        <ul className="list-disc pl-4">
          <li>To provide, maintain, and improve our services.</li>
          <li>
            To process transactions and send related information including
            confirmations and receipts.
          </li>
          <li>To send technical notices, updates, and support messages.</li>
        </ul>
        <div className="mt-4 font-bold">3. Information Sharing</div>
        <p>
          We are committed to maintaining your trust, and we want you to
          understand when and with whom we may share the information we collect.
          We do not sell your information to third parties. We may share your
          information only in the following circumstances:
        </p>
        <ul className="list-disc pl-4">
          <li>
            With third party vendors, consultants, and other service providers
            who need access to such information to carry out work on our behalf;
          </li>
          <li>
            If we believe that disclosure is reasonably necessary to comply with
            any applicable law, regulation, legal process, or government
            request.
          </li>
        </ul>
        <div className="mt-4 font-bold">4. Data Security</div>
        <p>
          We use appropriate technical and organizational measures designed to
          protect the information that we collect and store about you. We employ
          advanced encryption technologies and ensure that our servers are
          secure and reliable.
        </p>
        <div className="mt-4 font-bold">5. Changes to this Privacy Policy</div>
        <p>
          We may modify or update this Privacy Policy from time to time, so
          please review it periodically. If we make any material changes to this
          policy, we will notify you.
        </p>
        <div className="mt-4 font-bold">6. Contact Us</div>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please feel free to email us at the contact information on our
          website.
        </p>
        <div className="mt-4">
          By using LuraVPN, you consent to our Privacy Policy. If you do not
          agree with this policy, please do not access or use our Services.
        </div>
      </div>
    </div>
  );
};

export default Privacy;
