import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Maker from "../../components/Maker";
import Preview from "../../components/Preview";

import styles from "./styles.module.scss";

const Main = () => {
  return (
    <section className={styles.main}>
      <Layout
        header={<Header />}
        footer={<Footer />}
        styles={{
          maxWidth: "100rem",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <div className={styles.wrapper}>
          <Maker />
          <Preview />
        </div>
      </Layout>
    </section>
  );
};

export default Main;
