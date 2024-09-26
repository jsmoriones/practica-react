import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Button from './components/Button.jsx'
import Objetos from './components/Objetos.jsx'
import Compoenente2 from './components/Compoenente2.jsx'
import ComponentePadre from './components/ComponentePadre.jsx'
import ComponenteHijo1 from './components/ComponenteHijo1.jsx'
import ComponenteTailblock from './components/ComponenteTailblock.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Statisc from './components/Statisc.jsx'
import Step from './components/Step.jsx'
import Testimonials from './components/Testimonials.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Button />
    <Objetos />
    <Compoenente2 />

    <ComponentePadre>
      <div className="flex flex-col items-start">
        <button className="bg-green-400 p-1 px-4 text-xl text-white inline-block">Boton 1</button>
        <button className="bg-green-500 p-1 px-4 text-xl text-white inline-block mt-2">Boton 2</button>
      </div>
      <ComponenteHijo1 />
    </ComponentePadre>

    <Header />
    <ComponenteTailblock />
    <Hero />
    <Statisc />
    <Step />
    <Testimonials />
    <Footer />
  </StrictMode>,
)