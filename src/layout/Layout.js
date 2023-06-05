import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import IPcheck from "@/components/IPcheck";

const Layout = ({ children }) => {
  const router = useRouter();
  const planPage =
    router.pathname === "/plans" || router.pathname === "/signUpPay";
  return (
    <div className="relative">
      {router.pathname === "/home" ? <IPcheck /> : null}
      <NavBar />
      <main className="bg-[#000000]">
        {children}
        {!planPage && <Footer />}
      </main>
    </div>
  );
};

export default Layout;
