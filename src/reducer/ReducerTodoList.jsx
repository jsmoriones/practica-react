import { produce } from "immer";

const ReducerTodoList = produce((state, action) => {
    switch(action.type){ //action.type es quien contiene los titulos para ejecutar el codigo
        case "AGREGAR_USUARIO":
            state.user.push(action.payload)
            break;
        case "ELIMINAR_USUARIO":
            state.user = state.user.filter(us => us.nombre !== action.payload)
            break;
        case "EDITAR_USUARIO":
            state.user
                .filter(us => us.nombre !== action.payload.email);
            break;
        default:
            throw new Error(`action type ${action.type} is unexpected`);
    }
})

export default ReducerTodoList;