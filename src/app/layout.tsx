'use client'

import { ReactNode, useEffect } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Orbitron } from 'next/font/google'
import { axeAccessabilityReporter } from '@/utils/axeAccessibilityReporter'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-orbitron',
})

export const metadata = {
  title: 'Accessability',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    axeAccessabilityReporter()
  }, [])

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${orbitron.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
