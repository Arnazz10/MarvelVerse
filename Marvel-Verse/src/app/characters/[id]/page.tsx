"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Share2 } from "lucide-react"
import Link from "next/link"

export default function CharacterDetails() {
  const params = useParams()

  // This would normally fetch data based on the ID
  const character = {
    id: params.id,
    name: "Iron Man",
    realName: "Tony Stark",
    image: "/placeholder.svg?height=600&width=400",
    description:
      "Tony Stark is the wealthy son of industry giant Howard Stark. When Stark was captured by terrorists, he built the first Iron Man suit to escape. Now he uses his genius-level intellect and resources to protect the world as Iron Man.",
    powers: ["Genius-Level Intellect", "Master Engineer", "Iron Man Armor", "Flight", "Super Strength"],
    firstAppearance: "Tales of Suspense #39 (March 1963)",
    creators: ["Stan Lee", "Larry Lieber", "Don Heck", "Jack Kirby"],
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[50vh] md:h-[70vh]">
        <Image
          src={character.image || "/placeholder.svg"}
          alt={character.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <Link href="/characters" className="absolute top-4 left-4 z-10">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{character.name}</h1>
            <p className="text-xl text-gray-400 mb-6">{character.realName}</p>
            <p className="text-gray-300 mb-6">{character.description}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Powers & Abilities</h2>
              <ul className="list-disc list-inside text-gray-300">
                {character.powers.map((power, index) => (
                  <li key={index}>{power}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Heart className="mr-2 h-4 w-4" />
                Add to Favorites
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">First Appearance</h2>
              <p className="text-gray-300">{character.firstAppearance}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Creators</h2>
              <div className="flex flex-wrap gap-2">
                {character.creators.map((creator, index) => (
                  <span key={index} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                    {creator}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

