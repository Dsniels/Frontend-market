import React from "react";
import Login from "./Componentes/Seguridad/login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/theme";
import ResgistroUsuario from "./Componentes/Seguridad/Registro";
import MenuAppBar from "./Componentes/Navegacion/MenuAppBar";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <MenuAppBar/>
        <Switch>
          <Route exact path ="/Login" component={Login} />
          <Route exact path ="/registrar" component={ResgistroUsuario} />
        </Switch>
      </Router>

    </ThemeProvider>


  );
}

export default App;
