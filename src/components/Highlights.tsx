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

    <div className=" bg-slate-950 flex justify-center p-2">

      <Carousel className="w-full max-w-7xl ">
        <CarouselContent className="-ml-1">

          {img.map((val, index) => (

            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 opacity-70 hover:opacity-100">
              <div className="p-1">



                <Card className=" bg-blue-400 overflow-hidden border-none ">
                  <CardContent className="flex aspect-square items-center justify-center  bg-purple-600 pl-0 pr-0 pb-0 border-none">
                    <div className="w-full h-full relative ">
                      <Image
                        className=" w-full h-full object-cover"
                        src={val.add}
                        alt={val.heading}
                        width={300}
                        height={300} />
                      <div className=" absolute top-1/2 left-1/2 -translate-x-20 -translate-y-6 font-serif   text-3xl text-black  flex flex-col justify-center items-center">
                        <span className=" font-extrabold text-4xl" >{val.heading}</span>
                        <span>{val.body}</span>
                      </div>


                    </div>
                    {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
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



  )
};
