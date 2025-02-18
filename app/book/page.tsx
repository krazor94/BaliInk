"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Palette, Clock, Info } from "lucide-react"

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", 
    "6:00 PM", "7:00 PM"
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Schedule your tattoo session with our experienced artists
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>
                Fill out the form below to schedule your tattoo session
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-4">
                  <Label>Service Type</Label>
                  <RadioGroup defaultValue="custom" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom" className="flex items-center space-x-2">
                        <Palette className="h-4 w-4" />
                        <span>Custom Design</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="traditional" id="traditional" />
                      <Label htmlFor="traditional" className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Traditional</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="coverup" id="coverup" />
                      <Label htmlFor="coverup" className="flex items-center space-x-2">
                        <Info className="h-4 w-4" />
                        <span>Cover-Up</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Approximate Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (2-3 inches)</SelectItem>
                        <SelectItem value="medium">Medium (4-6 inches)</SelectItem>
                        <SelectItem value="large">Large (7-10 inches)</SelectItem>
                        <SelectItem value="xlarge">Extra Large (11+ inches)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Design Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your tattoo idea, including style, colors, and placement"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Preferred Date</Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Time</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full">Schedule Consultation</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Booking Information</CardTitle>
              <CardDescription>Important details about our booking process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Consultation Required</h4>
                <p className="text-sm text-muted-foreground">
                  All custom tattoos require an initial consultation to discuss design details and pricing.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Deposit</h4>
                <p className="text-sm text-muted-foreground">
                  A non-refundable deposit is required to secure your appointment, which will be applied to your final payment.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Cancellation Policy</h4>
                <p className="text-sm text-muted-foreground">
                  Please provide at least 48 hours notice for cancellations to reschedule your appointment.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Contact us for assistance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you have any questions about the booking process, please don't hesitate to reach out:
              </p>
              <div className="space-y-2">
                <p className="text-sm">Phone: +1 (555) 123-4567</p>
                <p className="text-sm">Email: bookings@inkmasters.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}