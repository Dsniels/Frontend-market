import React from "react";
//import Login from "./Componentes/Seguridad/login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/theme";
import ResgistroUsuario from "./Componentes/Seguridad/Registro";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResgistroUsuario />
    </ThemeProvider>


  );
}

export default App;
