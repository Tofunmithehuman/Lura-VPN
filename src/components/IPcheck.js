import React, { useState, useEffect } from "react";
import Link from "next/link";

const IPcheck = () => {
  const [ip, setIp] = useState([]);

  useEffect(() => {
    const getIpAddress = function () {
      fetch(
        `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_f0ebEvOiz1WirhNs0M7nRUyvltt6o&ipAddress=0`
      )
        .then((response) => response.json())
        .then((data) => {
            setIp(data)
        })
        .catch((err) => console.log(err));
      };
      getIpAddress()
  }, [])

  return (
    <div className="absolute text-[#B7B7B7]  md:pr-8 md:left-[10%] lg:px-0 lg:left-[20%] left-2 md:top-[1.7em] top-4 z-50 block">
      <div className="block font-axiforma font-medium text-center w-4/5 sm:w-full mx-auto text-xs sm:text-[16px]">
        🌐 Your IP: {ip.ip}. 📡 ISP: {ip.isp}. 🔰 Your Status:{" "}
        <span
          className={
            ip.proxy?.vpn && ip.proxy.vpn
              ? "text-[#00ff79]"
              : "text-[#EB1818]"
          }
        >
          {ip.proxy?.vpn && ip.proxy.vpn ? "Protected" : "Unprotected"}
        </span>{" "}
        <Link href={"/plans"} className="underline text-[#00ff79]">
          Get Protected Now
        </Link>
      </div>
    </div>
  );
};

export default IPcheck;
