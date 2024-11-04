import React, { PropsWithChildren } from "react";
import { ProfileContextModel } from "./auth.vm";

//1 Creacion de contexto y tipado de valor que sera compartido a todos los children
export const ProfileContext = React.createContext<ProfileContextModel>(null);

//3  Tipado de prop que recibirá la constante ProfilePrivder.
interface Props {
  components: {
    Login: React.ReactNode;
  };
}

//2 Creacion de provider. Este recibirá el componente <login>, el cual le será enviado como prop desde app.Router.tsx . De igual manera se define que username solo puede contener valores de tipo string e inicia vacio.
export const ProfileProvider: React.FC<PropsWithChildren<Props>> = ({ children, components: { Login } }) => {
  const [username, setUsername] = React.useState<string>("");
  console.log("RENDER PROVIDER", { username });

  //4 El valor (value) que compartirá profileContext.Provider DEBE CUMPLIR con el valor tipado en el (<ProfileContextModel>)
  return (
    <ProfileContext.Provider value={{ username, setProfile: setUsername }}>
      {username ? <>{children} navigate(generatePath("/selector")); </> : Login}
    </ProfileContext.Provider>
  );
};

//1 En este contexto "setProfile" sera el encargado de obtener el nombre del usuario, ya que es el mismo SetUsername. Este valor será capturado al interior del componente "login.tsx".

//2 En esta arquitectura, el ProfileProvider actúa como un “gatekeeper” en el flujo de navegación. Al recibir el componente Login desde appRouter.tsx como prop, cumple una función importante: Control de acceso: Si username tiene valor, se permite el acceso a los children, es decir, a los componentes internos. Si username está vacío, el componente <Login> proporcionado como prop se muestra en su lugar, redirigiendo al usuario a la pantalla de inicio de sesión.
