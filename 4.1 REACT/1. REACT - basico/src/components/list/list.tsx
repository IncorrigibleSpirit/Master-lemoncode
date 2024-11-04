import React, { useEffect, useState } from "react";
import { generatePath, Link, useLocation } from "react-router-dom";
import { getMemberDetail } from "./api/list.api";
import { MemberDetail } from "./list.model";
import { mapMemberApiToVm } from "./list.mapper";
import { PaginationModule } from "../pagination/pagination";
import styles from "./list.module.scss";
import { NavBar } from "../navbar/navbar";
import { FooterCredits } from "../footer/footer";

export const GetUserList: React.FC = () => {
  //SECTION1: definicion de states: usuarios, pagina actual, items por pagina

  // Seteamos estado inicial de usuarios.Estos deberan ser tipo MemberDetail a causa del mapper
  const [users, setUsers] = useState<MemberDetail[]>([]);

  // Declarar pagina actual - Valor inicial
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Declarar registros por pagina - valor inicial
  const [itemsPerPage] = useState<number>(5);

  //SECTION2: Fetch data
  const location = useLocation(); // Recuperar el estado/status enviado desde el componente selector.tsx (seleccion de usuario)
  const companyName = location.state?.companyName || "lemoncode"; // Si no hay estado, por defecto "lemoncode"

  useEffect(() => {
    if (companyName) {
      getMemberDetail(companyName).then(mapMemberApiToVm).then(setUsers);
    }
  }, [companyName]);

  //SECTION3:Seter el numero de registros por pagina
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  //SECTION4: Cambio de pagina
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar />
      <div className={styles["table-container"]}>
        <table className={styles.table}>
          <caption>Employees list</caption>
          <thead>
            <tr>
              <th className={styles["table-title"]}>Avatar</th>
              <th className={styles["table-title"]}>ID</th>
              <th className={styles["table-title"]}>Login</th>
            </tr>
          </thead>
          <tbody className={styles["table-data"]}>
            {currentUsers.map((user) => (
              <tr key={user.login}>
                <td>
                  <img src={user.avatarUrl} alt={"employee picture"} width="50" />
                </td>
                <td>{user.id}</td>
                <td className={styles["table-data-url"]}>
                  {/* Generacion de URL dinamica */}
                  <Link to={generatePath("/details/:id", { id: user.login })}>{user.login}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <PaginationModule
          itemsPerPage={itemsPerPage}
          totalItems={users.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <FooterCredits />
    </>
  );
};
