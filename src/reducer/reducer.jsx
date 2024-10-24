const reducer = (state, action) => {
    if(action === "increment"){
        return state + 1;
    }else if(action === "decrement"){
        return state - 1;
    }else if(action === "reset"){
        return 0;
    }else{
        throw new Error("Algo salio mal");
    }
}

export default reducer;