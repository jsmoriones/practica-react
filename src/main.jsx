import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import StateCompo from './context/CounterContext/StateCounter.jsx'
import StateAuth from './context/AuthBasic/StateAuth.jsx'
import StateTheme from './context/ThemeContext/StateTheme.jsx'
import StateTodoList from './components/5.0-useReducer/TodoList/StateTodoList.jsx'
import './index.css'
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <StateTheme>
    <StateAuth>
      <StateCompo>
        <StateTodoList>
          <BrowserRouter>
            <StrictMode>
              <App />
            </StrictMode>
          </BrowserRouter>
        </StateTodoList>
      </StateCompo>
    </StateAuth>
  </StateTheme>
)