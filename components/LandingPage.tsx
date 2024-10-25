
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Package, Utensils, MonitorCog, ChefHat, BadgeCheck, ShieldCheck, Zap, Globe, Phone, Clock  } from 'lucide-react'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary text-highlight font-aleo">
      <header className="p-6 bg-primary">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="The Waiter Company Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex space-x-6 text-sm font-roboto">
            <Link href="/about" target='_blank' className="text-highlight">About Us</Link>
            <Link href="/contact" target='_blank' className="text-highlight">Contact Us</Link>
            <Link href="/login" target='_blank' className="text-highlight">Log In</Link>
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center mb-20">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl lg:text-5xl font-aleo font-light text-secondary leading-tight mb-6 italic">
              Delivering innovative solutions to empower your cafe business!
            </h1>
            <p className="text-lg mb-8 font-roboto text-highlight">
              The Waiter Company is a platform where with our simple solution, every manual process in a cafe is just a finger touch away.
            </p>
            <p className="text-5xl text-supporting font-aleo font-light italic">
              Kitchen ke bahar hum dekhlenge!
            </p>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <Image
                src="/preview.png"
                alt="Platform mockup on laptop and phone"
                width={600}
                height={400}
                className="rounded-lg "
              />
            </div>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-aleo font-light text-secondary mb-10 text-center">
            Why Choose The Waiter Company (TWC)?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <Clock className="w-6 h-6 mr-2 text-supporting" />
                  Effortless Order Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Reduce wait times with QR code-based digital ordering. Customers can access menus instantly, place orders independently, and enjoy a seamless dining experience. Enhance efficiency and keep your customers satisfied without manual interventions.
              </CardContent>
            </Card>

            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <ClipboardCheck className="w-6 h-6 mr-2 text-supporting" />
                  Real-Time Inventory Control
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Stay on top of your stock with real-time tracking linked to kitchen operations. Each order automatically updates ingredient levels, helping you manage supplies efficiently and trigger timely reorders—no spreadsheets required.
              </CardContent>
            </Card>

            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <Package className="w-6 h-6 mr-2 text-supporting" />
                  Eliminate Stockouts and Waste
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Ensure optimal stock levels with automated reordering. Avoid shortages during peak hours, prevent over-ordering, and minimize food waste by aligning supplies with actual demand.
              </CardContent>
            </Card>

            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <Utensils className="w-6 h-6 mr-2 text-supporting" />
                  Focus on Culinary Excellence
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Free your team from operational hassles and focus on delivering great food. TWC manages backend operations so you can craft exceptional culinary experiences without distractions.
              </CardContent>
            </Card>

            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <MonitorCog className="w-6 h-6 mr-2 text-supporting" />
                  End-to-End Automation
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Achieve seamless operations from order placement to supplier delivery with TWC’s integrated system. Our automation simplifies every part of your restaurant management cycle, reducing workload and eliminating bottlenecks.
                </CardContent>
            </Card>

            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <ChefHat className="w-6 h-6 mr-2 text-supporting" />
                  Tailored Solutions for Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Our solutions scale effortlessly with your business. Whether you’re running a single café or expanding into multiple locations, TWC grows alongside you, ensuring smooth operations at every stage.
                </CardContent>
            </Card>

            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <BadgeCheck className="w-6 h-6 mr-2 text-supporting" />
                  Reduce Errors & Delays
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Say goodbye to manual stock updates and operational delays. TWC’s automated system minimizes human errors, ensuring consistent performance, even during peak hours.
                 </CardContent>
            </Card>

            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <ShieldCheck className="w-6 h-6 mr-2 text-supporting" />
                   Reliable and Secure
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Protect your business with TWC’s robust security framework. Our platform ensures your operations run smoothly and your data stays safe at all times.
                 </CardContent>
            </Card>

            
            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <Zap className="w-6 h-6 mr-2 text-supporting" />
                  Quick Setup and Training
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Get started quickly with TWC’s intuitive system. Minimize staff training time and maximize productivity from day one.
                 </CardContent>
            </Card>

            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <Globe className="w-6 h-6 mr-2 text-supporting" />
                  Accessible Anytime, Anywhere
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Stay connected and in control on the go. Manage your operations remotely with TWC’s cloud-based platform—accessible from any device, anytime.
              </CardContent>
            </Card>

            <Card className="bg-primary border-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-aleo text-highlight">
                  <Phone className="w-6 h-6 mr-2 text-supporting" />
                  24x7 Expert Support
                </CardTitle>
              </CardHeader>
              <CardContent className="font-roboto text-sm text-highlight">
                Our dedicated support team is available round the clock to help you get the most out of TWC. We are passionate about your success.
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}