import { MouseEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const nav = useNavigate();

  const expandSideBar = (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById('app-layout')?.classList.toggle('sb-expand');
    document.querySelectorAll('.sidebar-item span')?.forEach(item => item.classList.toggle('hide'));
  }

  return (
    <>
      <div className="logo" onClick={() => nav('/')}>&#9812;</div>
      <button type="button" id="resize" onClick={expandSideBar}>&#9776;</button>
      <div className='sidebar-box'>
        <NavLink to={'/settings'}>
          <div className="sidebar-item">
            <i>&#9881;</i>
            <span className="hide">Settings</span>
          </div>
        </NavLink>
        <NavLink to={'/build'}>
          <div className="sidebar-item">
            <i>&#9874;</i>
            <span className="hide">Build</span>
          </div>
        </NavLink>
        <NavLink to={'/support'}>
          <div className="sidebar-item">
            <i>&#9937;</i>
            <span className="hide">Support</span>
          </div>
        </NavLink>
        <NavLink to={'/contact'}>
          <div className="sidebar-item">
            <i>&#9743;</i>
            <span className="hide">Contact</span>
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default Navbar