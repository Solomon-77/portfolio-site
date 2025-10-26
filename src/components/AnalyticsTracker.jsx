import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getAnalyticsInstance } from '../_firebase/analytics-lazy'

const AnalyticsTracker = () => {
    const location = useLocation()

    useEffect(() => {
        requestIdleCallback(async () => {
            const { analytics, logEvent } = await getAnalyticsInstance()
            logEvent(analytics, 'screen_view', { firebase_screen: location.pathname })
        })
    }, [location])

    return null
}

export default AnalyticsTracker