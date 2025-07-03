"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-6xl font-bold text-primary mb-4"
        >
          404
        </motion.div>

        <h1 className="text-2xl font-bold text-foreground mb-2">Event Not Found</h1>

        <p className="text-muted-foreground mb-8">
          Sorry, the event you're looking for doesn't exist or has been removed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Home className="h-4 w-4" />
            Back to Events
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            <Search className="h-4 w-4" />
            Search Events
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
