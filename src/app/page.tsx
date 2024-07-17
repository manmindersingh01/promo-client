import { Carousels } from "@/components/Highlights";
import Footer from "@/components/Footer";
import Lists from "@/components/Lists";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Carousels />
      <Lists />
      <Footer />

    </>
  );
}
