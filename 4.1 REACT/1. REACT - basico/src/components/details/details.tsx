import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { NavBar } from "../navbar/navbar";
import styles from "./details.module.scss";
import { FooterCredits } from "../footer/footer";

interface MemberDetailEntity {
  avatar_url: string;
  name: string;
  id: string;
  company: string;
}

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // capturamos y tipamos parametro
  const [member, setMember] = React.useState<MemberDetailEntity>(null); // setear estado inicial

  React.useEffect(() => {
    if (id) {
      Axios.get<MemberDetailEntity>(`https://api.github.com/users/${id}`)
        .then((response) => {
          setMember(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]); // "id" es la dependencia

  return (
    <>
      <NavBar />
      <main>
        <h1 className={styles.title}>Member Details</h1>
        <div className={styles.card}>
          <div className={styles["card_image_container"]}>
            <img className={styles["card_image"]} src={member?.avatar_url} alt="user avatar" />
          </div>
          <div className={styles["card_content_container"]}>
            <span className={styles["card_name"]}>
              <b>Name:</b> {member?.name}
            </span>
            <span className={styles["card_id"]}>
              {" "}
              <b>ID:</b> {member?.id}
            </span>
            <span className={styles.company}>
              {" "}
              <b>Company:</b> {member?.company}
            </span>
          </div>
        </div>
      </main>
      <FooterCredits />
    </>
  );
};
