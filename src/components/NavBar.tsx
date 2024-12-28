import React from 'react'
import Imagees from './Imagees'

const NavBar = () => {
  return (
    <div className="h-10 w-full">
      <div className="justify-start items-start p-10">
        <Imagees
          alt="logo"
          src="/logo.png"
        />
      </div>
    </div>
  );
}

export default NavBar
