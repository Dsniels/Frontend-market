import React from "react";
import Login from "./Componentes/Seguridad/login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/theme";
import ResgistroUsuario from "./Componentes/Seguridad/Registro";
import MenuAppBar from "./Componentes/Navegacion/MenuAppBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar></MenuAppBar>
      <ResgistroUsuario />
      <Login></Login>
    </ThemeProvider>


  );
}

export default App;
