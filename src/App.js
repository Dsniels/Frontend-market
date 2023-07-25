import React from "react";
import Login from "./Componentes/Seguridad/login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/theme";
import ResgistroUsuario from "./Componentes/Seguridad/Registro";
import MenuAppBar from "./Componentes/Navegacion/MenuAppBar";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Productos from "./Componentes/Pantallas/Productos";
import Detalles from "./Componentes/Pantallas/Detalles";


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
       </Switch>
      </Router>

    </ThemeProvider>


  );
}

export default App;
