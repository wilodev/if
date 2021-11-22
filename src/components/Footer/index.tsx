import React from "react";

function Footer() {
  return (
    <div className="mb-16">
      <footer className="text-gray-600 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-3 text-xl text-white">Infinyti</span>
            </a>
            <p className="mt-2 text-sm text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300" href="#">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © 2021 Infinyti —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-400 ml-1"
                target="_blank"
              >
                Derechos Reservados
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
