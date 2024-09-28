import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'
import GlobalStyles from './components/GlobalStyles'

const root = createRoot(document.querySelector('#root'))
root.render(
    <React.StrictMode>
        <App />
        <GlobalStyles />
    </React.StrictMode>
)
