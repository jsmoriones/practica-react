import { createContext, useCallback, useContext, useEffect, useReducer } from "react";

//Creamos nuestras variables de estado, las inicialiazamos
let initialState = {
  users: JSON.parse(localStorage.getItem( 'users' )) || []
}

//declaramos nuestras anclas para realizar los dispatch
const registerReducer = (state, action) => {
  switch(action.type){
    case "ADD_USER":
      return { ///////Para que sea como con efecto de tiempo real debe tener el return
        ...state,
        users: [...state.users, action.payload]
      }
      break;
    case "LIST_USERS":
      return state.users
      break;
    case "LIST_USER":
      console.log("Listando un usuario");
      break;
    case "ELIMINANDO_USUARIO":
      console.log("Eliminando un usuario");
      break;
    default:
      return state;
  }
}

//creamos y exportamos nuesto context para compartir variables donde la necesitemos
export const registerContext = createContext();

//exportamos nuestro provider para encerrar los hijos que consumiran nuestro reducer
export const RegisterProvider = ({children}) => {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  useEffect(() => {
    if(state.users){
      localStorage.setItem( 'users', JSON.stringify(state.users) );
    }else{
      localStorage.removeItem( 'users' )
    }
  }, [state.users]);

  const addUser = (data) => {
    dispatch({
      type: "ADD_USER",
      payload: data
    });
  }

  const listUsers = () => {
    dispatch({
      type: "LIST_USERS"
    });
  }

  

  const value = {
    addUser,
    listUsers,
    users: state.users
  }

  return (
    <registerContext.Provider value={value}>
      {children}
    </registerContext.Provider>
  );
}

export const useRegisterProvider = () => useContext(registerContext);