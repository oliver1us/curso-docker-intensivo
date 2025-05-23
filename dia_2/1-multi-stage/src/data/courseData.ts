import { TestimonialType, ModuleType, FaqType, PricingPlanType } from '../types';
import { Container, Users, Terminal, Database, Server, Shield, Award } from 'lucide-react';

export const modules: ModuleType[] = [
  {
    id: 1,
    title: "Docker Fundamentals",
    description: "Learn the core concepts of containerization and how to use Docker for development.",
    duration: "4 hours",
    icon: "Container"
  },
  {
    id: 2,
    title: "Docker Compose",
    description: "Master multi-container applications with Docker Compose for complex environments.",
    duration: "3 hours",
    icon: "Terminal"
  },
  {
    id: 3,
    title: "Docker Networking",
    description: "Understand container networking, service discovery, and communication patterns.",
    duration: "3 hours",
    icon: "Server"
  },
  {
    id: 4,
    title: "Docker Storage & Volumes",
    description: "Learn persistent storage strategies and data management best practices.",
    duration: "2 hours",
    icon: "Database"
  },
  {
    id: 5,
    title: "Docker Security",
    description: "Implement security best practices for container deployments and image management.",
    duration: "3 hours",
    icon: "Shield"
  },
  {
    id: 6,
    title: "Docker in Production",
    description: "Deploy containerized applications to production with confidence and reliability.",
    duration: "5 hours",
    icon: "Award"
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "DevOps Engineer",
    company: "TechSolutions Inc.",
    content: "This Docker course transformed how our team approaches deployment. The hands-on projects were invaluable for real-world application.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full Stack Developer",
    company: "InnovateSoft",
    content: "After struggling with container concepts for months, this course finally made everything click. The instructor explains complex topics in simple terms.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Cloud Architect",
    company: "CloudScale Systems",
    content: "As someone already familiar with Docker, I was skeptical, but the advanced sections provided new insights that improved our infrastructure immediately.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120"
  }
];

export const faqs: FaqType[] = [
  {
    id: 1,
    question: "Do I need prior experience with Docker?",
    answer: "No, this course starts from the fundamentals and progressively builds to advanced topics. Complete beginners are welcome!"
  },
  {
    id: 2,
    question: "What development environment do I need?",
    answer: "You'll need a computer running macOS, Windows, or Linux with Docker Desktop or Docker Engine installed. Minimum requirements are 8GB RAM and 10GB free disk space."
  },
  {
    id: 3,
    question: "Will I get a certificate upon completion?",
    answer: "Yes! Upon completing all modules and passing the final project assessment, you'll receive an industry-recognized Docker certification."
  },
  {
    id: 4,
    question: "How long do I have access to the course materials?",
    answer: "You'll have lifetime access to all course materials, including future updates and additional content we add to the curriculum."
  },
  {
    id: 5,
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course for any reason."
  }
];

export const pricingPlans: PricingPlanType[] = [
  {
    id: 1,
    name: "Basic",
    price: "$129",
    description: "Perfect for beginners looking to learn Docker fundamentals",
    features: [
      "Full course access",
      "Practice exercises",
      "Community forum access",
      "6 months of updates"
    ]
  },
  {
    id: 2,
    name: "Professional",
    price: "$249",
    description: "Comprehensive Docker training with additional resources",
    features: [
      "Everything in Basic",
      "Live Q&A sessions",
      "Project reviews",
      "Private Discord channel",
      "Lifetime updates"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$499",
    description: "Complete package for teams and organizations",
    features: [
      "Everything in Professional",
      "Team license (up to 5 users)",
      "Priority support",
      "Custom implementation guidance",
      "Advanced certification"
    ]
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Container':
      return Container;
    case 'Terminal':
      return Terminal;
    case 'Server':
      return Server;
    case 'Database':
      return Database;
    case 'Shield':
      return Shield;
    case 'Award':
      return Award;
    default:
      return Container;
  }
};