import React, {FC, useState} from "react";
import * as FaIcons from "react-icons/fa";
import {Sidebar} from "./Sidebar/Sidebar";
import {Navbar} from "./Navbar/Navbar";
import {Modal} from "../Modal/Modal";

export const NavLayout: FC = () => {
    const [toggled, setToggled] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const handleToggleSidebar= (value: boolean):void  => {
        setToggled(value);
    };

    return (
        <div>
            <Navbar handleToggleSidebar={handleToggleSidebar}/>
            <Modal isOpen={true}/>
            <Sidebar  handleToggleSidebar={handleToggleSidebar} collapsed={collapsed} toggled={toggled}/>
        </div>
    )

}
