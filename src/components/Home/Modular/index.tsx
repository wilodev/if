import CardIcon from "@/components/CardIcon";
import React from "react";
import { GiLunarModule } from "react-icons/gi";
import { IoIosApps } from "react-icons/io";
import { BsDistributeHorizontal } from "react-icons/bs";
import styles from "./Modular.module.css";
function Modular() {
  return (
    <section className={styles.containerModular}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <CardIcon
            icon={<IoIosApps size={32} />}
            title=" Aplicaciones"
            classCard="lg:pt-12 pt-6"
            classBgIcon="bg-red-500"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </CardIcon>

          <CardIcon
            icon={<GiLunarModule size={32} />}
            title=" Modular"
            classCard=""
            classBgIcon="bg-green-500"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </CardIcon>

          <CardIcon
            icon={<BsDistributeHorizontal size={32} />}
            title=" Distribuido"
            classCard="lg:pt-12 pt-6"
            classBgIcon="bg-yellow-500"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </CardIcon>
        </div>
      </div>
    </section>
  );
}

export { Modular };
