import { useState, useEffect } from "react"

const Institucion = () => {
  const [query, setQuery] = useState("");
  const [invocation, setInvocation] = useState(1);

  useEffect(() => {
    //alert("Bienvenido a la aplicación!!!");
    console.log(document.title);
    document.title = "Periodicos Viejos " + query;
  }, [query]);

  return (
    <>
      <h2 className="text-4xl text-center font-bold mb-6">useEffect</h2>
      <div className="container mx-auto flex flex-col">
        <h1 className="text-2xl font-bold">Periodicos viejos que contienen</h1>
        <p>{invocation} Invocations</p>
        <form className="flex flex-col items-start">
          <input
            type="text"
            id="periodico"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-1 border-slate-700 outline-none"
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              setInvocation(val => val + 1);
            }}
          >
            Clicked Infications!!!
          </button>
        </form>
      </div>
    </>
  )
}

export default Institucion