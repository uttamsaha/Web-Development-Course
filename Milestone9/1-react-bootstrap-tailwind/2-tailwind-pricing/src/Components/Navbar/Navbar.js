import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 1, name: "Shop", link: "/shop" },
    { id: 1, name: "Cupons", link: "/cupons" },
    { id: 1, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="bg-indigo-300">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>

      <ul
        className={`md:flex justify-center absolute bg-indigo-300 w-full md:static duration-500 ease-in
        ${
          open ?'top-6' : 'top-[-120px]'
        }`}
      >
        {routes.map((route) => (
          <Link route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
