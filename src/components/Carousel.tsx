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

  const img = ['https://www.topgear.com/sites/default/files/2021/12/18.%20Koenigsegg%20Jesko.jpeg', 'https://www.financialexpress.com/wp-content/uploads/2023/11/Mercedes-G-Wagon-electric.jpg?w=1024', 'https://images.livemint.com/img/2021/06/04/1600x900/Jeep_Rubicon_1622802946971_1622802954275.PNG', 'https://www.topgear.com/sites/default/files/2021/12/18.%20Koenigsegg%20Jesko.jpeg', 'https://www.financialexpress.com/wp-content/uploads/2023/11/Mercedes-G-Wagon-electric.jpg?w=1024', 'https://images.livemint.com/img/2021/06/04/1600x900/Jeep_Rubicon_1622802946971_1622802954275.PNG']

  return (
    <>
      <div className=" w-full flex justify-center">
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
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={imageUrl} alt={`Carousel item ${index + 1}`} className="object-cover w-full h-full" />
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



    </>

  )
}
