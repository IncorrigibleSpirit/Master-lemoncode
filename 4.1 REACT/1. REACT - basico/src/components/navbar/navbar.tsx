import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import logo from "@/assets/images/logo.png";
import { HiMiniUser } from "react-icons/hi2";
import { HiOutlineLogin } from "react-icons/hi";
import { ResetSelectContext } from "@/core/providers/resetlocalstorage";
import { ProfileContext } from "@/core/providers/authentication";

export const NavBar: React.FC = () => {
  //Llamada a contexto y uso de recurso: "username" -> El valor fue obtenido en el componente <login>
  const { username } = React.useContext(ProfileContext);

  // Llamada a contexto y uso de recurso: "resetOption" alojado en el "ResetSelectContex"
  const { resetOption } = React.useContext(ResetSelectContext);

  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} className={styles["logo"]} alt="company logo" />
        </Link>
        <nav className={styles["nav-bar"]}>
          <ul>
            <li>
              <Link to="/" className={styles.link}>
                <HiMiniUser className={styles.icon} /> Aloha! {username}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={resetOption} className={styles.link}>
                <HiOutlineLogin className={styles.icon} />
                Exit
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
