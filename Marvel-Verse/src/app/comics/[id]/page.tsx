"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react"
import Link from "next/link"

const COMICS_DATA = {
  "spider-man": {
    title: "Spider-Man",
    year: 1962,
    creator: "Stan Lee",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marvel-comics-library-spider-man-vol-1-1962-1964-cover-7QRtkt5OQclPDcKPwp6gWdzE2AMW21.webp",
    description: "The Amazing Spider-Man's first appearance, featuring a clash with the Fantastic Four!",
    longDescription:
      "When high school student Peter Parker is bitten by a radioactive spider, he gains spider-like abilities that he uses to fight crime and help others. This groundbreaking first issue introduces the world to one of Marvel's most iconic characters.",
  },
  "iron-man": {
    title: "Iron Man",
    year: 1963,
    creator: "Stan Lee",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMv1-0001-300x460-GRWMAmQyO7dO2OWeS3CCxFAOt8ozi1.webp",
    description: "The Invincible Iron Man debuts in his premiere issue!",
    longDescription:
      "Genius inventor Tony Stark creates a powerful suit of armor to save his own life and becomes Iron Man. This first issue establishes the character's origin story and sets up his future adventures.",
  },
  // ... Add other comics data similarly
}

export default function ComicDetail() {
  const params = useParams()
  const router = useRouter()
  const comic = COMICS_DATA[params.id as keyof typeof COMICS_DATA]

  if (!comic) {
    return <div>Comic not found</div>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[70vh]">
        <Image src={comic.image || "/placeholder.svg"} alt={comic.title} fill className="object-contain" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <Link href="/comics" className="absolute top-4 left-4 z-10">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{comic.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>First Published: {comic.year}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <User className="w-5 h-5" />
                <span>Created by: {comic.creator}</span>
              </div>
              <p className="text-lg text-gray-300">{comic.longDescription}</p>
              <Button className="mt-6">
                <BookOpen className="mr-2 h-4 w-4" />
                Read Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

