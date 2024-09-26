import React from "react";
import { DashboardIcon } from "../assets/icons/DashboardIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";

const Header = () => {
  return (
    <header className="header  px-4 py-5 border-b w-full bg-[#f8f9fa]">
      <div className="flex items-center">
        <h1 className="menu-collapse mr-2 font-latoB text-blue-link">Dashboard</h1>
        <div className="flex justify-between w-full">
          <form action="">
            <div className="secondary search-button flex gap-4 max-w-[300px] items-center">
              <SearchIcon/>
              <input type="text" placeholder="search" />
            </div>
          </form>
          
          <button className="primary flex items-center">
            <PlusIcon /> <span>ADD</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
