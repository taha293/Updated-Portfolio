"use client";
import React from 'react'
import {
    TextRevealCard,
  } from "./ui/text-reveal-card";

const Approach = () => {
  return (
    <div id='approach' className="pb-20 text-white">
    <h1 className="heading">
      My&nbsp;
      <span className="text-[#A78BFA]">Approach</span>
    </h1>
    <div className="flex flex-col gap-8 items-center justify-center py-16 rounded-2xl w-full">
      <TextRevealCard
        text="Slide to reveal Phase 1"
        revealText="Panning and Strategy"
        
      >
      </TextRevealCard>
      <TextRevealCard
        text="Slide to reveal Phase 2"
        revealText="Development and Progress update"
      >
      </TextRevealCard>
      <TextRevealCard
        text="Slide to reveal Phase 3"
        revealText="Finalize and Launch"
      >
      </TextRevealCard>
    </div>
    </div>
  )
}

export default Approach
