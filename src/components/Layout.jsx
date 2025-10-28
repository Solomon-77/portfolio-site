import { useEffect } from "preact/hooks"
import { Router, useLocation } from "preact-iso"

import Nav from "./Nav"
import Footer from "./Footer"
import Home from "../routes/Home"
import About from "../routes/About"
import Projects from "../routes/Projects"
import Contact from "../routes/Contact"
import PageNotFound from "../routes/PageNotFound"

const Layout = () => {
   const location = useLocation()

   useEffect(() => {
      let newTitle = 'Cyrill'

      if (location.pathname === '/about') {
         newTitle = 'Cyrill: About Me'
      } else if (location.pathname === '/projects') {
         newTitle = 'Cyrill: Projects'
      } else if (location.pathname === '/contact') {
         newTitle = 'Cyrill: Contact'
      }

      document.title = newTitle;
   }, [location.pathname])

   return (
      <div className="h-screen flex flex-col text-cyan-50 overflow-auto">
         <nav className="w-full">
            <Nav />
         </nav>
         <main className="w-full flex-1 p-4">
            <Router>
               <Home path='/' />
               <About path='/about' />
               <Projects path='/projects' />
               <Contact path='/contact' />
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