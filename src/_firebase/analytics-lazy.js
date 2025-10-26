let analyticsInstance = null

export const getAnalyticsInstance = async () => {
    if (!analyticsInstance) {
        const { getFirebaseApp } = await import('./_firebase-init')
        const app = getFirebaseApp()

        const { getAnalytics, logEvent } = await import('firebase/analytics')
        const analytics = getAnalytics(app)

        analyticsInstance = { analytics, logEvent }
    }

    return analyticsInstance
}