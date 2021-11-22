import React, { useState } from "react";
import { Menu } from "@/components/Menu";
import { Logo } from "@/components/Logo";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
function Header() {
  // Toggle para abrir o cerrar el menu
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="bg-black bg-opacity-6 dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40 lg:mb-40 ">
      <div className="container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
        <div className="flex justify-between">
          <Logo />
          <div className="flex items-center space-x-2 lg:hidden">
            <button className="p-1 rounded-md ">
              {!toggleMenu ? (
                <HiOutlineMenuAlt3
                  size={32}
                  className="mt-3"
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              ) : (
                <IoMdClose
                  size={36}
                  className="text-right w-full"
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              )}
            </button>
          </div>
        </div>
        <Menu showMenu={toggleMenu} />
      </div>
    </header>
  );
}

export { Header };
