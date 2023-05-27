import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-auto md:mx-14 border-slate-500 my-14 bg-blue-300 bg-opacity-20 rounded-lg">
        <div className="flex flex-col lg:flex-row w-full justify-evenly py-14 items-center gap-8">
           {/* right */}
           <div className="md:flex hidden flex-col w-[40vw] ">
            {/* information */}
            <div className="text-base w-full h-auto flex justify-start items-center text-blue-600">
              <div className="w-full h-full flex flex-col ">
                <Link
                  className="text-[20px] my-1 font-semibold text-slate-700"
                  href="/"
                >
                  Information
                </Link>
                <ul className="text-blue-600 grid grid-rows-2 grid-flow-col list-disc ">
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/shippingcalculator">Shipping Calcuator</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/abput">About us</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/about">Privacy Policy</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/help">Help</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Facebook</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Instagram</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Twitter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* left */}
          <div className="flex flex-col w-[40vw] justify-start text-blue-600">
            {/* car parts */}
            <div className="text-base w-full h-auto flex justify-start items-center">
              <div className="w-[45%] h-full md:flex hidden flex-col ">
                <Link
                  className="text-[20px] hover:text-[#C61D36] my-1 font-semibold"
                  href="/"
                >
                  Cars
                </Link>
                <ul className="text-blue-600 grid grid-rows-2 grid-flow-col list-disc ">
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Toyota</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Lexus</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Mitsubishi</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Honda</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Mazda</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Nissan</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Infiniti</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Subaru</Link>
                  </li>
                  <li className="hover:text-[#C61D36] p-1 my-1 mx-4">
                    <Link href="/">Suzuki</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* copy right */}
            <span className="flex cursor-default my-4 text-black font-semibold">
              © 2004-2023{" "}
              <h1 className="font-bold text-blue-600">{` «Amayama Trading Co. Ltd»`}</h1>
            </span>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Footer;
