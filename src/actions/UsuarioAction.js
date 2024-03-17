import HttpCliente from '../Servicios/HttpCliente';
import axios from 'axios';
import {uploadImage} from '../Firebase/';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const getUsuarios = (request) =>{
    return new Promise( (resolve, eject) =>{
        HttpCliente.get(`/api/usuario/pagination?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}`)
        .then(response => {
                resolve(response);
            })
        .catch(error =>  {
                resolve(error.response);
            });
    });
}

export const GetUsuariobyId = (id) =>{
    return new Promise( (resolve, eject) => {
        HttpCliente.get(`/api/usuario/account/${id}`)
        .then(response => {
                resolve(response);
            }).catch(error =>{
                resolve(error.response);
            })
    });
}

export const agregarRole = (id, role, dispatch) => {
    return new Promise((resolve, eject) => {
        HttpCliente.put(`/api/usuario/role/${id}`, role)
        .then(response => {
                resolve(response);
            }).catch( error => {
                resolve(error.response);
            })
    });
} 



export const actualizarUsuario = async (id, usuario, dispatch) => {
    
    if(usuario.file){
        const urlImagen = await uploadImage(usuario.file);
        usuario.imagen = urlImagen;

    }

    return new Promise ((resolve, eject) => {
        HttpCliente.put(`/api/usuario/actualizar/${id}`, usuario).then(response => {
            dispatch({
                type: "ACTUALIZAR_USUARIO",
                nuevoUsuario: response.data,
                autenticado: true
            });
            resolve(response);
        })
        .catch(error => {
                resolve(error.response);
            })
    });

}


export const registrarUsuario = (usuario, dispatch) =>{
    return new Promise ((resolve, eject) =>{
        instancia.post("/api/usuario/registrar", usuario).then(response => {
            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            })
            
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    });
}



export const LoginUsuario = (usuario, dispatch) =>{
    return new Promise((resolve, eject) => {
        instancia.post("/api/usuario/login",usuario).then(response => {

            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            })


            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })

    });

}

export const GetUsuario = (dispatch) =>{
    return new Promise((resolve, eject) => {
        HttpCliente.get("/api/usuario").then(response =>{
            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            })
            
            
            resolve(response);



        })
        .catch(error => {
            resolve(error.response);
        })
    });

}
