// lib folder should be in src directory
// components 3rd party ui should be in src/components/ui
// used packages from aceternity and react-icons

import Approach from "@/components/Approach"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects"
import TechStacks from "@/components/TechStacks"
import Testimonials from "@/components/Testimonials"
import { FloatingNav } from "@/components/ui/FloatingNav"
import WorkExperience from "@/components/WorkExperience"

function Home() {
  return (
    // Better option to setup page
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      {/* setting max width here instead of body in global css  */}
      <div className="max-w-7xl w-full">
        {/* Navbar from aceternity */}
        <FloatingNav navItems={[
          {name:"About",link:"#approach"},
          {name:"Projects",link:"#projects"},
          {name:"Experience",link:"#experience"},
          {name:"Contact",link:"#contact"},
          ]}/>
      <Hero/>
      <TechStacks/>
      <RecentProjects/>
      <Testimonials/>
      <WorkExperience/>
      <Approach/>
      <Footer/>
      </div>
    </main>
  )
}

export default Home
