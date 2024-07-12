import { Carousels } from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Carousels />

    </>
  );
}
