"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const TOP_CHARACTERS = [
  {
    id: 1,
    name: "Iron Man",
    realName: "Tony Stark",
    image: "/placeholder.svg?height=400&width=300",
    description: "Genius. Billionaire. Playboy. Philanthropist.",
  },
  {
    id: 2,
    name: "Spider-Man",
    realName: "Peter Parker",
    image: "/placeholder.svg?height=400&width=300",
    description: "Your friendly neighborhood Spider-Man.",
  },
  {
    id: 3,
    name: "Thor",
    realName: "Thor Odinson",
    image: "/placeholder.svg?height=400&width=300",
    description: "God of Thunder.",
  },
  // Add more characters...
]

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <div className="bg-gradient-to-r from-red-600 to-red-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Marvel Characters</h1>
          <p className="text-lg opacity-90">Discover the mighty heroes and villains of the Marvel Universe</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOP_CHARACTERS.map((character) => (
            <Link href={`/characters/${character.id}`} key={character.id}>
              <Card className="bg-zinc-900 hover:bg-zinc-800 transition-colors overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-[400px]">
                    <Image
                      src={character.image || "/placeholder.svg"}
                      alt={character.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{character.name}</h2>
                    <p className="text-sm text-gray-400 mb-2">{character.realName}</p>
                    <p className="text-sm text-gray-300">{character.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

