export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NewsCard {
  id: string;
  category: string;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
  slug: string;
  type?: "press-release" | "statement" | "speech";
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SocialShareItem {
  platform: "facebook" | "twitter" | "email" | "print";
  icon: string;
  label: string;
  href: string;
}

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
