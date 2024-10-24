import { produce } from "immer"

const Reducer2 = produce((state, action) => {
    switch (action.type){
        case "INCREMENT":
            state.count = state.count + state.step;
            break;
        case "DECREMENT":
            state.count = state.count - state.step;
            break;
        case "CHANGE_STEP":
            state.step = action.payload;
            break;
        default:
            throw new Error(`action type ${action.type} is unexpected`);
    }
})

export default Reducer2