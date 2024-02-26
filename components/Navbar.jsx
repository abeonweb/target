"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>      
      <div className="inline-block h-8 mt-2 mb-2 mr-5 lg:hidden">
        <button
          id="nav_toggle"
          title="menu button"
          className="h-full w-full"
          onClick={handleMenuClick}
        >
          {isOpen ? (
            <XMarkIcon className="w-10 h-10 text-orange-500" />
          ) : (
            <Bars3BottomLeftIcon className="w-10 h-10 text-orange-500" />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute top-16 right-0 w-full shadow-2xl lg:shadow-none lg:inset-0 lg:relative lg:block`}
      >
        <ul className="flex flex-col bg-white tracking-wider font-medium text-xs text-orange-500 pt-4 pb-10 lg:py-0 lg:flex-row lg:items-center lg:justify-end lg:pr-10">
          <li className="px-3 py-2" onClick={handleMenuClick}>
            <Link href={"#"}>Traducciones</Link>
          </li>
          <li className="px-3 py-2" onClick={handleMenuClick}>
            <Link href={"#"}>Interpretaciones</Link>
          </li>
          <li className="px-3 py-2" onClick={handleMenuClick}>
            <Link href={"#"}>Traducciones Juradas</Link>
          </li>
          <li className="px-3 py-2" onClick={handleMenuClick}>
            <Link href={"#contact"}>Contacto</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
