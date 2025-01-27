import { FaGithub } from "react-icons/fa"

const Projects = () => {

   const projects = [
      {
         title: "Point of Sale and Inventory Management System",
         description: "Developed a Point of Sale and Inventory Management System featuring sales tracking, inventory control, and analytics to enhance business efficiency.",
         technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
         link: "https://github.com/Solomon-77/pos-inventory"
      },
      {
         title: "Lightweight Face Recognition System",
         description: "Developed a lightweight, real-time face recognition system with 98% accuracy, optimized for low-spec devices",
         technologies: ["Pytorch", "ONNX", "SCRFD", "MediaPipe Face Mesh", "EdgeFace"],
         link: "https://github.com/Solomon-77/opti-face"
      },
      {
         title: "Fashion Styler",
         description: "Built a Flutter app that recommends personalized fashion styles using user preferences, with real-time data syncing via Firebase Firestore.",
         technologies: ["Flutter", "Firebase"],
         link: "https://github.com/Solomon-77/project-styler"
      },
      {
         title: "Pick-up Coffee Ordering System | Frontend",
         description: "A responsive frontend interface designed for seamless coffee ordering",
         technologies: ["React", "Typescript", "Tailwind CSS"],
         link: "https://github.com/Solomon-77/pickup-seven"
      },
   ]

   return (
      <div className="max-w-[680px] mx-auto space-y-9">
         <h1 className="text-2xl font-bold text-center">My Projects</h1>
         <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
               <div key={i} className="rounded-md border border-[#373b45] hover:border-[#4c515f] bg-[#21252c] hover:bg-[#262a32] duration-300 ease-out">
                  <div className="p-4 space-y-4">
                     <div className="relative">
                        <h1 className="font-bold mr-6">{project.title}</h1>
                        <a
                           href={project.link}
                           className="absolute right-0 top-0 text-lg"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaGithub />
                        </a>
                     </div>
                     <p className="text-xs leading-relaxed font-extralight">{project.description}</p>
                     <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                           <li key={i} className="text-xs bg-[#1a1d22] px-2 py-1 rounded-md">{tech}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            ))}
         </div>
      </div >
   )
}

export default Projects