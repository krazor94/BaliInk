"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Your Vision
            <strong className="block font-extrabold text-primary">
              Our Artistry
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Experience the perfect blend of creativity and craftsmanship at Ink Masters Studio.
            Let us bring your tattoo dreams to life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button size="lg" asChild>
              <Link href="/book">Book Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}