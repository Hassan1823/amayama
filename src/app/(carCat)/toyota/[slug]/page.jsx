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
  {
    src: "https://static.amayama.com/amayama2/1644899739526_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation ",
    restyling: "restyling",
  },
  {
    src: "https://static.amayama.com/amayama2/1644899740734_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation ",
    restyling: "restyling",
  },
  {
    src: "https://static.amayama.com/amayama2/1644899738148_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation ",
    restyling: "restyling",
  },
  {
    src: "https://static.amayama.com/amayama2/1644899740734_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation ",
    restyling: "restyling",
  },
  {
    src: "https://static.amayama.com/amayama2/1644899738148_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation ",
    restyling: "restyling",
  },
  {
    src: "https://static.amayama.com/amayama2/1644899740734_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation ",
    restyling: "restyling",
  },
  {
    src: "https://static.amayama.com/amayama2/1644899738148_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation ",
    restyling: "restyling",
  },
  {
    src: "https://static.amayama.com/amayama2/1644899740734_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation ",
    restyling: "restyling",
  },
  {
    src: "https://static.amayama.com/amayama2/1644899738148_original.jpg",
    years: "(T260) 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation",
    restyling: "restyling",
  },
];

const chassisData = [
  {
    city: "Japan",
    chassis: [
      "AZT240",
      "NZT240",
      "NZT260",
      "ZRT260",
      "ZRT261",
      "ZRT265",
      "ZZT240",
      "ZZT245",
    ],
  },
  {
    city: "Asia and Middle East",
    chassis: ["MZEA12L"],
  },
];

const Slug = (params) => {
  // console.log("props are :", params);
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto lg:px-32 px-8 flex flex-col justify-start gap-6 my-8">
        {/* heading */}
        <h1 className="lg:text-4xl text-2xl font-light">Toyota Allion</h1>
        <h1 className="lg:text-3xl text-lg font-light">
          Choose generation by production years:
        </h1>
        {/* card */}
        <div className="w-full h-auto flex flex-wrap lg:justify-start justify-center items-center gap-4">
          {cardData?.map((data, index) => {
            return (
              <Link
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
                <span>`{data.generation} , {data.restyling}`</span>
              </Link>
            );
          })}
        </div>

        {/* chassis model */}
        <h1 className="lg:text-3xl text-lg font-light">
          {"Choose chassis model by the car's market:"}
        </h1>

        <div className="flex flex-col gap-4">
          {chassisData?.map((chassisData, index) => {
            return (
              <span key={index} className="text-lg">
                {chassisData.city} :
                <div className="w-full h-auto flex flex-wrap gap-4 text-blue-600 my-2 lg:text-base text-xs">
                  {chassisData.chassis.map((data, indexx) => {
                    return (
                      <Link
                        href={`/toyota/Alphard/${data}`}
                        key={indexx}
                        className=" hover:text-red-600"
                      >
                        {data}
                      </Link>
                    );
                    // return <Link href={`/${params.Slug}/${data}`} key={indexx} className=" hover:text-red-600">{data}</Link>;
                  })}
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slug;
