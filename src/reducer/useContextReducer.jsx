import {useReducer} from 'react'
import Reducer2 from './Reducer2'

const useContextReducer = () => {
    const [state, dispatch] = useReducer(Reducer2, {count: 0, step: 1});

    const increment = () => dispatch({type: "INCREMENT"});
    const decrement = () => dispatch({type: "DECREMENT"});
    const handleChange = (e) =>{
        console.log(e.target.value)
        dispatch({
            type: "CHANGE_STEP",
            payload: parseInt(e.target.value)
        });
    }
    return {
        state,
        increment,
        decrement,
        handleChange
    }
}

export default useContextReducer