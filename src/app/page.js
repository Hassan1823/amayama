"use client";
// import Image from 'next/image'
import Cont_Hero from "./components/Cont_Hero";
import ThenWhat from "./components/ThenWhat";
import Delivery from "./components/Delivery";
export default function Home() {
  return (
    <main>
      
      <Cont_Hero />
      <ThenWhat />
      <Delivery />
    </main>
  );
}
