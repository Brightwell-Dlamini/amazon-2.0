import Image from "next/image";
import React from "react";
import logo from "../public/images/Amazon logo.PNG";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue flex-grow p-1 py-2 sm:flex-grow-0 justify-between">
        <div className="mt-2 ">
          <Image
            src={logo}
            height={40}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none focus:outline-none"
          />

          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap text-white">
          <div className="link">
            <p>Hello Gerv</p>
            <p className="font-extrabold sm:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold">& Orders</p>
          </div>
          <div className="link flex items-center relative">
            <span className="absolute top-0 right-0 left-10  bg-yellow-500 font-bold text-sm md:right-10 h-4 w-4 text-center rounded-full text-black">
              0
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className="font-extrabold hidden md:inline-flex mt-2">Cart</p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6 sm:pl-4">
        <p className="font-bold link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link whitespace-nowrap">Prime Video</p>
        <p className="link whitespace-nowrap">Todays&apos;s Deals</p>
        <p className="link whitespace-nowrap">Customer Service</p>
        <p className="link whitespace-nowrap">Registry</p>
        <p className="link whitespace-nowrap hidden md:inline-flex">
          Gift Cards
        </p>
        <p className="link whitespace-nowrap hidden md:inline-flex">Sell</p>
      </div>
    </header>
  );
}

export default Header;
