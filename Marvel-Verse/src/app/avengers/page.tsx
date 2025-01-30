import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const avengers = [
  {
    id: 1,
    name: "Iron Man",
    realName: "Tony Stark",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avengers-iron-man-person-human-graphics-art-transparent-png-683595%201-AjJr4cb8EtE9Tsapj5kVzt3iJW717G.png",
    description: "Genius. Billionaire. Playboy. Philanthropist.",
    actor: "Robert Downey Jr.",
  },
  {
    id: 2,
    name: "Captain America",
    realName: "Steve Rogers",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uploads_captain_america_captain_america_PNG57%201-qVAVZBBnLHlkAp2hI8wniKw4ub7wl5.png",
    description: "The First Avenger",
    actor: "Chris Evans",
  },
  {
    id: 3,
    name: "Thor",
    realName: "Thor Odinson",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fc227e2d-cd9a-40d8-bca3-7037544c1f19%201-5tAnSKRavaV3Igy41MayijmE1kxAt5.png",
    description: "God of Thunder",
    actor: "Chris Hemsworth",
  },
  {
    id: 4,
    name: "Black Widow",
    realName: "Natasha Romanoff",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snapedit_1712665968964%201-zlhh8UdpuIFa2JtwwzQqsGPrVzSbZW.png",
    description: "Master spy and assassin",
    actor: "Scarlett Johansson",
  },
  {
    id: 5,
    name: "Hulk",
    realName: "Bruce Banner",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-2-spider-man-png_600x600%202-IiJOKBW0r4IyLFjlWQJchv4IMLWIcU.png",
    description: "The strongest Avenger",
    actor: "Mark Ruffalo",
  },
]

export default function AvengersPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <div className="bg-gradient-to-r from-red-600 to-red-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Marvel's Avengers</h1>
          <p className="text-lg opacity-90">Earth's Mightiest Heroes</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avengers.map((avenger) => (
            <Card key={avenger.id} className="bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <CardContent className="p-0">
                <div className="relative h-[400px]">
                  <Image src={avenger.image || "/placeholder.svg"} alt={avenger.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h2 className="text-2xl font-bold mb-2">{avenger.name}</h2>
                    <p className="text-sm text-gray-300">{avenger.realName}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">Played by: {avenger.actor}</p>
                  <p className="text-sm text-gray-300">{avenger.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

