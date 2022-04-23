import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader} from 'react-pro-sidebar';

import "./Sidebar.scss"
import React, {FC, useContext} from "react";
import {ThemeContext} from "../../../../../utils/providers/ThemeContextProvider";
import logo from '../../../../../assests/img/immoscore-logo.svg'
import {SidebarMenuData} from "../../../../../utils/constants/SidebarData";
import {Overview} from "../../../../../modules/overview/pages/Overview";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import routes from "../../../../../routes/routes";
import {CircleIcon} from "../../../core-components/CircleIcon/CircleIcon";
import icon from "../../../../../assests/img/logo.svg"
import {Bookmark} from "../../../core-components/Bookmark/Bookmark";

interface Props {
    collapsed: boolean;
    toggled: boolean;
    handleToggleSidebar: (value: boolean) => void
}

export const Sidebar: FC<Props> = ({collapsed, toggled, handleToggleSidebar}) => {

    const {theme} = useContext(ThemeContext);
    return (
        <div style={{display: "flex", backgroundColor:"black"}}>
            <ProSidebar  onToggle={handleToggleSidebar}
                        toggled={toggled} collapsed={collapsed}
                        className={"sidebar"}  {...(theme ? {"data-theme": theme} : {})} breakPoint="md">
                <SidebarHeader>
                    <img className={"sidebar-logo"} src={logo}/>
                </SidebarHeader>

                <Menu popperArrow={true} iconShape="square">
                    {SidebarMenuData.map((item, index) => {
                        if (item.isSubMenu) {
                            return (
                                <SubMenu key={index} icon={item.icon} className="sidebar-menu-item" title={item.title}>
                                    {("subMenu" in item) && item.subMenu?.map((subItem, subIndex) => {
                                        return <MenuItem onClick={() => window.location.href = '/' + item.path}
                                                         key={subIndex} icon={subItem.icon}>{subItem.title} </MenuItem>
                                    })}
                                </SubMenu>)
                        } else {
                            return <MenuItem className="sidebar-menu-item" onClick={() => window.location.href = '/' + item.path} icon={item.icon}
                                             key={index}>{item.title}  </MenuItem>

                        }
                    })}


                </Menu>

            </ProSidebar>
            <div className={"sidebar-main"} style={{ width: "100%",backgroundColor:"black"}}>
                <BrowserRouter>
                    <Routes>
                        {routes.map((route, index) => {

                            return <Route key={index} path={route.path} element={<route.component/>}/>
                        })}
                    </Routes>
                </BrowserRouter>

            </div>
        </div>
    )
}
