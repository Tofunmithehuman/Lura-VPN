import React from "react";
import Image from "next/image";
import luraLogo from "../../public/email/LURa_header.png";
import luraImg from "../../public/email/image.png";
import linkedIn from "../../public/email/linkedIn.svg";
import instagram from "../../public/email/instagram.svg";
import twitter from "../../public/email/twitter.svg";


// Change Image to img
// Change className to class
// If the image is not showing make sure you are following the right path to it

const Email = () => {
  return (
    <div className="container font-axiforma">
      <div>
        <Image src={luraLogo} alt="logo" />
      </div>
      <div className="email_intro">
        <h1 className="email_intro_header">Hi Best,</h1>
        <p className="email_intro_greeting">
          Welcome to Lura. The best way to keep your digital footprint secure.
        </p>
        <div>
          <Image src={luraImg} alt="mainImage" className="email_image" />
        </div>
      </div>
      <div className="email_body">
        <h3 className="email_body_1">
          Keep your data out of sight and out of reach.
        </h3>
        <p className="email_body_main">
          Our advanced VPN service harnesses the power of AI and machine
          learning algorithms to safeguard your data.
        </p>
        <p className="email_body_main1">
          Get ready to embark on a cosmic digital adventure with LuraVPN.
        </p>
      </div>
      <div className="email_get_started">
        <button className="email_get_started_button">Get Started</button>
      </div>
      <div className="email_border"></div>
      <div className="email_footer">
        <section className="email_footer1">
          <Image src={luraLogo} alt="logo" />
          <div className="email_social">
            <Image src={twitter} alt="twitter" />
            <Image src={instagram} alt="instagram" />
            <Image src={linkedIn} alt="linkedIn" />
          </div>
        </section>
        <section className="email_footer2">
          <div className="email_footer2_left">
            <p className="email_footer2_left_1">Contact our support team:</p>
            <p>suppport@luravpn.com</p>
            <p>©2023, All rights reserved.</p>
          </div>
          <div className="email_footer2_right">
            <p>Melanie and Salsa Inc</p>
            <p>8 The Green</p>
            <p>Suite #15180</p>
            <p>Dover, DE 19901</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Email;
