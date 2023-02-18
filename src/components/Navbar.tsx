import React from 'react';

export const Navbar = () => {
  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Login',
      path: '/',
    },
  ];
  return (
    <div>
      <>
        {routes.map((item) => {
          <a href={item.path}>{item.name}</a>;
        })}
      </>
    </div>
  );
};
