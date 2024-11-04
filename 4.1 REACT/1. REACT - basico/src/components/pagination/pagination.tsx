import React from "react";
import styles from "./pagination.module.scss";

// Desde list se envian los datos a traves de PROPS. Estos deben tiparse antes de utilizarse.
interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export const PaginationModule: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  //Se genera numero de paginas
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        <li className={styles["page-control"]}>
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            className={styles["back"]}
            disabled={currentPage === 1}
            aria-label="Previous Page" // accesibilidad
          >
            Back
          </button>
        </li>

        {/* Iteracion de numeros */}
        {pageNumbers.map((number) => (
          <li className={styles["page-item"]} key={number}>
            <button
              onClick={() => paginate(number)}
              className={`${styles["page-number"]} ${currentPage === number ? styles.active : ""}`}
              aria-current={currentPage === number ? "page" : undefined} // accesibilidad
            >
              {number}
            </button>
          </li>
        ))}

        <li className={styles["page-control"]}>
          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            className={styles["next"]}
            disabled={currentPage === totalPages}
            aria-label="Next Page" // accesibilidad
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
