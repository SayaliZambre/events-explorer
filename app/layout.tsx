import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Events Explorer | Discover Amazing Events",
  description:
    "Find and explore exciting events happening around you. From concerts to conferences, discover your next great experience with smooth animations and beautiful design.",
  keywords: ["events", "tickets", "concerts", "conferences", "entertainment", "experiences"],
  authors: [{ name: "Events Explorer Team" }],
  creator: "Events Explorer",
  publisher: "Events Explorer",
  openGraph: {
    title: "Events Explorer - Discover Amazing Events",
    description: "Find and explore exciting events with beautiful animations and seamless user experience",
    type: "website",
    locale: "en_US",
    url: "https://events-explorer.vercel.app",
    siteName: "Events Explorer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events Explorer",
    description: "Discover amazing events with beautiful animations",
    creator: "@eventsexplorer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="events-explorer-theme"
        >
          <div className="relative min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
