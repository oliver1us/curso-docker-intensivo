export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ModuleType {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

export interface FaqType {
  id: number;
  question: string;
  answer: string;
}

export interface PricingPlanType {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}