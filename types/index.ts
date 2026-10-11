export type Service = {
  id: string;
  category: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  duration: string;
};

export type MakeupItem = {
  id: string;
  name: string;
  categories: string[];
  image: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  products: string[];
  duration: string;
  price: number;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
};

export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  service: string;
  quote: string;
  image: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type PricingCategory = {
  category: string;
  items: { name: string; price: number; duration: string }[];
};

export type GalleryItem = {
  id: string;
  category: string;
  image: string;
  caption: string;
};

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
};
