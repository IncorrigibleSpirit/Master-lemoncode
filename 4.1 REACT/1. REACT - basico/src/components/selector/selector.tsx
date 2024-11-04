import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./selector.module.scss";
import { NavBar } from "../navbar/navbar";
import { FooterCredits } from "../footer/footer";

export const CompanySelector: React.FC = () => {
  //1 Estado inicial del filtro y seleccion predeterminada: inicializamos el valor con "lemoncode"
  const [filter, SetFilter] = React.useState("lemoncode");

  //2 Mecanismo de navegación
  const navigate = useNavigate();

  //5 Recuperamos el valor de localStorage cuando se cargue el componente
  useEffect(() => {
    const savedCompany = localStorage.getItem("optionSelected");
    if (savedCompany) {
      SetFilter(savedCompany);
    }
  }, []);

  //3 Función para gestionar evento "onChange"
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    SetFilter(selectedValue);

    //4 Guardamos la selección en localStorage
    localStorage.setItem("optionSelected", selectedValue);
  };

  //6 Función para gestionar el evento "onSubmit"
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filter) {
      // 7 Navegar a /list y pasar el nombre de la compañía seleccionado como state (estado)
      navigate("/list", { state: { companyName: filter } });
    }
  };

  //Esta funcion fue trasladada al contexto resetstorage.tsx
  // const handleReset = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   localStorage.removeItem("optionSelected");
  //   SetFilter("lemoncode");
  //   navigate("/");
  // };

  return (
    <>
      <NavBar />
      <main>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles["form_label"]}>Select company</label>
          <select className={styles["form_select"]} value={filter} onChange={handleChange}>
            <option value="">Select a company</option>
            <option value="lemoncode">Lemoncode</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Apple">Apple</option>
            <option value="Ibm">IBM</option>
          </select>
          <button className={styles.button} type="submit" disabled={!filter}>
            Search employees
          </button>
        </form>
      </main>
      <FooterCredits />
    </>
  );
};
