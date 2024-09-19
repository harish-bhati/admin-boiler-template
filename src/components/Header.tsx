import React from "react";
import { DashboardIcon } from "../assets/icons/DashboardIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";

const Header = () => {
  return (
    <header className="header  px-4 py-5 border-b w-full">
      <div className="flex items-center">
        <h1 className="menu-collapse mr-2 font-latoB text-blue-dark">Dashboard</h1>
        <div className="flex justify-between w-full">
          <form action="">
            <div className="search-button flex gap-4 px-5 py-2 border rounded-full w-full max-w-[300px] items-center">
              <SearchIcon/>
              <input type="text" placeholder="search" />
            </div>
          </form>
          <button className="border w-50 bg-blue-dark text-white-light px-5 py-2 rounded-full flex items-center gap-1 self-end">
            <PlusIcon /> <span>ADD</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
