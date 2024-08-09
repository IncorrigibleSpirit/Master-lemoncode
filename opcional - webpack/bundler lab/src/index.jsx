import "./styles/mystyles.scss";
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hola Mundo</h1>
  </div>
);

console.log(`Api base: ${process.env.API_BASE}`);
