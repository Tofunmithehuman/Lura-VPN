import React from "react";

const InformationWeCollect = () => {
  return (
    <div>
      <h1 className="text-3xl w-[90%] leading-relaxed text-left pt-8 pb-2 font-axiforma text-[#C9F4EA]">
        Information We Collect
      </h1>
      <div className="text-xs font-light">
        <p className="">
          At LuraVPN, owned by Melanie and Salsa Inc., we value our users`
          privacy and are committed to being transparent about the data we
          collect and how we use it. This document provides detailed information
          about the types of data we collect in order to provide our services.
        </p>
        <div className="mt-4 font-bold">1. Account Information</div>
        <div>
          When you sign up for LuraVPN, we collect basic information necessary
          to set up and manage your account. This includes your email address,
          which we use for communication, account management, and
          troubleshooting purposes.
        </div>
        <div className="mt-4 font-bold">2. Payment Information</div>
        <div>
          If you choose to use our premium services, our payment processors will
          collect payment-related information, including your name, credit card
          number, and expiration date. Note that LuraVPN does not store full
          credit card information on our servers.
        </div>
        <div className="mt-4 font-bold">3. Usage Data</div>
        <p>
          To improve our services and for analytical purposes, we collect
          anonymized, aggregated data about the use of our services. This may
          include the frequency and duration of your use of LuraVPN, the VPN
          server locations you choose, and the amount of data transferred.
          However, we ensure that this data is never associated with your
          personal identity, and we do not monitor or log your network traffic.
        </p>
        <div className="mt-4 font-bold">4. Technical Information</div>
        <p>
          We may collect certain technical information about your device and
          connection, including your IP address, device type, operating system,
          and browser type. This data helps us understand our users` needs
          better and allows us to optimize our service.
        </p>
        <div className="mt-4 font-bold">
          5. Cookies and Other Tracking Technologies
        </div>
        <p>
          We use cookies and similar tracking technologies on our website to
          analyze trends, administer the site, track users` movements around the
          site, and gather demographic information about our user base as a
          whole.
        </p>
        <div className="mt-4 font-bold">6. Customer Support</div>
        <p>
          When you contact our customer support team, we may collect additional
          information to help resolve your issues or answer your questions. This
          can include things like your contact details and a summary of the
          problem you`re experiencing.
        </p>
        <div className="mt-4">
          It is our commitment to respect your privacy and we take steps to
          ensure the security of all the information we collect. If you have any
          questions about our data collection practices, feel free to contact
          us.
        </div>
        <div className="mt-4">
          By using LuraVPN, you consent to our data collection practices as
          outlined in this document. If you disagree with any part of these
          practices, please discontinue use of our services.
        </div>
      </div>
    </div>
  );
};

export default InformationWeCollect;
