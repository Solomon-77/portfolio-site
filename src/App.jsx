import { LocationProvider } from 'preact-iso'
import Layout from './components/Layout'

const App = () => {
   return (
      <div className="font-custom scheme-dark">
         <LocationProvider>
            <Layout />
         </LocationProvider>
      </div>
   )
}

export default App