import '../styles/globals.css'
import '../styles/animations.css'
import type { Metadata } from 'next'
import { Aleo, Roboto } from 'next/font/google'
import '../styles/gradients.css'
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from 'react';

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
      <head>
      </head>
      <body suppressHydrationWarning className={`${aleo.variable} ${roboto.variable} font-sans bg-primary`}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}