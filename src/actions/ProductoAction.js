import HttpCliente from '../Servicios/HttpCliente';
import axios from 'axios';


const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;


export const getProductos = (request) => {
    return new Promise( (resolve, eject) =>{
        instancia.get(`/api/Producto?pageIndex=${request.pageIndex}&pageSize${request.pageSize}&search=${request.search}`).then( response =>{
            resolve(response);
        });
    })
};


export const getproducto = id =>{
    return new Promise((resolve, eject) =>{
        instancia.get(`/api/Producto/${id}`)
        .then(response =>{
            resolve(response);
        })
        .catch(error=>{
            resolve(error.response);
        });
    });

}

/* 
respose: 
    count:
    pageindex: 
    pagesize:
    pagecount:
    data: [
        {...},
        {...}
    ]
 */