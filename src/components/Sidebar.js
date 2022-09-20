import React, { useState } from 'react';
import {
    FaBars,
}from "react-icons/fa";

import { HiOutlineHome } from "react-icons/hi";

import { FiUserCheck,FiUsers, FiBriefcase, FiCalendar, FiStar, FiFileText } from "react-icons/fi";

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        
        {
            path:"/",
            name:"Home",
            icon:<HiOutlineHome/>
        },
        
        {
            path:"/jobs",
            name:"Jobs",
            icon:<FiBriefcase/>
        },
        {
            path:"/clients",
            name:"Clients",
            icon:<FiUserCheck/>
        },
        {
            path:"/candidates",
            name:"Candidates",
            icon:<FiUsers/>
        },
        {
            path:"/calendar",
            name:"Calendar",
            icon:<FiCalendar/>
        },
        {
            path:"/reports",
            name:"Reports",
            icon:<FiFileText/>
        },
        {
            path:"/rewards",
            name:"Rewards",
            icon:<FiStar/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> Hire++ </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;