"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, MapPin, Search, Filter, Sparkles, TrendingUp } from "lucide-react"
import { events } from "@/lib/mock-data"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChatWidget } from "@/components/chat-widget"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { scrollY } = useScroll()
  const headerY = useTransform(scrollY, [0, 100], [0, -50])
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8])

  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(events.map((event) => event.location))]
    return uniqueLocations.sort()
  }, [])

  const filteredEvents = useMemo(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 300)

    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLocation = selectedLocation === "" || event.location === selectedLocation
      return matchesSearch && matchesLocation
    })
  }, [searchTerm, selectedLocation])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-lg"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent/5 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <motion.header
        className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-40 shadow-sm"
        style={{ y: headerY, opacity: headerOpacity }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <motion.div
                className="p-2 bg-primary/10 rounded-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="h-6 w-6 text-primary" />
              </motion.div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Events Explorer
              </h1>
            </motion.div>
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <TrendingUp className="h-4 w-4" />
            Discover Amazing Events
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Find Your Next
            <motion.span
              className="block text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Adventure
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Explore exciting events happening around you and create unforgettable memories
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div className="relative flex-1" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-border rounded-2xl bg-card/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
              />
            </motion.div>

            <motion.div className="relative" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="pl-12 pr-8 py-4 border border-border rounded-2xl bg-card/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-w-[220px] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </motion.div>
          </motion.div>
        </motion.section>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <motion.section variants={containerVariants} initial="hidden" animate="visible">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 },
                  }}
                  className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Link href={`/events/${event.id}`} className="block">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />

                      <motion.div
                        className="absolute inset-0 bg-primary/10"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />

                      <div className="absolute bottom-4 left-4 text-white z-10">
                        <motion.span
                          className="text-sm font-medium bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          {event.category}
                        </motion.span>
                      </div>

                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                      >
                        <Sparkles className="h-4 w-4 text-white" />
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-semibold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {event.title}
                      </motion.h3>

                      <motion.div
                        className="flex items-center gap-2 text-muted-foreground mb-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.date}</span>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-2 text-muted-foreground mb-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.location}</span>
                      </motion.div>

                      <motion.p
                        className="text-muted-foreground text-sm line-clamp-3 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        {event.description}
                      </motion.p>

                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        <span className="text-primary font-bold text-lg">${event.price}</span>
                        <span className="text-xs text-muted-foreground bg-accent/50 px-2 py-1 rounded-full">
                          {event.attendees} attending
                        </span>
                      </motion.div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <motion.div
                  className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Search className="h-8 w-8 text-muted-foreground" />
                </motion.div>
                <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedLocation("")
                  }}
                  className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </motion.section>
        )}
      </main>

      <ChatWidget />
    </div>
  )
}
