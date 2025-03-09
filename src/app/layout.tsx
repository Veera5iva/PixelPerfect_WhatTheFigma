import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header, Footer } from "@/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "FreshHarvest - Fresh & Organic Food",
   description: "Your one-stop destination for farm-fresh produce, exotic fruits, and high-quality organic food.",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Header />
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   )
}

