import React, { createContext, useState, useEffect } from "react";
import { OptionContextProps } from "./resetstorage.vm";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "@/core/providers/authentication";

// Este componente cumple varias funciones: resetea localstorage, redirige a login, resetea username, y resetea historial de navegacion.

// 1 Definición de contexto
export const ResetSelectContext = createContext<OptionContextProps | undefined>(undefined);

// 2 Definición del proveedor
export const ResetSelectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [option, setOption] = useState("lemoncode");
  const navigate = useNavigate();

  // 3 Recuperación del valor almacenado en el `localStorage` al cargar el contexto
  useEffect(() => {
    const savedOption = localStorage.getItem("optionSelected");
    if (savedOption) {
      setOption(savedOption);
    }
  }, []);

  //4 Invocacion de contexto auth.tsx y recurso:setProfile. Reseteara el valor de "username" a (" ").
  const { setProfile } = React.useContext(ProfileContext);

  //5 Función principal: resetea el valor de "option" a "lemoncode", elimina el "localStorage",re-dirige a pagina login, y reemplaza el historial de navegacion
  const resetOption = () => {
    localStorage.removeItem("optionSelected");
    setOption("lemoncode");
    setProfile("");
    navigate("/", { replace: true });
    //"replace" reemplaza la historia de navegación actual, de modo que el usuario no puede usar los botones "adelante" o "atrás" para regrese a una pagina protegida sin estar autenticado.
  };

  return <ResetSelectContext.Provider value={{ resetOption }}>{children}</ResetSelectContext.Provider>;
};
