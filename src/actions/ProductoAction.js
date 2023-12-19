import HttpCliente from '../Servicios/HttpCliente';


export const getProductos = () => {
    return new Promise( (resolve, eject) =>{
        HttpCliente.get('/api/Producto').then( response =>{
            resolve(response);
        });
    })
};

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