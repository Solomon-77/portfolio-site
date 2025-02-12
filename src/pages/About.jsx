const About = () => {

   const skills = [
      { src: "/js.png", alt: "JavaScript", name: "JavaScript" },
      { src: "/ts.png", alt: "TypeScript", name: "TypeScript" },
      { src: "/vite.png", alt: "Vite", name: "Vite" },
      { src: "/react.png", alt: "React", name: "React" },
      { src: "/express.png", alt: "Express", name: "Express.js" },
      { src: "/node.png", alt: "Node.js", name: "Node.js" },
      { src: "/bun.png", alt: "Bun", name: "Bun" },
      { src: "/hono.png", alt: "Hono", name: "Hono" },
      { src: "/tailwind.png", alt: "Tailwind CSS", name: "Tailwind CSS" },
      { src: "/git.png", alt: "Git", name: "Git" },
      { src: "/mongodb.png", alt: "MongoDB", name: "MongoDB" },
      { src: "/postgresql.png", alt: "PostgreSQL", name: "PostgreSQL" },
   ]

   return (
      <div className="max-w-[680px] mx-auto space-y-9">
         <div className="space-y-7 ">
            <h1 className="text-2xl font-bold text-center">About Me</h1>
            <p className="font-extralight leading-relaxed">I'm a Computer Science student at the Technological Institute of the Philippines (TIP), aspiring to become a Full-Stack Developer. I've been programming for around four years, and since then, I've been obsessed with creating clean and intuitive UI designs that are simple yet visually appealing. I'm also passionate about optimizing performance and enjoy adapting to newer technologies that offer improvements in various aspects of development.</p>
            <p className="font-extralight leading-relaxed">I primarily use JavaScript, with TypeScript as my secondary choice for type-safe development. My go-to framework is Vite with React.js. I'm proficient in Express.js for building APIs, and I currently use Hono for creating high-performance APIs for my personal projects.</p>
         </div>

         <div className="space-y-7 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center">My Resume</h1>
            <a
               href="https://cyrill-eustaquio.tiiny.site/"
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
                        alt={skill.alt}
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