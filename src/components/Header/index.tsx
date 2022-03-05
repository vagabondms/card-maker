import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { authSignOut } from "../../service/auth";
import styles from "./styles.module.scss";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className={styles.header}>
      {userId && (
        <button className={styles.logout} onClick={authSignOut}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Card-Maker</h1>
    </header>
  );
};

export default Header;
