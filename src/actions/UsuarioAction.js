import HttpCliente from '../Servicios/HttpCliente';
import axios from 'axios';
import {uploadImage} from '../Firebase/';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const actualizarUsuario = async (id, usuario, dispatch) => {
    
    if(usuario.file){
        const urlImagen = await uploadImage(usuario.file);
        usuario.imagen = urlImagen;

    }

    return new Promise ((resolve, eject) => {
        HttpCliente.put("/api/usuario/actualizar/${id}", usuario).then(response => {
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
