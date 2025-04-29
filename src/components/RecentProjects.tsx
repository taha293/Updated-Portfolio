import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/pin";


//3d Pin from aceternity
const projects = [
  {
    id: 1,
    title: "Avion Ecommerce Website",
    des: "An Ecommerce fullstack furniture store with authentication and payments.",
    img: "/p1.svg",
    iconLists: ["/next.svg","/react.svg","tail.svg","sanity.svg","ts.svg"],
    link: "https://avionpvt.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    des: "My old and simple Portfolio website with nextjs.",
    img: "/p2.svg",
    iconLists: ["/next.svg","/react.svg","tail.svg","ts.svg"],
    link: "https://tahasportfolio.vercel.app/",
  },
  {
    id: 3,
    title: "FreeLancing services website",
    des: "A freelancing services providing website with simple UI.",
    img: "/p3.svg",
    iconLists: ["/next.svg","/react.svg","tail.svg","ts.svg"],
    link: "https://fanumbuild.vercel.app/",
  },
  {
    id: 4,
    title: "Resume Builder",
    des: "A simple resume builder that takes user input and build a professional resume.",
    img: "/p4.svg",
    iconLists: ["/html.svg","/css.svg","js.svg"],
    link: "https://giaic-resume-builder.vercel.app/",
  },
  
  {
    id: 5,
    title: "PanaCloud Clone",
    des: "Panacloud clone version.",
    img: "/p5.svg",
    iconLists: ["/html.svg","/css.svg","js.svg"],
    link: "https://panacloud-by-taha.vercel.app/",
  },
  {
    id: 6,
    title: "Secure Data Encryption",
    des: "Secure Data Encryption web where you can store your secret data with passkeys generated with hashing process.",
    img: "/p6.svg",
    iconLists: ["/python.svg","/streamlit.svg"],
    link: "https://securedatabytaha.streamlit.app/",
  },
  
];

const RecentProjects = () => {
  return (
    <div className="pb-20 text-white" id="projects">
      <h1 className="heading">
        Some Recent&nbsp;
        <span className="text-[#A78BFA]">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-4 mt-4 md:gap-10 md:mt-6 lg:gap-x-16 lg:gap-y-8  lg:mt-8">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="LiveSite"
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={item.link} target="blank" className="flex lg:text-xl md:text-xs text-sm text-[#CBACF9]">
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;