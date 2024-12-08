import Image from "next/image"
import Link from 'next/link'
import { Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    (<footer className="bg-supporting text-highlight font-roboto py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Social Links - Left Column */}
          <div className="space-y-4">
            {/* <Link href="https://facebook.com" target='_blank' className="flex items-center space-x-2 hover:text-gray-300">
              <Facebook size={20} />
              <span>Facebook</span>
            </Link>
            <Link href="https://twitter.com" target='_blank' className="flex items-center space-x-2 hover:text-gray-300">
              <Twitter size={20} />
              <span>Twitter</span>
            </Link> */}
            <Link href="https://www.linkedin.com/company/the-waiter-company" target='_blank' className="flex items-center space-x-2 hover:text-[#F5F1EB]">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </Link>
            <Link href="https://www.instagram.com/thewaitercompany" target='_blank' className="flex items-center space-x-2 hover:text-[#F5F1EB]">
              <Instagram size={20} />
              <span>Instagram</span>
            </Link>
          </div>

          {/* 
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
          </div> */}


          {/* Contact Info - Middle Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>RV College</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>+91 7878449528</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <span>founder@thewaitercompany.in</span>
            </div>
          </div>

          {/* Logo and Copyright - Right Column */}
          <div className="flex flex-col items-end space-y-4">
            <Image
              src="/logo.png"
              alt="The Waiter Company Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <p className="text-sm">Copyright © 2024 • The Waiter Company</p>
          </div>
        </div>
      </div>
    </footer>)
  );
}