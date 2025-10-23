import { getFirebaseApp } from './_firebase-init';

let analyticsCache;

export async function getAnalyticsInstance() {
    if (!analyticsCache) {
        const app = getFirebaseApp();
        const { getAnalytics, logEvent } = await import("firebase/analytics");
        const analytics = getAnalytics(app);

        analyticsCache = { analytics, logEvent };
    }

    return analyticsCache;
}