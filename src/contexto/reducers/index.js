import sesionUsuarioReducer from './sesionUsuarioReducer'
import SesionCarritoReducer from './sesioncarritoReducer'

export const mainReducer = ( {sesionUsuario, sesionCarrito}, action ) =>{
    return{
        sesionUsuario: sesionUsuarioReducer(sesionUsuario, action),
        sesionCarrito : SesionCarritoReducer(sesionCarrito, action)
    }
}