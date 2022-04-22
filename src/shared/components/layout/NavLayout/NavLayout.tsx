import React, {FC, useState} from "react";
import * as FaIcons from "react-icons/fa";
import {Sidebar} from "./Sidebar/Sidebar";
import {Navbar} from "./Navbar/Navbar";

export const NavLayout: FC = () => {
    const [toggled, setToggled] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const handleToggleSidebar= (value: boolean):void  => {
        setToggled(value);
    };

    return (
        <div>
            <Navbar handleToggleSidebar={handleToggleSidebar}/>
            <Sidebar  handleToggleSidebar={handleToggleSidebar} collapsed={collapsed} toggled={toggled}/>
        </div>
    )

}
