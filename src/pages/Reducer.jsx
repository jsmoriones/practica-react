import { useReducer } from "react"
import reducer from "../reducer/reducer";

const Reducer = () => {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container">
      <div className="card">
        <h1>Conter Redux Application</h1>
        <p>{count}</p>
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => dispatch("increment")}>
            Increment
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => dispatch("decrement")}>
            Dencrement
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => dispatch("reset")}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reducer