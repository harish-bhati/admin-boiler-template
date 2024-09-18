import React from "react";
import { NavLink } from "react-router-dom";
import sidebarList from "../data/menu.json";
import { DashboardIcon, DataIcon, StatisticsIcon } from "../assets/icons";

// Define icon map with React components
const iconMap: { [key: string]: React.ComponentType } = {
  DashboardIcon: DashboardIcon,
  DataIcon: DataIcon,
  StatisticsIcon: StatisticsIcon,
};

const Sidebar = () => {
  console.log("menu list", sidebarList);
  return (
    <aside className="sidebar w-[250px] border-r border-dotted border-slate-400 h-dvh">
      <div className="container flex flex-col">
        <NavLink to="/" className="logo text-[25px] pl-6 py-2 mb-10">
          {sidebarList.logo}
        </NavLink>
        <h3 className=" pl-6 font-medium mb-2">{sidebarList.title}</h3>
        <nav>
          <ul className="sidebar-nav">
            {sidebarList.menus.map(({id, label, icon, path}) => {
              const IconComponent = iconMap[icon];
              return (
                <li
                  key={id}
                  className="list-none active:text-blue-lighter px-4 py-2 mx-2 my-1  hover:text-blue-lighter hover:bg-blue-light rounded-lg"
                >
                  <NavLink className="flex gap-3 align-middle " to={path}>
                    {IconComponent && <IconComponent />}
                    <span className="text-black-light active:text-blue-lighter hover:text-blue-lighter">
                      {label}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
