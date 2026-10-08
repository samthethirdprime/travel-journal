import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * challenge
 * create an App component in a seperate file
 * Import it here and render it
 *  create a component folder then create a header component
 * Render the header inside the App component
 * Follow the Travel Journal Design to build the header for our page
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
