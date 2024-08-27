import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="container">
        <NavLink to="/" className="logo">Logo</NavLink>
        <nav className="sidebar-nav">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/about-us">List</NavLink>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar;