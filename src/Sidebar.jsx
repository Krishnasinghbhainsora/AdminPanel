import React from "react";
import {
  
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
           EDUCATION CHART
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
        </div>
      </div>

      <ul className="sidebar-list active">
        <li className="sidebar-list-item">
          <a href="#">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            
            <BsFillGrid3X3GapFill className="icon" /> Categories

          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
          <BsFillArchiveFill className="icon" /> Transactions

          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsPeopleFill className="icon" /> Placements
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
