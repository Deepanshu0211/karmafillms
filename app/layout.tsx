import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

import CustomCursor from "./components/custom-cursor"
import LoadingScreen from "./components/loading-screen"

import "./globals.css"

export const metadata: Metadata = {
  title: "Karma Film ",
  description: "We craft compelling visual narratives that captivate audiences and elevate brands.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-gilroy antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={<LoadingScreen />}>
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}

