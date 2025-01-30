import Image from "next/image"
import Link from "next/link"

interface ComicsResultsProps {
  searchQuery: string
}

export default function ComicsResults({ searchQuery }: ComicsResultsProps) {
  // This would normally fetch data based on the searchQuery
  const comics = [
    { id: 1, title: "The Amazing Spider-Man #1", description: "The debut of Spider-Man!", year: 1963 },
    { id: 2, title: "X-Men #1", description: "The first appearance of the X-Men.", year: 1963 },
    { id: 3, title: "Fantastic Four #1", description: "The first family of Marvel Comics debuts.", year: 1961 },
  ]

  return (
    <div className="grid gap-6">
      {comics.map((comic) => (
        <div key={comic.id} className="bg-zinc-900 p-4 rounded-lg flex gap-4">
          <Image
            src="/placeholder.svg?height=150&width=100"
            alt={comic.title}
            width={100}
            height={150}
            className="rounded"
          />
          <div>
            <h3 className="text-lg font-bold">{comic.title}</h3>
            <p className="text-sm text-gray-400">Published in {comic.year}</p>
            <p className="text-sm text-gray-300 mt-2">{comic.description}</p>
            <Link href={`/comics/${comic.id}`} className="text-red-500 hover:underline text-sm mt-2 inline-block">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

