import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const featuredHeroes = [
  {
    id: 1,
    name: "Iron Man",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avengers-iron-man-person-human-graphics-art-transparent-png-683595%201-AjJr4cb8EtE9Tsapj5kVzt3iJW717G.png",
    description: "Genius. Billionaire. Playboy. Philanthropist.",
  },
  {
    id: 2,
    name: "Captain America",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uploads_captain_america_captain_america_PNG57%201-qVAVZBBnLHlkAp2hI8wniKw4ub7wl5.png",
    description: "The First Avenger",
  },
  {
    id: 3,
    name: "Thor",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fc227e2d-cd9a-40d8-bca3-7037544c1f19%201-5tAnSKRavaV3Igy41MayijmE1kxAt5.png",
    description: "God of Thunder",
  },
  {
    id: 4,
    name: "Black Widow",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snapedit_1712665968964%201-zlhh8UdpuIFa2JtwwzQqsGPrVzSbZW.png",
    description: "Master spy and assassin",
  },
  {
    id: 5,
    name: "Hulk",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-2-spider-man-png_600x600%202-IiJOKBW0r4IyLFjlWQJchv4IMLWIcU.png",
    description: "The strongest Avenger",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20203935-zRpdM3oLYJucuZbTIrDvcTtQjrg6lR.png"
          alt="Marvel Heroes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-red-600">
              MARVEL VERSE
            </h1>
            <p className="text-2xl text-gray-300">Explore the Multiverse</p>
          </div>
        </div>
      </section>

      {/* Featured Heroes Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Heroes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredHeroes.map((hero) => (
              <Card key={hero.id} className="bg-zinc-900 hover:bg-zinc-800 transition-colors">
                <CardContent className="p-0">
                  <div className="relative h-[400px] w-full bg-zinc-800 rounded-t-lg overflow-hidden">
                    <Image src={hero.image || "/placeholder.svg"} alt={hero.name} fill className="object-contain" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{hero.name}</h3>
                    <p className="text-sm text-gray-300">{hero.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Marvel Universe</h2>
          <p className="text-xl mb-8">Discover more about your favorite heroes, comics, and movies!</p>
          <Link
            href="/avengers"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Explore Avengers
          </Link>
        </div>
      </section>
    </div>
  )
}

