import ChoosePlan from "@/components/ChoosePlan";
import Layout from "@/layout/Layout";
import React from "react";

const Plans = () => {
  return (
    <Layout>
      <div className="min-h-screen plansGradient text-white pb-28 pt-32 px-6">
        <h1 className="md:text-5xl text-4xl w-[90%] mx-auto leading-relaxed text-center pb-16 font-anglecia">
          Choose Your VPN Plan
        </h1>
        <ChoosePlan />
      </div>
    </Layout>
  );
};

export default Plans;
