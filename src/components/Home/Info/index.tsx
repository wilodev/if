import React from "react";
import styles from "./Info.module.css";
function Info() {
  return (
    <section className={styles.containerInfo}>
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
          <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            <div className="absolute inset-0 w-full h-full object-cover object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom">
              <img
                src="https://image.freepik.com/foto-gratis/fondo-conexiones-globales-banner-redes-sociales_53876-108500.jpg"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
                What is Lorem Ipsum?
              </h3>
              <h4 className="w-full text-xl text-gray-100 leading-tight">
                Lorem Ipsum
              </h4>
            </div>
            <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>

          <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
              <h4 className="hidden md:block text-xl text-gray-400">
                What is Lorem Ipsum?
              </h4>
              <h3 className="hidden md:block font-bold text-2xl text-gray-700">
                Lorem Ipsum
              </h3>
              <p className="text-gray-600 text-justify md:mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Info };
