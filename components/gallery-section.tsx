"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function GallerySection() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&auto=format&fit=crop&q=60",
      title: "Traditional Japanese"
    },
    {
      image: "https://images.unsplash.com/photo-1560707854-fe4cbd9eb4fb?w=800&auto=format&fit=crop&q=60",
      title: "Modern Minimalist"
    },
    {
      image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&auto=format&fit=crop&q=60",
      title: "Custom Design"
    },
    {
      image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?w=800&auto=format&fit=crop&q=60",
      title: "Watercolor Style"
    }
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our portfolio of custom tattoos and artistic designs
          </p>
        </div>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0">
                  <CardContent className="aspect-square relative p-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}