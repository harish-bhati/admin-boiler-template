import React from 'react';
import { NavLink } from "react-router-dom";
import { DashboardIcon } from './../assets/icons/DashboardIcon';
import { DataIcon } from './../assets/icons/DataIcon';
import { FormIcon } from './../assets/icons/FormIcon';
import { TableIcon } from './../assets/icons/TableIcon';
import { StatisticsIcon } from './../assets/icons/StatisticsIcon';

const Sidebar = () => {
  return (
    <aside className="sidebar w-[250px] border-r border-dotted border-slate-400 h-dvh">
      <div className="container flex flex-col">
        <NavLink to="/" className="logo text-[25px] pl-6 py-2 mb-10">LOGO</NavLink>
        <p className=' pl-6 font-medium text-[11px] mb-2'>DASHBOARD</p>
        <nav>
          <ul className='sidebar-nav'>
           <li className='list-none active:text-blue-lighter px-4 py-2 mx-2 my-1  hover:text-blue-lighter hover:bg-blue-light rounded-lg'><a className='flex gap-3 align-middle ' href="#"><DashboardIcon/><span className='text-black-light active:text-blue-lighter hover:text-blue-lighter'>Dashboard</span></a></li>
           <li className='list-none active:text-blue-lighter px-4 py-2 mx-2 my-1  hover:text-blue-lighter hover:bg-blue-light rounded-lg'><a className='flex gap-3 align-middle ' href="#"><DataIcon/><span className='text-black-light active:text-blue-lighter  hover:text-blue-lighter'>Projects</span></a></li>
           <li className='list-none active:text-blue-lighter px-4 py-2 mx-2 my-1  hover:text-blue-lighter hover:bg-blue-light rounded-lg'><a className='flex gap-3 align-middle ' href="#"><FormIcon/><span className='text-black-light active:text-blue-lighter  hover:text-blue-lighter'>Employees</span></a></li>
           <li className='list-none active:text-blue-lighter px-4 py-2 mx-2 my-1  hover:text-blue-lighter hover:bg-blue-light rounded-lg'><a className='flex gap-3 align-middle ' href="#"><TableIcon/><span className='text-black-light active:text-blue-lighter  hover:text-blue-lighter'>Insights</span></a></li>
           <li className='list-none active:text-blue-lighter px-4 py-2 mx-2 my-1  hover:text-blue-lighter hover:bg-blue-light rounded-lg'><a className='flex gap-3 align-middle ' href="#"><StatisticsIcon/><span className='text-black-light active:text-blue-lighter  hover:text-blue-lighter'>Statistics</span></a></li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar;