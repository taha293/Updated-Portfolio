import React from 'react'
import { Spotlight } from './ui/Spotlight'
import {cn} from "@/libs/utils" 
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

function Hero() {
  return (
    <div className='pb-16 pt-32 text-white'>
      {/* spotlight from aceternity ui  */}
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>
      {/* Dot and Grid Background from aceternity ui */}
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black-100 dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:60px_60px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_0.1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_0.1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_0.1px,transparent_1px),linear-gradient(to_bottom,#262626_0.1px,transparent_1px)]",
          "[opacity:0.1]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
    </div>
    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center'>
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Welcome to Taha's Portfolio!</h2>
        <TextGenerateEffect
        className='text-center text-[40px] md:text-5xl lg:text-6xl'
        words='Weaving your Concepts into a Seamless Web Presence'
        duration={0.8}
        />
        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&apos;m Taha, a Website developer based in Pakistan.</p>
        {/* Button from aceternity */}
        {/* Also using Reacticons pkg for icons */}
        <a href="#projects">
          <MagicButton
          title="Show my work"
          icon={<FaLocationArrow />}
          position='right'
          />
        </a>
      </div>
    </div>
    </div>
  )
}

export default Hero
