import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getAnalyticsLazy } from "../_firebase/analytics-lazy"

const AnalyticsTracker = () => {
    const location = useLocation()

    useEffect(() => {
        const logAnalyticsEvent = async () => {
            const { analytics, logEvent } = await getAnalyticsLazy()

            logEvent(analytics, "screen_view", {
                firebase_screen: location.pathname
            })
        }

        logAnalyticsEvent()
    }, [location])

    return null
}

export default AnalyticsTracker