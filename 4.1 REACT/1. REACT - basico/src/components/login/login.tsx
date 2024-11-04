import React from "react";
import { useNavigate, generatePath } from "react-router-dom";
import { checkCredentials } from "./auth";
import styles from "./login.module.scss";
import login from "@/assets/images/login.webp";
import { ProfileContext } from "@/core/providers/authentication";
import { FooterCredits } from "../footer/footer";

interface formdata {
  username: string;
  password: string;
}

// Estado inicial del componente
export const LoginPage: React.FC = () => {
  const [FormData, SetFormData] = React.useState<formdata>({
    username: "",
    password: "",
  });

  //**Llamada a contexto y uso de su recurso: setProfile -> obtener valor de usuario ingresado por usuario (es un SetUser) ***
  const { setProfile } = React.useContext(ProfileContext);

  // Preparamos mecanismo de navegación
  const navigate = useNavigate();

  // Función para gestionar error
  const SetErrorMessage = (message: string): string => {
    alert(message);
    return message;
  };

  // Función para gestionar evento "onChange"
  const handleChange = (field: keyof formdata) => (e: React.ChangeEvent<HTMLInputElement>) => {
    SetFormData({ ...FormData, [field]: e.target.value });
  };

  // Función para gestionar el evento "onSubmit"
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (checkCredentials(FormData.username, FormData.password)) {
      navigate(generatePath("/selector"));
      setProfile(FormData.username);
      // El SetProfile captura el valor de usuario ingresado. Este dato estara disponible para todos los hijos (sera utilizado en el <navBar>)
    } else {
      SetErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      <main>
        <div className={styles["card-form"]}>
          <div className={styles["card-image"]}>
            <img src={login} className={styles["image"]} alt="card header with graphic design" />
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles["form_label"]}>Username</label>
            <input
              type="text"
              className={styles["form_input"]}
              value={FormData.username}
              placeholder="Carlos22"
              required={true}
              onChange={handleChange("username")}
            />
            <label className={styles["form_label"]}>Password</label>
            <input
              type="password"
              className={styles["form_input"]}
              value={FormData.password}
              placeholder="test"
              required={true}
              onChange={handleChange("password")}
            />
            <button className={styles.button} type="submit">
              <p>Login</p>
            </button>
          </form>
        </div>
      </main>
      <FooterCredits />
    </>
  );
};
