import React from "react";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.containerHero}>
      <div className="lg:2/6 xl:w-2/4 pt-20 lg:pt-40 lg:ml-16 text-left">
        <div className="text-6xl font-semibold text-gray-300 leading-none">
          Infinyti
        </div>
        <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="mt-6">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="jhondoe@gmail.com"
            className="rounded text-white p-2 bg-gray-700 focus:border-transparent focus:border-b-2  focus:border-white focus:outline-none mt-3 w-11/12 md:w-8/12"
          />
        </div>

        <button className="mt-6 px-8 py-4 font-semibold rounded  tracking-wide bg-gradient-to-b from-green-500 to-green-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-green-700 transition duration-200 ease-in-out">
          Cotizar
        </button>
      </div>
      <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
        <button
          type="button"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export { Hero };
