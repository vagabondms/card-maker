import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";

import { auth, gitHubSignIn, googleSignIn } from "../../service/auth";

import styles from "./styles.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from: Location })?.from?.pathname || "/";

  const google = async () => {
    await googleSignIn();
    navigate(from, { replace: true });
  };

  const github = async () => {
    await gitHubSignIn();
    navigate(from, { replace: true });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {});
  }, []);

  return (
    <section className={styles.login}>
      <Layout
        header={<Header />}
        footer={<Footer />}
        styles={{ width: "30rem" }}
      >
        <section className={styles.auth}>
          <h2 style={{ color: "black" }}>Login</h2>
          <button className={styles.button} onClick={google}>
            GOOGLE
          </button>
          <button className={styles.button} onClick={github}>
            GitHub
          </button>
        </section>
      </Layout>
    </section>
  );
};

export default Login;
