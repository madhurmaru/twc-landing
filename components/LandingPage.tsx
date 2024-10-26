'use client'

import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Package, Utensils, MonitorCog, ChefHat, BadgeCheck, ShieldCheck, Zap, Globe, Phone, Clock, ArrowUp } from 'lucide-react'
import Footer from './Footer'
import '../styles/animations.css'
import '../styles/gradients.css'

export default function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-primary text-highlight font-aleo">
      <header className="fixed w-full top-0 z-50 bg-primary shadow-md">
        <Navbar />
      </header>

      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center mb-20">
          {/* Left content section */}
          <div className="lg:w-1/2 lg:pr-12 animate-slideInFromLeft">
            <h1 className="text-2xl lg:text-5xl font-aleo font-light text-secondary leading-tight mb-6 italic">
              Delivering innovative solutions to empower your cafe business!
            </h1>
            <p className="text-lg mb-8 font-roboto text-highlight">
              The Waiter Company is a platform where with our simple solution, every manual process in a cafe is just a finger touch away.
            </p>
            <p className="text-5xl text-highlight font-aleo font-light italic">
              Kitchen ke bahar hum dekhlenge!
            </p>
          </div>
          
          {/* Device mockup section */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative justify-end right-0 w-full max-w-[800px] lg:-right-40">
              <Image
                src="/mockup.png"
                alt="Platform mockup on laptop and phone"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <section className="mt-20 animate-fadeIn">
          <h2 className="text-3xl font-aleo font-light mb-10 text-center text-secondary">
             Why Choose <span className="text-highlight gradient-text">The Waiter Company</span> (TWC)?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Clock, title: "Effortless Order Processing", content: "Reduce wait times with QR code-based digital ordering. Customers can access menus instantly, place orders independently, and enjoy a seamless dining experience. Enhance efficiency and keep your customers satisfied without manual interventions." },
              { icon: ClipboardCheck, title: "Real-Time Inventory Control", content: "Stay on top of your stock with real-time tracking linked to kitchen operations. Each order automatically updates ingredient levels, helping you manage supplies efficiently and trigger timely reorders—no spreadsheets required." },
              { icon: Package, title: "Eliminate Stockouts and Waste", content: "Ensure optimal stock levels with automated reordering. Avoid shortages during peak hours, prevent over-ordering, and minimize food waste by aligning supplies with actual demand." },
              { icon: Utensils, title: "Focus on Culinary Excellence", content: "Free your team from operational hassles and focus on delivering great food. TWC manages backend operations so you can craft exceptional culinary experiences without distractions." },
              { icon: MonitorCog, title: "End-to-End Automation", content: "Achieve seamless operations from order placement to supplier delivery with TWC's integrated system. Our automation simplifies every part of your restaurant management cycle, reducing workload and eliminating bottlenecks." },
              { icon: ChefHat, title: "Tailored Solutions for Growth", content: "Our solutions scale effortlessly with your business. Whether you're running a single café or expanding into multiple locations, TWC grows alongside you, ensuring smooth operations at every stage." },
              { icon: BadgeCheck, title: "Reduce Errors & Delays", content: "Say goodbye to manual stock updates and operational delays. TWC's automated system minimizes human errors, ensuring consistent performance, even during peak hours." },
              { icon: ShieldCheck, title: "Reliable and Secure", content: "Protect your business with TWC's robust security framework. Our platform ensures your operations run smoothly and your data stays safe at all times." },
              { icon: Zap, title: "Quick Setup and Training", content: "Get started quickly with TWC's intuitive system. Minimize staff training time and maximize productivity from day one." },
              { icon: Globe, title: "Accessible Anytime, Anywhere", content: "Stay connected and in control on the go. Manage your operations remotely with TWC's cloud-based platform—accessible from any device, anytime." },
              { icon: Phone, title: "24x7 Expert Support", content: "Our dedicated support team is available round the clock to help you get the most out of TWC. We are passionate about your success." }
            ].map((feature, index) => (
              <div key={feature.title} className={`animate-slideInFromBottom animate-delay-${(index % 5 + 1) * 100}`}>
                <Card className="bg-primary border-secondary hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                      <feature.icon className="w-6 h-6 mr-2 text-supporting" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="font-roboto text-sm text-highlight">
                    {feature.content}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {showScrollTop && (
        <button
          title="Scroll to top"
          className="fixed bottom-8 right-8 bg-secondary text-primary p-3 rounded-full shadow-lg hover:bg-highlight transition-colors duration-300 animate-fadeIn"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  )
}