//Esse arquivo não será modificado, porém, ele é usado para conectar nesse caso o App.js e o browser. Ele é feito em ECMAscript.

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
LINHA 1
import - Serve para importar módulos e definições de outros arquivos (Está nas outras linhas tbm.)
StrickMode - Componente que destaca problemas no código.
O resto, ou seja 'React' e "from react", basicamente importa o módulo react do pacote "react".

*/