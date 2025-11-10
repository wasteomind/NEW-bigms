import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "БОЛЬШОЙ МАСТЕР - Промышленная сантехника и отопление",
  description: "Промышленная сантехника, отопление и водоснабжение",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
