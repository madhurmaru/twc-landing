import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-supporting text-highlight font-roboto py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <Link href="https://facebook.com" target='_blank' className="flex justify-center md:justify-start items-center space-x-2">
              <Facebook size={20} />
              <span>Facebook</span>
            </Link>
            <Link href="https://twitter.com" target='_blank' className="flex justify-center md:justify-start items-center space-x-2">
              <Twitter size={20} />
              <span>Twitter</span>
            </Link>
            <Link href="https://linkedin.com" target='_blank' className="flex justify-center md:justify-start items-center space-x-2">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </Link>
            <Link href="https://instagram.com" target='_blank' className="flex justify-center md:justify-start items-center space-x-2">
              <Instagram size={20} />
              <span>Instagram</span>
            </Link>
          </div>

          <div className="space-y-4">
            <Link href="/about" target='_blank' className="hover:underline flex justify-center md:justify-start items-center space-x-2">
              <span>About Us</span>
            </Link>
            <Link href="/help" target='_blank' className="hover:underline flex justify-center md:justify-start items-center space-x-2">
              <span>Help</span>
            </Link>
            <Link href="/privacy" target='_blank' className="hover:underline flex justify-center md:justify-start items-center space-x-2">
              <span>Privacy Policy</span>
            </Link>
            <Link href="/disclaimer" target='_blank' className="hover:underline flex justify-center md:justify-start items-center space-x-2">
              <span>Disclaimer</span>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <MapPin size={20} />
              <span>RV College</span>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <Phone size={20} />
              <span>+91 8219058337</span>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <Mail size={20} />
              <span>email@gmail.com</span>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <Image
              src="/logo.png"
              alt="The Waiter Company Logo"
              width={150}
              height={50}
              className="h-10 w-auto mx-auto"
            />
            <p className="text-sm">Copyright © 2024 • The Waiter Company</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
