import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardData = [
  {
    src: "https://static.amayama.com/amayama2/1644899741830_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation ",
    restyling: "restyling",
  },
];

const partsGroup = [
  {
    src: "https://www.amayama.com/i/catalogs/group_1.png",
    desc: "Engine, fuel system and tools",
  },
  {
    src: "https://www.amayama.com/i/catalogs/group_2.png",
    desc: "Transmission and chassis",
  },
  {
    src: "https://www.amayama.com/i/catalogs/group_3.png",
    desc: "Body and interior",
  },
  {
    src: "https://www.amayama.com/i/catalogs/group_4.png",
    desc: "Electrics",
  },
];

const Chassis = () => {
  return (
    <>
      {/* main conatiner */}
      <div className="w-full h-auto lg:px-32 px-4 flex flex-col my-12 gap-8">
        <h1 className="lg:text-3xl text-lg">
          Toyota Allion T260, 2 generation 06.2007 - 03.2010
        </h1>
        {/* parts group */}
        <div className="w-full h-auto flex lg:justify-start justify-center flex-wrap gap-8">
          {/* card */}
          {cardData?.map((data, index) => {
            return (
              <div
                key={index}
                href={`/toyota/Alphard/${data.generation}`}
                className="w-48 h-60 rounded-md hover:shadow-xl flex flex-col justify-start items-center text-[0.75rem] gap-2 text-[#A5A5A5]"
              >
                <Image
                  src={data.src}
                  alt="cars"
                  width={180}
                  height={48}
                  className=" object-contain "
                />

                <span className="text-blue-600 hover:text-red-600">
                  {data.years}
                </span>
                <span>{data.DBA}</span>
                <span>
                  `{data.generation} , {data.restyling}`
                </span>
              </div>
            );
          })}
          {/* parts grid group */}
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-2xl text-base">Choose parts group:</h1>
            <div className="w-full h-auto flex flex-wrap lg:justify-start justify-center gap-4">
              {partsGroup?.map((data, index) => {
                return (
                  <Link
                    key={index}
                    href="/"
                    className="hover:shadow-xl w-44 h-44 rounded-md text-blue-600 hover:text-red-600 font-medium flex flex-col justify-start text-center items-center gap-2 "
                  >
                    <Image
                      src={data.src}
                      alt="chassis"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                    <span>{data.desc}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chassis;
