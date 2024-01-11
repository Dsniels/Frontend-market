import HttpCliente from '../Servicios/HttpCliente';

export const registrarUsuario = usuario =>{
    return new Promise ((resolve, eject) =>{
        HttpCliente.post("/api/usuario/registrar", usuario).then(response => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    });
}



export const LoginUsuario = usuario =>{
    return new Promise((resolve, eject) => {
        HttpCliente.post("/api/usuario/login",usuario).then(response => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })

    });

}