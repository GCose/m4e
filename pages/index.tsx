import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  // For SSR compatibility
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sample data for the news cards
  const featuredNews: NewsCardType = {
    id: "1",
    category: "ANNUAL CONFERENCE",
    title: "International Men as Allies Summit 2025: Registration Now Open",
    date: "June 15-17, 2025 • New York City",
    image: "/images/img-2.jpg",
    slug: "men-allies-summit-2025",
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

  // Stats for Men for Equality
  const stats: StatItem[] = [
    { value: "25K+", label: "MEN ENGAGED" },
    { value: "150+", label: "WORKSHOPS HELD" },
    { value: "48", label: "POLICY CHANGES" },
    { value: "32", label: "COUNTRIES" },
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

  // Don't render animations until client-side
  if (!isMounted) {
    return (
      <Layout showShareSidebar={true}>
        <div id="about-us">
          <ArticleHeader
            date="20 Mar 2025"
            type="Initiative"
            category="Gender Equality"
            imageUrl="/images/img-1.jpg"
            title="Men championing a world of equal rights and opportunities for all genders"
            description="Men for Equality is committed to engaging men and boys as allies in the fight for gender equality. Join our movement to challenge harmful stereotypes and build a more equitable society for everyone."
          />
        </div>
        <div id="what-we-do">
          <OrganizationInfo
            stats={stats}
            title="Empowering men to advocate for gender equality"
            description="We engage men and boys as active allies in creating a more equal society. Through education, advocacy, and community involvement, we work to challenge harmful gender stereotypes and promote healthy masculinity. Our approach is guided by the"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout showShareSidebar={true}>
      <div id="about-us">
        <ArticleHeader
          date="20 Mar 2025"
          type="Initiative"
          category="Gender Equality"
          imageUrl="/images/img-1.jpg"
          title="Men championing a world of equal rights and opportunities for all genders"
          description="Men for Equality is committed to engaging men and boys as allies in the fight for gender equality. Join our movement to challenge harmful stereotypes and build a more equitable society for everyone."
        />
      </div>

      <motion.div
        id="what-we-do"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <OrganizationInfo
          stats={stats}
          title="Empowering men to advocate for gender equality"
          description="We engage men and boys as active allies in creating a more equal society. Through education, advocacy, and community involvement, we work to challenge harmful gender stereotypes and promote healthy masculinity. Our approach is guided by the"
        />
      </motion.div>

      <motion.div
        id="latest"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FeaturedNews title="Featured" news={featuredNews} />
        <NewsGrid title="Latest" news={latestNews} />
      </motion.div>

      {/* Newsletter Subscription */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <NewsletterSubscription />
          </div>
        </div>
      </motion.div>

      <motion.div
        id="events"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <EventsSection
          upcomingEvents={upcomingEvents}
          pastEvents={pastEvents}
        />
      </motion.div>

      <motion.div
        id="resources"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <InFocusSection items={focusItems} />
      </motion.div>

      <motion.div
        id="where-we-work"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <WhereWeWork />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <WorkWithMSF />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <DonationStats />
      </motion.div>
    </Layout>
  );
};

export default HomePage;
