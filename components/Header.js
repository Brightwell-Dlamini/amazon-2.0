import Image from "next/image";
import React from "react";
import logo from "../public/images/Amazon logo.PNG";

function Header() {
  return (
    <header className="sticky">
      <div className="flex items-center bg-amazom_blue flex-grow p-1 py-2 sm:flex-grow-0">
        <div className="mt-2 flex items-center flex-grow">
          <Image
            src={logo}
            width={150}
            height={140}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </header>
  );
}

export default Header;
