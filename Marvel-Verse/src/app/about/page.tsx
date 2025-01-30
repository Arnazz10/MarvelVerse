import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Newspaper, Film, Globe, Phone } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: Shield,
      title: "Our Mission",
      description:
        "MARVELverse is dedicated to bringing fans the most comprehensive and engaging Marvel experience online.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Join millions of Marvel fans worldwide in discussing your favorite characters, stories, and moments.",
    },
    {
      icon: Newspaper,
      title: "Latest News",
      description: "Stay updated with the latest Marvel news, announcements, and exclusive content.",
    },
    {
      icon: Film,
      title: "Movies & TV",
      description: "Explore the ever-expanding Marvel Cinematic Universe and TV series.",
    },
    {
      icon: Globe,
      title: "Digital Comics",
      description: "Access thousands of digital comics featuring your favorite Marvel characters.",
    },
    {
      icon: Phone,
      title: "Contact Us",
      description: "Have questions? Our support team is here to help you navigate the Marvel Universe.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <div className="bg-gradient-to-r from-red-600 to-red-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About MARVELverse</h1>
          <p className="text-lg opacity-90">Your ultimate destination for all things Marvel</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="bg-zinc-900 border-red-600/20 hover:border-red-600/40 transition-colors">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Marvel Universe Today</h2>
          <p className="text-gray-400">
            Whether you're a longtime fan or just starting your journey into the Marvel Universe, MARVELverse is your
            gateway to endless entertainment and community.
          </p>
        </div>
      </div>
    </div>
  )
}

