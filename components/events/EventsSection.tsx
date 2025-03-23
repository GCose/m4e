import { useState } from "react";
import Link from "next/link";
import EventCard, { type EventType } from "./EventCard";

interface EventsSectionProps {
  upcomingEvents: EventType[];
  pastEvents: EventType[];
}

const EventsSection = ({ upcomingEvents, pastEvents }: EventsSectionProps) => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Events</h2>
          <Link
            href="/events"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
          >
            View All Events
          </Link>
        </div>

        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "upcoming"
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "past"
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Past Events
              </button>
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeTab === "upcoming"
            ? upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            : pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
        </div>

        {((activeTab === "upcoming" && upcomingEvents.length === 0) ||
          (activeTab === "past" && pastEvents.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-gray-500">No {activeTab} events to display.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
