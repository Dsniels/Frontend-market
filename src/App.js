import React, { useEffect, useState } from "react";
import Login from "./Componentes/Seguridad/login";
import { ThemeProvider, Snackbar } from "@material-ui/core";
import theme from "./Theme/theme";
import ResgistroUsuario from "./Componentes/Seguridad/Registro";
import MenuAppBar from "./Componentes/Navegacion/MenuAppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productos from "./Componentes/Pantallas/Productos";
import Detalles from "./Componentes/Pantallas/Detalles";
import CarritoCompras from "./Componentes/Pantallas/CarritoCompras";
import ProcesoCompra from "./Componentes/Pantallas/ProcesoCompra";
import OrdenCompra from "./Componentes/Pantallas/OrdenCompra";
import Perfil from "./Componentes/Seguridad/Perfil";
import Usuarios from "./Componentes/Pantallas/Admin/Usuarios";
import EditarUsuario from "./Componentes/Pantallas/Admin/EditarUsuario";
import ListaProductos from "./Componentes/Pantallas/Admin/ListaProductos";
import Agregarproducto from "./Componentes/Pantallas/Admin/Agregarproducto";
import Editarproducto from "./Componentes/Pantallas/Admin/Editarproducto";
import ListaPedidos from "./Componentes/Pantallas/Admin/ListaPedidos";
import { GetUsuario } from "./actions/UsuarioAction";
import { useStateValue } from "./contexto/store";
import { getCarrito } from "./actions/CarritoAction";
import { v4 as uuidv4 } from "uuid";


 
function App() {
  const [{ sesionUsuario, openSnackbar }, dispatch] = useStateValue();
  const [servidorResponse, setServidorResponse] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      let carritoid = window.localStorage.getItem("carrito");
  
      if (!carritoid) {
        carritoid = uuidv4();
        window.localStorage.setItem("carrito", carritoid);
      }
  
      if (!servidorResponse) {
        await GetUsuario(dispatch);
        await getCarrito(dispatch, carritoid);
        
        setServidorResponse(true);
      }
    };
  
    fetchData();
  }, [servidorResponse, dispatch]); 
  

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin= {{vertical:"bottom", horizontal:"center"}}
        open = {openSnackbar ? openSnackbar.open : false}
        autoHideDuration = {30}
        ContentProps = {{"aria-describedby" : "message-id"}}
        message = {
          <span id="message-id">
            {openSnackbar ? openSnackbar.mensaje : ""}
          </span>
        }
        onClose = { () => 
                dispatch({
                  type: "OPEN_SNACKBAR",
                  openMensaje: {
                    open: false,
                    mensaje : ""
                  }
                })
        }
      >
      </Snackbar>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/registrar" component={ResgistroUsuario} />
          <Route exact path="/" component={Productos} />
          <Route exact path="/Detalles/:id" component={Detalles} />
          <Route exact path="/Carrito" component={CarritoCompras} />
          <Route exact path="/ProcesoCompra" component={ProcesoCompra} />
          <Route exact path="/OrdenCompra/:id" component={OrdenCompra} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/admin/Usuarios" component={Usuarios} />
          <Route exact path="/admin/Usuarios/:id" component={EditarUsuario} />
          <Route
            exact
            path="/admin/listaProductos"
            component={ListaProductos}
          />
          <Route
            exact
            path="/admin/agregarProductos"
            component={Agregarproducto}
          />
          <Route
            exact
            path="/admin/editarproductos/:id"
            component={Editarproducto}
          />
          <Route exact path="/admin/listaPedidos" component={ListaPedidos} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
