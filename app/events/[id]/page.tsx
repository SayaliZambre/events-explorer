import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { events } from "@/lib/mock-data"
import { EventDetailClient } from "@/components/event-detail-client"
import { ChatWidget } from "@/components/chat-widget"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

interface EventPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = events.find((e) => e.id.toString() === params.id)

  if (!event) {
    return {
      title: "Event Not Found",
      description: "The requested event could not be found.",
    }
  }

  return {
    title: `${event.title} | Events Explorer`,
    description: event.description,
    keywords: [event.category, event.location, "event", "tickets"],
    openGraph: {
      title: event.title,
      description: event.description,
      type: "website",
    },
  }
}

export default function EventDetailPage({ params }: EventPageProps) {
  const event = events.find((e) => e.id.toString() === params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Events
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <EventDetailClient event={event} />
      </main>

      <ChatWidget />
    </div>
  )
}
