import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { logEvent } from "firebase/analytics"
import { analytics } from "../firebase"

const AnalyticsTracker = () => {
    const location = useLocation()

    useEffect(() => {
        logEvent(analytics, "screen_view", {
            firebase_screen: location.pathname
        })
    }, [location])

    return null
}

export default AnalyticsTracker