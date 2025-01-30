import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, DollarSign, Film } from "lucide-react"

const MOVIES = [
  {
    id: 1,
    title: "The Avengers",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbd4ea86ad884439876126a893944c3d-pWbsUiUxUPMxtpMO2UgHxMGiaQM3Ci.webp",
    releaseDate: "May 4, 2012",
    director: "Joss Whedon",
    budget: "$220 million",
    boxOffice: "$1.519 billion",
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  },
  {
    id: 2,
    title: "Avengers: Age of Ultron",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71bLVbz39QL-PlPRptAxvNp5dDwbauCFLaFfDY1Quz.webp",
    releaseDate: "May 1, 2015",
    director: "Joss Whedon",
    budget: "$365 million",
    boxOffice: "$1.403 billion",
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
  },
  {
    id: 3,
    title: "Captain America: Civil War",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fd53d076e4ec44787b1d08ec24f02b99-iuztf8Rrhk1OIu64bfq0NG1qQ0l4NM.webp",
    releaseDate: "May 6, 2016",
    director: "Anthony and Joe Russo",
    budget: "$250 million",
    boxOffice: "$1.153 billion",
    description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
  },
  {
    id: 4,
    title: "Avengers: Infinity War",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avengers-Infinity-War-Vintage-Movie-Poster-Original-1-Sheet-27x41_3598eaae-2806-4429-986b-218cc4f08b73-jlGTsFgdwd5YFsi54hTBQkYAhfjvpW.webp",
    releaseDate: "April 27, 2018",
    director: "Anthony and Joe Russo",
    budget: "$325 million",
    boxOffice: "$2.048 billion",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_600x600.1948872364_7kjp-xGJIsFnhDVQwcSAJ5jdGX9hRuLAeRk.webp",
    releaseDate: "April 26, 2019",
    director: "Anthony and Joe Russo",
    budget: "$356 million",
    boxOffice: "$2.798 billion",
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  },
]

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <div className="bg-gradient-to-r from-red-600 to-red-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Marvel Movies</h1>
          <p className="text-lg opacity-90">Experience the Marvel Cinematic Universe</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOVIES.map((movie) => (
            <Card key={movie.id} className="bg-zinc-900 hover:bg-zinc-800 transition-colors group">
              <CardContent className="p-0">
                <div className="relative h-[500px]">
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover rounded-t-lg"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Film className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{movie.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{movie.releaseDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Film className="w-4 h-4" />
                      <span>{movie.director}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span>Budget: {movie.budget}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span>Box Office: {movie.boxOffice}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

