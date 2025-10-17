import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initials: string;
  stars: number;
  borderColor: "blue" | "green" | "purple";
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  initials,
  stars,
  borderColor,
}: TestimonialCardProps) => {
  const colorVariants = {
    blue: {
      border: "border-blue-200 dark:border-blue-800",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-300",
    },
    green: {
      border: "border-green-200 dark:border-green-800",
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-600 dark:text-green-300",
    },
    purple: {
      border: "border-purple-200 dark:border-purple-800",
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-300",
    },
  };

  return (
    <Card
      className={`${colorVariants[borderColor].border} hover:shadow-lg transition-shadow duration-300 h-full flex flex-col`}
    >
      <CardContent className="flex flex-col flex-grow pt-6 pb-4">
        {/* Rating Stars */}
        <div className="flex items-center mb-4 gap-1">
          {[...Array(stars)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 text-yellow-400 fill-yellow-400 dark:text-yellow-300 dark:fill-yellow-300"
            />
          ))}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            ({stars}.0)
          </span>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="relative mb-6 flex-grow">
          <p className="text-gray-600 dark:text-gray-300 italic">{quote}</p>
          <span className="absolute text-4xl text-gray-300 dark:text-gray-600 -top-2 -left-1">
          </span>
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 ${colorVariants[borderColor].bg} rounded-full flex items-center justify-center`}
          >
            <span
              className={`${colorVariants[borderColor].text} font-semibold`}
            >
              {initials}
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              {author}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
          </div>
        </div>

        {/* Mexico Badge */}
        <div className="mt-4 flex justify-end">
          <span className="text-xs py-1 px-2 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
            México
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
