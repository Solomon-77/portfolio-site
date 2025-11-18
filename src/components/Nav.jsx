import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Nav = () => {
   const base = import.meta.env.BASE_URL

   return (
      <div className="max-w-[1000px] h-20 mx-auto flex justify-between items-center px-4">
         <div className="text-sm flex space-x-2 md:text-base md:space-x-6 items-center select-none">
            <a href={base} className="bg-[#131519] rounded-md px-2 py-1 cursor-pointer">
               cd ..
            </a>
            <a href={`${base}about`} className="nav-link">/about</a>
            <a href={`${base}projects`} className="nav-link">/projects</a>
            <a href={`${base}contact`} className="nav-link">/contact</a>
         </div>
         <div className="flex space-x-3 md:space-x-6">
            <a
               href="https://github.com/Solomon-77"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Github Profile"
            >
               <FaGithub className="text-xl md:text-2xl cursor-pointer" />
            </a>
            <a
               href="https://www.linkedin.com/in/cyrill-eustaquio-b37564328/"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn Profile"
            >
               <FaLinkedin className="text-xl md:text-2xl cursor-pointer" />
            </a>
         </div>
      </div>
   )
}

export default Nav