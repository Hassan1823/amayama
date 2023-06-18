import Link from "next/link";
import React from "react";

const yearsData = [
  {
    year: "2023",
  },
  {
    year: "2022",
  },
  {
    year: "2021",
  },
  {
    year: "2020",
  },
  {
    year: "2019",
  },
  {
    year: "2018",
  },
  {
    year: "2017",
  },
  {
    year: "2016",
  },
  {
    year: "2015",
  },
  {
    year: "2014",
  },
  {
    year: "2013",
  },
  {
    year: "2012",
  },
  {
    year: "2011",
  },
  {
    year: "2010",
  },
  {
    year: "2009",
  },
  {
    year: "2008",
  },
  {
    year: "2007",
  },
  {
    year: "2006",
  },
  {
    year: "2005",
  },
  {
    year: "2004",
  },
  {
    year: "2003",
  },
  {
    year: "2002",
  },
  {
    year: "2001",
  },
  {
    year: "1996 - 2000",
  },
];

const categoriesSlug = [
  "4Runner",
  "Allex",
  "Alphard",
  "Altezza",
  "Allion",
  "Aristo",
  "Aurion",
  "Auris",
  "Avalon",
  "Avanza",
  "Avensis",
  "Avensis Verso",
  "Aygo",
  "BA",
  "Bandeirante",
  "bB",
  "Belta",
  "Blade",
  "Blizzard",
  "Brevis",
  "C-HR",
  "Caldina",
  "Cami",
  "Camry",
  "Carina",
  "Carina E",
  "Carina ED",
  "Carina II",
  "Celica",
  "Century",
  "Chaser",
  "Coaster",
  "Corolla",
  "Corolla Axio",
  "Corolla Ceres",
  "Corolla Cross",
  "Corolla Fielder",
  "Corolla FX",
  "Corolla II",
  "Corolla Levin",
  "Corolla Rumion",
  "Corolla Runx",
  "Corolla Spacio",
  "Corolla Verso",
  "Corsa",
  "Cressida",
  "Cresta",
  "Crown",
  "Crown Majesta",
  "Curren",
  "Cynos",
  "D-4D 180 Clean",
  "Deliboy",
  "Duet",
  "Dyna",
  "Echo",
  "Esquire",
  "Estima",
  "Estima Emina",
  "Estima Lucida",
  "Etios",
  "FJ Cruiser",
  "Fortuner",
  "Funcargo",
  "Gaia",
  "Grand Hiace",
  "Granvia",
  "GT 86",
  "Harrier",
  "Harrier Hybrid",
  "Hiace",
  "Hiace Regius",
  "Highlander",
  "Hilux Pick Up",
  "Hilux Surf",
  "Innova",
  "Ipsum",
  "iQ",
  "Isis",
  "ist",
  "Izoa",
  "JPN TAXI",
  "Kluger V",
  "Land Cruiser",
  "Land Cruiser Prado",
  "Lite Ace",
  "Lite Ace Noah",
  "Lite Ace Truck",
  "Mark II",
  "Mark II Wagon Blit",
  "Mark II Wagon Qualis",
  "Mark X",
  "Mark X Zio",
  "Master Ace Surf",
  "Matrix",
  "Mega Cruiser",
  "Mirai",
  "MR-S",
  "MR2",
  "Nadia",
  "Noah",
  "Opa",
  "Origin",
  "Paseo",
  "Passo",
  "Passo Sette",
  "Picnic",
  "Pixis Epoch",
  "Pixis Joy",
  "Pixis Mega",
  "Pixis Space",
  "Pixis Truck",
  "Pixis Van",
  "Platz",
  "Porte",
  "Premio",
  "Previa",
  "Prius",
  "Prius a",
  "Prius C",
  "Prius PHV",
  "Prius v",
  "Probox",
  "Progres",
  "Pronard",
  "Publica",
  "Ractis",
  "Raize",
  "Raum",
  "RAV4",
  "Regius",
  "Regius Ace",
  "Roomy",
  "Rush",
  "Sai",
  "Scepter",
  "Sequoia",
  "Sera",
  "Sienna",
  "Sienta",
  "Soarer",
  "Solara",
  "Soluna",
  "Spade",
  "Sparky",
  "Sprinter",
  "Sprinter Carib",
  "Sprinter Marino",
  "Sprinter Trueno",
  "Starlet",
  "Succeed",
  "Supra",
  "Tacoma",
  "Tank",
  "Tercel",
  "Touring Hiace",
  "Town Ace",
  "Town Ace Noah",
  "Town Ace Truck",
  "ToyoAce",
  "Tundra",
  "Urban Cruiser",
  "Vanguard",
  "Vellfire",
  "Venza",
  "Verossa",
  "Verso",
  "Verso-s",
  "Vios",
  "Vista",
  "Vista Ardeo",
  "Vitz",
  "Voltz",
  "Voxy",
  "Wigo",
  "WiLL Cypha",
  "WiLL Vi",
  "WiLL VS",
  "Windom",
  "Wish",
  "Yaris",
];
const categoriesByLetter = categoriesSlug.reduce((acc, category) => {
  const firstLetter = category[0].toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(category);
  return acc;
}, {});

// console.log(categoriesByLetter);


const GenuineParts = () => {
  // const sortedCategoriesSlug = categoriesSlug.sort();
  
  const categoriesList = Object.entries(categoriesByLetter).map(([letter, categories]) => (
    <div key={letter} className="w-full h-auto flex flex-wrap justify-start items-center text-[#009DD7]">
      <h2 className="font-bold mr-4">{letter}</h2>
        {categories.map((category) => (
          <Link href={`/toyota/${category}`} key={category} className="mr-4 my-2 hover:font-semibold">{category}</Link>
        ))}
      
    </div>
  ));
  return (
    <>
      {/* main container */}
      <div className="lg:px-32 md:px-14 px-4">
        <div className="w-full h-auto flex flex-col gap-4 border-y-2 my-4 py-4">
          {/* heading */}
          <div className="w-auto h-auto flex flex-col lg:flex-row justify-start lg:items-center items-start gap-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-medium">Toyota</h1>
              <span>1966 - 2023</span>
            </div>
            <div className=" lg:flex hidden gap-4">
              <input
                type="search"
                name=""
                id=""
                placeholder="VIN or Frame number"
                className="rounded-md border-black border text-gray-600 flex-shrink-5"
              />
              <button className="py-2 px-6 border rounded-md bg-[#EFF2F6] flex-shrink-5">
                Find
              </button>
            </div>
          </div>

          {/* cars years  */}
          <div className="w-full h-auto flex flex-wrap items-center gap-4">
            <button className="bg-[#E1F2FD] p-1 text-sm text-gray-600">
              All
            </button>

            {/* years */}
            {yearsData?.map((data, index) => {
              return (
                <button
                  key={index}
                  className="hover:bg-[#FFF7E1] hover:text-blue-400 p-1 text-sm text-gray-600"
                >
                  <span className="border-b-2 border-black border-dotted">
                    {data.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* categories slug */}
        <div>{categoriesList}</div>
      </div>
    </>
  );
};

export default GenuineParts;
