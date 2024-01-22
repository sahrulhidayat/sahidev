'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <header className="sticky top-0 z-10 bg-gray-950 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href={'/'}>
          <Image
            src={'/sahidev.svg'}
            alt="Sahidev Logo"
            width={100}
            height={20}
          />
        </Link>
        <div>
          <button
            className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${isVisible ? 'toggle-btn' : ''}`}
            onClick={toggleMenu}
          >
            {/* &#9776; */}
            <div className="absolute top-4 -mt-0.5 h-[0.15rem] w-8 rounded bg-white transition-all duration-500 before:absolute before:h-[0.15rem] before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-[0.15rem] after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <Link href="/about" className="hover:opacity-90">
              About
            </Link>
            <Link href="/projects" className="hover:opacity-90">
              Projects
            </Link>
            <Link href="/contact" className="hover:opacity-90">
              Contact
            </Link>
          </nav>
        </div>
      </section>
      <section
        className={`top-68 justify-content-center absolute w-full origin-right animate-open-menu flex-col bg-black text-2xl ${isVisible ? 'flex' : 'hidden'}`}
      >
        {/* <button className="text-8xl self-end px-6" onClick={toggleMenu}>
          &times;
        </button> */}
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
          onClick={toggleMenu}
        >
          <Link href={'/'} className="w-full py-6 text-center hover:opacity-90">
            Home
          </Link>
          <Link
            href={'/about'}
            className="w-full py-6 text-center hover:opacity-90"
          >
            About
          </Link>
          <Link
            href={'/projects'}
            className="w-full py-6 text-center hover:opacity-90"
          >
            Projects
          </Link>
          <Link
            href={'/contact'}
            className="w-full py-6 text-center hover:opacity-90"
          >
            Contact
          </Link>
        </nav>
      </section>
    </header>
  )
}
