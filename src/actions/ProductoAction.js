import HttpCliente from '../Servicios/HttpCliente';


export const getProductos = (request) => {
    return new Promise( (resolve, eject) =>{
        HttpCliente.get(`/api/Producto?pageIndex=${request.pageIndex}&pageSize${request.pageSize}&search=${request.search}`).then( response =>{
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