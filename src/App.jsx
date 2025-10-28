import { LocationProvider } from 'preact-iso'
import Layout from './components/Layout'
import AnalyticsTracker from './components/AnalyticsTracker'

const App = () => {
   return (
      <div className="font-custom scheme-dark">
         <LocationProvider>
            <AnalyticsTracker />
            <Layout />
         </LocationProvider>
      </div>
   )
}

export default App