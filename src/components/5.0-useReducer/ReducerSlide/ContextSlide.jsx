import {useReducer} from 'react'
import ReducerSlide from './ReducerSlide'

const ContextSlide = () => {
    const [state, dispatch] = useReducer(ReducerSlide, {count: 0, step: 1});

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

export default ContextSlide