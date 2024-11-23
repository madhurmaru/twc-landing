'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import LoginDialog from './LoginDialog';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

   const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    (<header className="fixed w-full top-0 z-50 bg-[#B39793] shadow-md">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center p-4 lg:p-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="The Waiter Company Logo"
              width={150}
              height={50}
              className="h-8 lg:h-10 w-auto"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-12 text-sm font-roboto">
            <Link  href="#" target='_blank' className="text-highlight hover:text-[#F5F1EB] transition-colors duration-300">
              Free Demo
            </Link>
            <button 
              onClick={scrollToTop} 
              type="button"
              className="text-highlight hover:text-[#F5F1EB] transition-colors duration-300"
            >
              About Us
            </button>
            <Link  href="mailto:founder@thewaitercompany.in" target='_blank' className="text-highlight hover:text-[#F5F1EB] transition-colors duration-300">
              Contact Us
            </Link>
            <Link href="#" target='_blank' className="text-highlight hover:text-[#F5F1EB] transition-colors duration-300">
              <LoginDialog />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-highlight hover:text-secondary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? 'max-h-48' : 'max-h-0'
          } lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 p-4 bg-primary border-t border-highlight/10">
            <button
              onClick={() => {
                scrollToTop();
                setIsMenuOpen(false);
              }}
              type="button"
              className="text-highlight hover:text-secondary transition-colors duration-300 text-left"
            >
              About Us
            </button>
            <Link
               href="mailto:founder@thewaitercompany.in" target='_blank'
              className="text-highlight hover:text-secondary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-highlight hover:text-secondary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <LoginDialog />
            </Link>
          </div>
        </div>
      </nav>
    </header>)
  );
}