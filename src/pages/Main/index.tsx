import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Maker from "../../components/Maker";
import Preview from "../../components/Preview";

import styles from "./styles.module.scss";

export type Card = {
  id: string;
  name: string;
  work: string;
  job: string;
  theme: string;
  email: string;
  description: string;
  fileName: string;
  fileUrl: string | null;
};

const Main = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: "1",
      name: "Minseok",
      work: "Dongwoo",
      job: "software engineer",
      theme: "black",
      email: "hiseokseok@gmail.com",
      description: "HI",
      fileUrl: null,
      fileName: "img",
    },
    {
      id: "2",
      name: "Minseok",
      work: "Dongwoo",
      job: "software engineer",
      theme: "light",
      email: "hiseokseok@gmail.com",
      description: "HI",
      fileUrl: "images/default_logo.png",
      fileName: "img",
    },
    {
      id: "3",
      name: "Minseok",
      work: "Dongwoo",
      job: "software engineer",
      theme: "black",
      email: "hiseokseok@gmail.com",
      description: "HI",
      fileUrl: "images/default_logo.png",
      fileName: "img",
    },
    {
      id: "4",
      name: "Minseok",
      work: "Dongwoo",
      job: "software engineer",
      theme: "black",
      email: "hiseokseok@gmail.com",
      description: "HI",
      fileUrl: "images/default_logo.png",
      fileName: "img",
    },
    {
      id: "5",
      name: "Minseok",
      work: "Dongwoo",
      job: "software engineer",
      theme: "colorful",
      email: "hiseokseok@gmail.com",
      description: "HI",
      fileUrl: "images/default_logo.png",
      fileName: "img",
    },
  ]);

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
          <Maker cards={cards} />
          <Preview cards={cards} />
        </div>
      </Layout>
    </section>
  );
};

export default Main;
