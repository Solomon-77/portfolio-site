import { useEffect } from 'preact/hooks'

// reference: https://preactjs.com/blog/prerendering-preset-vite
export function useTitle(title) {
    if (typeof window === 'undefined') globalThis.title = title

    useEffect(() => {
        if (title) document.title = title
    }, [title])
}
