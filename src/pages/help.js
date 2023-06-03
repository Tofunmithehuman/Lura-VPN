import Faq from "@/components/Faq";
import Layout from "@/layout/Layout";
import React from "react";

const Help = () => {
  return (
    <Layout>
      <div className="text-white pt-20 faqGradient">
        <Faq />
      </div>
    </Layout>
  );
};

export default Help;
