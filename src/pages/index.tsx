import type { NextPage } from "next";
import Head from "next/head";
//import Image from "next/image";
import styles from "./Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="https://www.google.com" className={styles.link}>
        Google{" "}
      </a>
    </div>
  );
};

export default Home;