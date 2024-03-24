import axios from 'axios';
import HttpCliente from '../Servicios/HttpCliente';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel  = axios.isCancel;


export const getCarrito =(dispatch, id) =>{
    return new Promise((resolve, eject) =>{
        instancia.get(`/api/carritocompra?id=${id}`).then(response =>{
            dispatch({
                type: "CARRITO_SESION",
                id:response.data.id,
                items: response.data.items
            });
            resolve(response);
        })
        .catch(error=>{
            resolve(error.response);
        });
    });
}

export const setCarrito = (dispatch, carritoCompra) =>{
    return new Promise((resolve, eject) =>{
        instancia.post(`/api/carritocompra`, carritoCompra).then(response=>{
            dispatch({
                type: "CARRITO_SESION",
                id: response.data.id,
                items: response.data.items
            })
            resolve(response);
        })
        .catch(error=>{
            resolve(error.response);
        });
    });
}
export const deleteItem = (carrito, indice, dispatch) => {

    carrito.items.splice(indice,1);
    setCarrito(dispatch,carrito);

}


export const addItem = (carrito, item, dispatch) =>{
    
    if(!carrito.items){
        carrito.items = [];
    }

    const indice = carrito.items.findIndex(i => i.id === item.id);

    if(indice === -1){
        carrito.items.push(item)
    }else{
        carrito.items[indice].cantidad += item.cantidad
    }

    setCarrito(dispatch, carrito);

}
