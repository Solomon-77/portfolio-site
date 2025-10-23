import js from '../assets/js.png';
import ts from '../assets/ts.png';
import bun from '../assets/bun.png';
import git from '../assets/git.png';
import vite from '../assets/vite.png';
import node from '../assets/node.png';
import hono from '../assets/hono.png';
import ably from '../assets/ably.png';
import react from '../assets/react.png';
import express from '../assets/express.png';
import zustand from '../assets/zustand.svg';
import mongodb from '../assets/mongodb.png';
import tailwind from '../assets/tailwind.png';
import postgresql from '../assets/postgresql.png';

const resumeLink = `https://cyrill-eustaquio.tiiny.site/?t=${Date.now()}`;

const About = () => {
   const skills = [
      { name: "JavaScript", src: js },
      { name: "TypeScript", src: ts },
      { name: "Vite", src: vite },
      { name: "React", src: react },
      { name: "Zustand", src: zustand },
      { name: "Express.js", src: express },
      { name: "Node.js", src: node },
      { name: "Bun", src: bun },
      { name: "Hono", src: hono },
      { name: "Ably Realtime", src: ably },
      { name: "Tailwind CSS", src: tailwind },
      { name: "Git", src: git },
      { name: "MongoDB", src: mongodb },
      { name: "PostgreSQL", src: postgresql },
   ];

   return (
      <div className="max-w-[680px] mx-auto space-y-9">
         <div className="space-y-7 ">
            <h1 className="text-2xl font-bold text-center">About Me</h1>
            <p className="font-extralight leading-relaxed">{"I’m a Computer Science graduate from the Technological Institute of the Philippines (TIP), aspiring to become a Full-Stack Developer. I've been programming for around four years, and since then, I've been obsessed with creating clean and intuitive UI designs that are simple yet visually appealing. I'm also passionate about optimizing performance and enjoy adapting to newer technologies that offer improvements in various aspects of development."}</p>
            <p className="font-extralight leading-relaxed">{"I primarily use JavaScript, with TypeScript as my secondary choice for type-safe development. My go-to framework is Vite with React.js. I'm proficient in Express.js for building APIs, and I currently use Hono for creating high-performance APIs for my personal projects."}</p>
         </div>

         <div className="space-y-7 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center">My Resume</h1>
            <a
               href={resumeLink}
               target="_blank"
               rel="noopener noreferrer"
               className="font-light bg-[#16191e] py-2 px-4 cursor-pointer rounded-md text-sm border border-cyan-50 italic">
               Click here to view my Resume
            </a>
         </div>

         <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center">What I Use</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
               {skills.map((skill, i) => (
                  <div key={i} className="border-[#373b45] border p-5 text-sm flex flex-col items-center rounded-md gap-3 bg-[#21252c] hover:bg-[#262a32] hover:border-[#4c515f] duration-300 ease-out">
                     <img
                        src={skill.src}
                        alt={skill.name}
                        loading="lazy"
                        className="w-11 h-11 rounded-md"
                     />
                     <span className="text-center">{skill.name}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default About