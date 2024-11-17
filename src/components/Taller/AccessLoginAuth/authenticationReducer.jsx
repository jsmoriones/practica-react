import { createContext, useCallback, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterProvider } from "./registerReducer";
//definir el estado inicial
const initialState = {
  email: JSON.parse( sessionStorage.getItem('userLogued') ) || null,
  credentials: {email: "", password: ""},
  user: JSON.parse( sessionStorage.getItem('user') ) || null
}

//definir el reducer
const authenticationReducer = (state, action) => {
  switch(action.type){
    case "LOGIN":
      return { ...state, email: action.payload.email }
      break;
    case "LOGOUT":
      return { email: null, credentials: {email: "", password: ""}, user: {} }
      break;
    case "SET_CREDENTIALS":
      return {...state, credentials: action.payload}
      break;
    case "SET_USERL":
      return {...state, user: action.payload}
      break;
    case "UPDATE_USER":
      const dbUsers = JSON.parse( localStorage.getItem("users") );
      let userFilter = dbUsers.filter(user => user.email === action.payload.email);
      userFilter = action.payload;
      let userChanged = {};
      const dbUpdate = dbUsers.map(u => {
        if(u.email == userFilter.email){
          u = userFilter;
          sessionStorage.setItem("user", JSON.stringify(userFilter));
          userChanged = u;
        }
        return u;
      })
      localStorage.setItem("users", JSON.stringify(dbUpdate));
      return {
        ...state,
        user: userChanged
      }
      break;
    default:
      return state;
  }
}

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);
  const navigate = useNavigate();
  const { users } = useRegisterProvider();

  useEffect(() => {
    if(state.email){
      sessionStorage.setItem( 'userLogued', JSON.stringify(state.email) );
      navigate("/success-auth")
    }
    if(state.user){
      sessionStorage.setItem( 'user', JSON.stringify(state.user) );
    }
  }, [state.email, state.user]);

  const login = useCallback((email, password) => {
    let existe = users.filter(user => email === user.email && password === user.password);
    if(existe[0]){
      dispatch({
        type: "LOGIN",
        payload: {email}
      });
      dispatch({
        type: "SET_USERL",
        payload: {
          email: existe[0].email,
          fullname: existe[0].fullname,
          direccion: existe[0].direccion,
          telefono: existe[0].telefono
        }
      })
    }else{
      alert("Credenciales inválidas");
    }
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
    sessionStorage.removeItem("userLogued");
    navigate("/taller-access")
  }, []);

  const setCredentials = useCallback((credentials) => {
    dispatch({
      type: "SET_CREDENTIALS",
      payload: credentials
    });
  }, []);

  const updateUser = (data) => {
    dispatch({
      type: "UPDATE_USER",
      payload: data
    })
  }

  const value = {
    email: state.email !== null ? state.email : false,
    user: state.user !== null ? state.user : false,
    login,
    logout,
    credentials: state.credentials,
    setCredentials,
    updateUser
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