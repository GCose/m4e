import Layout from "../../components/Layout";
import EventsSection from "../../components/events/EventsSection";
import NewsletterSubscription from "../../components/NewsletterSubscription";
import type { EventType } from "../../components/events/EventCard";

const EventsPage = () => {
  // Sample events data
  const upcomingEvents: EventType[] = [
    {
      id: "1",
      title: "Virtual Panel: Global Health Challenges",
      date: "June 15, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Online (Zoom)",
      description:
        "Join our panel of experts as they discuss the most pressing global health challenges and MSF's response.",
      image: "/placeholder.svg?height=400&width=600",
      slug: "global-health-challenges",
      isPast: false,
    },
    {
      id: "2",
      title: "Fundraising Gala: A Night for Medical Aid",
      date: "July 22, 2023",
      time: "7:00 PM - 10:00 PM",
      location: "Grand Hotel, New York",
      description:
        "An evening of dinner, entertainment, and inspiring stories to raise funds for our medical missions worldwide.",
      image: "/placeholder.svg?height=400&width=600",
      slug: "fundraising-gala",
      isPast: false,
    },
    {
      id: "3",
      title: "Volunteer Information Session",
      date: "August 5, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "MSF Office, London",
      description:
        "Learn about volunteer opportunities with MSF and how you can contribute your skills to our humanitarian work.",
      image: "/placeholder.svg?height=400&width=600",
      slug: "volunteer-information",
      isPast: false,
    },
  ];

  const pastEvents: EventType[] = [
    {
      id: "4",
      title: "World TB Day Webinar",
      date: "March 24, 2023",
      time: "1:00 PM - 3:00 PM",
      location: "Online (Zoom)",
      description:
        "A webinar highlighting MSF's work in tuberculosis treatment and the challenges faced in high-burden countries.",
      image: "/placeholder.svg?height=400&width=600",
      slug: "world-tb-day",
      isPast: true,
    },
    {
      id: "5",
      title: "Emergency Response Workshop",
      date: "February 15, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "MSF Training Center, Geneva",
      description:
        "A hands-on workshop for healthcare professionals on emergency medical response in crisis situations.",
      image: "/placeholder.svg?height=400&width=600",
      slug: "emergency-response-workshop",
      isPast: true,
    },
    {
      id: "6",
      title: "Annual General Meeting",
      date: "January 20, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Center, Paris",
      description:
        "MSF's annual meeting to review the past year's activities, financial reports, and strategic plans.",
      image: "/placeholder.svg?height=400&width=600",
      slug: "annual-general-meeting",
      isPast: true,
    },
  ];

  return (
    <Layout title="Events | MSF">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Events</h1>

          <EventsSection
            upcomingEvents={upcomingEvents}
            pastEvents={pastEvents}
          />

          <div className="mt-16">
            <NewsletterSubscription />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;
