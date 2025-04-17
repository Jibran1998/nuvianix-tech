"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Nuvianix transformed our legacy infrastructure into a modern, scalable cloud platform. Their expertise in AWS and DevOps automation has been invaluable to our business.",
    author: "Sarah Johnson",
    title: "CTO, FinTech Solutions",
    avatar: "/images/avatar1.jpg",
  },
  {
    id: 2,
    quote:
      "The team at Nuvianix delivered our e-commerce platform ahead of schedule and with exceptional quality. Their attention to detail and commitment to our success exceeded our expectations.",
    author: "Michael Chen",
    title: "CEO, RetailNow",
    avatar: "/images/avatar2.jpg",
  },
  {
    id: 3,
    quote:
      "Working with Nuvianix on our healthcare app was a game-changer. Their technical expertise and understanding of HIPAA compliance ensured we launched a secure, user-friendly product.",
    author: "Dr. Emily Rodriguez",
    title: "Founder, MedConnect",
    avatar: "/images/avatar3.jpg",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (autoplay) {
      timeoutRef.current = setTimeout(
        () => setCurrent((prev) => (prev + 1) % testimonials.length),
        5000
      );
    }
    return () => resetTimeout();
  }, [current, autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrent(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden relative rounded-xl">
        <AnimatePresence mode="wait" initial={false} custom={current}>
          <motion.div
            key={current}
            custom={current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-gray-700"
          >
            <div className="flex flex-col items-center text-center">
              <svg
                className="w-12 h-12 text-purple-500 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.6.755-.987 1.322-1.163.565-.175 1.332-.175 2.298.01.965.183 1.788.5 2.47.94.682.45 1.248 1.06 1.698 1.84.45.766.675 1.71.675 2.83 0 .78-.1 1.498-.307 2.155-.205.66-.488 1.24-.85 1.736-.36.51-.83.93-1.416 1.27-.582.34-1.22.51-1.91.51-.693 0-1.303-.17-1.83-.52-.53-.35-.935-.79-1.22-1.33-.285-.54-.435-1.12-.435-1.75v-.4h1.43c.07.93.23 1.67.52 2.2.23.53.57.87 1.03 1.03.51.17 1.07.13 1.7-.12.65-.24 1.15-.65 1.51-1.22.36-.57.54-1.26.54-2.09 0-.21-.03-.4-.09-.56h-1.99zm-9.988 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.56-.13-1.073-.14-1.54-.03-.16-.95.09-1.626.4-2.223.317-.6.75-.987 1.324-1.163.565-.175 1.33-.175 2.295.01.965.183 1.79.5 2.47.94.683.45 1.25 1.06 1.7 1.84.45.766.673 1.71.673 2.83 0 .78-.1 1.498-.307 2.155-.205.66-.49 1.24-.85 1.736-.36.51-.83.93-1.416 1.27-.582.34-1.22.51-1.91.51-.692 0-1.302-.17-1.83-.52-.53-.35-.935-.79-1.22-1.33-.285-.54-.436-1.12-.436-1.75v-.4h1.43c.07.93.232 1.67.52 2.2.234.53.572.87 1.03 1.03.51.17 1.072.13 1.7-.12.65-.24 1.15-.65 1.51-1.22.36-.57.54-1.26.54-2.09 0-.21-.03-.4-.09-.56h-1.99z" />
              </svg>
              <p className="text-xl text-gray-300 mb-8">
                {testimonials[current].quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[current].author.charAt(0)}
                </div>
                <div className="ml-4 text-left">
                  <h4 className="font-bold text-white">
                    {testimonials[current].author}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[current].title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current
                ? "bg-purple-500"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white p-2 rounded-full"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white p-2 rounded-full"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialSlider;
