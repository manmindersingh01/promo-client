import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

export const Carousels = () => {
  const img = [
    {
      add: 'https://cdn.pixabay.com/photo/2016/05/03/22/35/pagoda-1370346_1280.jpg',
      heading: "head",
      body: "black head"
    },
    {
      add: 'https://images.pexels.com/photos/22696776/pexels-photo-22696776/free-photo-of-marble-dining-table-and-chairs-in-the-living-room.jpeg?auto=compress&cs=tinysrgb&w=800',
      heading: "head",
      body: "black head"
    },
    {
      add: 'https://cdn.pixabay.com/photo/2016/05/03/22/35/pagoda-1370346_1280.jpg',
      heading: "head",
      body: "black head"
    },
    {
      add: 'https://images.pexels.com/photos/22696776/pexels-photo-22696776/free-photo-of-marble-dining-table-and-chairs-in-the-living-room.jpeg?auto=compress&cs=tinysrgb&w=800',
      heading: "head",
      body: "black head"
    }, {
      add: 'https://cdn.pixabay.com/photo/2016/05/03/22/35/pagoda-1370346_1280.jpg',
      heading: "head",
      body: "black head"
    },
    {
      add: 'https://images.pexels.com/photos/22696776/pexels-photo-22696776/free-photo-of-marble-dining-table-and-chairs-in-the-living-room.jpeg?auto=compress&cs=tinysrgb&w=800',
      heading: "head",
      body: "black head"
    }
  ];

  return (
    <>
      <div className=" w-full flex justify-center bg-slate-900 " >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mx-16 bg-slate-950 "
        >
          <CarouselContent>
            {img.map((imageUrl, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <div className=" bg-slate-800 opacity-70 hover:opacity-100">
                    <Card className="">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className=" overflow-hidden h-full relative">
                          <Image src={imageUrl.add} alt={`Carousel item ${index + 1}`} className="object-cover w-full h-full " width={600} height={800} />
                          <div className=" absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center hover:scale-150 hover:transition duration-700 ">
                            <h3 className="  text-white font-extrabold font-serif">{imageUrl.heading}</h3>
                            <p className="  text-white font-medium">{imageUrl.body}</p>
                          </div>

                        </div >

                      </CardContent>
                    </Card>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>



    </>
  );
};
