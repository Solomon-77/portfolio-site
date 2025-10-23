import { app } from './_firebase-init'

export async function getAnalyticsLazy() {
    const { getAnalytics, logEvent } = await import('firebase/analytics')
    const analytics = getAnalytics(app)

    return { analytics, logEvent }
}