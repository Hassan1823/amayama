import Footer from "./components/Footer";
import Header from "./components/Header";
import LogoBar from "./components/LogoBar";
import MobileMenu from "./components/MobileMenu";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amayama",
  description: "Amayama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileMenu />
        <Header />
        <LogoBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
