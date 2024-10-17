import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import StateCompo from './context/StateCompo.jsx'
import StateAuth from './context/StateAuth.jsx'
import StateTheme from './context/StateTheme.jsx'
import './index.css'
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <StateTheme>
    <StateAuth>
      <StateCompo>
        <BrowserRouter>
          <StrictMode>
            <App />
          </StrictMode>
        </BrowserRouter>
      </StateCompo>
    </StateAuth>
  </StateTheme>
)