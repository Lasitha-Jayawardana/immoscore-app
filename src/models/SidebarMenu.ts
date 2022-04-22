import * as FaIcons from "react-icons/fa";

export interface SubMenu{
    title: string;
    icon:any;
    path: string;
}
export default interface SidebarMenu{
    title: string;
    icon:any;
    path?: string;
    isSubMenu?: boolean;
    subMenu?:SubMenu[]

}
