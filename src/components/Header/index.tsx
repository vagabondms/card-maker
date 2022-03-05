import React from "react";
import { useAuth } from "../../hooks/useAuth";
import styles from "./styles.module.scss";

const Header = () => {
  const { user, signOut } = useAuth();
  return (
    <header className={styles.header}>
      {user && (
        <button className={styles.logout} onClick={signOut}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Card-Maker</h1>
    </header>
  );
};

export default Header;
