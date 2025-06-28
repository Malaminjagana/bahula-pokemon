import Image from "next/image"
import Link from "next/link"
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Pokemon TCG: Sword & Shield Base Set - Elite Trainer Box FIRST PRINT (Zamazenta)",
    price: "$140.00 USD",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Pokemon TCG: Sword & Shield Base Set - Elite Trainer Box FIRST PRINT (Zacian)",
    price: "$140.00 USD",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Pokemon TCG: Scarlet & Violet - Destined Rivals Elite Trainer Box",
    price: "$75.00 USD",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Pokemon TCG: Sword & Shield - Chilling Reign Elite Trainer Box (Ice Rider Calyrex)",
    price: "$85.00 USD",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Pokemon TCG: Sword & Shield - Chilling Reign Elite Trainer Box (Shadow Rider Calyrex)",
    price: "$85.00 USD",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Pokemon TCG: Sword & Shield - Chilling Reign Pokemon Center Elite Trainer Box (Shadow Rider Calyrex)",
    price: "$90.00 USD",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Notification Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">Get notified about new releases at MSRP →</div>

      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">TBC</span>
              </div>
              <span className="text-xl font-bold text-orange-500">TBC Games</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>Everything Pokémon</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <Link href="#" className="hover:text-orange-500">
                Sets, Symbols & Checklists
              </Link>
              <Link href="#" className="hover:text-orange-500">
                Newsletter Sign Up
              </Link>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>Contact Us</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer" />
              <User className="w-5 h-5 cursor-pointer" />
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-400 via-blue-400 to-green-500 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full opacity-60"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-green-700 rounded-full opacity-40"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-green-500 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300 rounded-full opacity-60"></div>

          {/* Tree-like shapes */}
          <div className="absolute bottom-0 left-20 w-16 h-32 bg-amber-800 rounded-t-full"></div>
          <div className="absolute bottom-0 right-32 w-20 h-40 bg-amber-700 rounded-t-full"></div>
          <div className="absolute bottom-32 left-20 w-32 h-24 bg-green-600 rounded-full"></div>
          <div className="absolute bottom-40 right-32 w-40 h-32 bg-green-700 rounded-full"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to TBC Games!</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Hey Trainers! Dive into our stash of English & Japanese Pokémon cards
          </p>
          <Button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Let's Go! Explore All Cards
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Elite Trainer Boxes You'll Love</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-lg font-bold text-orange-600">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
