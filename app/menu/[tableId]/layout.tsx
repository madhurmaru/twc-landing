import '../../../styles/globals.css'
import '../../../styles/animations.css'
import type { Metadata } from 'next'
import { aleo, roboto } from '../../fonts'
import '../../../styles/gradients.css'
import React from 'react';

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
      <body suppressHydrationWarning className={`${aleo.variable} ${roboto.variable} font-sans bg-primary`}>
        {children}
      </body>
    </html>
  )
}