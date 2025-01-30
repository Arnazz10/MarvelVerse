import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Mountain } from "lucide-react"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MARVELverse",
  description: "Explore the Marvel Universe",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-red-600 text-white">
          <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Mountain className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">MARVELverse</span>
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/avengers" className="hover:text-gray-300">
                  Avengers
                </Link>
              </li>
              <li>
                <Link href="/comics" className="hover:text-gray-300">
                  Comics
                </Link>
              </li>
              <li>
                <Link href="/movies" className="hover:text-gray-300">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 MARVELverse. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

