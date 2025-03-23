"use client";

import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import NewsCard from "../../components/NewsCard";
import NewsFilters from "../../components/news/NewsFilters";
import NewsletterSubscription from "../../components/NewsletterSubscription";
import type { NewsCard as NewsCardType } from "../../types";

const NewsPage = () => {
  // Sample news data
  const allNews: NewsCardType[] = [
    {
      id: "1",
      category: "GAZA-ISRAEL WAR",
      title: "MSF mourns the killing of our tenth colleague in Gaza",
      date: "21 MAR 2025",
      image: "/placeholder.svg?height=600&width=800",
      slug: "msf-mourns-colleague-gaza",
    },
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
    {
      id: "6",
      category: "MEDICAL RESEARCH",
      title:
        "New study shows promising results for simplified TB treatment in children",
      date: "10 MAR 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "tb-treatment-children",
      type: "press-release",
    },
    {
      id: "7",
      category: "EMERGENCY RESPONSE",
      title:
        "MSF scales up emergency response following devastating floods in Southeast Asia",
      date: "05 MAR 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "floods-southeast-asia",
      type: "press-release",
    },
    {
      id: "8",
      category: "VACCINATION",
      title:
        "Vaccination campaign reaches over 500,000 children in conflict-affected regions",
      date: "28 FEB 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "vaccination-campaign",
      type: "statement",
    },
  ];

  const [filteredNews, setFilteredNews] = useState<NewsCardType[]>(allNews);
  const [filters, setFilters] = useState({ category: "all", searchTerm: "" });

  // Extract unique categories
  const categories = Array.from(new Set(allNews.map((item) => item.category)));

  useEffect(() => {
    let result = [...allNews];

    // Apply category filter
    if (filters.category !== "all") {
      result = result.filter((item) => item.category === filters.category);
    }

    // Apply search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchLower) ||
          item.category.toLowerCase().includes(searchLower) ||
          (item.excerpt && item.excerpt.toLowerCase().includes(searchLower))
      );
    }

    setFilteredNews(result);
  }, [filters]);

  const handleFilterChange = (newFilters: {
    category: string;
    searchTerm: string;
  }) => {
    setFilters(newFilters);
  };

  return (
    <Layout title="News | MSF">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Latest News</h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <NewsFilters
                categories={categories}
                onFilterChange={handleFilterChange}
              />
              <div className="mt-8">
                <NewsletterSubscription />
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4">
              {filteredNews.length === 0 ? (
                <div className="bg-white p-8 text-center rounded-lg shadow-sm">
                  <p className="text-gray-500">
                    No news articles match your search criteria.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
