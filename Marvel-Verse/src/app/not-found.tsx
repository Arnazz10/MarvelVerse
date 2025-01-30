import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4 mb-8">Oops! This page got snapped away...</p>
        <Link href="/">
          <Button className="bg-red-600 hover:bg-red-700">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

