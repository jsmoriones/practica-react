import {useState} from 'react'
import { ContextCounter } from './Context';

const StateCompo = ({children}) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(val => val + 1);
    }

    const decrement = () => {
        setCounter(val => val - 1)
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <>
            <ContextCounter.Provider
                value={{
                    counter, increment, decrement, reset
                }}
            >
                {children}
            </ContextCounter.Provider>
        </>
    )
}

export default StateCompo