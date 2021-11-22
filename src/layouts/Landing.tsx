import React, { ReactElement } from "react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

type TLading = {
  children: ReactElement;
};
const Landing = ({ children }: TLading) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export { Landing };
