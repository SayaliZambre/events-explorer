"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, MapPin, Users, Clock, Share2, Heart, Star, Award, Zap } from "lucide-react"
import { useState } from "react"

interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
  category: string
  price: number
  attendees: number
  duration: string
  organizer: string
  fullDescription: string
}

interface EventDetailClientProps {
  event: Event
}

export function EventDetailClient({ event }: EventDetailClientProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isShared, setIsShared] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  const handleShare = () => {
    setIsShared(true)
    setTimeout(() => setIsShared(false), 2000)
    // Add actual share functionality here
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <motion.article className="relative z-10">
        <motion.div
          className="aspect-video bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-3xl mb-8 relative overflow-hidden shadow-2xl"
          style={{ y, opacity }}
          variants={itemVariants}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="absolute bottom-8 left-8 text-white z-10">
            <motion.span
              className="inline-block bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div className="inline-flex items-center gap-2" whileHover={{ x: 2 }}>
                <Star className="h-4 w-4" />
                {event.category}
              </motion.div>
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-2 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {event.title}
            </motion.h1>
          </div>

          <div className="absolute top-8 right-8 flex gap-3 z-10">
            <motion.button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
                isLiked ? "bg-red-500/90 text-white scale-110" : "bg-white/20 text-white hover:bg-white/30"
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <motion.div animate={isLiked ? { scale: [1, 1.3, 1] } : {}} transition={{ duration: 0.3 }}>
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
              </motion.div>
            </motion.button>

            <motion.button
              onClick={handleShare}
              className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
                isShared ? "bg-green-500/90 text-white" : "bg-white/20 text-white hover:bg-white/30"
              }`}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
            >
              <motion.div animate={isShared ? { rotate: 360 } : {}} transition={{ duration: 0.5 }}>
                <Share2 className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.section variants={itemVariants}>
              <motion.h2
                className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="p-2 bg-primary/10 rounded-xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="h-6 w-6 text-primary" />
                </motion.div>
                About This Event
              </motion.h2>

              <motion.div
                className="prose prose-lg max-w-none text-muted-foreground space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.p
                  className="leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {event.description}
                </motion.p>
                <motion.p
                  className="leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {event.fullDescription}
                </motion.p>
              </motion.div>
            </motion.section>

            <motion.section variants={itemVariants}>
              <motion.h3
                className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="p-2 bg-secondary/10 rounded-xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Zap className="h-5 w-5 text-secondary" />
                </motion.div>
                Event Details
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Calendar, label: "Date", value: event.date, color: "text-blue-500" },
                  { icon: Clock, label: "Duration", value: event.duration, color: "text-green-500" },
                  { icon: MapPin, label: "Location", value: event.location, color: "text-red-500" },
                  { icon: Users, label: "Attendees", value: `${event.attendees} registered`, color: "text-purple-500" },
                ].map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    className="group flex items-center gap-4 p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 ${detail.color}`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <detail.icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {detail.label}
                      </p>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.aside className="lg:col-span-1" variants={itemVariants}>
            <motion.div
              className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 sticky top-24 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-center mb-8"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <motion.div className="relative inline-block" whileHover={{ scale: 1.05 }}>
                  <motion.p
                    className="text-5xl font-bold text-primary mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ${event.price}
                  </motion.p>
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
                <p className="text-muted-foreground text-lg">per ticket</p>
              </motion.div>

              <motion.button
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 mb-6 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Get Tickets</span>
              </motion.button>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {[
                  { label: "Organizer", value: event.organizer },
                  { label: "Category", value: event.category },
                  { label: "Available", value: "In Stock", color: "text-green-600" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-muted-foreground">{item.label}:</span>
                    <span className={`font-medium ${item.color || "text-foreground"}`}>{item.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.aside>
        </div>
      </motion.article>
    </motion.div>
  )
}
