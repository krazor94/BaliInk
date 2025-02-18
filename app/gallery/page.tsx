"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all")

  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&auto=format&fit=crop&q=60",
      title: "Traditional Japanese",
      category: "traditional"
    },
    {
      image: "https://images.unsplash.com/photo-1560707854-fe4cbd9eb4fb?w=800&auto=format&fit=crop&q=60",
      title: "Modern Minimalist",
      category: "minimal"
    },
    {
      image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&auto=format&fit=crop&q=60",
      title: "Custom Design",
      category: "custom"
    },
    {
      image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?w=800&auto=format&fit=crop&q=60",
      title: "Watercolor Style",
      category: "watercolor"
    },
    {
      image: "https://images.unsplash.com/photo-1590246814883-55516d8c2a1e?w=800&auto=format&fit=crop&q=60",
      title: "Geometric Pattern",
      category: "minimal"
    },
    {
      image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800&auto=format&fit=crop&q=60",
      title: "Traditional Rose",
      category: "traditional"
    }
  ]

  const categories = [
    { value: "all", label: "All Works" },
    { value: "traditional", label: "Traditional" },
    { value: "minimal", label: "Minimal" },
    { value: "custom", label: "Custom" },
    { value: "watercolor", label: "Watercolor" }
  ]

  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab)

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of unique tattoo designs and completed works
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="flex justify-center mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}