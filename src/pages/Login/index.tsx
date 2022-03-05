import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";

import { googleSignIn } from "../../service";

import styles from "./styles.module.scss";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from: Location })?.from?.pathname || "/";

  const google = async () => {
    const {
      user: { uid },
    } = await googleSignIn();
    signIn(uid);
    navigate(from, { replace: true });
  };

  return (
    <div className={styles.login}>
      <Card header={<Header />} footer={<Footer />} width={500}>
        <div className={styles.auth}>
          <h2 style={{ color: "black" }}>Login</h2>
          <div>
            <button className={styles.button} onClick={google}>
              GOOGLE
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
