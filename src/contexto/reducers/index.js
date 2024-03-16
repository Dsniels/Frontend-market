import sesionUsuarioReducer from './sesionUsuarioReducer'
import SesionCarritoReducer from './sesioncarritoReducer'
import openSnackbarReducer from './openSnackbarReducer.js'

export const mainReducer = ( {sesionUsuario, sesionCarrito, openSnackbar}, action ) =>{
    return{
        openSnackbar : openSnackbarReducer(openSnackbar, action),
        sesionUsuario: sesionUsuarioReducer(sesionUsuario, action),
        sesionCarrito : SesionCarritoReducer(sesionCarrito, action)
    }
}
