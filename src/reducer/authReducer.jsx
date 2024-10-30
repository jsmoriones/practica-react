import { createContext, useCallback, useContext, useReducer } from 'react'

const initialState = {
    user: null,
    credentials: {username: "", password: ""}
}

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, user: {username: action.payload.username} };
        case "LOGOUT":
            return {...state, user: null}
        case "SET_CREDENTIALS":
            return { ...state, credentials: action.payload };
        default:
            return state;
    }
}


export const AuthMemoContextLogin = createContext();


export const AuthLoginMemoProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = useCallback((username, password) => {
        if(username === "juan" && password === "juan"){
            dispatch({
                type: "LOGIN",
                payload: username
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

export const useAuthLogin = () => useContext(AuthLoginMemoProvider);