import React from 'react';

const NavBar = () => {
  return (
    <section>
      <div className="w-full items-center flex align-bottom gap-5">
        <h1 className="font-bold text-4xl">dashboard</h1>
        <input type="search" placeholder="search" />
      </div>
    </section>
  );
};

export default NavBar;
