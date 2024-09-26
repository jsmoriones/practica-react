import Props from "./components/Props"
import Repaso from "./components/Repaso";

function App() {
  return (
    <>
      <button className="rounded-full px-4 py-2 bg-regal-blue text-white text-lg font-bold">Save Changes</button>
      <h2 className="text-primary text-2xl font-bold">Ejemplo 1</h2>
      <h3 className="text-secondary text-2xl font-bold">Ejemplo 2</h3>
      <Props name="Rider" cedula="11111111" />
      <Repaso programa="ADSO" competencia="FrontEnd" />
    </>
  )
}

export default App
