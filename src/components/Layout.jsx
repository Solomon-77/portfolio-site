import { Outlet, useLocation } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import { useEffect } from "react"

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
            <Outlet />
         </main>
         <footer className="w-full">
            <Footer />
         </footer>
      </div>
   )
}

export default Layout