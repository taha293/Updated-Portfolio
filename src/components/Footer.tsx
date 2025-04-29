import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaInstagram, FaLinkedin, FaLocationArrow, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image';
import { SiGmail } from 'react-icons/si';

const socialMedia = [
    {
      id: 1,
      img: <FaInstagram />,
      link:"https://www.instagram.com/code.craft_web/"
    },
    {
      id: 2,
      img: <FaLinkedin />,
      link:"https://www.linkedin.com/in/muhammad-taha-ansarii/"
    },
    {
      id: 3,
      img: <SiGmail />,
      link:"https://mail.google.com/mail/?view=cm&fs=1&to=muhammadtahaansari7890@gmail.com&su=For%20Website%20Development"
    },
    {
      id: 4,
      img: <FaWhatsapp />,
      link:"https://api.whatsapp.com/send/?phone=%2B923703487836&text=Hi+Code+Craft%21+Can+i+get+more+knowledge+on+this%3F&type=phone_number&app_absent=0"
    },
  ];

const Footer = () => {
  return (
    <footer className="w-full pt-14 pb-10 text-white" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-6 min-h-96">
        <Image
        width={400}
        height={185}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-[#A78BFA]">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadtahaansari7890@gmail.com&su=For%20Website%20Development" target='_blank'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 gap-y-5 md:gap-0 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Muhammad Taha
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.link}
            target='_blank'
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.img}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer