import Image from "next/image"
import Link from "next/link"

interface AllResultsProps {
  searchQuery: string
}

export default function AllResults({ searchQuery }: AllResultsProps) {
  const results = [
    // Avengers
    {
      id: 1,
      type: "avenger",
      name: "Iron Man",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avengers-iron-man-person-human-graphics-art-transparent-png-683595%201-AjJr4cb8EtE9Tsapj5kVzt3iJW717G.png",
      description: "Genius. Billionaire. Playboy. Philanthropist.",
    },
    {
      id: 2,
      type: "avenger",
      name: "Captain America",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uploads_captain_america_captain_america_PNG57%201-qVAVZBBnLHlkAp2hI8wniKw4ub7wl5.png",
      description: "The First Avenger",
    },
    // Comics
    {
      id: 3,
      type: "comic",
      name: "Amazing Spider-Man #1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marvel-comics-library-spider-man-vol-1-1962-1964-cover-7QRtkt5OQclPDcKPwp6gWdzE2AMW21.webp",
      description: "The debut of Spider-Man!",
    },
    {
      id: 4,
      type: "comic",
      name: "X-Men #1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x-men-pepe-larraz-comic-book-cover-CzztuKkMqyLeJplTtlVTmSQ9PM9ZGS.webp",
      description: "Marvel's mutant heroes unite!",
    },
    // Movies
    {
      id: 5,
      type: "movie",
      name: "Avengers: Endgame",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_600x600.1948872364_7kjp-xGJIsFnhDVQwcSAJ5jdGX9hRuLAeRk.webp",
      description: "The epic conclusion to the Infinity Saga.",
    },
    {
      id: 6,
      type: "movie",
      name: "Black Panther",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blackpanther_lob_crd_01_5-E1UdTWnzDSw3spfKtRNbjPpQ9ma0CB.webp",
      description: "The king of Wakanda rises.",
    },
    // Add more results...
  ]

  const filteredResults = searchQuery
    ? results.filter(
        (result) =>
          result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : results

  return (
    <div className="grid gap-6">
      {filteredResults.map((result) => (
        <div key={result.id} className="bg-zinc-900 p-4 rounded-lg flex gap-4">
          <Image
            src={result.image || "/placeholder.svg"}
            alt={result.name}
            width={100}
            height={100}
            className="rounded object-cover"
          />
          <div>
            <h3 className="text-lg font-bold">{result.name}</h3>
            <p className="text-sm text-gray-400 capitalize">{result.type}</p>
            <p className="text-sm text-gray-300 mt-2">{result.description}</p>
            <Link
              href={`/${result.type}s/${result.id}`}
              className="text-red-500 hover:underline text-sm mt-2 inline-block"
            >
              Learn more
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

