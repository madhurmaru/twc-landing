import './globals.css'
import '../styles/animations.css'
import type { Metadata } from 'next'
import { Aleo, Roboto } from 'next/font/google'
import '../styles/gradients.css'


const aleo = Aleo({ 
  subsets: ['latin'], 
  weight: ['500'], 
  variable: '--font-aleo',
  display: 'swap',
})

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['300', '400', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Waiter Company',
  description: 'Innovative solutions for your cafe business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${aleo.variable} ${roboto.variable} font-sans bg-primary`}>
        {children}
      </body>
    </html>
  )
}