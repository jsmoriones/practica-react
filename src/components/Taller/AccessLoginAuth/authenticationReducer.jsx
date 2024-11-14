import { createContext, useCallback, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

//definir el estado inicial
const initialState = {
  email: JSON.parse( sessionStorage.getItem('userLogued') ) || null,
  credentials: {email: "", password: ""}
}

//definir el reducer
const authenticationReducer = (state, action) => {
  switch(action.type){
    case "LOGIN":
      return { ...state, email: action.payload.email }
      break;
    case "LOGOUT":
      return { ...state, email: null }
      break;
    case "SET_CREDENTIALS":
      return {...state, credentials: action.payload}
      break;
    default:
      return state;
  }
}

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if(state.email){
      sessionStorage.setItem( 'userLogued', JSON.stringify(state.email) );
    } else {
      sessionStorage.removeItem( 'userLogued' );
    }
  }, [state.email]);

  const login = useCallback((email, password) => {
    if(email === "juan@juan.com" && password === "admin123"){
      dispatch({
        type: "LOGIN",
        payload: {email}
      });
      navigate("/success-auth");
    }else{
      alert("Credenciales inválidas");
    }
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, []);

  const setCredentials = useCallback((credentials) => {
    dispatch({
      type: "SET_CREDENTIALS",
      payload: credentials
    });
  }, []);

  const value = {
    user: state.user,
    login,
    logout,
    credentials: state.credentials,
    setCredentials
  }

  return (
    <AuthenticationContext.Provider
      value={value}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthenticaionReducer = () => useContext(AuthenticationContext);