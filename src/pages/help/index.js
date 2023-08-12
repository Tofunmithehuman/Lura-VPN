import Layout from "@/layout/Layout";
import React from "react";

const Help = ({ children }) => {
  return (
    <Layout>
      <div className="text-white pt-20 faqGradient px-10 font-axiforma">
        <div className="grid grid-cols-[0.5fr,2fr] min-h-screen gap-4">
          <section className="flex flex-col gap-8 pl-8 pt-[186px] text-white">
            <div className="text-sm">
              <h1 className="cursor-pointer font-medium text-2xl">General</h1>
            </div>
            <div className="text-sm">
              <h1 className="cursor-pointer font-medium text-2xl">Billing</h1>
            </div>
            <div className="text-sm">
              <h1 className="cursor-pointer font-medium text-2xl">Advanced</h1>
            </div>
            <div className="text-sm">
              <h1 className="cursor-pointer font-medium text-2xl">Using LuraVPN</h1>
            </div>
          </section>
          <section>
            <h1
              className={`text-[32px] sm:text-[40px] w-[90%] leading-relaxed text-left pl-6 py-12 font-axiforma text-[#C9F4EA]`}
            >
              Frequently Asked Questions
            </h1>
            <div className="">{children}</div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
