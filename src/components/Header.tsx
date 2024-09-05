import React from "react";
import { DashboardIcon } from "../assets/icons";
import { SearchIcon } from "../assets/icons";


const Header = () => {
  return (
    <header className="header  px-4 py-5 border-b w-full h-[74px]">
      <div className="search-area flex items-center justify-between  ">
        <div className="flex items-center gap-5">
        <h1 className="menu-collapse">Dashboard</h1>
        <form action="">
        <div className="search-button flex gap-4 px-5 py-1 border rounded-full w-full max-w-[300px] items-center">
          <SearchIcon/>
          <input type="text" placeholder="search" />
        </div>
        </form>
        </div>
        
        {/* <div className="search-button flex gap-4 border w-64">
          <span>+</span>
          <input className="none" type="file" placeholder="Add" />
        </div> */}
        <button className="border w-50 bg-black-dark text-white-light px-5 py-1 rounded-full">+ <span>ADD</span></button>
      </div>
      
    </header>
  )
}

export default Header;