import { Router } from "preact-iso"

import Nav from "./Nav"
import Home from "../routes/Home"
import About from "../routes/About"
import Footer from "./Footer"
import Contact from "../routes/Contact"
import Projects from "../routes/Projects"
import PageNotFound from "../routes/PageNotFound"

const Layout = () => {
   const base = import.meta.env.BASE_URL // built-in vite variable -> relies on base in vite config

   return (
      <div className="h-screen flex flex-col text-cyan-50 overflow-auto">
         <nav className="w-full">
            <Nav />
         </nav>
         <main className="w-full flex-1 p-4">
            <Router>
               <Home path={base} />
               <About path={`${base}about`} />
               <Projects path={`${base}projects`} />
               <Contact path={`${base}contact`} />
               <PageNotFound default />
            </Router>
         </main>
         <footer className="w-full">
            <Footer />
         </footer>
      </div>
   )
}

export default Layout