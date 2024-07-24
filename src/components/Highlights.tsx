"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { useState } from "react";
import db from "@/lib/firestore"
import { getDocs, collection, where, query } from "firebase/firestore"
import { GetServerSideProps } from "next";
import { log } from "console";

interface Product {
  id: string;
  data: {
    data: {
      body: string;
      description: string;
      frequent: boolean;
      imageUrl: string;
      title: string;
    }

  };
}



export const Carousels = () => {


  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const ref = collection(db, "product");
      const q = query(ref, where("data.frequent", "==", true));
      const snap = await getDocs(q);
      const fetchedProducts = snap.docs.map(doc => ({
        id: doc.id,
        data: doc.data() as Product['data']
      }));
      setProducts(fetchedProducts);
      // console.log(fetchedProducts); // Check fetched data
    };

    fetchProducts();
  }, []);
  console.log("data from high", products[2]);

  //console.log("Received data in component:", data);

  // const img = data.map(item => ({
  //   add: item.add,
  //   heading: item.title,
  //   body: item.body,
  // }));
  // const img = [
  //   {
  //     add: 'https://cdn.pixabay.com/photo/2016/05/03/22/35/pagoda-1370346_1280.jpg',
  //     heading: "head",
  //     body: "black head"
  //   },
  //   {
  //     add: 'https://images.pexels.com/photos/22696776/pexels-photo-22696776/free-photo-of-marble-dining-table-and-chairs-in-the-living-room.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     heading: "head",
  //     body: "black head"
  //   },
  //   {
  //     add: 'https://cdn.pixabay.com/photo/2016/05/03/22/35/pagoda-1370346_1280.jpg',
  //     heading: "head",
  //     body: "black head"
  //   },
  //   {
  //     add: 'https://images.pexels.com/photos/22696776/pexels-photo-22696776/free-photo-of-marble-dining-table-and-chairs-in-the-living-room.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     heading: "head",
  //     body: "black head"
  //   },
  //   {
  //     add: 'https://cdn.pixabay.com/photo/2016/05/03/22/35/pagoda-1370346_1280.jpg',
  //     heading: "head",
  //     body: "black head"
  //   },
  //   {
  //     add: 'https://images.pexels.com/photos/22696776/pexels-photo-22696776/free-photo-of-marble-dining-table-and-chairs-in-the-living-room.jpeg?auto=compress&cs=tinysrgb&w=800',
  //     heading: "head",
  //     body: "black head"
  //   }
  // ];

  return (
    <div className="bg-slate-900 flex justify-center p-2 w-full px-14">
      <Carousel className="flex">
        <CarouselContent className="-ml-1">
          {products.map((val, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 relative group">
                <Card className="bg-blue-400 overflow-hidden border-none">
                  <CardContent className="flex aspect-square items-center justify-center bg-purple-600 pl-0 pr-0 pb-0 border-none relative">
                    <div className="w-full h-full relative">
                      <Image
                        className="w-full h-full object-cover"
                        src={val.data.data.imageUrl}
                        alt={val.data.data.title}
                        width={300}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2  pt-20 text-center text-white">
                        <span className="font-extrabold text-4xl">{val.data.data.title}</span>
                        <span className="block">{val.data.data.body}</span>
                        <span className="block">{val.data.data.description}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
