import Image from "next/image"
import Link from "next/link"

interface MoviesResultsProps {
  searchQuery: string
}

export default function MoviesResults({ searchQuery }: MoviesResultsProps) {
  // This would normally fetch data based on the searchQuery
  const movies = [
    { id: 1, title: "Iron Man", description: "The movie that started it all.", year: 2008 },
    { id: 2, title: "The Avengers", description: "Earth's mightiest heroes assemble.", year: 2012 },
    { id: 3, title: "Avengers: Endgame", description: "The epic conclusion to the Infinity Saga.", year: 2019 },
  ]

  return (
    <div className="grid gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-zinc-900 p-4 rounded-lg flex gap-4">
          <Image
            src="/placeholder.svg?height=150&width=100"
            alt={movie.title}
            width={100}
            height={150}
            className="rounded"
          />
          <div>
            <h3 className="text-lg font-bold">{movie.title}</h3>
            <p className="text-sm text-gray-400">Released in {movie.year}</p>
            <p className="text-sm text-gray-300 mt-2">{movie.description}</p>
            <Link href={`/movies/${movie.id}`} className="text-red-500 hover:underline text-sm mt-2 inline-block">
              View details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

