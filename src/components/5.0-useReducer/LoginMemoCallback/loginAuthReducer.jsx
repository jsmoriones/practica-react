import { useEffect } from 'react';
import { createContext, useCallback, useContext, useReducer } from 'react'

const initialState = {
    user: JSON.parse(sessionStorage.getItem("user")) || null,
    credentials: {username: "", password: ""}
}

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            //sessionStorage.setItem("user", JSON.stringify({user: action.payload.username, password: action.payload.password})); //almaceno la dara en sessionStorage
            return {...state, user: {username: action.payload.username} };
        case "LOGOUT":
            sessionStorage.removeItem("user");
            return {...state, user: null}
        case "SET_CREDENTIALS":
            return { ...state, credentials: action.payload };
        default:
            return state;
    }
}


export const AuthMemoContextLogin = createContext();


export const AuthLoginMemoProvider = ({children}) => { //esta es la funcion con la cual voy a encerrar los componentes que consumiran los metodos
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        if(state.user){
            sessionStorage.setItem("user", JSON.stringify(state.user))
        }else{
            sessionStorage.clear("user")
        }
    }, [state.user])

    const login = useCallback((username, password) => {
        if(username === "juan" && password === "juan"){
            dispatch({
                type: "LOGIN",
                payload: {username, password}
            })
        } else {
            alert("Credenciales Invalidas");
        }
    }, []);

    const logout = useCallback(() => {
        dispatch({
            type: "LOGOUT"
        })
    }, []);

    const setCredentials = useCallback((credentials) => {
        dispatch({
            type: "SET_CREDENTIALS",
            payload: credentials
        })
    }, [])

    const value = {
        user: state.user,
        login,
        logout,
        credentials: state.credentials,
        setCredentials
    }
    

    return (
        <AuthMemoContextLogin.Provider value={value}>
            {children}
        </AuthMemoContextLogin.Provider>
    )
}

export const useAuthLogin = () => useContext(AuthMemoContextLogin); //Esta variable me entrega los metodos para usarlos en los componentes hijos
