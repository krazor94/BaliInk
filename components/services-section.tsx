"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Scissors, Brush } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Designs",
      description: "Unique tattoo artwork tailored to your vision and style",
      price: "Starting from $150"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Cover-Ups",
      description: "Transform or enhance your existing tattoos",
      price: "Starting from $200"
    },
    {
      icon: <Brush className="h-8 w-8" />,
      title: "Traditional",
      description: "Classic tattoo designs with a modern twist",
      price: "Starting from $100"
    }
  ]

  return (
    <section className="py-24 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional tattoo services with attention to detail and artistic excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}