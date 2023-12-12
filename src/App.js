import React from "react";
import Login from "./Componentes/Seguridad/login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/theme";
import ResgistroUsuario from "./Componentes/Seguridad/Registro";
import MenuAppBar from "./Componentes/Navegacion/MenuAppBar";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Productos from "./Componentes/Pantallas/Productos";
import Detalles from "./Componentes/Pantallas/Detalles";
import CarritoCompras from "./Componentes/Pantallas/CarritoCompras";
import ProcesoCompra from "./Componentes/Pantallas/ProcesoCompra";
import OrdenCompra from "./Componentes/Pantallas/OrdenCompra";
import Perfil from "./Componentes/Seguridad/Perfil";
import Usuarios from "./Componentes/Pantallas/Admin/Usuarios";
import EditarUsuario from "./Componentes/Pantallas/Admin/EditarUsuario";
import ListaProductos from "./Componentes/Pantallas/Admin/ListaProductos";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <MenuAppBar/>
        <Switch>
          <Route exact path ="/Login" component={Login} />
          <Route exact path ="/registrar" component={ResgistroUsuario} />
          <Route exact path = "/" component ={Productos}/>
          <Route exact path = "/Detalles/:id" component ={Detalles}/>
          <Route exact path = "/Carrito" component ={CarritoCompras}/>
          <Route exact path = "/ProcesoCompra" component ={ProcesoCompra}/>
          <Route exact path = "/OrdenCompra/:id" component ={OrdenCompra}/>
          <Route exact path = "/perfil" component ={Perfil}/>
          <Route exact path = "/admin/Usuarios" component ={Usuarios}/>
          <Route exact path = "/admin/Usuarios/:id" component ={EditarUsuario}/>
          <Route exact path = "/admin/listaProductos" component ={ListaProductos}/>
       </Switch>
      </Router>

    </ThemeProvider>


  );
}

export default App;
