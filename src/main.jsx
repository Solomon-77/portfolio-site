import { hydrate, prerender as ssr } from 'preact-iso'
import './index.css'
import App from './App.jsx'

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('root'))
}

export async function prerender(data) {
    const { html, links } = await ssr(<App {...data} />)
    return {
        html: `<div id="root">${html}</div>`,
        links
    }
}