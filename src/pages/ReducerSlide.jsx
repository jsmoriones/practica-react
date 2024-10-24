import useContextReducer from "../reducer/useContextReducer"

const ReducerSlide = () => {
    const {state, increment, decrement, handleChange} = useContextReducer();
  return (
    <div>
        <header>
            <h1>Contador</h1>
        </header>
        <main>
            <section className="counter">
                <p className="heading">{state.count}</p>
                <div className="actions">
                    <button type="button" className="btn btn-circle" onClick={decrement}> - </button>
                    <button type="button" className="btn btn-circle" onClick={increment}> + </button>
                </div>
            </section>
            <section className="counter-step">
                <label htmlFor="stem">Step</label>
                <input
                    id="step"
                    type="range"
                    min="1"
                    max="10"
                    value={state.step}
                    onChange={handleChange}
                />
                <label>{}</label>
            </section>
        </main>
    </div>
  )
}

export default ReducerSlide