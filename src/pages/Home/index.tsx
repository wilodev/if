import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Home.module.css";

import { Hero } from "@/components/Home/Hero";
import { Modular } from "@/components/Home/Modular";
import { Header } from "@/components/Header";
import { Info } from "@/components/Home/Info";
import Footer from "@/components/Footer";
import Payments from "@/components/Payments";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Modular />
      <Info />
      <Payments />
    </>
  );
};

export default Home;
