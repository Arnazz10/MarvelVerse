"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const avengers = [
    {
      id: 1,
      name: "Iron Man",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avengers-iron-man-person-human-graphics-art-transparent-png-683595%201-AjJr4cb8EtE9Tsapj5kVzt3iJW717G.png",
      description: "Genius. Billionaire. Playboy. Philanthropist.",
      actor: "Robert Downey Jr.",
    },
    {
      id: 2,
      name: "Captain America",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uploads_captain_america_captain_america_PNG57%201-qVAVZBBnLHlkAp2hI8wniKw4ub7wl5.png",
      description: "The First Avenger",
      actor: "Chris Evans",
    },
    {
      id: 3,
      name: "Hulk",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fc227e2d-cd9a-40d8-bca3-7037544c1f19%201-5tAnSKRavaV3Igy41MayijmE1kxAt5.png",
      description: "The Strongest Avenger",
      actor: "Mark Ruffalo",
    },
    {
      id: 4,
      name: "Black Panther",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snapedit_1712665968964%201-zlhh8UdpuIFa2JtwwzQqsGPrVzSbZW.png",
      description: "King of Wakanda",
      actor: "Chadwick Boseman",
    },
    {
      id: 5,
      name: "Spider-Man",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-2-spider-man-png_600x600%202-IiJOKBW0r4IyLFjlWQJchv4IMLWIcU.png",
      description: "Your Friendly Neighborhood Spider-Man",
      actor: "Tom Holland",
    },
  ]

  const comics = [
    {
      id: 1,
      title: "Spider-Man #1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marvel-comics-library-spider-man-vol-1-1962-1964-cover-7QRtkt5OQclPDcKPwp6gWdzE2AMW21.webp",
      year: 1962,
      creator: "Stan Lee",
    },
    {
      id: 2,
      title: "X-Men #1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x-men-pepe-larraz-comic-book-cover-CzztuKkMqyLeJplTtlVTmSQ9PM9ZGS.webp",
      year: 1963,
      creator: "Stan Lee",
    },
    {
      id: 3,
      title: "Fantastic Four #1",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/61xrWdOEDPL-PMdAIPDX93ff4KMCIQBbNwzE8o44Ye.webp",
      year: 1961,
      creator: "Stan Lee, Jack Kirby",
    },
    {
      id: 4,
      title: "Iron Man #1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMv1-0001-300x460-GRWMAmQyO7dO2OWeS3CCxFAOt8ozi1.webp",
      year: 1963,
      creator: "Stan Lee",
    },
    {
      id: 5,
      title: "Thor #1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/773723__67144.1699544921-I5JialZgsdab0MnnK4gLPAntzAg4eA.webp",
      year: 1962,
      creator: "Stan Lee",
    },
  ]

  const movies = [
    {
      id: 1,
      title: "The Avengers",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbd4ea86ad884439876126a893944c3d-pWbsUiUxUPMxtpMO2UgHxMGiaQM3Ci.webp",
      year: 2012,
      director: "Joss Whedon",
    },
    {
      id: 2,
      title: "Avengers: Age of Ultron",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71bLVbz39QL-PlPRptAxvNp5dDwbauCFLaFfDY1Quz.webp",
      year: 2015,
      director: "Joss Whedon",
    },
    {
      id: 3,
      title: "Captain America: Civil War",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fd53d076e4ec44787b1d08ec24f02b99-iuztf8Rrhk1OIu64bfq0NG1qQ0l4NM.webp",
      year: 2016,
      director: "Anthony and Joe Russo",
    },
    {
      id: 4,
      title: "Black Panther",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blackpanther_lob_crd_01_5-E1UdTWnzDSw3spfKtRNbjPpQ9ma0CB.webp",
      year: 2018,
      director: "Ryan Coogler",
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_600x600.1948872364_7kjp-xGJIsFnhDVQwcSAJ5jdGX9hRuLAeRk.webp",
      year: 2019,
      director: "Anthony and Joe Russo",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search Marvel Universe..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-zinc-900 pl-12"
            />
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <Tabs defaultValue="avengers" className="max-w-6xl mx-auto">
          <TabsList className="bg-zinc-900 p-1 mb-8">
            <TabsTrigger value="avengers" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Avengers
            </TabsTrigger>
            <TabsTrigger value="comics" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Comics
            </TabsTrigger>
            <TabsTrigger value="movies" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Movies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="avengers" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {avengers
                .filter(
                  (hero) =>
                    hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    hero.description.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .map((hero) => (
                  <Card
                    key={hero.id}
                    className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-[400px] bg-zinc-800">
                        <Image src={hero.image || "/placeholder.svg"} alt={hero.name} fill className="object-contain" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{hero.name}</h3>
                        <p className="text-gray-400 mb-2">Played by: {hero.actor}</p>
                        <p className="text-gray-300">{hero.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="comics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comics
                .filter(
                  (comic) =>
                    comic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    comic.creator.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .map((comic) => (
                  <Card
                    key={comic.id}
                    className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-[500px] bg-zinc-800">
                        <Image
                          src={comic.image || "/placeholder.svg"}
                          alt={comic.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{comic.title}</h3>
                        <p className="text-gray-400">Year: {comic.year}</p>
                        <p className="text-gray-300">Creator: {comic.creator}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="movies" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {movies
                .filter(
                  (movie) =>
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    movie.director.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .map((movie) => (
                  <Card
                    key={movie.id}
                    className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-[500px] bg-zinc-800">
                        <Image
                          src={movie.image || "/placeholder.svg"}
                          alt={movie.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                        <p className="text-gray-400">Year: {movie.year}</p>
                        <p className="text-gray-300">Director: {movie.director}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

