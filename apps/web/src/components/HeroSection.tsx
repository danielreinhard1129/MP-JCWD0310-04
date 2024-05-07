import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative h-screen">
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="heroSection"
        objectFit="cover"
        fill
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white bg-black bg-opacity-70">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Eventure</h1>
      <p className="text-lg md:text-xl font-medium mb-6">
        Music becomes your new Adventure
      </p>
    </div>
  </section>
  )
}

export default HeroSection