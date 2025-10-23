import { BrowserRouter, Routes, Route } from 'react-router-dom'

// routes component
import Home from './routes/Home'
import About from './routes/About'
import Layout from './components/Layout'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import PageNotFound from './routes/PageNotFound'
import AnalyticsTracker from './components/AnalyticsTracker'

const App = () => {
   return (
      <div className="font-custom scheme-dark">
         <BrowserRouter>
            <AnalyticsTracker />
            <Routes>
               <Route element={<Layout />}>
                  <Route path='*' element={<PageNotFound />} />
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App