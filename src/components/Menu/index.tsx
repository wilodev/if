import React from "react";
import { ItemMenu } from "../ItemMenu";
// Importamos el json para recorrer el menú
import DataMenu from "./menu.json";
type TMenu = {
  showMenu: boolean;
};
function Menu({ showMenu }: TMenu) {
  const menus = DataMenu.menu;
  const hidden = showMenu ? "pt-4" : "hidden";
  return (
    <div
      className={`${hidden} flex flex-col space-y-4 lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2`}
    >
      <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
        {menus.map((item) => (
          <ItemMenu link={item.url} text={item.title} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
        <a
          href="/submit-component"
          className="flex items-center justify-center h-12 px-4 text-sm font-semibold text-center text-white rounded-md lg:h-10 bg-gradient-to-b from-green-500 to-green-700 hover:bg-green-800"
        >
          Cotización
        </a>
        <a
          href="/login"
          className="flex items-center justify-center h-12 px-4 mt-2 text-sm text-center text-gray-300 transition-colors duration-200 transform border rounded-lg lg:h-10 hover:text-gray-800  hover:bg-gray-100  focus:outline-none"
        >
          Iniciar Sesión
        </a>
      </div>
    </div>
  );
}

export { Menu };
