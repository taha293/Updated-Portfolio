import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


//infinite moving card from aceternity
const testimonials = [
  {
    quote:
      "Working with Taha was a game-changer for our project. His understanding of Next.js and React helped us launch faster than we ever expected. The code quality was top-notch!",
    name: "Sarah Williams",
    title: "Project Manager at TechNova",
  },
  {
    quote:
      "Taha brought fresh ideas to our web platform. His expertise in frontend architecture and performance optimization with Next.js was crucial for our scaling success.",
    name: "David Kim",
    title: "CTO at BrightPath Solutions",
  },
  {
    quote:
      "Professional, reliable, and highly skilled — Taha is one of the best Front-End developers I've had the pleasure of working with. His eye for UI/UX made a huge difference.",
    name: "Emily Chen",
    title: "Founder of Creatix Studio",
  },
  {
    quote:
      "Our SEO and performance scores skyrocketed after he refactored our website with Next.js. His technical leadership and attention to detail are unmatched.",
    name: "Michael Thompson",
    title: "Marketing Director at Visionary Labs",
  },
  {
    quote:
      "From clean code to seamless deployments, Taha exceeded expectations at every step. His commitment to best practices in React and Next.js impressed our entire team.",
    name: "Olivia Martinez",
    title: "CEO at Innovatech",
  },
];

function Testimonials() {
  return (
    <div className="pb-20 text-white">
      <h1 className="heading">
        Kinds words from&nbsp;
        <span className="text-[#A78BFA]">satisfied clients</span>
      </h1>
      <div className="py-14 lg:py-18 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
      </div>
  )
}

export default Testimonials