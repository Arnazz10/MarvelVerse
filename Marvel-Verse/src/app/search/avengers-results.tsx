import Image from "next/image"
import Link from "next/link"

interface AvengersResultsProps {
  searchQuery: string
}

export default function AvengersResults({ searchQuery }: AvengersResultsProps) {
  // This would normally fetch data based on the searchQuery
  const avengers = [
    { id: 1, name: "Iron Man", alias: "Tony Stark", description: "Genius. Billionaire. Playboy. Philanthropist." },
    { id: 2, name: "Captain America", alias: "Steve Rogers", description: "Super-Soldier. Leader. Man out of time." },
    { id: 3, name: "Thor", alias: "Thor Odinson", description: "God of Thunder. Asgardian. Avenger." },
  ]

  return (
    <div className="grid gap-6">
      {avengers.map((avenger) => (
        <div key={avenger.id} className="bg-zinc-900 p-4 rounded-lg flex gap-4">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt={avenger.name}
            width={100}
            height={100}
            className="rounded"
          />
          <div>
            <h3 className="text-lg font-bold">{avenger.name}</h3>
            <p className="text-sm text-gray-400">{avenger.alias}</p>
            <p className="text-sm text-gray-300 mt-2">{avenger.description}</p>
            <Link href={`/avengers/${avenger.id}`} className="text-red-500 hover:underline text-sm mt-2 inline-block">
              View profile
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

