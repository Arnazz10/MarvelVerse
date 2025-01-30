import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const COMICS = [
  {
    id: 1,
    title: "Captain America",
    year: 1941,
    creator: "Joe Simon, Jack Kirby",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf-fuMrerbBofcNupp0AppPwXlfFp3kP6.webp",
    description: "The first appearance of Captain America, featuring his iconic battle against Nazi forces.",
  },
  {
    id: 2,
    title: "Loki",
    year: 1949,
    creator: "Stan Lee",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loki-Comic_1-4f51579109254bd4a79138752db87c16-clnJ8LcnnsVrp3sGj2X2e1AlRvkrD4.webp",
    description: "The complete collection of the God of Mischief's early adventures.",
  },
  {
    id: 3,
    title: "Fantastic Four",
    year: 1961,
    creator: "Stan Lee, Jack Kirby",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/61xrWdOEDPL-PMdAIPDX93ff4KMCIQBbNwzE8o44Ye.webp",
    description: "Marvel's first family faces the Skrulls from outer space!",
  },
  {
    id: 4,
    title: "Spider-Man",
    year: 1962,
    creator: "Stan Lee",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marvel-comics-library-spider-man-vol-1-1962-1964-cover-7QRtkt5OQclPDcKPwp6gWdzE2AMW21.webp",
    description: "The Amazing Spider-Man's first appearance, featuring a clash with the Fantastic Four!",
  },
  {
    id: 5,
    title: "Thor",
    year: 1962,
    creator: "Stan Lee",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/773723__67144.1699544921-I5JialZgsdab0MnnK4gLPAntzAg4eA.webp",
    description: "The mighty Thor battles Annihilus in this classic tale!",
  },
]

export default function ComicsPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <div className="bg-gradient-to-r from-red-600 to-red-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Marvel Comics</h1>
          <p className="text-lg opacity-90">Explore the legendary Marvel Comics collection</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COMICS.map((comic) => (
            <Card key={comic.id} className="bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <CardContent className="p-0">
                <div className="relative h-[500px] overflow-hidden">
                  <Image
                    src={comic.image || "/placeholder.svg"}
                    alt={comic.title}
                    fill
                    className="object-cover object-top hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-xl font-bold">{comic.title}</h2>
                    <p className="text-sm text-gray-300">{comic.year}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-400">Created by: {comic.creator}</p>
                  <p className="text-sm text-gray-300 mt-2">{comic.description}</p>
                  <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Read More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

