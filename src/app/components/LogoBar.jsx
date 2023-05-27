"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
// import { Input } from "postcss";
import Link from "next/link";

const LogoBar = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  //   console.log("Search Value is : ",searchValue)
  return (
    <>
      <div className="w-full h-auto p-3 bg-slate-300 bg-opacity-30 lg:flex hidden items-center justify-center gap-24">
        {/* logo */}
        <Link href="/">
          <Image
            src="/amayama_logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </Link>

        {/* parts category */}
        <div
          className="flex items-center gap-2 "
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span
            className={` text-2xl underline decoration-dashed hover:text-[#C61D36] text-blue-600 cursor-default z-20
            `}
          >
            Parts Catalogues
            {hovered ? (
              <>
                <div className="text-base absolute w-[50vw] h-auto bg-slate-100 border drop-shadow-sm rounded drop-shadow-smshadow-sm text-black flex justify-evenly items-center">
                  <div className="w-[45%] h-full flex flex-col ">
                    <h1 className="text-[20px] my-4">Genuine Parts Catalogues</h1>
                    <ul className="text-blue-600 grid grid-rows-5 grid-flow-col">
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Toyota</Link>
                      </li>
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Lexus</Link>
                      </li>
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Mitsubishi</Link>
                      </li>
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Honda</Link>
                      </li>
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Mazda</Link>
                      </li>
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Nissan</Link>
                      </li>
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Infiniti</Link>
                      </li>
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Subaru</Link>
                      </li>
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Suzuki</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="border-2 border-l-slate-500 border-dashed h-[90%]"></div>
                  <div className="w-[45%] h-full flex flex-col ">
                    <h1 className="text-[20px] my-4">Car Accessories</h1>
                    <ul className="text-blue-600 grid grid-rows-5 grid-flow-col">
                      <li className="hover:text-[#C61D36] p-2 m-2">
                        <Link href="/">Car Accessories</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </span>
          <Image
            src={!hovered ? "/down_arrow.svg" : "/up_arrow_red.svg"}
            alt="down_arrow"
            width={15}
            height={20}
          />
        </div>

        {/* make quiry */}
        <button
          onMouseOver={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
          className={`lg:text-sm text-lg bg-slate-500 bg-opacity-20 rounded-full py-3 px-6 sm:py-4 sm:px-4 w-auto ${
            hovered1 ? "text-[#C61D36]" : "text-blue-600"
          }`}
        >
          Make inquiry
        </button>

        {/* search box */}
        <div className="flex items-center border-2 border-gray-300 rounded w-80 sm:w-96 h-14 sm:h-12">
          <input
            type="text"
            placeholder="Search by part number"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full h-full pl-10 pr-4 text-gray-700 bg-gray-100 focus:outline-none focus:bg-white focus:text-gray-900 outline-none rounded"
          />
          <div className="flex items-center justify-center bg-[#C61D36] w-12 h-full rounded-r cursor-pointer">
            <FaSearch className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoBar;
