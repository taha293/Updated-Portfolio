import React from 'react'
import { Meteors } from './ui/meteors.'
import { LinkPreview } from './ui/LinkPreview'
function TechStacks() {
  return (
      //Meteors from aceternity
    <div className="pb-20 flex flex-col md:flex-row gap-5 justify-center items-center w-full max-w-[90vw] md:max-w-[85vw] m-auto ">
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-purple-300 bg-gradient-to-r from-blue-500 to-purple-400 blur-2xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-black-100 px-4 py-8 shadow-xl">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="relative z-50 mb-4 text-xl lg:text-2xl font-bold text-white">
            My Tech Stack
          </h1>
 
          <p className="relative z-50 mb-4 text-base lg:text-lg font-normal text-slate-500">
            Html, Css, TypeScript, JavaScript, Tailwind Css React, NextJs, Cms and other libraries.
          </p>
 
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={15} />
        </div>
      </div>
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-purple-300 bg-gradient-to-r from-blue-500 to-purple-400 blur-2xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-black-100 px-4 py-8 shadow-xl">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="relative z-50 mb-4 text-xl lg:text-2xl font-bold text-white">
            Currently Learning
          </h1>
 
          <p className="relative z-50 mb-4 text-base lg:text-lg font-normal text-slate-500">
            Python, Cloud Engineering, Modern Ai and Agentic Ai from <LinkPreview
          url="https://www.governorsindh.com/"
          className="font-bold text-[#A78BFA]"
        >
        Governor sindh Initiative.
        {/* Link Preview from aceternity */}
        </LinkPreview>
          </p>
 
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={15} />
        </div>
      </div>
      
    </div>
  )
}

export default TechStacks