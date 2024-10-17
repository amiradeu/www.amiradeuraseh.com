import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Router Pages
import App from './routes/App'
import Error from './routes/Error'
import OnePager from './routes/OnePager'
import Skills from './experiences/Skills'

import GlobalStyles from './components/GlobalStyles'

const root = createRoot(document.querySelector('#root'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
    },
    {
        path: 'resume',
        element: <OnePager />,
    },
    {
        path: 'skills',
        element: <Skills />,
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <GlobalStyles />
    </React.StrictMode>
)
