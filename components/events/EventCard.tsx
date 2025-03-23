import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";

export interface EventType {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  slug: string;
  isPast: boolean;
}

interface EventCardProps {
  event: EventType;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image
          fill
          alt={event.title}
          src="/images/img-3.jpg"
          className="object-cover"
        />
        {event.isPast && (
          <div className="absolute top-0 right-0 bg-gray-800 text-white px-3 py-1 text-sm">
            Past Event
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3">
          <Link
            href={`/events/${event.slug}`}
            className="hover:text-red-600 transition-colors"
          >
            {event.title}
          </Link>
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        <Link
          href={`/events/${event.slug}`}
          className="inline-block text-red-600 hover:text-red-700 font-medium"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
