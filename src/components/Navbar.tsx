import React from 'react';
import logo from '../assets/logo.png';
import { routes } from '../data';
export const Navbar = () => {
  return (
    <header className="border-[0.05px] border-white rounded-lg flex flex-col lg:flex-row justify-between items-center shadow-lg backdrop-blur-sm px-5 w-full sticky top-5 z-50 mb-10">
      {/* logo */}
      <img
        src={logo}
        alt="Serge's logo"
        srcSet=""
        className="w-20 object-cover"
      />
      <nav className="flex gap-10 text-white">
        {routes.map((navlink) => (
          <a key={navlink.name} href={navlink.path}>
            {navlink.name}
          </a>
        ))}
      </nav>
    </header>
  );
};
