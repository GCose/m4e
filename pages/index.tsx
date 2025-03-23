import Layout from "@/components/Layout";
import ArticleHeader from "@/components/ArticleHeader";
import OrganizationInfo from "@/components/OrganizationInfo";
import FeaturedNews from "@/components/FeaturedNews";
import NewsGrid from "@/components/NewsGrid";
import InFocusSection from "@/components/InFocusSection";
import WorkWithMSF from "@/components/WorkWithMSF";
import DonationStats from "@/components/DonationStats";
import WhereWeWork from "@/components/WhereWeWork";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import EventsSection from "@/components/events/EventsSection";
import type { NewsCard as NewsCardType, StatItem } from "@/types";
import type { EventType } from "@/components/events/EventCard";

const HomePage = () => {
  // Sample data for the news cards
  const featuredNews: NewsCardType = {
    id: "1",
    category: "GAZA-ISRAEL WAR",
    title: "MSF mourns the killing of our tenth colleague in Gaza",
    date: "21 MAR 2025",
    image: "/placeholder.svg?height=600&width=800",
    slug: "msf-mourns-colleague-gaza",
  };

  const latestNews: NewsCardType[] = [
    {
      id: "2",
      category: "TUBERCULOSIS",
      title:
        "Countries and donors must sustain investment in fight against tuberculosis in children",
      date: "20 MAR 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "tuberculosis-investment",
      type: "press-release",
    },
    {
      id: "3",
      category: "MALNUTRITION",
      title:
        "MSF warns of a crisis as the numbers of malnourished children rise in Yemen",
      date: "19 MAR 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "malnutrition-yemen",
      type: "statement",
    },
    {
      id: "4",
      category: "GAZA-ISRAEL WAR",
      title: '"The ceasefire in Gaza must be immediately restored"',
      date: "18 MAR 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "ceasefire-gaza",
      type: "statement",
    },
    {
      id: "5",
      category: "CONFLICT IN SUDAN",
      title: 'MSF briefs UN Security Council on "war on people" in Sudan',
      date: "13 MAR 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "msf-briefs-un-sudan",
      type: "speech",
    },
  ];

  // Sample data for the stats section
  const stats: StatItem[] = [
    { value: "16.5M", label: "OUTPATIENT CONSULTATIONS" },
    { value: "3.7M", label: "MALARIA CASES TREATED" },
    { value: "1.4M", label: "PATIENTS ADMITTED" },
    { value: "74", label: "COUNTRIES" },
  ];

  // Sample data for the in focus section
  const focusItems = [
    {
      id: "1",
      title: "Gaza-Israel war",
      description:
        "Learn how MSF teams are responding to the Gaza-Israel war in Gaza, Palestine.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/in-focus/gaza-israel-war",
    },
    {
      id: "2",
      title: "Attacks on medical care",
      description:
        "Medical against medical facilities and health workers, whether deliberate or indiscriminate, are part of generalized violence affecting civilians in many of today's conflicts.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/in-focus/attacks-on-medical-care",
    },
    {
      id: "3",
      title: "Conflict in Sudan",
      description:
        "Find out the latest information on MSF's response to the conflict in Sudan.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/in-focus/conflict-in-sudan",
    },
  ];

  // Sample data for events
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
  ];

  return (
    <Layout>
      {/* Tuberculosis Article Header */}
      <ArticleHeader
        date="20 Mar 2025"
        type="Press Release"
        category="Tuberculosis"
        imageUrl="/images/img-1.jpg"
        title="Countries and donors must sustain investment in fight against tuberculosis in children"
        description="With WHO estimating that only half of the 1.25 million children and young adolescents who fall ill with TB each year being diagnosed, MSF is calling for sustaining investment in paediatric TB."
      />

      {/* Organization Info Section */}
      <OrganizationInfo
        stats={stats}
        title="An international, independent medical humanitarian organisation"
        description="We provide medical assistance to people affected by conflict, epidemics, disasters, or exclusion from healthcare. Our teams are made up of tens of thousands of health professionals, logistic and administrative staff - most of them hired locally. Our actions are guided by medical ethics and the"
      />
      <FeaturedNews title="Featured" news={featuredNews} />
      <NewsGrid title="Latest" news={latestNews} />

      {/* Newsletter Subscription */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <NewsletterSubscription />
        </div>
      </div>
      <EventsSection upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
      <InFocusSection items={focusItems} />
      <WhereWeWork />
      <WorkWithMSF />
      <DonationStats />
    </Layout>
  );
};

export default HomePage;
