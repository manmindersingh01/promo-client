import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
export const Carousels = () => {

  const img = [{
    add: 'https://images.pexels.com/photos/20852606/pexels-photo-20852606/free-photo-of-mother-and-daughter-in-traditional-clothing-in-winter.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    heading: "head",
    body: "black head"
  },
  {
    add: 'https://images.pexels.com/photos/1109766/pexels-photo-1109766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1&fit=crop&crop=entropy',
    heading: "head",
    body: "black head"
  },
  {
    add: 'https://images.pexels.com/photos/1109766/pexels-photo-1109766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1&fit=crop&crop=entropy',
    heading: "head",
    body: "black head"
  },
  ]

  return (
    <>
      <div className=" w-full flex justify-center bg-slate-900 " >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mx-16  "
        >
          <CarouselContent>
            {img.map((imageUrl, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <div className=" bg-slate-800 opacity-70 hover:opacity-100">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className=" overflow-hidden h-full relative">
                          <img src={imageUrl.add} alt={`Carousel item ${index + 1}`} className="object-cover w-full h-full " />
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

  )
}
